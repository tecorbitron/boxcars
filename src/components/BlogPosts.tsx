import React from 'react'
import image3 from '@/assets/car-type3.jpg'
import image4 from '@/assets/car-type4.jpg'
import image5 from '@/assets/car-type5.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { MoveUpRight } from 'lucide-react'

const BlogPosts = () => {
    return (
        <div className='py-20 text-custom-primary'>
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 mb-10 px-4">
                <h1 className="text-3xl md:text-4xl font-bold">Latest Blog Posts</h1>
                <Link href="#" className="flex items-center gap-1 text-custom-primary hover:underline">
                    View All  <MoveUpRight size={16} />
                </Link>
            </div>
            <div className="flex overflow-x-auto hide-scrollbar">
                <div className="relative min-w-full md:min-w-80 md:w-1/3 p-4">
                    <Image src={image3} alt='car image' height={400} width={400} className='w-full' />
                    <p className='absolute top-10 left-10 px-6 py-2 font-medium bg-white rounded-full'>Sound</p>
                    <div className="">
                        <p className='my-4'>Admin, November 2023</p>
                        <p className='text-xl font-medium'>2024 BMW ALPINA XB7 with exclusive details, extraordinary</p>
                    </div>
                </div>
                <div className="relative min-w-full md:min-w-80 md:w-1/3 p-4">
                    <Image src={image4} alt='car image' height={400} width={400} className='w-full' />
                    <p className='absolute top-10 left-10 px-6 py-2 font-medium bg-white rounded-full'>Accessories</p>
                    <div className="">
                        <p className='my-4'>Admin, November 2023</p>
                        <p className='text-xl font-medium'>2024 BMW ALPINA XB7 with exclusive details, extraordinary</p>
                    </div>
                </div>
                <div className="relative min-w-full md:min-w-80 md:w-1/3 p-4">
                    <Image src={image5} alt='car image' height={400} width={400} className='w-full' />
                    <p className='absolute top-10 left-10 px-6 py-2 font-medium bg-white rounded-full'>Exterior</p>
                    <div className="">
                        <p className='my-4'>Admin, November 2023</p>
                        <p className='text-xl font-medium'>2024 BMW ALPINA XB7 with exclusive details, extraordinary</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPosts