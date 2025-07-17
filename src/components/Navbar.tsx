"use client";

import React from "react";

import { FaHandHoldingUsd, FaQrcode, FaDonate } from "react-icons/fa";
import Button from "./Button";

const GOFUNDME_URL =
  "https://www.gofundme.com/f/help-liam-get-a-new-accessible-vehicle";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-[80%] px-6 py-4 flex items-center justify-between rounded-full shadow-xl border border-[#b6e388] bg-white/30 backdrop-blur-md backdrop-saturate-150 transition-all duration-300">
      {/* Left: Icon and Main Name */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold tracking-tight text-[#397d0c] flex items-center gap-2">
          <FaDonate className="text-[#397d0c] text-2xl" title="Donate" />
          Liam & Christina Fund
        </span>
      </div>

      {/* Right: Donation Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <Button
          variant="outline"
          className="border-[#397d0c] text-[#397d0c] hover:bg-[#397d0c] hover:text-white"
          onClick={() => window.open(GOFUNDME_URL, "_blank")}
        >
          <FaHandHoldingUsd
            className="text-[#397d0c] text-xl group-hover:text-white transition"
            title="Donation"
          />
          Donate
        </Button>
        <Button
          variant="outline"
          className="border-[#397d0c] text-[#397d0c] hover:bg-[#397d0c] hover:text-white"
          onClick={() => {
            const el = document.getElementById("payment-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <FaQrcode
            className="text-[#397d0c] text-xl group-hover:text-white transition animate-pulse"
            title="Scan QR"
          />
          Scan to donate
        </Button>
      </div>
    </nav>
  );
}
