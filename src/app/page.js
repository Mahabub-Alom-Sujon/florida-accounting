import React from 'react';
import { Suspense } from 'react'
import MasterLayout from "@/components/MasterLayout/MasterLayout";
import HeroSection from "@/components/HomePage/HeroSection";
import AboutSection from "@/components/HomePage/AboutSection";
import OurTeamSection from "@/components/HomePage/OurTeamSection";
import TestimonialSection from "@/components/HomePage/TestimonialSection";
import BlogSection from "@/components/HomePage/BlogSection";
import ChoseUsSection from "@/components/HomePage/ChoseUsSection";
import ServiceSection from "@/components/HomePage/ServiceSection";
import FuturesSection from "@/components/HomePage/FuturesSection";
import PartnerSection from "@/components/HomePage/PartnerSection";
async function getData(){
    let option={
        method:"GET",
        cache:"no-store"
    }
    let HomeSlider = (await (await fetch(`${process.env.HOST}/api/home_page/home_slider`,option)).json())["data"]
    let Blog_Post = (await (await fetch(`${process.env.HOST}/api/home_page/blog_post`,option)).json())["data"]
    let Testimonial= (await (await fetch(`${process.env.HOST}/api/home_page/testimonial`,option)).json())["data"]
    let HomeService = (await (await fetch(`${process.env.HOST}/api/home_page/service`,option)).json())["data"]
    let Team=(await (await fetch(`${process.env.HOST}/api/home_page/team`,option)).json())["data"]
    let HomeAbout=(await (await fetch(`${process.env.HOST}/api/home_page/home_about`,option)).json())["data"]
    let Futures=(await (await fetch(`${process.env.HOST}/api/home_page/futures`,option)).json())["data"]
    let Brands=(await (await fetch(`${process.env.HOST}/api/home_page/brand`,option)).json())["data"]
    return {Blog_Post,Testimonial,HomeSlider,HomeService,Team,HomeAbout,Futures,Brands};
}
const Page =async () => {
    const data = await getData();
    return (
        <>
           <MasterLayout>
               <Suspense fallback={<p>Loading...</p>}>
                    <HeroSection data={data['HomeSlider']}/>
               </Suspense>
               <Suspense fallback={<p>Loading...</p>}>
                    <FuturesSection data={data['Futures']}/>
               </Suspense>
               <Suspense fallback={<p>Loading...</p>}>
                    <PartnerSection data={data['Brands']}/>
               </Suspense>
               <Suspense fallback={<p>Loading...</p>}>
                    <AboutSection data={data['HomeAbout']['0']}/>
               </Suspense>
               <Suspense fallback={<p>Loading...</p>}>
                   <ServiceSection data={data['HomeService']}/>
               </Suspense>
               <Suspense fallback={<p>Loading...</p>}>
                    <ChoseUsSection/>
               </Suspense>
               <Suspense fallback={<p>Loading...</p>}>
                    <TestimonialSection data={data['Testimonial']}/>
               </Suspense>
               <Suspense fallback={<p>Loading...</p>}>
                    <OurTeamSection data={data['Team']} />
               </Suspense>
                    <Suspense fallback={<p>Loading...</p>}>
               <BlogSection data={data['Blog_Post']}/>
               </Suspense>
           </MasterLayout>
        </>
    );
};

export default Page;