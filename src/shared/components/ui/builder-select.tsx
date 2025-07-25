import {TFormField} from "@/shared/types/form-builder.types";
import {Input} from "@/shared/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/shared/components/ui/select";

export const BuilderSelect = (props: TFormField) => {
    const { options } = props;

    if (!options || options.length === 0) {
        return <Input type="text" placeholder="No options available"/>;
    }

    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Theme"/>
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
    );
}