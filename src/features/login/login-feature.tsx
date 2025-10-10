import LoginForm from "./components/login-form";
import { Card } from "@/components/ui/card";
import SocialAuthButtons from "@/components/buttons/social-auth-buttons";
import { GoogleLoginButton } from "@/components/buttons/google-buttons/google-login-button";
import { Facebook, Twitter } from "lucide-react";
import type { TSocialAuthButton } from "@/components/buttons/social-auth-buttons";

function LoginFeature() {
    return (
        <Card>
            <LoginForm />
            <SocialAuthButtons socialAuthButtons={socialAuthButtons} />
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

export default LoginFeature;
