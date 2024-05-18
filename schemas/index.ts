import * as z from 'zod';

export const ResetSchema = z.object({

    email: z.string().email({message: 
        "Email is required"
    }),

});

export const NewPasswordSchema = z.object({

    password: z.string().min(6, {message: "Minimum length of 6 characters required"}),

});


export const LoginSchema = z.object({

    email: z.string().email({message: 
        "Email is required"
    }),
    password: z.string().min(1, {message: "Password is required"}),

});

export const SignUpSchema = z.object({
    email: z.string().email({message: "Invalid email"}),
    password: z.string().min(6, {message: "Minimum length of 6 characters required"}),
    name: z.string().min(1, {message: "Name is required"}),
});