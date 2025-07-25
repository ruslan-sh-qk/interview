import {TFormConfig, TSelectOption} from "@/shared/types/form-builder.types";

export class FormBuilder {

    private readonly formConfig: TFormConfig;
    private defaultOptions = {
        required: false,
        placeholder: '',
        validation: []
    }

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

    addTextField(name: string, type: 'email' | 'text' | 'number',  label: string, defaultOptions = this.defaultOptions) {
        this.formConfig.fields.push({
            name,
            label,
            type,
            required: defaultOptions.required || false,
            placeholder: defaultOptions.placeholder || '',
            validation: defaultOptions.validation || []
        });
        return this;
    }

    addNumberField(name: string, label: string, min: number, max: number, defaultOptions = this.defaultOptions) {
        this.formConfig.fields.push({
            name,
            label,
            type: 'number',
            required: defaultOptions.required || false,
            placeholder: defaultOptions.placeholder || '',
            min,
            max,
            validation: defaultOptions.validation || []
        });
        return this;
    }

    addSelectField(name: string, label: string, options: TSelectOption[], defaultOptions = this.defaultOptions) {
        this.formConfig.fields.push({
            name,
            label,
            type: 'select',
            required: defaultOptions.required,
            options,
            validation: defaultOptions.validation
        });
        return this;
    }

    // TODO: validation here


    build() {
        return this.formConfig;
    }
}
