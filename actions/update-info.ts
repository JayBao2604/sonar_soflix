"use server";

import { db } from "@/lib/db";

export const updateInfo = async (image: string, username: string, id: string) => {
    await db.user.update({
        where: {
            id: id,
        },
        data: {
            image: image,
            name: username,
        }
    }); 
}