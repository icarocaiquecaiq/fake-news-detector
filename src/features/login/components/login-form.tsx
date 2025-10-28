import { PasswordInput } from "@/components/inputs/password-input";
import { Button } from "@/components/ui/button";
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
import { useForm } from "react-hook-form";
import { z } from "zod";

const usernameSchema = z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters long.")
    .max(50, "Username can’t be longer than 50 characters.")
    .regex(
        /^(?!\d+$)[a-zA-Z0-9._]+$/,
        "Please use only letters, numbers, dots, or underscores, and include at least one letter.",
    );

const emailSchema = z
    .string()
    .trim()
    .min(1, "This field is required.")
    .max(254, "Email can’t be longer than 254 characters.")
    .email("Enter a valid email address or username.");

const formSchema = z.object({
    userNameOrEmail: z.union([usernameSchema, emailSchema]),
    password: z
        .string()
        .trim()
        .min(8, "Password must be at least 8 characters long."),
});

export default function LoginForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            userNameOrEmail: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const result = formSchema.parse(values);

        console.log("validated:", result);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="userNameOrEmail"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email or Username</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="ex: johndoe"
                                    required
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <PasswordInput {...field} required />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full capitalize">
                    log in
                </Button>
            </form>
        </Form>
    );
}
