import {TFormConfig, TFormField} from "@/shared/types/form-builder.types";

import {Input} from "./ui/input";
import {Button} from "./ui/button";
import { BuilderSelect } from "./ui/builder-select";

export const FormRenderer = (formConfig: TFormConfig) => {
    const { fields } = formConfig;

    const fieldTypesMap = {
        text: () => <Input type="text"/>,
        number: () => <Input type="number"/>,
        email: () => <Input type="email"/>,
        select: (field: TFormField) => <BuilderSelect { ...field }/>
    }

    return (
        <form className="flex flex-col gap-3">
            <h1 className="font-semibold">{ formConfig.title }</h1>
            <p className="text-gray-400">{ formConfig.description }</p>
            { fields.map((field, index) => {
                const FieldComponent = fieldTypesMap[field.type](field);
                return (
                    <div key={ index }>
                        <label htmlFor={ field.name }>{ field.label }</label>
                        { FieldComponent }
                    </div>
                );
            }) }
            <Button type="submit">{ formConfig.submitButtonText }</Button>
        </form>
    );
};
