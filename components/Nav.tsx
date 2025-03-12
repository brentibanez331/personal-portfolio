export default function Nav() {
    return (
        <div className="flex justify-between w-full absolute top-0 z-[999] mix-blend-difference text-white sticky px-4 pt-2 gen-sans-bold">
            <div className="">brent.</div>
            <div className="flex">
                <p><span className="hover:text-neutral-500 transition ease cursor-pointer">about</span>,</p>
                <p><span className="hover:text-neutral-500 transition ease cursor-pointer">work</span>,</p>
                <p><span className="hover:text-neutral-500 transition ease cursor-pointer">contact</span></p>
            </div>
            <div className="">bacolod, ph</div>
        </div>
    )
}