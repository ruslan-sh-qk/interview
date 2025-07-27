import * as yup from "yup";
import {FormRenderer} from "@/shared/components/form-renderer";
import {FormBuilder} from "@/shared/utils/form-builder.utils";
import {useState} from "react";
import {FieldValues} from "react-hook-form";
import {FormValue, SuccessFormResult} from "./success-form-result";

const formFields = {
    jobTitle: 'Job Title',
    company: 'Company',
    yearsOfExperience: 'Years of Experience'
}

type TFormResponse = {
    jobTitle: string;
    company: string;
    yearsOfExperience?: number;
}

export const ProfessionalForm = () => {
    const [ formResult, setFormResult ] = useState<FormValue[]>([]);
    const schema = yup
        .object({
            jobTitle: yup.string()
                .min(2, 'Job title must be at least 2 characters long')
                .max(100, 'Job title cannot exceed 100 characters')
                .required('Job title is required'),
            company: yup.string()
                .min(2, 'Company name must be at least 2 characters long')
                .max(25, 'Company name cannot exceed 100 characters')
                .required('Company is required'),
            yearsOfExperience: yup.number()
                .min(1, 'Years of experience must be at least 1')
                .max(20, 'Years of experience cannot exceed 20')
                .required('Years of experience is required'),
        })
        .required()

    const formBuilder = new FormBuilder()
        .setTitle('Professional Information Form')
        .setSubmitButtonText('Submit')
        .addTextField('jobTitle', 'text', 'Job Title', { placeholder: 'Enter your job title' })
        .addTextField('company', 'text', 'Company', { placeholder: 'Enter your company' })
        .addNumberField('yearsOfExperience', 'Years of Experience', { placeholder: 'Years of experience' })
        .build();

    const handleSubmit = (data: FieldValues) => {
        const keys = Object.keys(data) as (keyof TFormResponse)[];
        const formattedData = keys
            .filter(key => data[key] !== undefined && data[key] !== '')
            .map((key) => ({
                label: formFields[key] || key,
                value: data[key]
            }));
        setFormResult(formattedData);
    };

    return (
        <>
            { formResult.length ?
                <SuccessFormResult formValues={ formResult }/> :
                <FormRenderer formConfig={ formBuilder } onSubmit={ handleSubmit } schema={ schema }/>
            }
        </>
    );
}