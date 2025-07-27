import {Input} from "@/shared/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/shared/components/ui/select";
import {TFormField} from "@/shared/types/form-builder.types";
import {ControllerRenderProps} from "react-hook-form";
import {FormItem} from "./form";

type TProps = {
    options: TFormField['options'];
    placeholder?: string;
    field: TFormField;
    renderField: ControllerRenderProps;
    triggerOnBlur?: () => void;
}
export const BuilderSelect = (props: TProps) => {
    const { options, placeholder, renderField, triggerOnBlur } = props;

    if (!options || options.length === 0) {
        return <Input type="text" placeholder="No options available"/>;
    }

    return (
        <FormItem>
            <Select
                value={ renderField.value || '' }
                onValueChange={ renderField.onChange }
                name={ renderField.name }
            >
                <SelectTrigger onBlur={ triggerOnBlur } className="w-full">
                    <SelectValue placeholder={ placeholder }/>
                </SelectTrigger>

                <SelectContent>
                    { options.map((option) => (
                        <SelectItem key={ option.value } value={ option.value }>
                            { option.label }
                        </SelectItem>
                    )) }
                </SelectContent>
            </Select>
        </FormItem>
    );
}