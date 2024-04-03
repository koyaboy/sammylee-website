import { useState, useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from 'split-type'
import TextPlugin from 'gsap/TextPlugin';

gsap.registerPlugin(useGSAP, TextPlugin)

const Header = ({ onScrollToHome, onScrollToAbout, onScrollToDiscography, onScrollToGallery, onScrollToContact }: any) => {
    const [isOpen, setIsOpen] = useState(false)

    const mobileNavRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const ourText = new SplitType('.sammylee-text', { types: 'chars' })
        const chars = ourText.chars

        const sammyleeDesc = ["A Musician", "A Producer", 'An Entertainer', "An Artiste"]

        gsap.from(chars,
            {
                opacity: 0,
                y: -20,
                stagger: 0.08,
                ease: "elastic.Out",
                delay: 0.35,
                duration: 1.25,
                onComplete: () => { wordsTimeline.play() }
            }
        )

        gsap.to('.cursor', {
            opacity: 0,
            ease: "power2.inOut",
            repeat: -1
        })

        let wordsTimeline = gsap.timeline({ repeat: -1 }).pause()

        sammyleeDesc.forEach(desc => {
            let descTl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })
            descTl.to('.desc', {
                duration: 1,
                text: desc
            })
            wordsTimeline.add(descTl)
        })

    }, {})


    useGSAP(() => {
        gsap.from(mobileNavRef.current, {
            x: 500,
            duration: 0.5
        });
    }, { dependencies: [isOpen] })


    const openNavigation = () => {
        setIsOpen(true)

    }

    function closeNavigation() {
        setIsOpen(false)
    }
    return (
        <>
            {isOpen && (
                // OVERLAY
                <div className='bg-black fixed min-h-screen top-0 left-0 bottom-0 right-0 opacity-50 z-2'></div>
            )}

            {isOpen && (
                <div ref={mobileNavRef} className='bg-[#333333] w-[60vw] min-h-screen fixed z-[999] right-0 px-3'>
                    <button onClick={() => closeNavigation()} className='absolute right-4 top-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="20px" height="20px"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(8.53333,8.53333)"><path d="M7,4c-0.25587,0 -0.51203,0.09747 -0.70703,0.29297l-2,2c-0.391,0.391 -0.391,1.02406 0,1.41406l7.29297,7.29297l-7.29297,7.29297c-0.391,0.391 -0.391,1.02406 0,1.41406l2,2c0.391,0.391 1.02406,0.391 1.41406,0l7.29297,-7.29297l7.29297,7.29297c0.39,0.391 1.02406,0.391 1.41406,0l2,-2c0.391,-0.391 0.391,-1.02406 0,-1.41406l-7.29297,-7.29297l7.29297,-7.29297c0.391,-0.39 0.391,-1.02406 0,-1.41406l-2,-2c-0.391,-0.391 -1.02406,-0.391 -1.41406,0l-7.29297,7.29297l-7.29297,-7.29297c-0.1955,-0.1955 -0.45116,-0.29297 -0.70703,-0.29297z"></path></g></g></svg>
                    </button>

                    <nav className='mt-12'>
                        <ul className='text-[#F0EAD6] flex flex-col gap-4 font-rubik text-[1rem] leading-[120%]'>
                            <li><button onClick={() => { onScrollToHome(); closeNavigation() }}>HOME</button></li>
                            <li><button onClick={() => { onScrollToAbout(); closeNavigation() }}>ABOUT</button></li>
                            <li><button onClick={() => { onScrollToDiscography(); closeNavigation() }}>DISCOGRAPHY</button></li>
                            <li><button onClick={() => { onScrollToGallery(); closeNavigation() }}>GALLERY</button></li>
                            <li><button onClick={() => { onScrollToContact(); closeNavigation() }}>CONTACT</button></li>
                        </ul>
                    </nav>
                </div>
            )}

            <header className="bg-[url('/assets/sl-mobile.jpg')] bg-cover bg-no-repeat h-[165px] px-9 py-2 sm:h-[250px] md:h-[350px] lg:h-[500px] lg:py-5 xl:h-[650px]">
                <div className="flex justify-between items-center">
                    <div className="w-[44px] h-[35px] -ml-[10px] md:w-[60px] md:h-[45px]">
                        <img src="assets/logo.png" alt="SL Logo"></img>
                    </div>

                    <button className='min-[900px]:hidden' onClick={() => openNavigation()}>
                        <svg className='md:w-[24px] md:h-[24px]' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <rect width="16" height="16" fill="url(#pattern0)" />
                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_51_22" transform="scale(0.00195312)" />
                                </pattern>
                                <image id="image0_51_22" width="512" height="512" xlinkHref="data:image/png;base64,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" />
                            </defs>
                        </svg>
                    </button>

                    <nav className='hidden min-[900px]:block'>
                        <ul className='text-[#F0EAD6] flex gap-3 font-rubik text-[1rem] leading-[120%] lg:gap-5'>
                            <li><button onClick={() => { onScrollToHome() }}>HOME</button></li>
                            <li><button onClick={() => { onScrollToAbout() }}>ABOUT</button></li>
                            <li><button onClick={() => { onScrollToDiscography() }}>DISCOGRAPHY</button></li>
                            <li><button onClick={() => { onScrollToGallery() }}>GALLERY</button></li>
                            <li><button onClick={() => { onScrollToContact() }}>CONTACT</button></li>
                        </ul>
                    </nav>
                </div>

                <div className="flex flex-col gap-2 mt-6 w-[50%] sm:mt-16 md:mt-[70px] lg:mt-[140px] xl:mt-[208px]" >
                    <hr className="w-[80px] sm:w-[110px] md:w-[125px]" />

                    <div className='flex flex-col sm:gap-1 md:gap-3'>
                        <h1 className="sammylee-text text-[1.5rem] font-rubik font-bold text-[#F0EAD6] leading-[90%] sm:text-[2rem] md:text-[3rem] lg:text-[4.25rem] xl:text-[5rem]">SAMMYLEE</h1>

                        <div className='flex items-center'>
                            <span className='font-rubik text-[0.675rem] text-[#CCCCCC] leading-[90%] sm:text-[0.875rem] md:text-[1.125rem] lg:text-[1.35rem] xl:text-[1.65rem]'>Hi, I'm</span>
                            <p className="desc ml-[6px] font-rubik font-bold text-[0.675rem] text-[#CCCCCC] leading-[90%] sm:text-[0.875rem] md:text-[1.125rem] lg:text-[1.35rem] xl:text-[1.65rem]"> </p>
                            <span className="cursor text-[#CCCCCC]">_</span>
                        </div>
                    </div>
                    <p className='sammyleeDesc hidden text-[#CCCCCC] font-inter leading-[120%] md:block md:text-[0.75rem] lg:text-[0.875rem] xl:text-[1rem]'>Aim for success, strive for greatness. Turn your next project
                        into a grammy award winning masterpiece</p>
                    <button
                        className="styled-button -mt-2 flex p-1 text-white rounded-md text-[0.625rem] font-semibold w-[100px] h-8 leading-[120%] sm:text-[0.875rem] sm:w-[130px] sm:mt-0 md:w-[125px] sm:h-9 lg:text-[1rem] lg:h-11 lg:w-[170px]"
                        onClick={() => { onScrollToContact() }}
                    >
                        <span className='bg-black flex justify-center items-center w-full h-full rounded-md tracking-wider'>CONTACT ME</span>
                        {/* bg-[#008080] */}
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header