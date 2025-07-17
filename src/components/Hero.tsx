"use client";

import Image from "next/image";
import { FaHandHoldingUsd, FaLeaf, FaHeart } from "react-icons/fa";
import Button from "./Button";

const GOFUNDME_URL =
  "https://www.gofundme.com/f/help-liam-get-a-new-accessible-vehicle";

export default function HeroSection() {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-12 pt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-gray-900">
            Help <span className="text-[#6cb50a]">Liam</span> &{" "}
            <span className="text-[#6cb50a]">Christina</span> Thrive
          </h1>
          <div className="text-base md:text-lg mb-8 text-gray-800 font-semibold max-w-2xl mx-auto md:mx-0 flex flex-col gap-2">
            <span>
              Whether it’s $5 or $500, every donation makes a difference.
            </span>
            <span>
              👉 Support them through GoFundMe or scan one of the QR codes below
              to donate directly.
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
            <Button
              variant="fill"
              className="inline-block text-lg px-8 py-3"
              onClick={() => window.open(GOFUNDME_URL, "_blank")}
            >
              Donate
            </Button>
            <Button
              variant="outline"
              className="inline-block text-lg px-8 py-3 animate-bounce"
              onClick={() => {
                const el = document.getElementById("payment-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Scan to donate
            </Button>
          </div>
        </div>

        {/* Right Images with Animated Icons */}
        <div className="relative h-[400px] w-full">
          {/* First tilted image */}
          <div className="absolute top-0 left-10 rotate-[-6deg] shadow-lg z-10">
            <Image
              src="/Chirstianliam1.png"
              alt="Christina and Liam"
              width={220}
              height={300}
              className="rounded-xl object-cover border-4 border-[#6cb50a] object-[center_bottom]"
            />
          </div>
          {/* Animated Icon 1 */}
          <FaLeaf className="absolute top-2 left-0 text-[#6cb50a] text-3xl animate-bounce z-30" />

          {/* Second tilted image */}
          <div className="absolute top-16 left-36 rotate-[6deg] shadow-lg z-20">
            <Image
              src="/chrostianliam2.png"
              alt="Christina and Liam"
              width={220}
              height={300}
              className="rounded-xl object-cover border-4 border-[#6cb50a] object-[center_bottom]"
            />
          </div>
          {/* Animated Icon 2 */}
          <FaHandHoldingUsd className="absolute bottom-10 left-0 text-[#6cb50a] text-4xl animate-bounce z-30" />

          {/* Optional third image */}
          <div className="absolute bottom-0 right-10 rotate-[-3deg] shadow-lg z-0 hidden md:block">
            <Image
              src="/christianliam3.png"
              alt="Christina and Liam"
              width={220}
              height={300}
              className="rounded-xl object-cover border-4 border-[#6cb50a] object-[center_bottom]"
            />
          </div>
          {/* Animated Icon 3 */}
          <FaHeart className="absolute bottom-2 right-0 text-[#6cb50a] text-3xl animate-bounce z-30" />
        </div>
      </div>
    </section>
  );
}
