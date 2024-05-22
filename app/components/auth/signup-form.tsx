"use client";

import * as z from 'zod';

import { useForm } from "react-hook-form"
import { useState } from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import { useTransition } from 'react';

import { SignUpSchema } from '@/schemas';
import {
    Form,
    FormControl,
    FormLabel,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";

import { CardWrapper } from "./card-wrapper"
import { Button } from '@/components/ui/button';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import { signup } from '@/actions/signup';

export const SignupForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            loginName: '',
            password: '',
            name: '',
            email: '',
        }
    })

    const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            signup(values)
            .then ((data) => {
                if (data) {
                    setError(data.error);
                    setSuccess(data.success);
                }
            });
        });
    }

    return(
        <CardWrapper
            headerLabel="Create an account!"
            backButtonLabel="Already have an account?"
            backButtonHref="/login"
            showSocial
            topText="Register"
        >
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                > 
                    <div className='space-y-4'>
                        <FormField
                            control={form.control}
                            name="name"
                            render = {({ field }) => (
                                <FormItem>
                                    <FormLabel style={{color: 'white'}}>
                                        Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input className="bg-white text-black rounded-full"
                                            {...field}
                                            placeholder='Trần Gia Bảo'
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render = {({ field }) => (
                                <FormItem>
                                    <FormLabel style={{color: 'white'}}>
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input className="bg-white text-black rounded-full"
                                            {...field}
                                            placeholder='trangiabao@gmail.com'
                                            disabled={isPending}
                                            type='email'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="loginName"
                            render = {({ field }) => (
                                <FormItem>
                                    <FormLabel style={{color: 'white'}}>
                                        Login Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input className="bg-white text-black rounded-full"
                                            {...field}
                                            placeholder='BaoTran2904'
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
                            render = {({ field }) => (
                                <FormItem>
                                    <FormLabel style={{color: 'white'}}>
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <Input className="bg-white text-black rounded-full"
                                            {...field}
                                            disabled={isPending}
                                            placeholder='●●●●●●'
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={error}/>
                    <FormSuccess message={success}/>
                    <div className=''/>
                    <Button
                    disabled={isPending}
                    type='submit'
                    className="bg-white text-black rounded-full w-full"
                    style={{backgroundColor: '#24c8ff'}}
                    >
                        Create Account
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}