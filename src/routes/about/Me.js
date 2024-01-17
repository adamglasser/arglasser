const Me = () => {
    return (
        <>
        <div className="container">
            <section>
                <div
                    class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                >
                    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div
                            class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                        >
                            <img
                                alt="Party"
                                src='https://arglasser.azureedge.net/public/adam-min.jpg'
                                class="absolute inset-0 h-40 2-40"
                            />
                        </div>

                        <div class="lg:py-24">
                            <h2 class="text-3xl font-bold sm:text-4xl">Grow your audience</h2>

                            <p class="mt-4 text-gray-600">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                                atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                                veniam tempora deserunt? Molestiae eius quidem quam repellat.
                            </p>

                            <a
                                href="#"
                                class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started Today
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            </div>
            
        </>
    )
}

export default Me