import { getSession } from 'next-auth/react'
import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

export default async function handle ( req, res ) {

    const session = await getSession({ req })
    const profileData = await prisma.user.findUnique({
        where: {
            email: session.user.email
        }
    });
    res.json(profileData)
}