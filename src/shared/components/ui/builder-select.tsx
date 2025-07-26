import {TFormField} from "@/shared/types/form-builder.types";
import {Input} from "@/shared/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/shared/components/ui/select";
import {FormControl, FormItem} from "./form";

type TProps = {
    options: TFormField['options'];
    placeholder?: string;
    field: any;
}
export const BuilderSelect = (props: TProps) => {
    console.log(`Output log for props:, ${ JSON.stringify(props) }`)
    const { options, placeholder, field } = props;

    if (!options || options.length === 0) {
        return <Input type="text" placeholder="No options available"/>;
    }

    return (
        <FormItem>
            <Select onValueChange={ field.onChange } defaultValue={ field.value }>
                <FormControl>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={ placeholder }/>
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