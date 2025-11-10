import RegisterForm from "./components/register-form";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { PATHS } from "@/routes/paths";
import { NavLink } from "react-router";
import AuthPlatformsOptions from "./components/auth-platforms-options";

const signUpPath = PATHS.auth.login;

export function RegisterFeature() {
    function signUpContentTitle() {
        return (
            <h4 className="capitalize scroll-m-20 text-2xl font-serif font-semibold tracking-tight">
                fake news detector
            </h4>
        );
    }

    function signUpContentDescription() {
        return (
            <p className="text-sm text-muted-foreground">
                Already have an account?
            </p>
        );
    }
    return (
        <Card className="w-3/5 m-auto flex">
            <CardHeader className="gap-0">
                <CardTitle>{signUpContentTitle()}</CardTitle>
                <CardDescription className="flex items-center">
                    <div>{signUpContentDescription()}</div>
                    <Button asChild variant="link" size="sm" className="px-1">
                        <NavLink to={signUpPath}>Sign In</NavLink>
                    </Button>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <RegisterForm></RegisterForm>
            </CardContent>
            <CardFooter className="flex justify-center">
                <AuthPlatformsOptions></AuthPlatformsOptions>
            </CardFooter>
        </Card>
    );
}

export default RegisterFeature;
