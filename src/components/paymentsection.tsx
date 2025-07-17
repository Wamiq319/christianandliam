import { FaQrcode, FaUniversity, FaDollarSign, FaVenus } from "react-icons/fa";
import Image from "next/image";

export default function PaymentSection() {
  return (
    <section id="payment-section" className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center mb-6">
          <FaQrcode className="text-5xl text-[#397d0c] mb-2 animate-bounce" />
          <h2 className="text-3xl font-bold mb-2 text-[#397d0c]">
            Scan to Donate
          </h2>
          <p className="mb-4 text-gray-700 text-lg max-w-xl">
            Use any of the QR codes below to quickly donate using your preferred
            payment app. Just scan with your phone camera or payment app!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex flex-col items-center gap-2 bg-white rounded-xl shadow-lg p-4 border-2 border-[#6cb50a]">
            <Image
              src="/QrCodes/1000006532.jpg"
              alt="QR Code 1"
              width={192}
              height={192}
              className="w-48 h-48 rounded-lg"
            />
            <span className="flex items-center gap-2 text-[#397d0c] font-semibold">
              <FaUniversity /> Zelle
            </span>
            <span className="text-gray-700 text-sm font-medium">
              Christina Hall
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-white rounded-xl shadow-lg p-4 border-2 border-[#6cb50a]">
            <Image
              src="/QrCodes/1000006533.jpg"
              alt="QR Code 2"
              width={192}
              height={192}
              className="w-48 h-48 rounded-lg"
            />
            <span className="flex items-center gap-2 text-[#397d0c] font-semibold">
              <FaDollarSign /> Cash App
            </span>
            <span className="text-gray-700 text-sm font-medium">
              $ChristinaMH1987
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-white rounded-xl shadow-lg p-4 border-2 border-[#6cb50a]">
            <Image
              src="/QrCodes/1000006534.jpg"
              alt="QR Code 3"
              width={192}
              height={192}
              className="w-48 h-48 rounded-lg"
            />
            <span className="flex items-center gap-2 text-[#397d0c] font-semibold">
              <FaVenus /> Venmo
            </span>
            <span className="text-gray-700 text-sm font-medium">
              Christina Hall <span className="text-[#397d0c]">@ch87mommy</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
