"use server";

import { auth, signOut } from "@/auth";

export const SignOutAction = () => {
    const handleSignOut = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault(); // prevent the form from being submitted

        const session = await auth();

        if (session) {
            await signOut();
        }
    }

    return (
        <div>
            <form onSubmit={handleSignOut}>
                <button type="submit">Sign Out</button>
            </form>
        </div>
    )
}