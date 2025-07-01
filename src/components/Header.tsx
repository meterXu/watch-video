import React from 'react';
import Button from "./Button.tsx";

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-4 text-white">
            <h1 className="text-2xl font-bold">共享视频</h1>
            <nav className="flex items-center justify-center gap-3">
                <a href="#">教程</a>
                <a href="#">客户端</a>
                <Button>
                    登录
                </Button>
            </nav>
        </header>
    );
};

export default Header;
