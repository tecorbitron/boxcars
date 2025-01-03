'use client';
import React, { useState } from "react";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";


type Tabs = {
    [key: string]: string[];
};

const ShopBoxCar = () => {
    const [activeTab, setActiveTab] = useState<string>("newCarsForSale");

    const tabs: Tabs = {
        newCarsForSale: [
            "Ford Cars",
            "Honda Cars",
            "Hyundai Cars",
            "Infiniti Cars",
            "Jaguar Cars",
            "Jeep Cars",
            "Chrysler Cars",
            "Citroen Cars",
            "Cupra Cars",
            "Dacia Cars",
            "DS Cars",
            "Fiat Cars",
            "Land Rover Cars",
            "Lexus Cars",
            "Mercedes-Benz Cars",
            "Mazda Cars",
            "MG Cars",
            "Kia Cars",
            "Abarth Cars",
            "Romeo Cars",
            "Audi Cars",
            "Bentley Cars",
            "BMW Cars",
            "Chevrolet Cars",
            "Mini Cars",
            "Mitsubishi Cars",
            "Nissan Cars",
            "Peugeot Cars",
            "Porsche Cars",
            "Renault Cars"
        ],
        usedCarsForSale: [
            "Abarth Cars",
            "Romeo Cars",
            "Audi Cars",
            "Bentley Cars",
            "BMW Cars",
            "Chevrolet Cars",
            "Ford Cars",
            "Honda Cars",
            "Hyundai Cars",
            "Infiniti Cars",
            "Jaguar Cars",
            "Jeep Cars",
            "Chrysler Cars",
            "Citroen Cars",
            "Cupra Cars",
            "Dacia Cars",
            "DS Cars",
            "Fiat Cars",
            "Mini Cars",
            "Mitsubishi Cars",
            "Nissan Cars",
            "Peugeot Cars",
            "Porsche Cars",
            "Renault Cars",
            "Land Rover Cars",
            "Lexus Cars",
            "Mercedes-Benz Cars",
            "Mazda Cars",
            "MG Cars",
            "Kia Cars"
        ],
        browseByTypes: [
            "Sedan Abarth Cars",
            "Sedan Romeo Cars",
            "Sedan Audi Cars",
            "Sedan Bentley Cars",
            "Sedan BMW Cars",
            "Sedan Chevrolet Cars",
            "SUV Ford Cars",
            "SUV Honda Cars",
            "SUV Hyundai Cars",
            "SUV Infiniti Cars",
            "SUV Jaguar Cars",
            "SUV Jeep Cars",
            "Convertible Chrysler Cars",
            "Convertible Citroen Cars",
            "Convertible Cupra Cars",
            "Convertible Dacia Cars",
            "Convertible DS Cars",
            "Convertible Fiat Cars",
            "Hatchback Mini Cars",
            "Hatchback Mitsubishi Cars",
            "Hatchback Nissan Cars",
            "Hatchback Peugeot Cars",
            "Hatchback Porsche Cars",
            "Hatchback Renault Cars",
            "Truck Land Rover Cars",
            "Truck Lexus Cars",
            "Truck Mercedes-Benz Cars",
            "Truck Mazda Cars",
            "Truck MG Cars",
            "Truck Kia Cars"
        ],
        browseByBrands: [
            "Chrysler Cars",
            "Citroen Cars",
            "Cupra Cars",
            "Dacia Cars",
            "DS Cars",
            "Fiat Cars",
            "Ford Cars",
            "Honda Cars",
            "Hyundai Cars",
            "Infiniti Cars",
            "Jaguar Cars",
            "Jeep Cars",
            "Abarth Cars",
            "Romeo Cars",
            "Audi Cars",
            "Bentley Cars",
            "BMW Cars",
            "Chevrolet Cars",
            "Land Rover Cars",
            "Lexus Cars",
            "Mercedes-Benz Cars",
            "Mazda Cars",
            "MG Cars",
            "Kia Cars",
            "Mini Cars",
            "Mitsubishi Cars",
            "Nissan Cars",
            "Peugeot Cars",
            "Porsche Cars",
            "Renault Cars"
        ],
    };

    return (
        <div className="mx-auto px-4 py-20 text-custom-primary">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 mb-10">
                <h1 className="text-3xl md:text-4xl font-bold">Shop BoxCar Your Way</h1>
                <Link href="#" className="flex items-center gap-1 text-custom-primary hover:underline">
                    View All <MoveUpRight size={16} />
                </Link>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-6 my-6 border-b">
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
            <div className="flex flex-wrap gap-y-4">
                {tabs[activeTab].map((car: string, index) => (
                    <p key={index} className="w-1/3 md:w-1/5">{car}</p>
                ))}
            </div>
        </div>
    );
};

export default ShopBoxCar;
