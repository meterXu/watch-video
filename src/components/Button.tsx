import React,{type ReactNode} from "react";
import classNames from 'classnames';

interface ButtonProps {
    children:ReactNode,
    className?: string
}
const Button: React.FC<ButtonProps> = ({children,className}) => {
    const buttonClass = classNames(
        `bg-indigo-600 px-4 py-1 text-[14px] 
        rounded-sm inline-flex items-center 
        justify-center text-white border border-1 border-indigo-500
        cursor-pointer
        hover:bg-indigo-700
        `,
        className)

    return (
        <button className={buttonClass}>
            {children}
        </button>
    )
}
export default Button;
