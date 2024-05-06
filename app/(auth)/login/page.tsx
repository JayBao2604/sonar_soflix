import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GithubSignInButton from "@/app/components/GithubSignInButton";
import GoogleSignInButton from "@/app/components/GoogleSignInButton";
import { auth } from "@/auth"
import { redirect } from "next/navigation";
import { LoginForm } from "@/app/components/auth/login-form";

const LoginPage = () => {
    return(
        <LoginForm />
    )
}

export default LoginPage;
/*export default async function Login () {
    const session = await auth();
    if (session) {
        return redirect("/home");
    }
    return (
        <div className="mt-28  rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
            <form method="post" action="/api/auth/signin">
                <h1 className="text-3xl font-semibold text-white">Log in</h1>
                <div className="space-y-4 mt-5">
                    <Input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        className="bg-[#333] placeholder:text-xs  rounded-lg placeholder:text-gray-400 w-full inline-block" />
                    <Button 
                        type="submit"
                        variant="destructive" 
                        className="w-full bg-sky-400">Log in</Button>
                </div>
            </form>

            <div className="text-gray-400 text-sm mt-2">
                New to SONAR?{" "}
                <Link className="text-white hover:underline" href="/sign-up">Sign up now!</Link>
            </div>

            <div className="flex w-full justify-center items-center gap-x-3 mt-6">
                <GithubSignInButton />
                <GoogleSignInButton />
            </div>
        </div>
    )
}*/