import { FaCode, FaGlobe, FaAndroid } from "react-icons/fa";

export default function Featured() {
    return (
        <div className="mx-7 sm:mx-10 my- md:my-36 relative z-20">
            <h1 className="text-3xl sm:text-4xl font-semibold">Featured Projects</h1>
            <div className="flex flex-col md:grid sm:justify-between mt-14 md:grid-cols-3 gap-3.5 sm:gap-0.5 mt-14 md:gap-3">
                <a href="https://github.com/brentibanez331/plant-disease-classification" target="_blank">
                    <div className="bg-neutral-900 mb-3.5 md:h-52 p-6 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105 w-full">
                        <div>
                            <h2 className="text-lg font-bold mb-3.5">plant-disease-classification</h2>
                            <p className="text-sm">A computer vision model for predicting plant diseases. Deployed web app, and mobile app in production.</p>
                        </div>
                        <div className="flex mt-5">
                            <a href="https://github.com/brentibanez331/plant-disease-classification" target="_blank"><FaCode className="text-xl mr-6 text-neutral-400 hover:text-white transition duration-150" /></a>
                            <a href="https://plant-diseases-classifier.vercel.app/" target="_blank"><FaGlobe className="text-xl mr-6 text-neutral-400 hover:text-white transition duration-150" /></a>
                            <a><FaAndroid className="text-xl mr-4 text-neutral-400" /></a>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/brentibanez331/urinalysis-ph" target="_blank">
                    <div className="bg-neutral-950 mb-3.5 md:h-52 p-6 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105 w-full">
                        <div>
                            <h2 className="text-lg font-bold mb-3.5">urinalysis-diagnosis</h2>
                            <p className="text-sm">A binary classification model for reducing misdiagnosis in urinalysis tests.</p>
                        </div>
                        <div className="flex mt-5">
                            <a href="https://github.com/brentibanez331/urinalysis-ph" target="_blank"><FaCode className="text-xl mr-6 text-neutral-400 hover:text-white transition duration-150" /></a>
                            <a href="https://urinalysis-ph.vercel.app/" target="_blank"><FaGlobe className="text-xl mr-4 text-neutral-400 hover:text-white transition duration-150" /></a>
                        </div>
                    </div>
                </a>
                <a href="https://creativetourism.ph/" target="_blank">
                    <div className="bg-neutral-950 mb-3.5 md:h-52 p-6 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105 w-full">
                        <div>
                            <h2 className="text-lg font-bold mb-3.5">pctc-2023</h2>
                            <p className="text-sm">A website for the Philippine Creative Tourism Congress 2023 for the Department of Tourism.</p>
                        </div>
                        <div className="flex mt-5">
                            <a href="https://github.com/brentibanez331/PCTC_2023" target="_blank"><FaCode className="text-xl mr-6 text-neutral-400 hover:text-white transition duration-150" /></a>
                            <a href="https://creativetourism.ph/" target="_blank"><FaGlobe className="text-xl mr-4 text-neutral-400 hover:text-white transition duration-150" /></a>
                        </div>
                    </div>
                </a>
            </div>
        </div>

    )
}