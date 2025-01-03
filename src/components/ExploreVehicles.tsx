'use client';
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import img from '@/assets/hero/slider1.jpg';
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

type Car = {
    id: number;
    title: string;
    desc: string;
    price: string;
    mileage: string;
    fuel: string;
    transmission: string;
    badge: string;
    badgeColor: string;
    img: StaticImageData;
};

type Tabs = {
    [key: string]: Car[];
};

const ExploreVehicles = () => {
    const [activeTab, setActiveTab] = useState<string>("inStock");

    const tabs: Tabs = {
        inStock: [
            { id: 1, desc: "3.5 D5 PowerPulse Momentum 5dr AWD Geartronic Estate", title: "Ford Transit – 2021", price: "$22,000", mileage: "2500 Miles", fuel: "Diesel", transmission: "Manual", badge: "Great Price", badgeColor: "green", img: img },
            { id: 2, desc: "3.5 D5 PowerPulse Momentum 5dr AWD Geartronic Estate", title: "New GLC – 2023", price: "$95,000", mileage: "50 Miles", fuel: "Petrol", transmission: "Automatic", badge: "Low Mileage", badgeColor: "blue", img: img },
            { id: 3, desc: "3.5 D5 PowerPulse Momentum 5dr AWD Geartronic Estate", title: "Ford Transit – 2021", price: "$22,000", mileage: "2500 Miles", fuel: "Diesel", transmission: "Manual", badge: "Great Price", badgeColor: "green", img: img },
            { id: 4, desc: "3.5 D5 PowerPulse Momentum 5dr AWD Geartronic Estate", title: "New GLC – 2023", price: "$95,000", mileage: "50 Miles", fuel: "Petrol", transmission: "Automatic", badge: "Low Mileage", badgeColor: "blue", img: img },
        ],
        newCars: [
            { id: 1, desc: "3.5 D5 PowerPulse Momentum 5dr AWD Geartronic Estate", title: "Tesla Model 3", price: "$45,000", mileage: "0 Miles", fuel: "Electric", transmission: "Automatic", badge: "New Arrival", badgeColor: "purple", img: img },
            { id: 2, desc: "3.5 D5 PowerPulse Momentum 5dr AWD Geartronic Estate", title: "Tesla Model 3", price: "$45,000", mileage: "0 Miles", fuel: "Electric", transmission: "Automatic", badge: "New Arrival", badgeColor: "purple", img: img },
            { id: 3, desc: "3.5 D5 PowerPulse Momentum 5dr AWD Geartronic Estate", title: "Tesla Model 3", price: "$45,000", mileage: "0 Miles", fuel: "Electric", transmission: "Automatic", badge: "New Arrival", badgeColor: "purple", img: img },
            { id: 4, desc: "3.5 D5 PowerPulse Momentum 5dr AWD Geartronic Estate", title: "Tesla Model 3", price: "$45,000", mileage: "0 Miles", fuel: "Electric", transmission: "Automatic", badge: "New Arrival", badgeColor: "purple", img: img },
        ],
        usedCars: [
            { id: 1, desc: "3.5 D5 PowerPulse Momentum 5dr AWD Geartronic Estate", title: "Honda Civic – 2018", price: "$18,000", mileage: "30,000 Miles", fuel: "Petrol", transmission: "Manual", badge: "Best Value", badgeColor: "orange", img: img },
            { id: 2, desc: "3.5 D5 PowerPulse Momentum 5dr AWD Geartronic Estate", title: "Honda Civic – 2018", price: "$18,000", mileage: "30,000 Miles", fuel: "Petrol", transmission: "Manual", badge: "Best Value", badgeColor: "orange", img: img },
            { id: 3, desc: "3.5 D5 PowerPulse Momentum 5dr AWD Geartronic Estate", title: "Honda Civic – 2018", price: "$18,000", mileage: "30,000 Miles", fuel: "Petrol", transmission: "Manual", badge: "Best Value", badgeColor: "orange", img: img },
            { id: 4, desc: "3.5 D5 PowerPulse Momentum 5dr AWD Geartronic Estate", title: "Honda Civic – 2018", price: "$18,000", mileage: "30,000 Miles", fuel: "Petrol", transmission: "Manual", badge: "Best Value", badgeColor: "orange", img: img },
        ],
    };

    return (
        <div className="mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 mb-10">
                <h1 className="text-3xl md:text-4xl font-bold">Explore All Vehicles</h1>
                <Link href="#" className="flex items-center gap-1 text-custom-primary hover:underline">
                    View All <MoveUpRight size={16} />
                </Link>
            </div>

            {/* Tabs */}
            <div className="flex space-x-4 my-6 border-b">
                {Object.keys(tabs).map((key) => (
                    <button
                        key={key}
                        className={` text-lg ${activeTab === key ? "border-b-2 border-custom-blue" : "border-transparent border-b-2"}`}
                        onClick={() => setActiveTab(key)}
                    >
                        {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                    </button>
                ))}
            </div>

            {/* Card Carousel */}
            <div className="flex w-full gap-10 overflow-x-auto mt-14 scrollbar-hide text-white">
                {tabs[activeTab].map((car: Car) => (
                    <div key={car.id} className="flex flex-wrap bg-custom-primary/80 min-w-[100%] lg:min-w-[48%] md:h-72 rounded-lg">
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 relative">
                            <div
                                style={{ backgroundColor: car.badgeColor }}
                                className="absolute top-4 left-4 text-xs font-bold py-1 px-2 rounded text-white"
                            >
                                {car.badge}
                            </div>
                            <Image
                                src={car.img}
                                width={400}
                                height={400}
                                alt="car image"
                                className="w-full h-full object-cover object-center rounded-t-lg md:rounded-l-lg"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-1/2 p-4 flex flex-col justify-around">
                            <div>
                                <h2 className="text-xl font-bold mb-2">{car.title}</h2>
                                <p className="truncate">{car.desc}</p>
                            </div>
                            <div className="mt-2 space-y-2">
                                <p>{car.mileage}</p>
                                <p>{car.fuel}</p>
                                <p>{car.transmission}</p>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-lg font-bold mt-4">{car.price}</p>
                                <Link href="#" className="flex items-center gap-1 hover:underline mt-2">
                                    View Details <MoveUpRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExploreVehicles;
