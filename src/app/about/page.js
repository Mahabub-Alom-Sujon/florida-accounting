import React from 'react';
import MasterLayout from "@/components/MasterLayout/MasterLayout";
import CompanyHistory from "@/components/AboutPage/CompanyHistory";
import Experience from "@/components/AboutPage/Experience";
import BannerArea from "@/components/BannerArea/BannerArea";

export const metadata = {
    title: "About FL Accounting – Trusted Accounting & Tax Professionals",
    description: "Learn about our mission, values, and experience in delivering premium accounting, bookkeeping, payroll, and tax services",
    keywords: [
        "accounting firm",
        "tax professionals",
        "bookkeeping experts",
    ],
    openGraph: {
        title: "About FL Accounting – Trusted Accounting & Tax Professionals",
        description: "Learn about our mission, values, and experience in delivering premium accounting, bookkeeping, payroll, and tax services",
        url: "https://fl-accounting.com/about",
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
        title: "About FL Accounting – Trusted Accounting & Tax Professionals",
        description: "Learn about our mission, values, and experience in delivering premium accounting, bookkeeping, payroll, and tax services",
    },
};

const Page = () => {
    return (
        <>
            <MasterLayout>
                <BannerArea/>
                <Experience/>
                <CompanyHistory/>
            </MasterLayout>
        </>
    );
};

export default Page;