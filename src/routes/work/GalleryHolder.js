// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";


export const RightGalleryHolder = ({
    title,
    skills,
    description,
    buttonText,
    buttonLink,
    imageUrl
}) => {
    return (
        <>

            <div style={{ padding: '1rem' }} class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 lg:mb-6">
                <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <div class="lg:col-span-3">
                        <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl pb-3 pt-6 lg:pt-3">{title}</h1>
                        <div className="d-flex flex-wrap my-3 flex gap-2">
                            {skills && skills.map((skill) => {
                                return (
                                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">{skill}</span>
                                )
                            })}
                        </div>
                        <p class="mt-3 text-lg text-gray-800">{description}</p>

                        <div class="text-start mt-4">
                            <a
                                class="group relative inline-flex items-center overflow-hidden rounded bg-purple-500 px-8 py-3 text-white focus:outline-none focus:ring active:bg-purple-400"
                                target="_blank"
                                href={buttonLink}
                            >
                                <span class="absolute -start-full transition-all group-hover:start-4">
                                    <svg
                                        class="h-5 w-5 rtl:rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </span>

                                <span class="text-sm font-medium transition-all group-hover:ms-4">
                                    {buttonText}
                                </span>
                            </a>
                        </div>
                    </div>


                    <div class={`lg:col-span-4 mt-10 lg:mt-0 order-first lg:order-last`}>
                            <img class="w-full rounded-xl" src={imageUrl} alt={title} />
                    </div>
                </div>
            </div>

        </>
    )
};

export const LeftGalleryHolder = ({
    title,
    skills,
    description,
    buttonText,
    buttonLink,
    imageUrl
}) => {
    return (
        <>

            <div style={{ padding: '1rem' }} class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 lg:mb-6">
                <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <div class="lg:col-span-3">
                        <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl pb-3 pt-6 lg:pt-3">{title}</h1>
                        <div className="d-flex flex-wrap my-3 flex gap-2">
                            {skills && skills.map((skill) => {
                                return (
                                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">{skill}</span>
                                )
                            })}
                        </div>
                        <p class="mt-3 text-lg text-gray-800">{description}</p>

                        <div class="text-start mt-4">
                            <a
                                class="group relative inline-flex items-center overflow-hidden rounded bg-purple-500 px-8 py-3 text-white focus:outline-none focus:ring active:bg-purple-400"
                                target="_blank"
                                href={buttonLink}
                            >
                                <span class="absolute -start-full transition-all group-hover:start-4">
                                    <svg
                                        class="h-5 w-5 rtl:rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </span>

                                <span class="text-sm font-medium transition-all group-hover:ms-4">
                                    {buttonText}
                                </span>
                            </a>
                        </div>
                    </div>


                    <div class={`lg:col-span-4 mt-10 lg:mt-0 order-first lg:order-first`}>
                            <img class="w-full rounded-xl" src={imageUrl} alt={title} />
                    </div>
                </div>
            </div>

        </>
    )
};

