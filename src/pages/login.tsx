import Button from "../components/atoms/button";
import Input from "../components/atoms/input";
import TextHeading from "../components/atoms/text-heading";
import FormField from "../components/molecules/form-field";

export default function Login() {
    return (
        <div>
            <TextHeading level={2}>Heading</TextHeading>
            <Input />
            <Button>Button</Button>

            <FormField
                label="foo"
                inputProps={{
                    placeholder: "bar",
                }}
            />
        </div>
    );
}
