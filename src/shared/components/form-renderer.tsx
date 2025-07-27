import {TFormConfig, TFormField} from "@/shared/types/form-builder.types";

import {Form, FormControl, FormField, FormItem, FormLabel} from "@/shared/components/ui/form";
import {ControllerRenderProps, FieldValues, SubmitHandler, useForm} from "react-hook-form";

import {BuilderSelect} from "./ui/builder-select";
import {Button} from "./ui/button";
import {Input} from "./ui/input";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup"

type TProps = {
    formConfig: TFormConfig;
    onSubmit: SubmitHandler<FieldValues>;
    schema: yup.ObjectSchema<yup.AnyObject>;
}

export const FormRenderer = (props: TProps) => {
    const { formConfig, onSubmit, schema } = props;
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

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
                            name={ configField.name }
                            render={ ({ field, fieldState }) => {
                                const FieldComponent = getFieldComponent(configField, field);
                                return (
                                    <FormItem>
                                        <FormLabel>
                                            { configField.label }
                                        </FormLabel>

                                        { FieldComponent }

                                        { fieldState.error &&
                                            <div className="text-red-500 text-sm mt-1">
                                                { fieldState.error?.message }
                                            </div>
                                        }
                                    </FormItem>
                                )
                            } }

                        />
                    );

                }) }
                <Button disabled={ !form.formState.isValid } type="submit">{ formConfig.submitButtonText }</Button>
            </form>
        </Form>
    );
};


function getFieldComponent(field: TFormField, renderField: ControllerRenderProps) {
    const { type, options } = field;

    switch (type) {
        case 'text':
        case 'number':
        case 'email':
            return <Input name={ renderField.name } type={ type }
                          placeholder={ field.placeholder }
                          value={ renderField.value || '' }
                          onChange={ renderField.onChange }
                          onBlur={ renderField.onBlur }
            />;
        case 'select':
            return <BuilderSelect
                field={ field }
                renderField={ renderField }
                options={ options }
                placeholder="Please, select"
            />
    }
}