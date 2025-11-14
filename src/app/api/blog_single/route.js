//export const revalidate = 60
import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"

export async function GET(req,res) {
    try{
        const prisma=new PrismaClient();
        let { searchParams } = new URL(req.url);
        let UrlTitle =searchParams.get('url_title');
        const result=await prisma.blog_post.findUnique({
            where:{
                url_title:UrlTitle
            },
            select:{
                id:true,
                url_title:true,
                heading_title:true,
                short_des:true,
                img_url:true,
                alt_text:true,
                long_des:true,
                slug:true,
                button_text:true,
                button_link:true,
                author:true,
                isActive:true,
                catID:true,
                createdAt:true,
                updatedAt:true,
                category:{
                    select: {
                        id: true,
                        name: true,
                    }
                }
            }
        })
        return  NextResponse.json({status:"success", data: result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}