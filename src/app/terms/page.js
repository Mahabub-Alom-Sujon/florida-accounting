import React from 'react';
import MasterLayout from "@/components/MasterLayout/MasterLayout";
import BannerArea from "@/components/BannerArea/BannerArea";
import Terms from "@/components/TermsPage/Terms";
async function getData(){
    let option={method:"GET",cache:"no-store"}
    let terms = (await (await fetch(`${process.env.HOST}/api/terms`,option)).json())["data"]
    return {terms};
}
const Page =async () => {
    const data = await getData();
    return (
        <>
            <MasterLayout>
                <BannerArea/>
                <Terms data={data['terms']['0']}/>
            </MasterLayout>
        </>
    );
};

export default Page;