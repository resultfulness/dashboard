import "./form-field.css";
import type { InputProps } from "../atoms/input";
import Input from "../atoms/input";
import TextLabel from "../atoms/text-label";

interface FormFieldProps {
    label: React.ReactNode;
    inputProps?: InputProps;
}

export default function FormField({ label, inputProps }: FormFieldProps) {
    return (
        <div className="form-field">
            <TextLabel>{label}</TextLabel>
            <Input {...inputProps} />
        </div>
    );
}
