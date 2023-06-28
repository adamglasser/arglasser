import Polygon from './polygon.svg'
const Hero = () => {
    return (
        <>
            <div style={{ backgroundImage: `url('${Polygon}')`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top', padding: '1rem'}} className={`relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2`}>
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pb-10">

                    <div className="mt-5 max-w-2xl text-center mx-auto">
                        <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                            Let's Create {``}
                            <span className="bg-clip-text bg-gradient-to-tl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent">Together</span>
                        </h1>
                    </div>

                    <div className="mt-5 max-w-3xl text-center mx-auto">
                        <p className="text-lg text-gray-600">I have a wide variety of experience designing and implemnting impactful and engaging digital solutions for brands both large and small. Check out some of my previous work below!</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero