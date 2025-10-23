import LoginForm from "./components/login-form";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import SocialAuthButtons from "@/components/buttons/social-auth-buttons";
import { GoogleLoginButton } from "@/components/buttons/google-buttons/google-login-button";
import { Facebook, Twitter } from "lucide-react";
import type { TSocialAuthButton } from "@/components/buttons/social-auth-buttons";
import { Button } from "@/components/ui/button";

function LoginFeature() {
    return (
        <Card>
            <CardHeader className="gap-0">
                <CardTitle>
                    <LoginContentTitle></LoginContentTitle>
                </CardTitle>
                <CardDescription className="flex items-center">
                    <LoginContentDescription></LoginContentDescription>
                    <Button variant={"link"} className="px-1">
                        Sign Up
                    </Button>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <LoginForm />
            </CardContent>
            <CardFooter className="flex justify-center">
                <SocialAuthButtons socialAuthButtons={socialAuthButtons} />
            </CardFooter>
        </Card>
    );
}

const socialAuthButtons: TSocialAuthButton[] = [
    {
        element: "component",
        name: "google",
        icon: GoogleLoginButton,
    },
    {
        element: "icon",
        name: "twitter",
        icon: Twitter,
        variant: "ghost",
    },
    {
        element: "icon",
        name: "facebook",
        icon: Facebook,
        variant: "ghost",
    },
];

export function LoginContentTitle() {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Login
        </h4>
    );
}

export function LoginContentDescription() {
    return (
        <p className="text-sm text-muted-foreground">
            First time here? Create an account to get started!
        </p>
    );
}

export default LoginFeature;
