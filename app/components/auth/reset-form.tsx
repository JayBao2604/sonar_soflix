"use client";

import * as z from 'zod';

import { useForm } from "react-hook-form"
import { useState } from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import { useTransition } from 'react';

import { ResetSchema } from '@/schemas';
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
import { reset } from '@/actions/reset';
import { getSession } from 'next-auth/react';

export const ResetForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof ResetSchema>>({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: '',
        }
    })

    const onSubmit = (values: z.infer<typeof ResetSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            reset(values)
            .then ((data) => {
                
                setError(data?.error);
                setSuccess(data?.success);
                
                getSession();
            });
        });
    }

    return(
        <CardWrapper
            headerLabel="Forgot your Password?"
            backButtonLabel="Back to Login"
            backButtonHref="/login"
            topText="Password Reset"
        >
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                > 
                    <div className='space-y-4'>
                        <FormField
                            control={form.control}
                            name="email"
                            render = {({ field }) => (
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
                        Send Reset Email
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}