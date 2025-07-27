import { FormRenderer } from "@/shared/components/form-renderer";
import { FormBuilder } from "@/shared/utils/form-builder.utils";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { FormValue, SuccessFormResult } from "./success-form-result";

export const PersonalForm = () => {
    const [formResult, setFormResult] = useState<FormValue[]>([]);

    const formFields: Record<string, string> = {
        name: 'Name',
        age: 'Age',
        gender: 'Gender'
    }

    type TFormResponse = {
        name: string;
        age: string;
        gende: string;
    }

    const formBuilder = new FormBuilder()
        .setTitle('Personal Information Form')
        .setDescription('Create your personal information form using the form builder.')
        .setSubmitButtonText('Submit')
        .addTextField('name', 'text', 'First Name', {
            validation: [],
            required: true,
            placeholder: 'Enter your first name'
        })
        .addNumberField('age', 'Age', 18, 100, {
            placeholder: 'Enter your age',
            required: false,
            validation: []
        })
        .addSelectField('gender', 'Gender', [ { value: 'male', label: 'Male' }, { value: 'female', label: 'Female' } ])
        .build();

    const handleSubmit = (data: FieldValues) => {
        const keys = Object.keys(data) as (keyof TFormResponse)[];
        const formattedData = keys
        .filter(key => data[key] !== undefined && data[key] !== '') // Filter out empty values
        .map((key) => ({
            label: formFields[key] || key, // Fallback to key if label not found
            value: String(data[key]) // Ensure value is string
        }));
        setFormResult(formattedData);
    };

    return (
        <>
            <FormRenderer formConfig={ formBuilder } onSubmit={ handleSubmit }/>
            <SuccessFormResult formValues={formResult}/>
        </>
    );
}