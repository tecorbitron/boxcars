import React from 'react'
import image1 from '@/assets/team1.jpg'
import image2 from '@/assets/team2.jpg'
import image3 from '@/assets/team3-247x300.jpg'
import image4 from '@/assets/team4.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { MoveUpRight } from 'lucide-react'


const OurTeam = () => {
    return (
        <div className='py-20 text-custom-primary'>
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 mb-10 px-4">
                <h1 className="text-3xl md:text-4xl font-bold">Our Team</h1>
                <Link href="#" className="flex items-center gap-1 text-custom-primary hover:underline">
                    View All <MoveUpRight size={16} />
                </Link>
            </div>

            <div className="flex justify-around flex-wrap text-custom-primary">
                <div className="w-1/2 md:w-1/4 rounded-2xl p-2 md:p-4">
                    <Image src={image1} alt='car image' height={400} width={400} className='w-full m-auto object-cover' />
                    <p className='mt-5 text-xl font-medium'>Courtney Henry</p>
                    <p className='text-sm'>Development Manager</p>
                </div>
                <div className="w-1/2 md:w-1/4 rounded-2xl p-2 md:p-4">
                    <Image src={image2} alt='car image' height={400} width={400} className='w-full m-auto object-cover' />
                    <p className='mt-5 text-xl font-medium'>Jerome Bell</p>
                    <p className='text-sm'>Software Tester</p>
                </div>
                <div className="w-1/2 md:w-1/4 rounded-2xl p-2 md:p-4">
                    <Image src={image3} alt='car image' height={400} width={400} className='w-full m-auto object-cover' />
                    <p className='mt-5 text-xl font-medium'>Arlene McCoy</p>
                    <p className='text-sm'>Software Developer</p>
                </div>
                <div className="w-1/2 md:w-1/4 rounded-2xl p-2 md:p-4">
                    <Image src={image4} alt='car image' height={400} width={400} className='w-full m-auto object-cover' />
                    <p className='mt-5 text-xl font-medium'>Jenny Wilson</p>
                    <p className='text-sm'>UI/UX Designer</p>
                </div>
            </div>
        </div>
    )
}

export default OurTeam