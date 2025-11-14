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
    let option={method:"GET",cache:"no-store"}
    let HomeSlider = (await (await fetch(`${process.env.HOST}/api/home_page/home_slider`,option)).json())["data"]
    let Blog_Post = (await (await fetch(`${process.env.HOST}/api/home_page/blog_post`,option)).json())["data"]
    let Testimonial= (await (await fetch(`${process.env.HOST}/api/home_page/testimonial`,option)).json())["data"]
    let HomeService = (await (await fetch(`${process.env.HOST}/api/home_page/service`,option)).json())["data"]
    let Team=(await (await fetch(`${process.env.HOST}/api/home_page/team`,option)).json())["data"]
    let HomeAbout=(await (await fetch(`${process.env.HOST}/api/home_page/home_about`,option)).json())["data"]
    return {Blog_Post,Testimonial,HomeSlider,HomeService,Team,HomeAbout};
}
const Page =async () => {
    const data = await getData();
    return (
        <>
           <MasterLayout>
               <Suspense fallback={<div>Loading...</div>}>
                    <HeroSection data={data['HomeSlider']}/>
               </Suspense>
               <Suspense fallback={<div>Loading...</div>}>
                   <FuturesSection/>
               </Suspense>
               <Suspense fallback={<div>Loading...</div>}>
                   <PartnerSection/>
               </Suspense>
               <Suspense fallback={<div>Loading...</div>}>
                   <AboutSection data={data['HomeAbout']['0']}/>
               </Suspense>
               <Suspense fallback={<div>Loading...</div>}>
                   <ServiceSection data={data['HomeService']}/>
               </Suspense>
               <Suspense fallback={<div>Loading...</div>}>
                   <ChoseUsSection/>
               </Suspense>
               <Suspense fallback={<div>Loading...</div>}>
                   <TestimonialSection data={data['Testimonial']}/>
               </Suspense>
               <Suspense fallback={<div>Loading...</div>}>
                   <OurTeamSection data={data['Team']} />
               </Suspense>
               <Suspense fallback={<div>Loading...</div>}>
                   <BlogSection data={data['Blog_Post']}/>
               </Suspense>
           </MasterLayout>
        </>
    );
};

export default Page;