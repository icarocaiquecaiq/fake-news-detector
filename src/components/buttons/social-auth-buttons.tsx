import { Button, buttonVariants } from "../ui/button";

import type { VariantProps } from "class-variance-authority";

export default function SocialAuthButtons({
    socialAuthButtons,
}: {
    socialAuthButtons: TSocialAuthButton[];
}) {
    return (
        <div className="flex flex-col items-center gap-2 capitalize">
            or continue with
            <div className="flex gap-2">
                {socialAuthButtons.map((button) => (
                    <div key={button.name}>
                        {button.element === "component" ? (
                            <button.icon />
                        ) : (
                            <Button
                                key={button.name}
                                className="bg-background"
                                variant={button.variant}
                            >
                                <button.icon />
                            </Button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export type TSocialAuthButton = {
    element: "component" | "icon";
    name: string;
    icon: React.ComponentType;
    variant?: VariantProps<typeof buttonVariants>["variant"] | "outline";
};
