"use client";

import * as z from 'zod';
import { useForm } from "react-hook-form";
import { useState, Suspense, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import { LoginSchema } from '@/schemas';
import {
    Form,
    FormControl,
    FormLabel,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";
import { CardWrapper } from "./card-wrapper";
import { Button } from '@/components/ui/button';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import { login } from '@/actions/login';
import Link from 'next/link';
import { getSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

const LoginFormContent = () => {
    const searchParams = useSearchParams();
    const urlError = searchParams.get('error') === "OAuthAccountNotLinked"
        ? "Email already in use with a different provider" : ""; 

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            login(values)
                .then((data) => {
                    setError(data?.error);
                    setSuccess(data?.success);
                    getSession();
                });
        });
    };

    return (
        <Form {...form}>
            <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
            > 
                <div className='space-y-4'>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel style={{color: 'white'}}>
                                    Email
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="bg-white text-black rounded-full"
                                        placeholder='trangiabao@example.com'
                                        type="email"
                                        disabled={isPending}
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
                                <FormLabel style={{color: 'white'}}>
                                    Password
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="bg-white text-black rounded-full"
                                        disabled={isPending}
                                        placeholder='●●●●●●'
                                        type="password"
                                    />
                                </FormControl>
                                <Button
                                    size="sm"
                                    variant={'link'}
                                    asChild
                                    className='px-0 font-normal'
                                >
                                    <Link href="/reset">
                                        Forgot Password?
                                    </Link>
                                </Button>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormError message={error || urlError} />
                <FormSuccess message={success} />
                <div className='mt-4' />
                <Button
                    disabled={isPending}
                    type='submit'
                    className="bg-white text-black rounded-full w-full"
                    style={{backgroundColor: '#24c8ff'}}
                >
                    Login
                </Button>
            </form>
        </Form>
    );
};

export const LoginForm = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
            <CardWrapper
                headerLabel="Welcome Back!"
                backButtonLabel="Don't have an account?"
                backButtonHref="/sign-up"
                showSocial
                topText="Log in"
            >
                <LoginFormContent />
            </CardWrapper>
        </div>
    </Suspense>
);
