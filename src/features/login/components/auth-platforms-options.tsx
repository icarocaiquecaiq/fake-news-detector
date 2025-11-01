import { GoogleLoginButton } from "@/components/buttons/google-buttons/google-login-button";
import type { TSocialAuthButton } from "@/components/buttons/social-auth-buttons";
import SocialAuthButtons from "@/components/buttons/social-auth-buttons";
import { Facebook, Twitter } from "lucide-react";

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

export default function AuthPlatformsOptions() {
    return (
        <>
            <SocialAuthButtons socialAuthButtons={socialAuthButtons} />
        </>
    );
}
