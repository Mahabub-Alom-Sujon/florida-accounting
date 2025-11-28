import React from 'react';
import MasterLayout from "@/components/MasterLayout/MasterLayout";
import BannerArea from "@/components/BannerArea/BannerArea";
import Privacy from "@/components/PrivacyPage/Privacy";
async function getData(){
    let option={method:"GET",cache:"no-store"}
    let privacy = (await (await fetch(`${process.env.HOST}/api/privacy`,option)).json())["data"]
    return {privacy};
}

const Page =async () => {
    const data = await getData();
    return (
        <>
            <MasterLayout>
                <BannerArea/>
                <Privacy data={data['privacy']['0']}/>
            </MasterLayout>
        </>
    );
};

export default Page;