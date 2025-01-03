import React from 'react'
import image1 from '@/assets/audi-logo.jpg'
import image2 from '@/assets/bmw-logo.jpg'
import image3 from '@/assets/ford-logo.jpg'
import image4 from '@/assets/mercedes-logo.jpg'
import image5 from '@/assets/peugeot-logo.jpg'
import image6 from '@/assets/volkswagen-logo.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { MoveUpRight } from 'lucide-react'

const ExploreBrands = () => {
    return (
        <div className='py-20 px-4 text-custom-primary'>
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 mb-10">
                <h1 className="text-3xl md:text-4xl font-bold">Explore Our Premium Brands</h1>
                <Link href="#" className="flex items-center gap-1 text-custom-primary hover:underline">
                    Show All Brands <MoveUpRight size={16} />
                </Link>
            </div>

            <div className="flex justify-between text-center font-medium text-lg text-custom-primary overflow-x-auto gap-5 hide-scrollbar">
                <div className="min-w-40 md:min-w-48 border rounded-2xl p-3 md:p-6 hover:border-custom-blue transition-all">
                    <Image src={image1} alt='car image' height={100} width={100} className='m-auto object-cover' />
                    <p>Audi</p>
                </div>
                <div className="min-w-40 md:min-w-48 border rounded-2xl p-3 md:p-6 hover:border-custom-blue transition-all">
                    <Image src={image2} alt='car image' height={100} width={100} className='m-auto object-cover' />
                    <p>BMW</p>
                </div>
                <div className="min-w-40 md:min-w-48 border rounded-2xl p-3 md:p-6 hover:border-custom-blue transition-all">
                    <Image src={image3} alt='car image' height={100} width={100} className='m-auto object-cover' />
                    <p>Ford</p>
                </div>
                <div className="min-w-40 md:min-w-48 border rounded-2xl p-3 md:p-6 hover:border-custom-blue transition-all">
                    <Image src={image4} alt='car image' height={100} width={100} className='m-auto object-cover' />
                    <p>Mercedes Benz</p>
                </div>
                <div className="min-w-40 md:min-w-48 border rounded-2xl p-3 md:p-6 hover:border-custom-blue transition-all">
                    <Image src={image5} alt='car image' height={100} width={100} className='m-auto object-cover' />
                    <p>Peugeot</p>
                </div>
                <div className="min-w-40 md:min-w-48 border rounded-2xl p-3 md:p-6 hover:border-custom-blue transition-all">
                    <Image src={image6} alt='car image' height={100} width={100} className='m-auto object-cover' />
                    <p>Volkswagen</p>
                </div>
            </div>
        </div>
    )
}

export default ExploreBrands