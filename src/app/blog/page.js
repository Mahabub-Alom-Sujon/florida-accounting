import React, {Suspense} from 'react';
import MasterLayout from "@/components/MasterLayout/MasterLayout";
import BlogList from "@/components/BlogPage/BlogList";
import BlogSlider from "@/components/BlogPage/BlogSlider";
async function getData(){
    let option={method:"GET",cache:"no-store"}
    let BlogSlider = (await (await fetch(`${process.env.HOST}/api/blog_slider`,option)).json())["data"]
    return {BlogSlider};
}
export const metadata = {
    title: "FL Accounting Blog – Financial Tips, Tax Updates & Business Insights",
    description: "Read accounting guides, tax updates, payroll tips, and business advice to stay financially informed",
    keywords: [
        "accounting blog",
        "tax updates",
        "business insights",
        "bookkeeping tips",
    ],
    openGraph: {
        title: "FL Accounting Blog – Financial Tips, Tax Updates & Business Insights",
        description: "Read accounting guides, tax updates, payroll tips, and business advice to stay financially informed",
        url: "https://fl-accounting.com/contact-us",
        siteName: "FL Accounting",
        // images: [
        //     {
        //         url: "https://your-domain.com/og-about.jpg", // <-- replace with your real og image
        //         width: 1200,
        //         height: 630,
        //         alt: "FL Accounting About Page Banner",
        //     },
        // ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "FL Accounting Blog – Financial Tips, Tax Updates & Business Insights",
        description: "Read accounting guides, tax updates, payroll tips, and business advice to stay financially informed",
    },
};
const Page =async () => {
    const data = await getData();
    return (
        <>
            <MasterLayout>
                <Suspense fallback={<div>Loading...</div>}>
                    <BlogSlider slider={data['BlogSlider']}/>
                    <BlogList/>
                </Suspense>
            </MasterLayout>
        </>
    );
};

export default Page;