//export const revalidate = 60
import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"
export async function POST(req,res) {
    try{
        let reqBody=await req.json();
        const prisma=new PrismaClient();
        const result=await prisma.hero_silde.create({
            data:reqBody
        })
        return  NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}
export async function GET(req,res) {
    try{
        const prisma=new PrismaClient();
        const result=await prisma.hero_silde.findMany({
            where: { isActive: true },
            select:{
                id:true,
                background_url:true,
                background_color:true,
                subTitle:true,
                heading_title:true,
                description:true,
                button_text:true,
                button_link:true,
                isActive:true,
                typewriter:{
                    select:{
                        id:true,
                        text:true,
                        isActive:true,
                    }
                }
            }
        })
        return  NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}