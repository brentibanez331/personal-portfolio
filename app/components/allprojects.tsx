import { FaCode, FaHtml5, FaPhp } from "react-icons/fa";
import { MdCss } from "react-icons/md";
import { GrMysql } from "react-icons/gr";
import { FaUnity, FaFigma, FaJava, FaGlobe } from "react-icons/fa6";
import { IoMdDownload, IoLogoJavascript } from "react-icons/io";
import Image from "next/image";

export default function AllProjects() {
    return (
        <div className="mx-7 sm:mx-10 mt-36 mb-14 relative z-20 lg:mx-40">
            <h1 className="text-3xl sm:text-4xl font-semibold">Other Works</h1>
            {/* <div className="flex justify-between mt-14"> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 mt-10 md:mt-14 xl:gap-7">
                {/* SmileIT Inc. */}
                <a href="https://github.com/brentibanez331/PCTC_202" target="_blank" className="masonry-item">
                    <div className="bg-[#0E0E10] sm:h-48 md:h-52 lg:h-80 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105 w-full">
                        <div className="top-0 left-0 w-full flex flex-col justify-between">
                            <Image src="/projects/pctc.png" width={500} height={500} alt="SmileIT" className="hidden lg:block h-32 object-cover rounded-t-md" />
                            <div className="p-6">
                                <h2 className="text-lg font-bold mb-3.5">PCTC 2023</h2>
                                <p className="text-sm">A website for the Philippine Creative Tourism Congress 2023 for the Department of Tourism.</p>
                            </div>
                            <div className="px-6 pb-6 flex">
                                <a href="https://github.com/brentibanez331/PCTC_2023" target="_blank"><FaCode className="text-xl mr-6 text-white md:text-neutral-400 hover:text-white transition duration-150" /></a>
                                <a href="https://creativetourism.ph/" target="_blank"><FaGlobe className="text-xl mr-6 text-white md:text-neutral-400 hover:text-white transition duration-150" /></a>
                                <a><FaHtml5 className="text-xl mr-6 text-neutral-400" /></a>
                                <a><IoLogoJavascript className="text-xl mr-4 text-neutral-400" /></a>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/brentibanez331/PCTC_202" target="_blank" className="masonry-item">
                    <div className="bg-[#0E0E10] sm:h-48 md:h-52 lg:h-80 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105 w-full">
                        <div className="top-0 left-0 w-full flex flex-col justify-between">
                            <Image src="/projects/smileit.png" width={500} height={500} alt="SmileIT" className="hidden lg:block h-32 object-cover rounded-t-md" />
                            <div className="p-6">
                                <h2 className="text-lg font-bold mb-3.5">SmileIT Inc.</h2>
                                <p className="text-sm">This repository contains code for an online E-learning website built using PHP and SQL.</p>
                            </div>
                            <div className="px-6 pb-6 flex">
                                <a href="https://github.com/Gianheybo/smileit" target="_blank"><FaCode className="text-xl mr-6 text-white md:text-neutral-400 hover:text-white transition duration-150" /></a>
                                <a><FaPhp className="text-xl mr-6 text-neutral-400" /></a>
                                <a><GrMysql className="text-xl mr-4 text-neutral-400" /></a>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/brentibanez331/PCTC_202" target="_blank" className="masonry-item">
                    <div className="bg-[#0E0E10] sm:h-48 md:h-52 lg:h-80 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105 w-full">
                        <div className="top-0 left-0 w-full flex flex-col justify-between">
                            <Image src="/projects/treasuretide.png" width={500} height={500} alt="Treasure Tide" className="hidden lg:block h-32 object-cover rounded-t-md" />
                            <div className="p-6">
                                <h2 className="text-lg font-bold mb-3.5">Treasure Tide</h2>
                                <p className="text-sm">A 3D mobile game built in Unity. Uses gyroscope for controls and a Day/Night cycle.</p>
                            </div>
                            <div className="px-6 pb-6 flex">
                                <a href="https://github.com/brentibanez331/boat-game-fixed" target="_blank"><FaCode className="text-xl mr-6 text-white md:text-neutral-400 hover:text-white transition duration-150" /></a>
                                <a><FaUnity className="text-xl mr-6 text-neutral-400" /></a>
                                <div className="border-l-2 mr-6 border-neutral-700"></div>
                                <a href="https://drive.google.com/file/d/1LbrfKpcqdGq7P4sP3mITVlgIn0qnFw2M/view?usp=sharing" target="_blank"><IoMdDownload className="text-xl mr-4 text-white md:text-neutral-400 hover:text-white transition duration-150" /></a>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/brentibanez331/PCTC_202" target="_blank" className="masonry-item">
                    <div className="bg-[#0E0E10] sm:h-48 md:h-52 lg:h-80 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105 w-full">
                        <div className="top-0 left-0 w-full flex flex-col justify-between">
                            <Image src="/projects/valtara.png" width={500} height={500} alt="Valtara" className="hidden lg:block h-32 object-cover rounded-t-md" />
                            <div className="p-6">
                            <h2 className="text-lg font-bold mb-3.5">Valtara</h2>
                                <p className="text-sm">A 2D platformer game built in Unity. Practiced good shaders usage and 2d animations.</p>
                            </div>
                            <div className="px-6 pb-6 flex">
                            <a href="https://github.com/brentibanez331/boat-game-fixed" target="_blank"><FaCode className="text-xl mr-6 text-white md:text-neutral-400 hover:text-white transition duration-150" /></a>
                                <a target="_blank"><FaUnity className="text-xl mr-6 text-neutral-400" /></a>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/brentibanez331/PCTC_202" target="_blank" className="masonry-item">
                    <div className="bg-[#0E0E10] sm:h-48 md:h-52 lg:h-80 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105 w-full">
                        <div className="top-0 left-0 w-full flex flex-col justify-between">
                            <Image src="/projects/sidlak.png" width={500} height={500} alt="Sidlak" className="hidden lg:block h-32 object-cover rounded-t-md" />
                            <div className="p-6">
                                <h2 className="text-lg font-bold mb-3.5">Sidlak</h2>
                                <p className="text-sm">A UI/UX design and prototype for a smart notes library made in Figma.</p>
                            </div>
                            <div className="px-6 pb-6 flex">
                                <a target="_blank"><FaFigma className="text-xl mr-6 text-neutral-400" /></a>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://github.com/brentibanez331/PCTC_202" target="_blank" className="masonry-item">
                    <div className="bg-[#0E0E10] sm:h-48 md:h-52 lg:h-80 rounded-md flex flex-col justify-between transition duration-300 hover:scale-105 w-full">
                        <div className="top-0 left-0 w-full flex flex-col justify-between">
                            <Image src="/projects/gaiji.png" width={500} height={500} alt="Gaiji" className="hidden lg:block h-32 object-cover rounded-t-md" />
                            <div className="p-6">
                                <h2 className="text-lg font-bold mb-3.5">Gaiji</h2>
                                <p className="text-sm">A language learning app built using Java, Google Translate API, and JFrame GUI.</p>
                            </div>
                            <div className="px-6 pb-6 flex">
                                <a href="https://github.com/brentibanez331/gaiji-language-learning" target="_blank"><FaCode className="text-xl mr-6 text-white md:text-neutral-400 hover:text-white transition duration-150" /></a>
                                <a><FaJava className="text-xl mr-4 text-neutral-400" /></a>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}