import Nav from "@/components/Nav";
import Link from "next/link";
import { ArrowDownIcon } from "lucide-react";
import { TextReveal } from "@/components/TextReveal";
import { TextFade } from "@/components/TextFade";

export default function Page() {
    return (
        <div className="relative no-scrollbar">
            <Nav />
            <div className="mx-2 sm:mx-4 mt-10 sm:mt-20 ">

                <TextFade direction="up" className="flex items-end space-x-2">
                    <h1 className="text-9xl gen-sans-bold">cv</h1>
                    <div className="flex pb-3">
                        <p>download here</p>
                        <ArrowDownIcon strokeWidth={1} />
                    </div>
                </TextFade>

                <div className="w-full justify-center flex py-16">
                    <div className="grid grid-cols-2 gap-24 sm:gap-32">
                        <TextFade direction="up" className="space-y-4 sm:space-y-8 col-span-2 sm:col-span-1">
                            <h4 className="gen-sans-bold text-2xl">Experience</h4>
                            <div>
                                <p className="font-bold text-md">Callo Technologies Inc.</p>
                                <p className="font-semibold text-sm sm:text-md">FULL STACK ENGINEER</p>
                                <p className="text-xs sm:text-base">October 2024 - now</p>
                            </div>
                            <div>
                                <p className="font-bold text-md">K92 Keema</p>
                                <p className="font-semibold text-sm sm:text-md">FULL STACK ENGINEER</p>
                                <p className="text-xs sm:text-base">November 2024 - March 2025</p>
                            </div>
                            <div>
                                <p className="font-bold text-md">ACF Solutions</p>
                                <p className="font-semibold text-sm sm:text-md">SOFTWARE ENGINEER</p>
                                <p className="text-xs sm:text-base">May 2024 - October 2024</p>
                            </div>
                            <div>
                                <p className="font-bold text-md">Department of ICT Philippines</p>
                                <p className="font-semibold text-sm sm:text-md">SOFTWARE ENGINEER INTERN</p>
                                <p className="text-xs sm:text-base">June 2024 - August 2024</p>
                            </div>
                        </TextFade>
                        {/* <Separator orientation="vertical" className="h-[500px] bg-neutral-700" /> */}
                        <TextFade direction="up" className="space-y-4 sm:space-y-8 col-span-2 sm:col-span-1">
                            <h4 className="gen-sans-bold text-2xl">Education</h4>
                            <div>
                                <p className="font-bold text-md">University of St. La Salle - PH</p>
                                <p className="font-semibold text-sm sm:text-md">BS in COMPUTER SCIENCE</p>
                                <p className="text-xs sm:text-base">August 2021 - May 2025</p>
                                <ul className="text-sm list-disc ml-4">
                                    <li>1.39 GPA / 96% GWA</li>
                                    <li>Full Government Scholar</li>
                                    <li>6x Dean's List awardee</li>
                                </ul>
                            </div>
                        </TextFade>

                        <TextFade direction="up" className=" space-y-4 sm:space-y-8 col-span-2">
                            <h4 className="gen-sans-bold text-2xl">Leadership Experience</h4>
                            <div>
                                <p className="font-bold">Computer Science Society - USLS</p>
                                <p className="font-semibold">ACADEMIC AFFAIRS HEAD</p>
                                <p className="text-xs sm:text-base">August 2024 - Present</p>
                                <ul className="text-sm pt-3 list-disc ml-4">
                                    <li>Spearheaded a partnership with Datacamp, providing 40+ students with free data science courses</li>
                                    <li>Organized a mentorship program, training 30+ freshmen students with C++ programming</li>
                                </ul>
                            </div>
                            <div>
                                <Link
                                    href={"https://devcon.ph/"}
                                    target="_blank"
                                    className="font-bold hover:underline flex items-center space-x-1">
                                    <p>Developers Connect (DEVCON) Bacolod</p>
                                </Link>
                                <p className="font-semibold">VP for PROGRAMS</p>
                                <p className="text-xs sm:text-base">February 2024 - September 2024</p>
                                <ul className="text-sm pt-3 list-disc ml-4">
                                    <li>Co-organized a 2-day workshop on data science with SAP tools, reaching over 300+ students across 2 universities</li>
                                    <li>Led an outreach program in partnership with a local non-profit organization</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold">Google Developer Student Clubs - USLS</p>
                                <p className="font-semibold">CHIEF INFORMATION OFFICER</p>
                                <p className="text-xs sm:text-base">August 2023 - May 2024</p>
                                <ul className="text-sm pt-3 list-disc ml-4">
                                    <li>Co-facilitated a Datacamp partnership and managing scholars</li>
                                    <li>Awarded as Best Special Interest Club 2024 @ Corps de Elite USLS</li>
                                </ul>
                            </div>
                        </TextFade>
                        <TextFade direction="up" className="col-span-2 space-y-8">
                            <h4 className="gen-sans-bold text-2xl">Awards</h4>
                            <div>
                                <p className="font-bold">Philippine Startup Challenge 9 (Regional)</p>
                                <p className="text-xs sm:text-base">2024</p>
                                <ul className="text-sm list-disc ml-4">
                                    <li>1st Runner Up</li>
                                    <li>Best in Startup Pitch</li>
                                    <li>Best in QnA</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold">PH Creative Awards Night by GDAP</p>
                                <p className="text-xs sm:text-base">2024</p>
                                <ul className="text-sm list-disc ml-4">
                                    <li>Best Game Art Direction</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold">USLS Club Fair: PasiCLUBan</p>
                                <p className="text-xs sm:text-base">2024</p>
                                <ul className="text-sm list-disc ml-4">
                                    <li>Champion</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold">Computer Science Night USLS</p>
                                <p className="text-xs sm:text-base">2024</p>
                                <ul className="text-sm list-disc ml-4">
                                    <li>Best Thesis Project Presenter</li>
                                    <li>Best Web Technologies Project Concept</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold">Philippine Startup Challenge 8 (Regional)</p>
                                <p className="text-xs sm:text-base">2023</p>
                                <ul className="text-sm list-disc ml-4">
                                    <li>Regional Finalist</li>
                                </ul>
                            </div>
                        </TextFade>

                    </div>
                </div>


            </div>
        </div>
    )
}