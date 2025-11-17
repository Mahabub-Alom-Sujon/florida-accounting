import React from 'react';
import MasterLayout from "@/components/MasterLayout/MasterLayout";
import ServicePage from "@/components/ServicePage/ServicePage";
async function getData(urlName) {
    let option={method:"GET",cache:"no-cache"}
    let Servicedetails = (await (await fetch(`${process.env.HOST}/api/service?urlName=${urlName}`,option)).json())['data']
    let Menu = (await (await fetch(`${process.env.HOST}/api/setting/menu`,option)).json())["data"]
    return{Servicedetails,Menu}
}

const Page =async ({params}) => {
    const { urlName } = params;
    const data = await getData(urlName);
    return (
        <>
            <MasterLayout>
                <ServicePage data={data['Servicedetails']['0']} services={data['Menu']} />
            </MasterLayout>
        </>
    );
};

export default Page;