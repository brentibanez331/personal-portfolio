import Nav from "@/components/Nav";
import { Separator } from "@/components/ui/separator";

export default function Page() {
    return (
        <div className="relative no-scrollbar">
            <Nav />
            <div className="mx-4 mt-20">
                <h1 className="text-9xl gen-sans-bold">cv</h1>
                <div className="w-full justify-center flex">
                    <div className="flex py-10 space-x-36">
                        <div className=" space-y-4">
                            <h4 className="gen-sans-bold text-2xl">Experience</h4>
                            <div>
                                <p className="font-bold">Callo Technologies Inc.</p>
                                <p className="font-semibold">FULL STACK ENGINEER</p>
                                <p>October 2024 - now</p>
                            </div>
                            <div>
                                <p className="font-bold">K92 Keema</p>
                                <p>FULL STACK ENGINEER</p>
                                <p>November 2024 - March 2025</p>
                            </div>
                            <div>
                                <p className="font-bold">ACF Solutions</p>
                                <p>SOFTWARE ENGINEER</p>
                                <p>May 2024 - October 2024</p>
                            </div>
                            <div>
                                <p className="font-bold">Department of ICT Philippines</p>
                                <p>SOFTWARE ENGINEER INTERN</p>
                                <p>June 2024 - August 2024</p>
                            </div>
                        </div>
                        {/* <Separator orientation="vertical" className="h-[500px] bg-neutral-700" /> */}
                        <div className=" space-y-4">
                            <h4 className="gen-sans-bold text-2xl">Education</h4>
                            <div>
                                <p className="font-bold">University of St. La Salle - PH</p>
                                <p>August 2021 - May 2025</p>
                                <ul className="text-sm">

                                    <li>3.8 GPA (97% Equivalent)</li>
                                    <li>Full Government Scholar</li>
                                    <li>6x Dean's List awardee</li>
                                </ul>
                                {/* <p>October 2024 - Present</p> */}
                            </div>

                        </div>
                    </div>
                </div>
                <div className=" space-y-4">
                    <h4 className="gen-sans-bold text-2xl">Leadership Experience</h4>
                    <div>
                        <p className="font-bold">Academic Affairs Head</p>
                        <p>Computer Science Society - USLS</p>
                        <p>August 2024 - Present</p>
                        <ul className="text-sm">
                            <li>Spearheaded a partnership with Datacamp, providing 40+ students with free data science courses</li>
                            <li>Organized a mentorship program, training 30+ freshmen students with C++ programming</li>
                            {/* <li></li> */}
                        </ul>
                        {/* <p>October 2024 - Present</p> */}
                    </div>
                    <div>
                        <p className="font-bold">Vice President for Programs</p>
                        <p>Developers Connect (DEVCON) Bacolod</p>
                        <p>February 2024 - September 2024</p>
                        <ul className="text-sm">
                            <li>Co-organized a 2-day workshop on data science, reaching over 300+ students across 2 universities</li>
                            <li>Led an outreach program in partnership with a local non-profit organization</li>

                            {/* <li></li> */}
                        </ul>
                        {/* <p>October 2024 - Present</p> */}
                    </div>
                    <div>
                        <p className="font-bold">Chief Information Officer</p>
                        <p>Google Developer Student Clubs - USLS</p>
                        <p>August 2023 - May 2024</p>
                        <ul className="text-sm">
                            <li>Facilitated school events such as Infosession</li>
                            <li>Won as Best Special Interest Club 2024</li>
                            {/* <li></li> */}
                        </ul>
                        {/* <p>October 2024 - Present</p> */}
                    </div>

                </div>
                <div className=" space-y-4">
                    <h4 className="gen-sans-bold text-2xl">Awards</h4>
                    <div>
                        <p className="font-bold">University of St. La Salle - PH</p>
                        <p>August 2021 - May 2025</p>
                        <ul className="text-sm">

                            <li>3.8 GPA (97% Equivalent)</li>
                            <li>Full Government Scholar</li>
                            <li>6x Dean's List awardee</li>
                        </ul>
                        {/* <p>October 2024 - Present</p> */}
                    </div>

                </div>
            </div>
        </div>
    )
}