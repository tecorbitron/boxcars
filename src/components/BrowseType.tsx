import React from 'react'
import image1 from '@/assets/car-type1.jpg'
import image2 from '@/assets/car-type2.jpg'
import image3 from '@/assets/car-type3.jpg'
import image4 from '@/assets/car-type4.jpg'
import image5 from '@/assets/car-type5.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { MoveUpRight } from 'lucide-react'

const BrowseType = () => {
    return (
        <div className='py-20 text-custom-primary'>
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 mb-10 px-4">
                <h1 className="text-3xl md:text-4xl font-bold">Browse by Type</h1>
                <Link href="#" className="flex items-center gap-1 text-custom-primary hover:underline">
                    View All  <MoveUpRight size={16} />
                </Link>
            </div>
            <div className="flex flex-wrap">
                <div className="relative w-full md:w-1/2 p-4">
                    <Image src={image1} alt='car image' height={400} width={400} className='w-full' />
                    <p className='absolute bottom-10 left-10 px-6 py-2 font-medium bg-white rounded-full'>SUV</p>
                </div>
                <div className="relative w-full md:w-1/2 p-4">
                    <Image src={image2} alt='car image' height={400} width={400} className='w-full' />
                    <p className='absolute bottom-10 left-10 px-6 py-2 font-medium bg-white rounded-full'>Sedan</p>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="relative w-full md:w-1/3 p-4">
                    <Image src={image3} alt='car image' height={400} width={400} className='w-full' />
                    <p className='absolute bottom-10 left-10 px-6 py-2 font-medium bg-white rounded-full'>Hatchback</p>
                </div>
                <div className="relative w-full md:w-1/3 p-4">
                    <Image src={image4} alt='car image' height={400} width={400} className='w-full' />
                    <p className='absolute bottom-10 left-10 px-6 py-2 font-medium bg-white rounded-full'>Hybrid</p>
                </div>
                <div className="relative w-full md:w-1/3 p-4">
                    <Image src={image5} alt='car image' height={400} width={400} className='w-full' />
                    <p className='absolute bottom-10 left-10 px-6 py-2 font-medium bg-white rounded-full'>Coupe</p>
                </div>
            </div>
        </div>
    )
}

export default BrowseType