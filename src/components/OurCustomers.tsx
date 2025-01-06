import { Check, Star } from 'lucide-react'
import React from 'react'

const OurCustomers = () => {
    return (
        <div className='py-20 px-4 text-custom-primary'>
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 mb-10">
                <h1 className="text-3xl md:text-4xl font-bold">What our customers say</h1>
                <p>Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews</p>
            </div>

            <div className="flex justify-between text-custom-primary overflow-x-auto gap-5 hide-scrollbar">
                <div className="min-w-80 space-y-3 rounded-2xl p-3 md:p-6 bg-gray-50">
                    <p className="flex items-center gap-1 text-white">
                        <Star className='bg-[#00B67A] p-[2px]' size={20} /><Star className='bg-[#00B67A] p-[2px]' size={20} /><Star className='bg-[#00B67A] p-[2px]' size={20} /><Star className='bg-[#00B67A] p-[2px]' size={20} /><Star className='bg-[#00B67A] p-[2px]' size={20} />  <span className='flex items-center gap-1 mx-2 text-[#6C6C83]'><Check size={18} className='p-[2px] rounded-full bg-gray-400' /> verified</span> </p>
                    <h3 className='font-medium'>Salesprocess was simple and easy</h3>
                    <p className='text-sm'>Sales process was simple and easy. Maximillion was friendly and I did not feel...</p>
                    <p className='font-medium'>Ali Tufan</p>
                </div>
                <div className="min-w-80 space-y-3 rounded-2xl p-3 md:p-6 bg-gray-50">
                    <p className="flex items-center gap-1 text-white">
                        <Star className='bg-[#00B67A] p-[2px]' size={20} /><Star className='bg-[#00B67A] p-[2px]' size={20} /><Star className='bg-[#00B67A] p-[2px]' size={20} /><Star className='bg-gray-300 p-[2px]' size={20} /><Star className='bg-gray-300 p-[2px]' size={20} />  <span className='flex items-center gap-1 mx-2 text-[#6C6C83]'><Check size={18} className='p-[2px] rounded-full bg-gray-400' /> verified</span> </p>
                    <h3 className='font-medium'>Salesprocess was simple and easy</h3>
                    <p className='text-sm'>Sales process was simple and easy. Maximillion was friendly and I did not feel...</p>
                    <p className='font-medium'>Ali Tufan</p>
                </div>
                <div className="min-w-80 space-y-3 rounded-2xl p-3 md:p-6 bg-gray-50">
                    <p className="flex items-center gap-1 text-white">
                        <Star className='bg-[#00B67A] p-[2px]' size={20} /><Star className='bg-[#00B67A] p-[2px]' size={20} /><Star className='bg-[#00B67A] p-[2px]' size={20} /><Star className='bg-[#00B67A] p-[2px]' size={20} /><Star className='bg-[#00B67A] p-[2px]' size={20} />  <span className='flex items-center gap-1 mx-2 text-[#6C6C83]'><Check size={18} className='p-[2px] rounded-full bg-gray-400' /> verified</span> </p>
                    <h3 className='font-medium'>Salesprocess was simple and easy</h3>
                    <p className='text-sm'>Sales process was simple and easy. Maximillion was friendly and I did not feel...</p>
                    <p className='font-medium'>Ali Tufan</p>
                </div>
                <div className="min-w-80 space-y-3 rounded-2xl p-3 md:p-6 bg-gray-50">
                    <p className="flex items-center gap-1 text-white">
                        <Star className='bg-[#00B67A] p-[2px]' size={20} /><Star className='bg-[#00B67A] p-[2px]' size={20} /><Star className='bg-[#00B67A] p-[2px]' size={20} /><Star className='bg-[#00B67A] p-[2px]' size={20} /><Star className='bg-gray-300 p-[2px]' size={20} />  <span className='flex items-center gap-1 mx-2 text-[#6C6C83]'><Check size={18} className='p-[2px] rounded-full bg-gray-400' /> verified</span> </p>
                    <h3 className='font-medium'>Salesprocess was simple and easy</h3>
                    <p className='text-sm'>Sales process was simple and easy. Maximillion was friendly and I did not feel...</p>
                    <p className='font-medium'>Ali Tufan</p>
                </div>
                <div className="min-w-80 space-y-3 rounded-2xl p-3 md:p-6 bg-gray-50">
                    <p className="flex items-center gap-1 text-white">
                        <Star className='bg-[#00B67A] p-[2px]' size={20} /><Star className='bg-[#00B67A] p-[2px]' size={20} /><Star className='bg-[#00B67A] p-[2px]' size={20} /><Star className='bg-[#00B67A] p-[2px]' size={20} /><Star className='bg-gray-300 p-[2px]' size={20} />  <span className='flex items-center gap-1 mx-2 text-[#6C6C83]'><Check size={18} className='p-[2px] rounded-full bg-gray-400' /> verified</span> </p>
                    <h3 className='font-medium'>Salesprocess was simple and easy</h3>
                    <p className='text-sm'>Sales process was simple and easy. Maximillion was friendly and I did not feel...</p>
                    <p className='font-medium'>Ali Tufan</p>
                </div>
            </div>
        </div>
    )
}

export default OurCustomers