import React from 'react';
import MasterLayout from "@/components/MasterLayout/MasterLayout";
import BlogSlider from "@/components/BlogPage/BlogSlider";
async function getData(url_title) {
    let option={method:"GET",cache:"no-cache"}
    let Blogdetails = (await (await fetch(`${process.env.HOST}/api/blog_single?url_title=${url_title}`,option)).json())['data']
    let BlogSlider = (await (await fetch(`${process.env.HOST}/api/blog_slider`,option)).json())["data"]
    return {BlogSlider};
    return{Blogdetails,BlogSlider}
}
const Page =async ({ params }) => {
    const { url_title } = params;
    const data = await getData(url_title);
    //console.log(data)
    return (
        <>
            <MasterLayout>
                <BlogSlider data={data['BlogSlider']}/>
                {JSON.stringify(data, null, 2)}
            </MasterLayout>
        </>
    );
};

export default Page;