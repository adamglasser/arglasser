const Me = () => {
    return (

        <>
            <section>
                <div class="mx-auto max-w-screen-xl px-4 py-16 w-auto sm:px-6 xl:px-8">
                    <div class="grid grid-cols-1 xl:h-auto xl:grid-cols-2">
                        <div class="relative z-10 xl:py-10">
                            <div class="relative h-64 sm:h-0 xl:h-full">
                                <img
                                    alt="House"
                                    src="https://arglasser.azureedge.net/public/adam-hike-min.PNG"
                                    class="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div class="relative flex items-center bg-gray-100">
                            <span
                                class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                            ></span>

                            <div class="p-8 sm:p-16 xl:p-24">
                                <h2 class="text-2xl text-gray-800 font-bold sm:text-3xl">
                                    Hey there 👋
                                </h2>
                                <h2 class="text-2xl text-gray-800 font-bold sm:text-3xl mt-4">
                                    I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">Adam Glasser</span>, a solutions architect based in Bozeman, MT.
                                </h2>

                                <br></br>
                                <p class="text-lg">
                                    I enjoy tackling by designing and implementing solutions to meet those challenges through technology. I've worked with a wide variety of customers across diverse industries to help marketing, sales, human resources, product, and technology teams solve challenges quickly and realize business impact.
                                </p>
                                <br></br>
                                <p class="text-lg">
                                    When I'm not working I spend the vast majority of my time backcountry skiing, mountain biking, and generally enjoying time outside with my dog Woody 🐶
                                </p>

                                <a
                                    href="mailto:aglasser7205@gmail.com"
                                    class="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                >
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Me