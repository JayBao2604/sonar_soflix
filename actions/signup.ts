"use server";

import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';
import * as z from 'zod';

import { SignUpSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken } from '@/lib/tokens';
import { sendVerificationEmail } from '@/lib/mail';
import { getUserByLoginName } from '@/data/user';
import { login } from './login';

export const signup = async (values: z.infer<typeof SignUpSchema>) => {
    const validatedFields = SignUpSchema.safeParse(values);

    if(!validatedFields.success) {
        return { error: "Invalid Credentials!"};
    }

    const { loginName, password, name, email } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByLoginName(loginName);

    if(existingUser) {
        return { error: "Login Name already taken!"};
    }

    const existingUser2 = await getUserByEmail(email);

    if(existingUser2) {
        return { error: "Email already taken!"};
    }

    await db.user.create({
        data: {
            name,
            loginname: loginName,
            password: hashedPassword,
            email,
        }
    });

    //const verificationToken = await generateVerificationToken(email);

    //await sendVerificationEmail(verificationToken.email, verificationToken.token);

    return { success: "Account Created!"};
}