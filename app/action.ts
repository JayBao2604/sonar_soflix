"use server";

import { revalidatePath } from "next/cache";
import prisma from "./utils/db";
import { auth } from "@/auth"
import { redirect } from "next/navigation";

export async function addToSonglist(formData: FormData) {
  "use server";

  const songId = formData.get("songId");
  const pathname = formData.get("pathname") as string;
  const session = await auth()

  const data = await prisma.songList.create({
    data: {
      userId: session?.user?.email as string,
      songId: Number(songId),
    },
  });

  revalidatePath(pathname);
}

export async function deleteFromSonglist(formData: FormData) {
  "use server";

  const songlistId = formData.get("songlistId") as string;
  const pathname = formData.get("pathname") as string;

  const data = await prisma.songList.delete({
    where: {
      id: songlistId,
    },
  });

  revalidatePath(pathname);
}

export async function createComment(formData: FormData) {
  const session = await auth();

  if (!session) {
    return redirect("/login");
  }

  const comment = formData.get("comment") as string;
  const songId = Number(formData.get("songId"));
  const userEmail = session?.user?.email as string;

  const user = await prisma.user.findUnique({
    where: { email: userEmail },
  });

  if (!user) {
    return redirect("/login");
  }

  const data = await prisma.comemnt.create({
    data: {
      text: comment,
      userId: user.id,
      songId: songId,
    },
  });
  redirect(`/home/song/${songId}`);
}