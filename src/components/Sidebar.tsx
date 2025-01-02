import React from "react";
import Link from "next/link"; // Import Link for navigation
import logo from '@/assets/logo-white.svg';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, ChevronRight, MenuIcon } from "lucide-react";
import Image from "next/image";

const CustomSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <span className="flex items-center gap-1"><MenuIcon className="cursor-pointer" /> Menu</span>
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-custom-primary text-white border-none">
        <SheetHeader>
          <SheetTitle>
            <Image src={logo} alt='logo' width={110} height={50} />
          </SheetTitle>
        </SheetHeader>
        <div className="py-12">
          <ul className="space-y-7">
            {/* Home */}
            <li>
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-lg font-medium">
                  Home <ChevronRight />
                </summary>
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <Link href="/home1" className="hover:underline">Home 1</Link>
                  </li>
                  <li>
                    <Link href="/home2" className="hover:underline">Home 2</Link>
                  </li>
                  <li>
                    <Link href="/home3" className="hover:underline">Home 3</Link>
                  </li>
                </ul>
              </details>
            </li>

            {/* Listings */}
            <li>
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-lg font-medium">
                  Listings  <ChevronRight />
                </summary>
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer text-lg font-medium">
                        Inner list1  <ChevronDown />
                      </summary>
                      <ul className="pl-4 mt-2 space-y-2">
                        <li>
                          <Link href="/listings/news" className="hover:underline">Latest News</Link>
                        </li>
                        <li>
                          <Link href="/listings/trends" className="hover:underline">Industry Trends</Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer text-lg font-medium">
                        Inner list2  <ChevronDown />
                      </summary>
                      <ul className="pl-4 mt-2 space-y-2">
                        <li>
                          <Link href="/listings/news2" className="hover:underline">Latest News</Link>
                        </li>
                        <li>
                          <Link href="/listings/trends2" className="hover:underline">Industry Trends</Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>

            {/* Blog */}
            <li>
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-lg font-medium">
                  Blog  <ChevronRight />
                </summary>
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <Link href="/blog/latest-news" className="hover:underline">Latest News</Link>
                  </li>
                  <li>
                    <Link href="/blog/industry-trends" className="hover:underline">Industry Trends</Link>
                  </li>
                  <li>
                    <Link href="/blog/guides" className="hover:underline">Buying Guides</Link>
                  </li>
                  <li>
                    <Link href="/blog/tips" className="hover:underline">Tips & Tricks</Link>
                  </li>
                </ul>
              </details>
            </li>

            {/* Pages */}
            <li>
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-lg font-medium">
                  Pages  <ChevronRight />
                </summary>
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <Link href="/pages/about" className="hover:underline">About Us</Link>
                  </li>
                  <li>
                    <Link href="/pages/services" className="hover:underline">Services</Link>
                  </li>
                  <li>
                    <Link href="/pages/faqs" className="hover:underline">FAQs</Link>
                  </li>
                  <li>
                    <Link href="/pages/contact" className="hover:underline">Contact Page</Link>
                  </li>
                </ul>
              </details>
            </li>

            {/* About */}
            <li>
              <Link href="/about" className="text-lg font-medium hover:underline">
                About
              </Link>
            </li>

            {/* Contact */}
            <li>
              <Link href="/contact" className="text-lg font-medium hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CustomSidebar;
