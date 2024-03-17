import { FaCode, FaGlobe, FaHtml5, FaAndroid } from "react-icons/fa";
import { IoMdDownload, IoLogoJavascript } from "react-icons/io";


export default function AIMLProjects() {
    return (
        <div className="mx-7 sm:mx-10 my-36 relative z-20 lg:mx-24 lg:mx-40 2xl:mx-60">
            <h1 className="text-3xl sm:text-4xl font-semibold">Data Science / ML Works</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 mt-10 md:mt-14 xl:gap-7">
                {/* Agronex */}
                <a href="https://github.com/brentibanez331/plant-disease-classification" target="_blank">
                    <div className="bg-[#0E0E10] sm:h-48 xl:h-48 md:h-52 p-6 xl:p-6 sm:p-5 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105 w-full">
                        <div>
                            <h2 className="text-lg font-bold mb-3.5">plant-disease-classification</h2>
                            <p className="text-sm">A computer vision model for predicting agricultural plant diseases.</p>
                        </div>
                        <div className="flex mt-5 md:mt-0">
                            <a href="https://github.com/brentibanez331/plant-disease-classification" target="_blank"><FaCode className="text-xl mr-6 text-white md:text-neutral-400 hover:text-white transition duration-150" /></a>
                            <a href="https://plant-diseases-classifier.vercel.app/" target="_blank"><FaGlobe className="text-xl mr-6 text-white md:text-neutral-400 hover:text-white transition duration-150" /></a>
                            <a><FaAndroid className="text-xl mr-4 text-neutral-400" /></a>
                        </div>
                    </div>
                </a>

                {/* Urinalysis Diagnosis */}
                <a href="https://github.com/brentibanez331/urinalysis-ph" target="_blank" className="masonry-item">
                    <div className="bg-[#0E0E10] sm:h-48 md:h-52 xl:h-48 p-6 xl:p-6 sm:p-5 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105 w-full">
                        <div>
                            <h2 className="text-lg font-bold mb-3.5">urinalysis-diagnosis</h2>
                            <p className="text-sm">A binary classification model for reducing misdiagnosis in urinalysis tests.</p>
                        </div>
                        <div className="flex mt-5 md:mt-0">
                            <a href="https://github.com/brentibanez331/urinalysis-ph" target="_blank"><FaCode className="text-xl mr-6 text-white md:text-neutral-400 hover:text-white transition duration-150" /></a>
                            <a href="https://urinalysis-ph.vercel.app/" target="_blank"><FaGlobe className="text-xl mr-4 text-white md:text-neutral-400 hover:text-white transition duration-150" /></a>
                        </div>
                    </div>
                </a>

                {/* Agronex */}
                <a href="https://github.com/brentibanez331/obesity-risk" target="_blank" className="masonry-item">
                    <div className="bg-[#0E0E10] sm:h-48 md:h-52 p-6 xl:h-48 xl:p-6 sm:p-5 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105 w-full">
                        <div>
                            <h2 className="text-lg font-bold mb-3.5">obesity-risk</h2>
                            <p className="text-sm">This respository contains a multi-class CNN model for predicting level of obesity risk</p>
                        </div>
                        <div className="flex mt-5 md:mt-0">
                            <a href="https://github.com/brentibanez331/obesity-risk" target="_blank"><FaCode className="text-xl mr-6 text-white md:text-neutral-400 hover:text-white transition duration-150" /></a>
                        </div>
                    </div>
                </a>

                {/* Agronex */}
                <a href="https://github.com/brentibanez331/osteoporosis-risk" target="_blank" className="masonry-item">
                    <div className="bg-[#0E0E10] sm:h-48 md:h-52 p-6 xl:h-48 xl:p-6 sm:p-5 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105 w-full">
                        <div>
                            <h2 className="text-lg font-bold mb-3.5">osteoporosis-risk</h2>
                            <p className="text-sm">This respository contains a classification model for predicting if patient has osteoporosis.</p>
                        </div>
                        <div className="flex mt-5 md:mt-0">
                            <a href="https://github.com/brentibanez331/osteoporosis-risk" target="_blank"><FaCode className="text-xl mr-6 text-white md:text-neutral-400 hover:text-white transition duration-150" /></a>
                        </div>
                    </div>
                </a>

                {/* Urinalysis Diagnosis */}
                <a href="https://github.com/brentibanez331/urinalysis-ph" target="_blank">
                    <div className="bg-[#0E0E10] sm:h-48 md:h-52 xl:h-48 p-6 xl:p-6 sm:p-5 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105 w-full">
                        <div>
                            <h2 className="text-lg font-bold mb-3.5">data-science-salaries</h2>
                            <p className="text-sm">This repository contains EDA on Data Science related jobs Salary in USD across countries</p>
                        </div>
                        <div className="flex mt-5 md:mt-0">
                            <a href="https://github.com/brentibanez331/urinalysis-ph" target="_blank"><FaCode className="text-xl mr-6 text-white md:text-neutral-400 hover:text-white transition duration-150" /></a>
                        </div>
                    </div>
                </a>

                {/* Creative Tourism */}
                <a href="https://creativetourism.ph/" target="_blank">
                    <div className="bg-[#0E0E10] sm:h-48 md:h-52 xl:h-48 p-6 xl:p-6 sm:p-5 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105 w-full">

                        <div>
                            <h2 className="text-lg font-bold mb-3.5">digit-recognizer</h2>
                            <p className="text-sm">This repository contains a simple CNN architecture for predicting digits from images.</p>
                        </div>
                        <div className="flex mt-5 md:mt-0">
                            <a href="https://github.com/brentibanez331/PCTC_2023" target="_blank"><FaCode className="text-xl mr-6 text-white md:text-neutral-400 hover:text-white transition duration-150" /></a>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}