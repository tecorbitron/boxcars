import React from 'react'
import bgImage from '@/assets/loan-calculator-bg.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const LoanCalculator = () => {
    return (
        <div className='flex justify-between py-20'>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-4 bg-gray-100 py-5">
                <h1 className="text-3xl md:text-4xl font-bold mb-5">Auto Loan Calculator</h1>
                <p className='max-w-xl'>Use this car payment calculator to estimate monthly payments on your next new or used auto loan.</p>
                <div className="flex gap-10 my-4 max-w-xl">
                    <div className="relative w-full">
                        <input type="number" placeholder='10000' defaultValue={10000} className='p-4 pt-8 rounded-xl border w-full ' />
                        <span className='absolute top-2 left-4 text-gray-400 text-sm '>Price ($)</span>
                    </div>
                    <div className="relative w-full">
                        <input type="number" placeholder='10' defaultValue={10} className='p-4 pt-8 rounded-xl border w-full ' />
                        <span className='absolute top-2 left-4 text-gray-400 text-sm '>Interest Rate</span>
                    </div>
                </div>
                <div className="flex gap-10 my-4 max-w-xl">
                    <div className="relative w-full">
                        <input type="number" placeholder='3' defaultValue={3} className='p-4 pt-8 rounded-xl border w-full ' />
                        <span className='absolute top-2 left-4 text-gray-400 text-sm '>Loan Term (year)</span>
                    </div>
                    <div className="relative w-full">
                        <input type="number" placeholder='5000' defaultValue={5000} className='p-4 pt-8 rounded-xl border w-full ' />
                        <span className='absolute top-2 left-4 text-gray-400 text-sm '>Down Payment</span>
                    </div>
                </div>
                <Link href=''>
                    <p className="text-white bg-blue-900 px-6 py-4 rounded-xl md:flex items-center justify-center max-w-xl gap-2 mt-5">Calculate <ArrowUpRight size={18} /></p>
                </Link>
            </div>
            <div className="hidden md:block w-1/2">
                <Image src={bgImage} alt='bg-image' height={400} width={400} className='object-cover w-full h-[600px]' />
            </div>
        </div>
    )
}

export default LoanCalculator