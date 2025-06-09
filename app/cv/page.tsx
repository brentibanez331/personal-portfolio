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
                        <TextFade direction="up" className="space-y-4 sm:space-y-6 col-span-2 sm:col-span-1">
                            <h4 className="gen-sans-bold text-3xl">Experience</h4>
                            <div>
                                <p className="font-semibold">Full Stack Engineer</p>
                                <p className="text-xs sm:text-sm text-neutral-600">October 2024 - June 2025</p>
                                <p className="italic">Callo Technologies Inc.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Full Stack Engineer</p>
                                <p className="text-xs sm:text-sm text-neutral-600">November 2024 - March 2025</p>
                                <p className="italic">K92 Keema</p>
                            </div>
                            <div>
                                <p className="font-semibold">Software Engineer</p>
                                <p className="text-xs sm:text-sm text-neutral-600">May 2024 - October 2024</p>
                                <p className="italic">ACF Solutions</p>
                            </div>
                            <div>
                                <p className="font-semibold">Software Engineer Intern</p>
                                <p className="text-xs sm:text-sm text-neutral-600">June 2024 - August 2024</p>
                                <p className="italic">Department of ICT Philippines</p>
                            </div>
                        </TextFade>
                        {/* <Separator orientation="vertical" className="h-[500px] bg-neutral-700" /> */}
                        <TextFade direction="up" className="space-y-4 sm:space-y-6 col-span-2 sm:col-span-1">
                            <h4 className="gen-sans-bold text-3xl">Education</h4>
                            <div>
                                <p className="font-semibold">BS in Computer Science</p>
                                <p className="text-xs sm:text-sm text-neutral-600">2021 - 2025</p>
                                <p className="italic">University of St. La Salle - PH</p>
                                <div className="text-sm ml-2 mt-2">
                                    <p>— 1.4 GPA / 96% GWA</p>
                                    <p>— Full Government Scholar</p>
                                    <p>— <b>8x</b> Dean&apos;s List awardee</p>
                                </div>
                            </div>
                        </TextFade>

                        <TextFade direction="up" className=" space-y-4 sm:space-y-8 col-span-2">
                            <h4 className="gen-sans-bold text-3xl">Leadership Experience</h4>
                            <div>
                                <p className="font-semibold">Academic Affairs Head</p>
                                <p className="text-xs sm:text-sm text-neutral-600">August 2024 - May 2025</p>
                                <p className="italic">Computer Science Society - USLS</p>
                                <div className="text-sm mt-1 ml-2 text-neutral-600">
                                    <p>— Spearheaded a partnership with Datacamp, providing 50+ students with free data science courses</p>
                                    <p>— Organized a mentorship program, training 30+ freshmen students with C++ programming</p>
                                    <p>— Co-facilitated Game Jam Events; Re:Play & Let's G!!!</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold">Student Mentor</p>
                                <p className="text-xs sm:text-sm text-neutral-600">September 2024 - November 2024</p>
                                <p className="italic">Computer Science Society - USLS</p>
                                <div className="text-sm mt-1 ml-2 text-neutral-600">
                                    <p>— Spearheaded a partnership with Datacamp, providing 50+ students with free data science courses</p>
                                    <p>— Organized a mentorship program, training 30+ freshmen students with C++ programming</p>
                                    <p>— Co-facilitated Game Jam Events; Re:Play & Let's G!!!</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold">VP for Programs</p>
                                <p className="text-xs sm:text-sm text-neutral-600">February 2024 - September 2024</p>
                                <p className="italic">Developers Connect (DEVCON) Bacolod</p>
                                <div className="text-sm mt-1 ml-2 text-neutral-600">
                                    <p>— Co-organized a 2-day workshop on data science with SAP tools, reaching over 300+ students across 2 universities</p>
                                    <p>— Led an outreach program in partnership with a local non-profit organization</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold">Chief Information Officer</p>
                                <p className="text-xs sm:text-sm text-neutral-600">August 2023 - May 2024</p>
                                <p className="italic">Google Developer Student Clubs - USLS</p>
                                <div className="text-sm mt-1 ml-2 text-neutral-600">
                                    <p>— Co-facilitated a Datacamp partnership and managing scholars</p>
                                    <p>— Awarded as Best Special Interest Club 2024 @ Corps de Elite USLS</p>
                                </div>
                            </div>
                        </TextFade>
                        <TextFade direction="up" className="col-span-2 space-y-8">
                            <h4 className="gen-sans-bold text-3xl">Awards</h4>
                            <div>
                                <p className="font-semibold">Senior's Recognition Rites</p>
                                <p className="text-xs sm:text-sm text-neutral-600">2025</p>
                                <p className="italic">University of St. La Salle, Bacolod</p>
                                <div className="text-sm ml-2 mt-1 text-neutral-600">
                                    <p className="font-semibold">🏆 CHAMPION</p>
                                    <p>🏅 Best in UI/UX Design</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold">Komsai Hack: DemocraTech</p>
                                <p className="text-xs sm:text-sm text-neutral-600">2025</p>
                                <p className="italic">University of the Philippines Visayas, Miag-ao</p>
                                <div className="text-sm ml-2 mt-1 text-neutral-600">
                                    <p className="font-semibold">🏆 CHAMPION</p>
                                    <p>🏅 Best in UI/UX Design</p>
                                </div>
                            </div>
                            {/* <div>
                                <p className="font-bold">Komsai Hack: DemocraTech @ UPV Miag-ao</p>
                                <p className="text-xs sm:text-base">2025</p>
                                <ul className="text-sm list-disc ml-4">
                                    <li>CHAMPION</li>
                                    <li>Best in UI/UX Design</li>
                                </ul>
                            </div> */}
                            <div>
                                <p className="font-semibold">Philippine Startup Challenge 9 (Regional)</p>
                                <p className="text-xs sm:text-sm text-neutral-600">2024</p>
                                <p className="italic">Iloilo Grand Hotel, Western Visayas</p>
                                <div className="text-sm mt-1 ml-2 text-neutral-600">
                                    <p>🏆 1st Runner Up</p>
                                    <p>🏅 Best in Startup Pitch</p>
                                    <p>🏅 Best in QnA</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold">PH Creative Awards Night by GDAP</p>
                                <p className="text-xs sm:text-sm text-neutral-600">2024</p>
                                <p className="italic">Mandaluyong, NCR</p>
                                <div className="text-sm mt-1 ml-2 text-neutral-600">
                                    <p>🏅 Best Game Art Direction</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold">Club Fair: PasiCLUBan</p>
                                <p className="text-xs sm:text-sm text-neutral-600">2024</p>
                                <p className="italic">University of St. La Salle, Bacolod</p>
                                <div className="text-sm list-disc ml-2 mt-1 text-neutral-600">
                                    <p>🏆 CHAMPION</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold">Computer Science Night USLS</p>
                                <p className="text-xs sm:text-sm text-neutral-600">2024</p>
                                <p className="italic">Circle Inn, Bacolod</p>
                                <div className="text-sm ml-2 mt-1 text-neutral-600">
                                    <p>🏅 Best Thesis Project Presenter</p>
                                    <p>🏅 Best Web Technologies Project Concept</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold">Philippine Startup Challenge 8 (Regional)</p>
                                <p className="text-xs sm:text-sm text-neutral-600">2023</p>
                                <p className="italic">Western Visayas</p>
                                <div className="text-sm ml-2 mt-1 text-neutral-600">
                                    <p>🏅 Regional Finalist</p>
                                </div>
                            </div>
                        </TextFade>

                    </div>
                </div>


            </div>
        </div>
    )
}