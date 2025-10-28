import { forwardRef, useState, type ComponentProps } from "react";
import { Eye, EyeOff } from "lucide-react";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from "@/components/ui/input-group";

const PasswordInput = forwardRef<HTMLInputElement, ComponentProps<"input">>(
    ({ className, ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);
        const toggleShowPassword = () => setShowPassword((prev) => !prev);

        return (
            <InputGroup className={className}>
                <InputGroupInput
                    type={showPassword ? "text" : "password"}
                    ref={ref}
                    {...props}
                />
                <InputGroupAddon align="inline-end">
                    <InputGroupButton
                        type="button"
                        size={"xs"}
                        onClick={toggleShowPassword}
                    >
                        {showPassword ? <Eye /> : <EyeOff />}
                    </InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
        );
    },
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
