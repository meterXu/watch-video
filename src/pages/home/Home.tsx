import React from 'react';
import Header from '@/components/Header';
import BannerContainer from '@/components/BannerContainer.tsx';
import Content from "./module/Content.tsx";
import BottomArc from "@/components/bottom-arc/BottomArc.tsx";

const Home: React.FC = () => {
    return (
        <div className="bg-gray-900 flex flex-col items-center justify-start">
            <BannerContainer>
                <div className="h-full flex flex-col items-center justify-start">
                    <div className="w-7xl flex-1 relative">
                        <Header></Header>
                        <Content className="top-0 absolute w-full h-full"></Content>
                    </div>
                    <BottomArc/>
                </div>
            </BannerContainer>
            {/*<MovieRow/>*/}
            {/*<Introduce/>*/}
            {/*<Footer />*/}
        </div>
    );
};

export default Home;
