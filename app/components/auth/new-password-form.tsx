"use client";

import * as z from 'zod';

import { useForm } from "react-hook-form"
import { useState } from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import { useTransition } from 'react';
import { useSearchParams } from 'next/navigation';

import { NewPasswordSchema } from '@/schemas';
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
import { newPassword } from '@/actions/new-password';
import { getSession } from 'next-auth/react';

export const NewPasswordForm = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: '',
        }
    })

    const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            newPassword(values, token)
            .then ((data) => {
                
                setError(data?.error);
                setSuccess(data?.success);
                
                getSession();
            });
        });
    }

    return(
        <CardWrapper
            headerLabel="Enter a New Password"
            backButtonLabel="Back to Login"
            backButtonHref="/login"
            topText="New Password"
        >
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                > 
                    <div className='space-y-4'>
                        <FormField
                            control={form.control}
                            name="password"
                            render = {({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel style={{color: 'white'}}>
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className="bg-white text-black rounded-full"
                                            placeholder='●●●●●●'
                                            type="password"
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                    </div>
                    <FormError message={error}/>
                    <FormSuccess message={success}/>
                    <div className='mt-4'/>
                    <Button
                        disabled={isPending}
                        type='submit'
                        className="bg-white text-black rounded-full lg:w-full sm:w-[1000px]"
                        style={{backgroundColor: '#24c8ff'}}
                    >  
                        Reset Password
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}