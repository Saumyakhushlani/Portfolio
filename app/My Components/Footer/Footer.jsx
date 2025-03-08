"use client"
import React from 'react';
import SplitText from '../SplitText/SplitText';
import {IconBrandLinkedin} from '@tabler/icons-react';
import {IconBrandGithub} from '@tabler/icons-react';
import {IconMail} from '@tabler/icons-react';
import {IconBrandInstagram} from '@tabler/icons-react';


const Footer = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <div className="flex justify-between items-center h-max py-2 mx-[11vw] py-3">
            <SplitText
                text="© 2025 Saumya Khushlani. All rights reserved."
                className="text-[1.2rem] font-normal text-[#a9a9bd]"
                delay={20}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
            />
            <div className="flex flex-row justify-centre items-center gap-1 text-[#a9a9bd]">
                <IconBrandLinkedin size={30}/>
                <IconBrandGithub size={30}/>
                <IconMail size={30}/>
                <IconBrandInstagram size={30}/>
            </div>
        </div>
    );
};

export default Footer;
