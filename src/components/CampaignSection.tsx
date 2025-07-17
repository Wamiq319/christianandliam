import { FaWheelchair } from "react-icons/fa";
import Image from "next/image";

export default function CampaignSection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="flex-[1.2] text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#397d0c] flex items-center gap-2 justify-center md:justify-start">
            <FaWheelchair
              className="text-4xl mr-2 animate-bounce"
              title="Wheelchair Accessible"
            />
            Wheelchair Accessibility for Liam
          </h2>
          <h3 className="text-2xl font-bold mb-4 text-[#397d0c]">
            Liam & Christina&apos;s Story
          </h3>
          <p className="text-lg md:text-xl mb-4 text-gray-700">
            Liam is a bright and loving 11-year-old boy living with cerebral
            palsy, epilepsy, and multiple medical challenges. He’s non-verbal,
            non-ambulatory, and fully dependent on his wheelchair — but he’s
            full of joy, humor, and resilience.
          </p>
          <p className="text-base md:text-lg mb-4 text-gray-600">
            Our handicap accessible vehicle is about to say goodbye to us and we
            could really use some help to purchase a new vehicle that can
            transport his wheelchair, and possibly even be a big enough vehicle
            to add a changing table etc.
          </p>
          <p className="text-base md:text-lg mb-4 text-gray-600">
            Christina, his devoted mother, has been by his side through
            countless hospital stays, surgeries, and daily care. She’s doing
            everything she can — but now they need your help. Their current
            vehicle is failing and can no longer safely transport Liam’s
            wheelchair and medical equipment.
          </p>
          <p className="text-base md:text-lg text-gray-600">
            Your support will help them purchase a reliable, fully accessible
            van. This means Liam can travel safely to school, doctor
            appointments, and even enjoy simple joys like visiting Disneyland.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-[0.8] flex justify-center md:justify-end">
          <div className="relative p-2 bg-white rounded-2xl shadow-lg border-4 border-[#6cb50a] ticket-frame">
            <Image
              src="/Chirstianliam1.png"
              alt="Liam in wheelchair with Christina"
              width={340}
              height={340}
              className="rounded-xl object-cover object-center max-w-full h-auto"
            />
            {/* Ticket notches */}
            <span className="absolute -left-4 top-8 w-8 h-8 bg-white rounded-full border-4 border-[#6cb50a] z-10"></span>
            <span className="absolute -left-4 bottom-8 w-8 h-8 bg-white rounded-full border-4 border-[#6cb50a] z-10"></span>
            <span className="absolute -right-4 top-8 w-8 h-8 bg-white rounded-full border-4 border-[#6cb50a] z-10"></span>
            <span className="absolute -right-4 bottom-8 w-8 h-8 bg-white rounded-full border-4 border-[#6cb50a] z-10"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
