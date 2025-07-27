import { Input } from "@/shared/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { TFormField } from "@/shared/types/form-builder.types";
import { ControllerRenderProps } from "react-hook-form";
import { FormControl, FormItem } from "./form";

type TProps = {
    options: TFormField['options'];
    placeholder?: string;
    field: TFormField;
    renderField: ControllerRenderProps ;
}
export const BuilderSelect = (props: TProps) => {
    const { options, placeholder, renderField } = props;

    if (!options || options.length === 0) {
        return <Input type="text" placeholder="No options available"/>;
    }

    return (
        <FormItem>
            <Select onValueChange={ renderField.onChange } value={renderField.value} defaultValue={ renderField.value }>
                <FormControl>
                    <SelectTrigger className="w-full">
                        <SelectValue defaultValue={renderField.value} placeholder={ placeholder }/>
                    </SelectTrigger>
                </FormControl>
                <SelectContent>
                    { options.map(((option, index) =>
                        <SelectItem key={ index }
                                    value={ option.value }>
                            { option.label }
                        </SelectItem>)
                    ) }
                </SelectContent>
            </Select>
        </FormItem>
    );
}