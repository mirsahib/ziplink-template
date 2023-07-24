import React from "react";
import { Facebook,Twitter,Instagram } from 'lucide-react';

type Props = {};

export default function Content({}: Props) {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                        How it works
                    </h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-full">
                            <div className="relative mb-5">
                                <label className="leading-7 text-sm text-gray-600">
                                    Shorten your link
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-5">
                                <label className="leading-7 text-sm text-gray-600">
                                    Alias (Optional)
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-5 p-2 w-full mb-5">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">
                                    Your Link
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="flex relative gap-5 mt-5">
                                <button className="text-indigo-500">
                                    <Facebook/>
                                </button>
                                <button className="text-indigo-500">
                                    <Twitter/>
                                </button>
                                <button className="text-indigo-500">
                                    <Instagram/>
                                </button>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Sign up to claim your link
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
