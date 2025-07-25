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

    return (
        <>
            <FormRenderer { ...formBuilder } />
        </>
    );
}