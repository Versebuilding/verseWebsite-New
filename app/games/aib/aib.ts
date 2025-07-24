import {prisma} from '@/lib/prisma'


export const getAibHeroVideo = async () => {
  return await prisma.mediaAsset.findFirst({
    where: {
      page: 'aib',
      section: 'hero',
      type: 'video',
    },
  })
}