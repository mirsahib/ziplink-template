import React from "react";

type Props = {};

export default function Banner({}: Props) {
    return (
        <section className="text-white body-font relative bg-indigo-500">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col align-middle text-center w-full">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4">
                        Unlock your link potential
                    </h1>
                </div>
                <div className="p-2 w-full">
                    <button className="flex mx-auto text-gray-800 bg-gray-200 border-0 py-2 px-8 focus:outline-none hover:bg-gray-300 rounded text-lg font-semibold">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
}
