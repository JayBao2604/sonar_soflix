import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token:string) => {
    const confirmLink = 'http://localhost:3000/new-verification?token=' + token;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Please confirm your email",
        html: `
            <h1>Welcome to Sonar!</h1>
            <p>Please confirm your email by clicking the link below:</p>
            <a href="${confirmLink}">Confirm Email</a>
        `
    })
}

export const sendPasswordResetEmail = async (email: string, token:string) => {
    const resetLink = 'http://localhost:3000/new-password?token=' + token;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Reset your password",
        html: `
            <h1>Reset your password</h1>
            <p>Please reset your password by clicking the link below:</p>
            <a href="${resetLink}">Reset Password</a>
        `
    })
}