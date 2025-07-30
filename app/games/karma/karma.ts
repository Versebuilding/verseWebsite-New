import {prisma} from '@/lib/prisma'


export const getKarmaImages = async() => {
    return await prisma.mediaAsset.findMany({
        where:{
            page:'karma',
            type:'image'
        },
        orderBy:{
            createdAt : 'asc'
        }

    })
}
