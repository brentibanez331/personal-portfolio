import Image from "next/image";

export default function Profile() {
    return (
        <div className="mx-3.5 pt-64">
            <div className="flex items-center">
                <Image src="/brent-2.jpg" width={500} height={500} className="mr-5 rounded-full w-28 h-28 object-cover" alt="Brent Ibañez" />
                <div className="">
                    <h1 className="font-bold text-2xl">Brent Ibañez</h1>
                    <h1 className="">@renibanez</h1>
                </div>
            </div>
        </div>

    );
}