import { GoogleLoginButton } from "@/components/buttons/google-buttons/google-login-button";
import type { TSocialAuthButton } from "@/components/buttons/social-auth-buttons";
import SocialAuthButtons from "@/components/buttons/social-auth-buttons";
import { PasswordInput } from "@/components/inputs/password-input";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Facebook, Twitter } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";

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

const formScheme = z.object({
    name: z
        .string()
        .trim()
        .min(3, "at least 3 characters long.")
        .max(50, "Name can’t be longer than 50 characters.")
        .max(100, "Name can’t be longer than 50 characters."),
    email: z
        .string()
        .trim()
        .min(1, "This field is required.")
        .max(254, "Email can’t be longer than 254 characters.")
        .email("Enter a valid email address."),
    password: z
        .string()
        .trim()
        .min(8, "Password must be at least 8 characters long")
        .max(50, "Password can’t be longer than 50 characters.")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d\s]).{8,}$/,
            "Password must include upper and lower case letters, a number, and a special character.",
        ),
});

async function onSubmit(values: z.infer<typeof formScheme>) {
    const result = formScheme.parse(values);
    console.log("validated:", result);
}

export function RegisterFeature() {
    const form = useForm<z.infer<typeof formScheme>>({
        resolver: zodResolver(formScheme),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    function signInContentTitle() {
        return (
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Sign Up
            </h4>
        );
    }

    function signInContentDescription() {
        return (
            <p className="text-sm text-muted-foreground">
                Already have an account?
            </p>
        );
    }
    return (
        <Card>
            <CardHeader className="gap-0">
                <CardTitle>{signInContentTitle()}</CardTitle>
                <CardDescription className="flex items-center">
                    <div>{signInContentDescription()}</div>
                    <Button variant={"link"} className="px-1">
                        Sign In
                    </Button>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="name"
                                            required
                                        />
                                    </FormControl>
                                    <FormMessage></FormMessage>
                                </FormItem>
                            )}
                        ></FormField>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="johndoe@gmail.com"
                                            required
                                        />
                                    </FormControl>
                                    <FormMessage></FormMessage>
                                </FormItem>
                            )}
                        ></FormField>
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <PasswordInput
                                        placeholder="teste"
                                        {...field}
                                    ></PasswordInput>
                                    <FormMessage></FormMessage>
                                </FormItem>
                            )}
                        ></FormField>
                        <Button type="submit" className={"w-full capitalize"}>
                            Sign In
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="flex justify-center">
                <SocialAuthButtons socialAuthButtons={socialAuthButtons} />
            </CardFooter>
        </Card>
    );
}

export default RegisterFeature;
