import React, {Suspense} from 'react';
import MasterLayout from "@/components/MasterLayout/MasterLayout";
import BlogList from "@/components/BlogPage/BlogList";
import BlogSlider from "@/components/BlogPage/BlogSlider";
async function getData(){
    let option={method:"GET",cache:"no-store"}
    let BlogSlider = (await (await fetch(`${process.env.HOST}/api/blog_slider`,option)).json())["data"]
    return {BlogSlider};
}
const Page =async () => {
    const data = await getData();
    return (
        <>
            <MasterLayout>
                <Suspense fallback={<div>Loading...</div>}>
                    <BlogSlider data={data['BlogSlider']}/>
                    <BlogList/>
                </Suspense>
            </MasterLayout>
        </>
    );
};

export default Page;