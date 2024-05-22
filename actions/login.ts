"use server";
import * as z from 'zod';
import { AuthError } from 'next-auth';

import { signIn } from '@/auth';
import { LoginSchema } from '@/schemas';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { generateVerificationToken } from '@/lib/tokens';
import { getUserByLoginName } from '@/data/user';

import { sendVerificationEmail } from '@/lib/mail';
import { get } from 'http';

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if(!validatedFields.success) {
        return { error: "Invalid Credentials!"};
    }

    const { loginName, password } = validatedFields.data;

    //console.log("Email: ", email);

    const existingUser = await getUserByLoginName(loginName);

    if(!existingUser || !existingUser.loginname || !existingUser.password) {
        return { error: "User does not exist!"};
    }

    //console.log(loginName, password, existingUser.loginname, existingUser.password);

    try{
        await signIn('credentials', { loginName, password, redirectTo: DEFAULT_LOGIN_REDIRECT });
        return { success: "Logged in!"};
    } catch (error)
    {
        if(error instanceof AuthError) {
            switch(error.type) {
                case "CredentialsSignin": return { error: "Invalid Credentials!"};
                default: return { error: "Something went wrong!"};
            }

        }

        throw error;
    }
}