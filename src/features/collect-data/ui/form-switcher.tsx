import React from "react";
import {TFormSwitcher} from "../types/form-switcher.types";
import {Button} from "@/shared/components/ui/button";

export const FormSwitcher = (formSwitcher: TFormSwitcher) => {
    const { title, description, buttons } = formSwitcher;
    const [ content, setContent ] = React.useState(buttons[0].content);

    const handleButtonClick = (content: React.ReactNode) => {
        setContent(content);
    };

    return (
        <div className="flex flex-col gap-2 justify-center center">
            <h1 className="text-2xl font-bold text-center">{ title }</h1>
            { description && <p className="text-gray-600">{ description }</p> }

            <div className="flex flex-wrap gap-2 justify-center">
                {
                    buttons.map((button, index) => (
                        <Button key={ index }
                                className="btn btn-primary"
                                onClick={ () => handleButtonClick(button.content) }>
                            { button.label }
                        </Button>
                    ))
                }
            </div>

            <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                { content }
            </div>
        </div>
    );
}