//export const revalidate = 60
import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"
export async function POST(req,res) {
    try{
        let reqBody=await req.json();
        const prisma=new PrismaClient();
        const result=await prisma.testimonials.create({
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
        //let { searchParams } = new URL(req.url);
       // let searchName =searchParams.get('urlName');
        const result=await prisma.testimonials.findMany({
            where:{
                isActive:true,
            }
        })
        return  NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}