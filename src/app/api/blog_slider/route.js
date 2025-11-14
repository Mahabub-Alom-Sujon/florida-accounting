export const revalidate = 60
import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"
export async function GET(req,res) {
    try{
        const prisma=new PrismaClient();
        const result=await prisma.blog_post.findMany({
            where:{
                slug: { has: "Slider" },
                isActive:true,
            },
            select:{
                id:true,
                url_title:true,
                heading_title:true,
                short_des:true,
                img_url:true,
                alt_text:true,
                slug:true,
                createdAt:true,
                updatedAt:true,
            }
        })
        return  NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}