import React from 'react';
import MasterLayout from "@/components/MasterLayout/MasterLayout";
import About from "@/components/AboutPage/About";

const Page = () => {
    return (
        <>
            <MasterLayout>
                <About/>
            </MasterLayout>
        </>
    );
};

export default Page;