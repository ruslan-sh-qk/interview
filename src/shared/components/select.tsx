import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/shared/components/ui/select";
import React from "react";
import {TSelectOption} from "@/shared/types/form-builder.types";


// This component is a simple select dropdown that allows users to choose from a list of options.
// That is named with the prefix 'F' to indicate it is application (starts with app name) common usage component.
export const FSelect = (props: { options: TSelectOption[], onChange: (value: string) => void, placeholder?: string }) => {
    const { options, onChange, placeholder } = props;
    return (
        <Select onValueChange={ onChange }>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder}/>
            </SelectTrigger>
            <SelectContent>
                { options.map(((option, index) =>
                    <SelectItem key={ index }
                                value={ option.value }>
                        { option.label }
                    </SelectItem>)
                ) }
            </SelectContent>
        </Select>
    )
}