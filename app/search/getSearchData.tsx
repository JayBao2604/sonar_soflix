import prisma  from "@/app/utils/db";

export const getData = async (query: string, userId: string) => {
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
        select: {
            id: true,
            singer: true,
            title: true,
            SongLists: {
              where: {
                userId: userId,
              },
            },
            imageString: true,
            youtubeString: true,
            release: true,
            duration: true,
            album: true,
            category: true,
            artist: true,
        }, 
      });
      return data;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  };