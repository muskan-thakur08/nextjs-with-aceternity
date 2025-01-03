import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

export default function HeroSection() {
    return (
        <div
            className="h-auto md:h-[40rem] flex items-center justify-center flex-col mx-auto w-full py-10 md:py-0 rounded-md relative overflow-hidden"
        >
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="p-4 relative flex items-center justify-center flex-col">
                <h1
                    className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold text-neutral-200">
                    Master the art of music</h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
                <div className="mt-5">
                    <Link href={"/courses"}>
                       <Button
                       borderRadius="1.75rem"
                       className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                       >Explore Courses</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}