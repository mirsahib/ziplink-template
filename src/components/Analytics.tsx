import Image from "next/image";
import React from "react";

type Props = {};

export default function Analytics({}: Props) {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                        Analytics
                    </h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="flex gap-5 p-2">
                            <div>
                                <Image
                                    src={"/images/chart_analysis.png"}
                                    width={320}
                                    height={600}
                                    alt="chart"
                                />
                                <p>Social Media Link Performance</p>
                            </div>
                            <div className="text-center">
                                <Image
                                    src={"/images/geo_analysis.png"}
                                    width={320}
                                    height={600}
                                    alt="chart"
                                />
                                <p>Link location tracker</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* */}
            </div>
        </section>
    );
}
