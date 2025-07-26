import {FormBuilder} from "@/shared/utils/form-builder.utils";
import {FormRenderer} from "@/shared/components/form-renderer";


export const PersonalForm = () => {
    const formBuilder = new FormBuilder()
        .setTitle('Personal Information Form')
        .setDescription('Create your personal information form using the form builder.')
        .setSubmitButtonText('Submit')
        .addTextField('name', 'text', 'First Name', {
            validation: [],
            required: true,
            placeholder: 'Enter your first name'
        })
        .addNumberField('age', 'Age', 18, 100)
        .addSelectField('gender', 'Gender', [ { value: 'male', label: 'Male' }, { value: 'female', label: 'Female' } ])
        .build();

    const handleSubmit = (data: unknown) => {
        console.log('Form submitted with data:', data);
        // Handle form submission logic here, e.g., send data to an API
    };

    return (
        <>
            <FormRenderer formConfig={ formBuilder } onSubmit={ handleSubmit }/>
        </>
    );
}