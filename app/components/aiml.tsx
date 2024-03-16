import { FaCode, FaGlobe, FaAndroid } from "react-icons/fa";

export default function AIMLProjects() {
    return (
        <div className="mx-7 sm:mx-10 my-36 relative z-20">
            <h1 className="text-3xl sm:text-4xl font-semibold">Data Science / ML Works</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 mt-14">
                {/* Agronex */}
                <a href="https://github.com/brentibanez331/plant-disease-classification" target="_blank" className="masonry-item">
                    <div className="bg-neutral-950 sm:h-48 p-6 sm:p-5 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105 w-full">
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

                {/* Urinalysis Diagnosis */}
                <a href="https://github.com/brentibanez331/urinalysis-ph" target="_blank" className="masonry-item">
                    <div className="bg-neutral-950 sm:h-48 p-6 sm:p-5 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105 w-full">
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

                {/* Creative Tourism */}
                <a href="https://github.com/brentibanez331/obesity-risk" target="_blank" className="masonry-item">
                    <div className="bg-neutral-950 sm:h-48 p-6 sm:p-5 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105 w-full">
                        <div>
                            <h2 className="text-lg font-bold mb-3.5">obesity-risk</h2>
                            <p className="text-sm">This repository contains a multi-class CNN model for predicting the level of obesity risk.</p>
                        </div>
                        <div className="flex mt-5">
                            <a href="https://github.com/brentibanez331/obesity-risk" target="_blank"><FaCode className="text-xl mr-6 text-neutral-400 hover:text-white transition duration-150" /></a>
                            {/* <a href="https://creativetourism.ph/" target="_blank"><FaGlobe className="text-xl mr-4 text-neutral-400 hover:text-white transition duration-150" /></a> */}
                        </div>
                    </div>
                </a>

                {/* Agronex */}
                <a href="https://github.com/brentibanez331/plant-disease-classification" target="_blank" className="masonry-item">
                    <div className="bg-neutral-950 sm:h-48 p-6 sm:p-5 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105 w-full">
                        <div>
                            <h2 className="text-lg font-bold mb-3.5">osteoporosis-risk</h2>
                            <p className="text-sm">This respository contains a classification model for predicting if patient has osteoporosis.</p>
                        </div>
                        <div className="flex mt-5">
                            <a href="https://github.com/brentibanez331/plant-disease-classification" target="_blank"><FaCode className="text-xl mr-6 text-neutral-400 hover:text-white transition duration-150" /></a>
                        </div>
                    </div>
                </a>

                {/* Urinalysis Diagnosis */}
                <a href="https://github.com/brentibanez331/urinalysis-ph" target="_blank">
                    <div className="bg-neutral-950 md:h-52 p-6 sm:p-5 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105 w-full">
                        <div>
                            <h2 className="text-lg font-bold mb-3.5">data-science-salaries</h2>
                            <p className="text-sm">This repository contains Exploratory Data Analysis on Data Science related jobs Salary in USD across countries</p>
                        </div>
                        <div className="flex mt-5">
                            <a href="https://github.com/brentibanez331/urinalysis-ph" target="_blank"><FaCode className="text-xl mr-6 text-neutral-400 hover:text-white transition duration-150" /></a>
                        </div>
                    </div>
                </a>

                {/* Creative Tourism */}
                <a href="https://creativetourism.ph/" target="_blank">
                    <div className="bg-neutral-950 md:h-52 p-6 sm:p-5 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105 w-full">

                        <div>
                            <h2 className="text-lg font-bold mb-3.5">digit-recognizer</h2>
                            <p className="text-sm">This repository contains a simple CNN architecture, 2 Dense ReLU layers and a linear Dense for predicting digits.</p>
                        </div>
                        <div className="flex mt-5">
                            <a href="https://github.com/brentibanez331/PCTC_2023" target="_blank"><FaCode className="text-xl mr-6 text-neutral-400 hover:text-white transition duration-150" /></a>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}