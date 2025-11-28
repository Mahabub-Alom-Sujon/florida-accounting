import React from 'react';
import MasterLayout from "@/components/MasterLayout/MasterLayout";
import MeetBrandon from "@/components/PartnershipPage/MeetBrandon";
import BannerArea from "@/components/BannerArea/BannerArea";

const Page = () => {
    return (
        <>
            <MasterLayout>
                <BannerArea/>
                <MeetBrandon/>
            </MasterLayout>
        </>
    );
};

export default Page;