//export const revalidate = 60
import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"
export async function GET(req,res) {
    try{
        const prisma=new PrismaClient();
        const result=await prisma.services.findMany({
            where: { isActive: true },
            select:{
                id:true,
                heading_title:true,
                short_des:true,
                icon_url:true,
                icon_alt_text:true,
                button_text:true,
                button_link:true,
                submenusId:true,
                isActive:true,
                submenus:{
                    select:{
                        id:true,
                        name:true,
                        urlName:true
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