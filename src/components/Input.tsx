import React,{type ReactNode} from "react";
import classNames from 'classnames'

interface InputProps {
    placeholder?: string,
    className?: string
    children?: ReactNode
}

const Input:React.FC<InputProps>=({placeholder,className,children})=>{
    const InputClass = classNames('appearance-none border-2 rounded-sm border-gray-700 focus:border-indigo-600',className)
    return(
        <input type="text" placeholder={placeholder} className={InputClass}></input>
    )
}

export default Input;
