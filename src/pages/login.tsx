import Button from "../components/atoms/button";
import Input from "../components/atoms/input";
import TextHeading from "../components/atoms/text-heading";

export default function Login() {
    return (
        <div>
            <TextHeading level={2}>Heading</TextHeading>
            <Input />
            <Button>Button</Button>
        </div>
    );
}
