const GalleryHolder = () => {
    return (
        <>
            
            <div style={{padding: '1rem'}} class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                
                <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <div class="lg:col-span-3">
                        <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl py-2">Nimbl - Marketing Application</h1>
                        <div className="d-flex flex-wrap my-3 flex gap-2">
                                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">Web Application</span>
                                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">GraphQL</span>
                                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">React</span>
                                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">Typescript</span>
                                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">Cosmos Db</span>
                                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">Firebase</span>
                                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">Jest</span>
                                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">Cypress</span>
                            </div>
                        <p class="mt-3 text-lg text-gray-800">Nimbl is a web based application that allows a user to configure a promotional email, webpage for address collection, and a direct mail gift to be sent to a list of recipients. It was written in React Typescript on the frontend and Node in the back, and uses a GraphQl API. This API contains a number of external datasources including Azure Cosmos Db/Table Storage, PFL's own Generic API, and some third party services like Firebase for authentication and Mailgun for email communications. This application was designed and architected by me, and built by myself and a couple other PFL developers over a period of around 8 months.  </p>

                        
                        
                    </div>
                    

                    <div class="lg:col-span-4 mt-10 lg:mt-0">
                        <img class="w-full rounded-xl" src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80" alt="Image Description" />
                    </div>
                    
                </div>
                
            </div>
            
        </>
    )
};

export default GalleryHolder;