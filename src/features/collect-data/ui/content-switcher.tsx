import React, {JSX} from "react";
import {TContentSwitcher} from "../types/form-switcher.types";
import {FSelect} from "@/shared/components/select";

export const ContentSwitcher = (contentSwitcher: TContentSwitcher) => {
    const { title, description, contents } = contentSwitcher;
    const [ content, setContent ] = React.useState<JSX.Element | null>(null);

    const changeForm = (value: string) => {
        setContent(contents[value]);
    };

    const options = [
        { label: "Personal", value: "personal" },
        { label: "Professional", value: "professional" }
    ];

    return (
        <div className="flex flex-col gap-2 justify-center center">
            <h1 className="text-2xl font-bold text-center">{ title }</h1>
            { description && <p className="text-gray-600">{ description }</p> }

            <FSelect options={ options } onChange={ changeForm }/>

            { content &&
                <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                    { content }
                </div>
            }
        </div>
    );
}