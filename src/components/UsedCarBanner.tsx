import React from 'react'
import bgImg from '@/assets/banner-image.png'
import playLogo from '@/assets/google-play-store.svg'
import cloudLogo from '@/assets/apple-logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const UsedCarBanner = () => {
    return (
        <div className='flex justify-between py-20 md:pb-0 px-4 bg-[#405FF2]'>
            <div className="md:w-2/3 max-w-xl text-white">
                <h2 className='text-4xl font-semibold tracking-wider mb-4'>Shop Used cars, Whether You&apos;re On The Lot Or On The Go</h2>
                <p className='text4xl '>Download our app to save cars and create alerts, scan window stickers on our lot for more details, and even call dibs on a car by holding it for up to 7 days.</p>
                <div className="flex gap-10">

                    <Link href="#">
                        <div className="flex gap-10 text-[#405FF2] mt-5">
                            <div className="flex gap-6 items-center text-sm bg-white rounded-xl px-6 py-3 w-fit">
                                <Image src={cloudLogo} alt='store logo' width={30} />
                                <span className='bg-[#405FF2]/70 w-[1px] h-full'></span>
                                <p>Download on the <span className='block font-medium text-base'>Apple Cloud</span></p>
                            </div>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className="flex gap-10 text-[#405FF2] mt-5">
                            <div className="flex gap-6 items-center text-sm bg-white rounded-xl px-6 py-3 w-fit">
                                <Image src={playLogo} alt='store logo' width={26} />
                                <span className='bg-[#405FF2]/70 w-[1px] h-full'></span>
                                <p>Get in on <span className='block font-medium text-base'>Google Play</span></p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="hidden md:block w-1/3">
                <Image src={bgImg} alt='banner image' height={300} width={300} className='' />
            </div>
        </div>
    )
}

export default UsedCarBanner