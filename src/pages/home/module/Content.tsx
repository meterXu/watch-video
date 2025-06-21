import React from "react";
import Button from "@/components/Button.tsx";
import Input from "@/components/input/Input.tsx";
import classNames from "classnames";

interface Props {
    className?: string;
}

const Content: React.FC<Props> = ({className}) => {
    const styles = classNames(
        'flex-1 h-full flex flex-col items-center justify-center text-white',
        className
    )
    return(
        <div className={styles}>
            <h1 className="text-[64px] font-bold text-center">看不完的电影与电视节目,<br/>还有更多精彩内容</h1>
            <p className="mt-6 text-xl font-bold">每月¥9.9起，您可以随时取消。</p>
            <p className="mt-6">准备开始观赏了吗？请输入您的电子邮件地址，建立或重新启用会员资格。</p>
            <div className="flex w-150 items-center justify-center gap-2 mt-4">
                <Input placeholder="电子邮件地址" className="flex-1 h-14"></Input>
                <Button className="h-full w-45 border-2 text-[24px] font-bold">开始使用</Button>
            </div>
        </div>
    )
}
export default Content;
