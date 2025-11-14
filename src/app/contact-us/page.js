import React, {Suspense} from 'react';
import MasterLayout from "@/components/MasterLayout/MasterLayout";
import ContactUs from "@/components/ContactUsPage/Contact-Us";

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