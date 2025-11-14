import React from 'react';
import { Suspense } from 'react'
import AppNavBar from "@/components/MasterLayout/AppNavBar";
import Footer from "@/components/MasterLayout/Footer";
async function getData(){
    let option={method:"GET",cache:"no-store"}
    let Menu = (await (await fetch(`${process.env.HOST}/api/setting/menu`,option)).json())["data"]
    return {Menu};
}
const MasterLayout =async (props) => {
    const data = await getData();
    //console.log(data)
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <AppNavBar data={data['Menu']}/>
                {props.children}
                <Footer/>
            </Suspense>
        </>
    );
};

export default MasterLayout;