"use client"
import React from 'react';
import SplitText from '../SplitText/SplitText';
import {IconBrandLinkedin} from '@tabler/icons-react';
import {IconBrandGithub} from '@tabler/icons-react';
import {IconMail} from '@tabler/icons-react';
import {IconBrandInstagram} from '@tabler/icons-react';
import Link from "next/link";


const Footer = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <div className="flex md:flex-row flex-col gap-2 md:gap-0 justify-between items-center h-max  md:mx-[11vw] py-3">
            <SplitText
                text="© 2025 Saumya Khushlani. All rights reserved."
                className="md:text-[1.2rem] text-m font-normal text-[#a9a9bd]"
                delay={20}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.1}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
            />
            <div className="flex flex-row justify-centre items-center gap-1 text-[#a9a9bd]">
                <Link href="https://www.linkedin.com/in/saumya-khushlani-333955312/"><IconBrandLinkedin size={30}/></Link>
                <Link href="https://github.com/Saumyakhushlani"><IconBrandGithub size={30}/></Link>
                <Link href="mailto:saumyakhushlani9@gmail.com"><IconMail size={30}/></Link>
                <Link href="https://www.instagram.com/saumya_khushlani/?__pwa=1"><IconBrandInstagram size={30}/></Link>
            </div>
        </div>
    );
};

export default Footer;
