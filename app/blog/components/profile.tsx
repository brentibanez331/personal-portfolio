import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Profile() {
    return (
        <div className="mx-6 pt-16">
            <Link href="/" className="w-7 z-50 ml-7"><IoIosArrowRoundBack className="text-5xl"/></Link>
            <div className="flex items-center pt-32">
                <Image src="/brent-2.jpg" width={500} height={500} className="mr-5 rounded-full w-28 h-28 object-cover" alt="Brent Ibañez" />
                <div className="">
                    <h1 className="font-bold text-2xl">Brent Ibañez</h1>
                    <h1 className="">@renibanez</h1>
                </div>
            </div>
        </div>

    )
}