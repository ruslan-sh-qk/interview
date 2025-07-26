"use client"

import {TFormConfig, TFormField} from "@/shared/types/form-builder.types";

import {Input} from "./ui/input";
import {Button} from "./ui/button";
import {BuilderSelect} from "./ui/builder-select";
import {ControllerRenderProps, Form, useForm} from "react-hook-form";
import {z} from "zod/index";
import {FormField, FormItem} from "@/shared/components/ui/form";

type TProps = {
    formConfig: TFormConfig;
    onSubmit: (form: TFormConfig) => void;
}


export const FormRenderer = (props: TProps) => {
    const { formConfig, onSubmit } = props;
    const form = useForm<z.infer>()

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
                            name="email"
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
            return <Input type={ type }/>;
        case 'select':
            return <BuilderSelect
                field={ field }
                renderField={ renderField }
                options={ options }
                placeholder="Please, select"
            />;
    }
}