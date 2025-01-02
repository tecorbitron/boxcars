import React from 'react'
import icon1 from '@/assets/wcu1.svg'
import icon2 from '@/assets/wcu2.svg'
import icon3 from '@/assets/wcu3.svg'
import icon4 from '@/assets/wcu4.svg'
import Image from 'next/image'

const WhyChoose = () => {
    return (
        <div className='py-20 text-custom-primary'>
            <h2 className='text-4xl font-bold px-4 mb-5'>Why Choose Us?</h2>

            <div className="flex flex-wrap">
                <div className="w-full md:w-1/4 p-4">
                    <Image src={icon1} height={50} width={50} alt='icon' className='object-cover' />
                    <h3 className='text-xl font-medium my-3'>Special Financing Offers</h3>
                    <p>Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
                <div className="w-full md:w-1/4 p-4">
                    <Image src={icon2} height={50} width={50} alt='icon' className='object-cover' />
                    <h3 className='text-xl font-medium my-3'>Trusted Car Dealership</h3>
                    <p>Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
                <div className="w-full md:w-1/4 p-4">
                    <Image src={icon3} height={50} width={50} alt='icon' className='object-cover' />
                    <h3 className='text-xl font-medium my-3'>Transparent Pricing</h3>
                    <p>Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
                <div className="w-full md:w-1/4 p-4">
                    <Image src={icon4} height={50} width={50} alt='icon' className='object-cover' />
                    <h3 className='text-xl font-medium my-3'>Expert Car Service</h3>
                    <p>Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
            </div>
        </div>
    )
}

export default WhyChoose