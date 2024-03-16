import Image from "next/image"

export default function Hero() {
    return (
        <div className="mx-3.5 sm:mx-10 my-40 relative z-20 lg:mx-40">
            <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                <Image src="/brent.jpg" width={700} height={700} className="rounded-md sm:rounded-xl w-44 h-44 lg:size-72 mb-3.5 sm:mb-0 sm:mr-5 md:size-52 md:mr-10 xl:mr-14" alt="Brent Ibañez" />
                <div className="flex flex-col justify-center items-center sm:items-start sm:justify-start w-4/5">
                    <div>
                        <h1 className="hidden text-2xl sm:block">Hello, I am</h1>
                        <h1 className="text-2xl font-bold mb-3.5 sm:text-5xl sm:mb-1 xl:text-7xl">Brent Ibañez</h1>
                    </div>
                    <p className="text-slate-300 text-center text-sm font-bold sm:text-xl sm:mb-2 xl:text-3xl lg:text-start">ML Engineer and Data Scientist</p>
                    <p className="text-slate-300 text-center text-sm mb-3.5 sm:text-start sm:mb-0 md:hidden">3rd year CS student from the University of St. La Salle.</p>

                    <div>
                        <p className="text-slate-300 text-center hidden md:block md:text-sm md:text-start md:mb-2 lg:text-lg lg:mt-7">A 3rd year computer science student from the University of St. La Salle.<span className="hidden xl:contents"> I specialize in Machine Learning and Data Science.</span>
                        </p>
                        <p className="text-neutral-400 text-center hidden md:block md:text-sm md:text-start lg:text-lg"><strong>VP for Programs</strong> at DEVCON Bacolod<br/><strong>CIO</strong> at Google DSC-USLS</p>
                    </div>

                </div>
            </div>
        </div>
    )
}