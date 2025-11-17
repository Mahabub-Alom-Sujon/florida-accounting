//export const revalidate = 60
import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"
export async function POST(req,res) {
    try{
        let reqBody=await req.json();
        const prisma=new PrismaClient();
        const result=await prisma.blog_post.create({
            data:reqBody
        })
        return  NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}

export async function GET(req,res) {
    try {
        const prisma = new PrismaClient();
        const { searchParams } = new URL(req.url);
        const pageNo = parseInt(searchParams.get('pageNo'));
        const perPage = parseInt(searchParams.get('perPage'));
        const searchValue = searchParams.get('searchKey');
        const catID = searchParams.get('catID') ? searchParams.get('catID').split(',') : [];
        const skipRow = (pageNo - 1) * perPage;
        let Rows;
        let Total;
        if ( searchValue !== '0') {
            Total = await prisma.blog_post.count({
                where: {
                    isActive: true,
                    OR: [
                        { heading_title: { contains: searchValue, mode: "insensitive" } },
                        //{ slug: { contains: searchValue, mode: "insensitive" } },
                        { short_des: { contains: searchValue, mode: "insensitive" } },
                        { category: { name: { contains: searchValue, mode: "insensitive" } } },
                    ],
                }
            });

            Rows = await prisma.blog_post.findMany({
                where: {
                    isActive: true,
                    OR: [
                        { heading_title: { contains: searchValue, mode: "insensitive" } },
                        //{ slug: { contains: searchValue, mode: "insensitive" } },
                        { short_des: { contains: searchValue, mode: "insensitive" } },
                        { category: { name: { contains: searchValue, mode: "insensitive" } } },
                    ],
                },
                select: {
                    id: true,
                    url_title: true,
                    heading_title: true,
                    short_des: true,
                    img_url: true,
                    alt_text:true,
                    createdAt: true,
                    catID: true,
                    slug: true,
                    button_text: true,
                    button_link: true,
                    category: {
                        select: {
                            id: true,
                            name: true,
                        }
                    }
                },
                orderBy: { id: 'desc' },
                skip: skipRow,
                take: perPage
            });
        } else if (catID.length > 0) {
            Total = await prisma.blog_post.count({
                where: {
                    isActive: true,
                    catID: {
                        in: catID
                    },
                },
            });
            Rows = await prisma.blog_post.findMany({
                where: {
                    isActive: true,
                    catID: {
                        in: catID
                    },
                },
                select: {
                    id: true,
                    url_title: true,
                    heading_title: true,
                    short_des: true,
                    img_url: true,
                    alt_text:true,
                    createdAt: true,
                    catID: true,
                    slug: true,
                    button_text: true,
                    button_link: true,
                    category: {
                        select: {
                            id: true,
                            name: true,
                        }
                    }
                },
                orderBy: { id: 'desc' },
                skip: skipRow,
                take: perPage,

            })

        } else {
            Total = await prisma.blog_post.count({
                where: {
                    isActive: true,
                },
            });
            Rows = await prisma.blog_post.findMany({
                where: {
                    isActive: true,
                },
                select: {
                    id: true,
                    url_title: true,
                    heading_title: true,
                    short_des: true,
                    img_url: true,
                    alt_text:true,
                    createdAt: true,
                    catID: true,
                    slug: true,
                    button_text: true,
                    button_link: true,
                    category: {
                        select: {
                            id: true,
                            name: true,
                        }
                    }
                },
                orderBy: { id: 'desc' },
                skip: skipRow,
                take: perPage,
            });
        }
        return NextResponse.json({ status: "success", total: Total, data: Rows });
    } catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}
export async function PUT(req, res) {
    try{
        let { searchParams } = new URL(req.url);
        let id =searchParams.get('id');
        const prisma=new PrismaClient();
        const result=await prisma.blog_post.findUnique({
            where:{id:id},
            include:{
                category:{select:{id:true,name:true}},
            }

        })

        return  NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}
export async function PATCH(req, res) {
    try{
        let { searchParams } = new URL(req.url);
        let id =searchParams.get('id');
        let reqBody=await req.json();
        const prisma=new PrismaClient();
        const result=await prisma.blog_post.update({
            where:{id:id},
            data:reqBody
        })

        return  NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}
