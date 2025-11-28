import React, {Suspense} from 'react';
import MasterLayout from "@/components/MasterLayout/MasterLayout";
import ContactUs from "@/components/ContactUsPage/Contact-Us";
export const metadata = {
    title: "Contact FL Accounting – Get Expert Financial Support",
    description: "Contact us for accounting, bookkeeping, payroll, and tax services. Call or send us a message for quick assistance",
    keywords: [
        "contact accountant",
        "tax consultation",
        "bookkeeping support",
    ],
    openGraph: {
        title: "Contact FL Accounting – Get Expert Financial Support",
        description: "Contact us for accounting, bookkeeping, payroll, and tax services. Call or send us a message for quick assistance",
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
        title: "Contact FL Accounting – Get Expert Financial Support",
        description: "Contact us for accounting, bookkeeping, payroll, and tax services. Call or send us a message for quick assistance",
    },
};
const Page = () => {
    return (
        <>
            <MasterLayout>
                <Suspense fallback={<div>Loading...</div>}>
                    <ContactUs/>
                </Suspense>
            </MasterLayout>
        </>
    );
};

export default Page;