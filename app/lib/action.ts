import prisma from "../utils/db";

export const getData = async (query: string) => {
  try {
    const fieldsToSearch = ['singer', 'title', 'album', 'category']; 
    const conditions = fieldsToSearch.map(field => ({
      [field]: {
        contains: query,
        mode: "insensitive",
      },
    }));

    const data = await prisma.song.findMany({
      where: {
        OR: conditions,
      },
    });
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};