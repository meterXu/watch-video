import React, {type ReactNode} from 'react';

interface BannerProps {
    children: ReactNode
}

const BannerContainer: React.FC<BannerProps> = ({children}) => {
    return (
        <div className="w-full h-[100vh] relative bg-cover bg-center"
             style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/HK-zh-20250616-TRIFECTA-perspective_db1a3378-bd09-4c0f-a657-b5d635e2d65c_large.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="relative h-full mx-auto">{children}</div>
        </div>
    );
};

export default BannerContainer;
