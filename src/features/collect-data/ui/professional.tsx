import {FormBuilder} from "@/shared/utils/form-builder.utils";
import {FormRenderer} from "@/shared/components/form-renderer";

export const ProfessionalForm = () => {
    const formBuilder = new FormBuilder()
        .setTitle('Professional Information Form')
        .setDescription('Create your professional information form using the form builder.')
        .setSubmitButtonText('Submit')
        .addTextField('job', 'text', 'Job Title')
        .addTextField('company', 'text', 'Company')
        .addNumberField('age', 'Age', 18, 100)
        .build();

    return (
        <>
            {/*<FormRenderer { ...formBuilder } />*/}
        </>
    );
}