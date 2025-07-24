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

export const getAibFirstImage = async () => {
  return await prisma.mediaAsset.findFirst({
    where: {
      page: 'aib',
      section: 'hero',
      type: 'image',
    },
  });
}


export const getAibFirstCatImage = async () => {
  return await prisma.mediaAsset.findFirst({
    where: {
      page: 'aib',
      section: 'cat',
      type: 'image',
    },
  });
};


export const getAibSecondCatVideo = async () => {
  return await prisma.mediaAsset.findFirst({
    where: {
      page: 'aib',
      section: 'section3', 
      type: 'video',
    },
  });
};
