"use client"

import { TFormConfig, TFormField } from "@/shared/types/form-builder.types";

import { Form, FormField, FormItem } from "@/shared/components/ui/form";
import { ControllerRenderProps, FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { BuilderSelect } from "./ui/builder-select";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type TProps = {
    formConfig: TFormConfig;
    onSubmit:  SubmitHandler<FieldValues>;
}

export const FormRenderer = (props: TProps) => {
    const { formConfig, onSubmit } = props;
    const form = useForm();


    return (
        <Form { ...form }>
            <form className="flex flex-col gap-3" onSubmit={ form.handleSubmit(onSubmit) }>
                <h1 className="font-semibold">{ formConfig.title }</h1>
                <p className="text-gray-400">{ formConfig.description }</p>

                { formConfig.fields.map((configField, index) => {

                    return (
                        <FormField
                            key={ index }
                            control={ form.control }
                            name={configField.name}
                            render={ ({ field }) => {
                                const FieldComponent = getFieldComponent(configField, field);
                                return (
                                    <FormItem>
                                        { FieldComponent }
                                    </FormItem>
                                )
                            } }

                        />
                    );

                }) }
                <Button type="submit">{ formConfig.submitButtonText }</Button>
            </form>
        </Form>
    );
}


function getFieldComponent(field: TFormField, renderField: ControllerRenderProps) {
    const { type, options } = field;

    switch (type) {
        case 'text':
        case 'number':
        case 'email':
            return <Input {...field} {...renderField} />;
        case 'select':
            return <BuilderSelect
                field={ field }
                renderField={ renderField }
                options={ options }
                placeholder="Please, select"
            />;
    }
}