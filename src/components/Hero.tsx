import Image from "next/image";
import React from "react";

type Props = {};

export default function Hero({}: Props) {
    return (
        <section className="text-gray-600 body-font container mx-auto">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
                        Unlock Your Link Potential:
                        <br className="hidden lg:inline-block" />
                        Supercharge Marketing with ZipLink
                    </h1>
                    
                    <div className="flex justify-center">
                        <button className="inline-flex font-normal text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Get Started For Free
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image  src={"/images/hero.png"} width={720} height={600} alt={"hero"} priority={true}/>
                </div>
            </div>
        </section>
    );
}
