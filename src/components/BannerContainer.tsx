import React, {type ReactNode} from 'react';
import bannerImage from '../assets/banner-bg.webp'
interface BannerProps {
    children: ReactNode
}

const BannerContainer: React.FC<BannerProps> = ({children}) => {
    return (
        <div className="w-full h-[100vh] relative bg-cover bg-center"
             style={{ backgroundImage: `url('${bannerImage}')` }}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="relative h-full mx-auto">{children}</div>
        </div>
    );
};

export default BannerContainer;
