
export type FormValue = {
    label: string;
    value: string;
};

type SuccessFormResultProps = {
    formValues: FormValue[];
};

export const SuccessFormResult = ({ formValues }: SuccessFormResultProps) => {
    return (
        <>
        <div className="bg-green-50 border border-green-200 rounded-md p-4 mt-4">
            
            <h2 className="text-green-800 font-semibold mb-3">Form Submitted Successfully!</h2>
            <div className="space-y-2">
                
                {formValues.map((item, index) => (
                    <div key={index} className="flex justify-between">
                        <span className="font-medium text-gray-700">{item.label}:</span>
                        <span className="text-gray-900">{item.value}</span>
                    </div>
                ))}

            </div>

        </div>
        </>
    );
};