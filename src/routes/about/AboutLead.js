const AboutLead = () => {
    return (
        <>
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div class="relative p-6 md:p-16">

                    <div class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                        <div class="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                            <h2 class="text-2xl text-gray-800 font-bold sm:text-3xl">
                                Hey there 👋
                            </h2>
                            <h2 class="text-2xl text-gray-800 font-bold sm:text-3xl mt-4">
                                I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">Adam Glasser</span>, a solutions architect based in Bozeman, MT.
                            </h2>



                            <nav class="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
                                <button type="button" class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
                                    <span class="flex">
                                        <svg class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                                            <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        </svg>
                                        <span class="grow ml-6">
                                            <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">Frontend Web Developemnt</span>
                                            <span class="block mt-1 text-gray-800">I have experience designing and delivering modern, responsive, and engaging front end websites and single page applications.</span>
                                        </span>
                                    </span>
                                </button>

                                <button type="button" class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl" id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
                                    <span class="flex">
                                        <svg class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
                                        </svg>
                                        <span class="grow ml-6">
                                            <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">Backend Apis</span>
                                            <span class="block mt-1 text-gray-800">I've created and worked on REST and GraphQL Apis written in both Node and Python, as well as experience working with Odata.</span>
                                        </span>
                                    </span>
                                </button>

                                <button type="button" class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl" id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
                                    <span class="flex">
                                        <svg class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />
                                        </svg>
                                        <span class="grow ml-6">
                                            <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">Data and Analytics</span>
                                            <span class="block mt-1 text-gray-800">I can help you create and impelement an ETL strategy, perform data visualization and analysis using BI tools like Tableau and Power BI, and have signficant experience working in both SQL and Pandas.</span>
                                        </span>
                                    </span>
                                </button>
                            </nav>

                        </div>


                        <div class="lg:col-span-6">
                            <div class="relative">

                                <div>
                                    <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                                        <img class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Web Dev" />
                                    </div>

                                    <div id="tabs-with-card-2" class="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
                                        <img class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="https://images.unsplash.com/photo-1634838080334-28befa9efe80?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Backend Dev" />
                                    </div>

                                    <div id="tabs-with-card-3" class="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
                                        <img class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="https://images.unsplash.com/photo-1529310399831-ed472b81d589?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Data" />
                                    </div>
                                </div>



                                <div class="hidden absolute top-0 right-0 translate-x-20 md:block lg:translate-x-20">
                                    <svg class="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                                        <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                                        <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                                    </svg>
                                </div>

                            </div>
                        </div>

                    </div>



                    <div class="absolute inset-0 grid grid-cols-12 w-full h-full">
                        <div class="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutLead