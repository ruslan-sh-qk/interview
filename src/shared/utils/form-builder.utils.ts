import {TFormConfig, TSelectOption} from "@/shared/types/form-builder.types";

type TDefaultOptions = {
    placeholder?: string;
}

export class FormBuilder {

    private readonly formConfig: TFormConfig;

    constructor() {
        this.formConfig = {
            title: '',
            description: '',
            fields: [],
            submitButtonText: 'Submit'
        };
    }

    setTitle(title: string) {
        this.formConfig.title = title;
        return this;
    }

    setDescription(description: string) {
        this.formConfig.description = description;
        return this;
    }

    setSubmitButtonText(text: string) {
        this.formConfig.submitButtonText = text;
        return this;
    }

    addTextField(name: string, type: 'email' | 'text' | 'number', label: string, defaultOptions: TDefaultOptions) {
        this.formConfig.fields.push({
            name,
            label,
            type,
            placeholder: defaultOptions.placeholder || '',
        });
        return this;
    }

    addNumberField(name: string, label: string, defaultOptions: TDefaultOptions) {
        this.formConfig.fields.push({
            name,
            label,
            type: 'number',
            placeholder: defaultOptions.placeholder || '',
        });
        return this;
    }

    addSelectField(name: string, label: string, options: TSelectOption[], defaultOptions: TDefaultOptions) {
        this.formConfig.fields.push({
            name,
            label,
            type: 'select',
            options,
            placeholder: defaultOptions.placeholder || '',
        });
        return this;
    }

    build() {
        return this.formConfig;
    }
}
