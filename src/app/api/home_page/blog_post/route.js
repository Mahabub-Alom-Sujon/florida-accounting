export const revalidate = 60;
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req, res) {
    try {
        const prisma = new PrismaClient();
        let result = await prisma.blog_post.findMany({
            where: {
                isActive: true,
            },
            select: {
                id: true,
                url_title: true,
                heading_title: true,
                short_des: true,
                img_url: true,
                alt_text: true,
                catID: true,
                slug: true,
                button_text: true,
                button_link: true,
                createdAt: true,
                updatedAt: true,
                category: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });

        // Randomize and select 3 items
        result = result.sort(() => 0.5 - Math.random()).slice(0, 3);
        return NextResponse.json({ status: "success", data: result });
    } catch (e) {
        return NextResponse.json({ status: "fail", data: e.toString() });
    }
}