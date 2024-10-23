"use client"
import { useState } from 'react';
import Image from "next/image";

import DropdownIcon from '@/assets/images/dropdown.svg';
import './style.css';

interface Props {
    className: string;
    options: string[]
}

export default function SelectOption({className, options}: Props) {
    const [value, setValue] = useState('');
    const [dropdownClicked, setDropdownClicked] = useState(false);

    const onChangeValue = (val: string) => {
        setValue(val)
    }

    return(
        <div className='w-full flex justify-center relative'>
            <div className={className + ' flex items-center'}>
                <input 
                    type='text' 
                    value={value}
                    onChange={(e) => onChangeValue(e.target.value)}
                    className='bg-transparent flex-1 focus:outline-none focus:border-none' 
                    onFocus={() =>  setDropdownClicked(true)}
                />
                <div onClick={() => setDropdownClicked(!dropdownClicked)}>
                    <Image
                        src={DropdownIcon}
                        alt="dropdown logo"
                        width={20}
                        height={10}
                        className={dropdownClicked ? 'rotate-180 transform transition-transform duration-300 cursor-pointer' : 'transform transition-transform duration-300 cursor-pointer'}
                    />
                </div>
            </div>
           {dropdownClicked && <div className="absolute top-20 left-0 w-full h-64 shadow-md z-10">
                <div className="dropdown w-full lg:w-3/5 max-h-64 mx-auto overflow-y-auto py-4 px-8 custom-scrollbar">
                    {options.map((opt: string, i) => (
                        <p onClick={() => {
                            setValue(opt)
                            setDropdownClicked(false)
                        }} className='z-50 mt-4 cursor-pointer' key={i}>{opt}</p>
                    ))}
                </div>
            </div>}
        </div>
    )
}