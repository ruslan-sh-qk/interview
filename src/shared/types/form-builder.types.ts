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

export type TFormField = {
    name: string;
    label: string;
    type: 'text' | 'number' | 'email' | 'select';
    placeholder?: string;
    options?: TSelectOption[];
}