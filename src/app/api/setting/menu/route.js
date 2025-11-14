export const revalidate = 60
import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"
export async function POST(req,res) {
    try{
        let reqBody=await req.json();
        const prisma=new PrismaClient();
        const result=await prisma.menu.create({
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
        const result=await prisma.menu.findMany({
            where:{
                isActive:true,
            },
            select:{
                id:true,
                name:true,
                urlName:true,
                isActive:true,
                submenus:{
                    where:{isActive:true},
                    select:{
                        id:true,
                        name:true,
                        urlName:true,
                        isActive:true,
                    },
                    orderBy:{ name:"asc"}
                },
            },
            orderBy: { id: 'asc' },
        })
        return  NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}