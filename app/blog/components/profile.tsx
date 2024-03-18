import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Profile() {
    return (
        <div className="mx-6 pt-16 sm:mx-10 lg:mx-40 2xl:mx-80 lg:mb-14 lg:pt-7">
            <Link href="/" className="w-7 z-50 ml-7"><IoIosArrowRoundBack className="text-5xl hover:-translate-x-1.5 transition ease-in-out duration-300"/></Link>
            <div className="flex items-center pt-32">
                <Image src="/brent-2.jpg" width={500} height={500} className="mr-5 lg:mr-8 rounded-full size-28 object-cover lg:size-32" alt="Brent Ibañez" />
                <div className="">
                    <h1 className="font-bold text-2xl lg:text-3xl">Brent Ibañez</h1>
                    <h1 className="lg:text-xl">@renibanez</h1>
                </div>
            </div>
        </div>

    )
}