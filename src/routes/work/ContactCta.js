import Computer from './gen-assets/3d-Computer-min.png'
const ContactCta = () => {
    return (
        <>
            <div class="relative overflow-hidden items-center px-6">
                <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24 bg-purple-200 rounded-xl my-10">
                    <div class="text-center px-6">
                        <h1 class="text-4xl sm:text-6xl font-bold text-neutral-800">
                            Contact
                        </h1>

                        <p class="mt-3 text-gray-600">
                            Want to learn more? Reach out to me!
                        </p>

                        <div class="mt-7 sm:mt-8 mx-auto max-w-xl relative">

                            <a
                                class="group flex items-center justify-between gap-4 rounded-lg border border-purple-600 bg-purple-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
                                href="/Contact"
                            >
                                <span
                                    class="font-medium text-white transition-colors group-hover:text-purple-600 group-active:text-purple-500"
                                >
                                    Find out more
                                </span>

                                <span
                                    class="shrink-0 rounded-full border border-current bg-white p-2 text-purple-600 group-active:text-purple-500"
                                >
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
                            </a>



                            <div class="hidden md:block absolute top-0 right-0 -translate-y-12 translate-x-20">
                                <svg class="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                                    <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                                    <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                                </svg>
                            </div>



                            <div class="hidden md:block absolute bottom-0 left-0 translate-y-10 -translate-x-32">
                                <svg class="w-40 h-auto text-cyan-500" width="347" height="188" viewBox="0 0 347 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426" stroke="currentColor" stroke-width="7" stroke-linecap="round" />
                                </svg>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactCta;