import React from 'react';
import MasterLayout from "@/components/MasterLayout/MasterLayout";
import ServicePage from "@/components/ServicePage/ServicePage";
async function getData(urlName) {
    let option={method:"GET",cache:"no-cache"}
    let Servicedetails = (await (await fetch(`${process.env.HOST}/api/service?urlName=${urlName}`,option)).json())['data']
    return{Servicedetails}
}

const Page =async ({params}) => {
    const { urlName } = params;
    const data = await getData(urlName);
    return (
        <>
            <MasterLayout>
                <ServicePage data={data['Servicedetails']} />
            </MasterLayout>
        </>
    );
};

export default Page;