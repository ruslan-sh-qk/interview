export type TFormConfig = {
    title: string;
    description: string;
    fields: TFormField[];
    submitButtonText: string;
}

export type TSelectOption = {
    value: string;
    label: string;
}

export type TFormFieldValidation = {
    type: string;
    value: number | string;
    message: string;
}

export type TFormField = {
    name: string;
    label: string;
    type: 'text' | 'number' | 'email' | 'select';
    required?: boolean;
    placeholder?: string;
    options?: TSelectOption[];
    min?: number;
    max?: number;
    rows?: number;
    validation?: TFormFieldValidation[];
}