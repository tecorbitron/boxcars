"use client";
import React, { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Carousel, CarouselItem } from "./ui/carousel";
import sliderImg3 from '@/assets/hero/slider1.jpg'
import sliderImg2 from '@/assets/hero/slider2.jpg'
import sliderImg1 from '@/assets/hero/slider3.jpg'
import sliderImg4 from '@/assets/hero/slider4.jpg'
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const HeroSlider = () => {
    const data = [
        {
            name: "Ranger Black - 2021",
            price: "165,000",
            fuelType: "Petrol",
            Mileage: "250 Miles",
            transmission: "Manual",
            year: "2021",
            img: sliderImg1,
        },
        {
            name: "Mercedes-Benz, C Class",
            price: "35,000",
            fuelType: "Petrol",
            Mileage: "100 Miles",
            transmission: "Automatic",
            year: "2003",
            img: sliderImg2,
        },
        {
            name: "Ford Explorer 2023",
            price: "35,000",
            fuelType: "Diesel",
            Mileage: "10 Miles",
            transmission: "CVT",
            year: "2023",
            img: sliderImg3,
        },
        {
            name: "Audi A4, 4.5 New",   
            price: "250,000",
            fuelType: "Petrol",
            Mileage: "60 Miles",
            transmission: "Automatic",
            year: "2023",
            img: sliderImg4,
        },
    ];

    // Embla carousel setup
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center", // Align center for better multi-item scrolling
        skipSnaps: false,
    }, []); // Auto-scroll plugin

    const [selectedIndex, setSelectedIndex] = useState(0);

    // Handle slide selection change
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    // Listen for embla events
    React.useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <div className="w-full">
            {/* Carousel */}
            <Carousel className="relative w-full">
                <div className="overflow-hidden w-full" ref={emblaRef}>
                    <div className="flex w-full">
                        {data.map((slide, index) => (
                            <CarouselItem key={index} className="relative w-full h-full">
                                {/* slider image  */}
                                <Image src={slide.img} alt="slider images" height={700} width={1400}
                                    className="object-cover w-full min-h-[60vh] md:h-[130vh]" />

                                <div className="absolute inset-0 flex flex-col justify-center lg:flex-row lg:justify-between lg:items-end gap-8 p-4">
                                    {/* left content  */}
                                    <div className="text-white md:tracking-widest">
                                        <p className="text-2xl md:text-4xl font-semibold mb-2 md:mb-6">${slide.price}</p>
                                        <h3 className="text-2xl md:text-6xl font-medium lg:mb-40">{slide.name}</h3>
                                    </div>
                                    {/* right content  */}
                                    <div className="flex lg:flex-col bg-white/15 rounded-lg w-fit lg:w-60 gap-2 md:gap-8 p-3 md:p-10 text-white">
                                        <p>Fuel Type <br /> {slide.price}</p>
                                        <p>Mileage <br />{slide.Mileage}</p>
                                        <p>Transmission <br />{slide.transmission}</p>
                                        <p>Year <br />{slide.year}</p>
                                        <Link href=''>
                                            <p className="hidden text-black bg-white hover:bg-blue-900 hover:text-white px-6 py-4 rounded-xl md:flex items-center gap-2">Learn more <ArrowUpRight size={18} /></p>
                                        </Link>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </div>
                </div>
                {/* Indicators */}
                <div className="absolute left-4 bottom-4 flex justify-center items-center gap-2 mt-20">
                    {data.map((_, index) => (
                        <button
                            aria-hidden="true"
                            key={index}
                            className={`w-4 h-1 rounded-full ${selectedIndex === index ? "bg-blue-800 scale-150" : "bg-gray-300"
                                } transition-all duration-300`}
                            onClick={() => emblaApi?.scrollTo(index)}
                            style={{
                                margin: "0 4px", // Adds spacing to mimic a dashed effect
                                transition: "background-color 0.3s, transform 0.3s", // Smooth animation
                            }}
                        ></button>
                    ))}
                </div>
            </Carousel>

        </div>
    );
};

export default HeroSlider;
