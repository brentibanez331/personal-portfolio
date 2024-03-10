import { FaCode, FaGlobe, FaAndroid } from "react-icons/fa";

export default function Featured() {
    return (
        <div className="mx-60 my-36 relative z-20">
            <h1 className="text-4xl font-semibold">Featured Projects</h1>
            <div className="flex justify-between mt-14">
                <a href="https://github.com/brentibanez331/plant-disease-classification" target="_blank">
                    <div className="bg-neutral-950 h-52 p-6 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105" style={{width:330}}>
                        <div>
                            <h2 className="text-lg font-bold mb-3.5">plant-disease-classification</h2>
                            <p className="text-sm">A computer vision model for predicting plant diseases. This repository contains codes for the model, web app, and mobile app.</p>
                        </div>
                        <div className="flex mt-5">
                            <a href="https://github.com/brentibanez331/plant-disease-classification" target="_blank"><FaCode className="text-xl mr-6 text-neutral-400 hover:text-white transition duration-150" /></a>
                            <a href="https://plant-diseases-classifier.vercel.app/" target="_blank"><FaGlobe className="text-xl mr-6 text-neutral-400 hover:text-white transition duration-150" /></a>
                            <a><FaAndroid className="text-xl mr-4 text-neutral-400" /></a>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/brentibanez331/urinalysis-ph" target="_blank">
                    <div className="bg-neutral-950 h-52 p-6 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105" style={{width:330}}>
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
                    <div className="bg-neutral-950 h-52 p-6 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105" style={{width:330}}>
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