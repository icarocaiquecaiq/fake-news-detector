import LoginForm from "./components/login-form";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { PATHS } from "@/routes/paths";
import AuthPlatformsOptions from "./components/auth-platforms-options";

const signUpPath = PATHS.auth.register;

function LoginFeature() {
    return (
        <Card className="w-3/5 m-auto flex">
            <CardHeader className="gap-0">
                <CardTitle>
                    <LoginContentTitle></LoginContentTitle>
                </CardTitle>
                <CardDescription className="flex items-center">
                    <LoginContentDescription></LoginContentDescription>
                    <Button asChild variant="link" size="sm" className="px-1">
                        <NavLink to={signUpPath}>Sign Up</NavLink>
                    </Button>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <LoginForm />
            </CardContent>
            <CardFooter className="flex justify-center">
                <AuthPlatformsOptions></AuthPlatformsOptions>
            </CardFooter>
        </Card>
    );
}

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
