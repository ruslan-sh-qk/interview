import {FormRenderer} from "@/shared/components/form-renderer";
import {FormBuilder} from "@/shared/utils/form-builder.utils";
import {useState} from "react";
import {FieldValues} from "react-hook-form";
import {FormValue, SuccessFormResult} from "./success-form-result";
import * as yup from "yup";

export const PersonalForm = () => {
    const [ formResult, setFormResult ] = useState<FormValue[]>([]);
    const schema = yup
        .object({
            name: yup.string().required().min(2, 'Name must be at least 2 characters long'),
            age: yup.number().positive().integer()
                .required('Age is required')
                .min(18, 'You must be at least 18 years old')
                .max(100, 'Age cannot exceed 100'),
            gender: yup.string().required('Selection is required'),
        })
        .required()

    const formFields: Record<string, string> = {
        name: 'Name',
        age: 'Age',
        gender: 'Gender'
    }

    type TFormResponse = {
        name: string;
        age: string;
        gender: string;
    }

    const formBuilder = new FormBuilder()
        .setTitle('Personal Information Form')
        .setSubmitButtonText('Submit')
        .addTextField('name', 'text', 'First Name', { placeholder: 'Enter your first name' })
        .addNumberField('age', 'Age', { placeholder: 'Enter your age' })
        .addSelectField('gender', 'Gender',
            [ { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' }
            ],
            { placeholder: 'Please, select' }
        )
        .build();

    const handleSubmit = (data: FieldValues) => {
        const keys = Object.keys(data) as (keyof TFormResponse)[];
        const formattedData = keys
            .filter(key => data[key] !== undefined && data[key] !== '')
            .map((key) => ({
                label: formFields[key] || key,
                value: String(data[key])
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