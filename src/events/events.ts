"use server"

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function createPost(formData:FormData){
    await prisma.event.create({
        data: {
            eventName: '',
            eventPlace: '',
            meetingLink: '',
            description:''
          }
    })
}