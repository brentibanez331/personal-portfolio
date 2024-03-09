import Image from "next/image"

export default function Hero() {
    return (
        <div className="mx-60 my-24 relative z-20">
            <div className="flex">
                <div className="container rounded-xl size-52 mr-10">
                    <Image src="/brent.jpg" width={300} height={300} className="rounded-lg" alt="Brent Ibañez" />
                </div>
                <div className="flex flex-col justify-start max-w-3xl">
                    <div>
                        <h1 className="text-2xl">Hello, I am</h1>
                        <h1 className="text-6xl font-bold mb-5">Brent Ibañez</h1>
                    </div>
                    <p className="text-slate-300">I am a 3rd year computer science student from the University of St. La Salle. I love doing Machine Learning and Data Science.
                        I am the current <em>VP for Programs at DEVCON Bacolod</em> and the <em>CIO of GDSC-USLS</em>. I specialize in Computer Vision and Predictive Modeling.
                    </p>
                </div>
            </div>
        </div>
    )
}