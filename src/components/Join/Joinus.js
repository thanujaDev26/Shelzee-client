import joinus_header from '../../images/joinus-header.jpg'



export default function Joinus(props) {
    return (
        <div className="joinus">
            {/* Header Section */}
            <header className="relative text-center">
                 <img src={joinus_header} alt="Background" className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-[450px] xl:h-[600px]" />
                    <div className="absolute inset-0 flex flex-col justify-center p-8 bg-black bg-opacity-30">
                        <h1 className="mb-4 text-5xl font-bold text-right" style={{ color: '#00246A' }}>Together, <br/> We Can Do More</h1>
                            <p className="text-lg text-right text-black">
                            Join us in our mission to create a better world.<br/>
                            Whether you're interested in volunteering,<br/>
                            becoming a member, or supporting our initiatives,<br/>
                            there's a place for you in our community
                            </p>
                    </div>
            </header>

           { /*<section className="flex flex-col justify-around p-4 md:flex-row bg-gray-50">
                <div className="w-full p-6 mb-4 text-center bg-red-100 rounded-lg shadow-md md:w-1/3 md:mb-0">
                    <h2 className="mb-2 text-2xl font-semibold">SUPPORT US</h2>
                    <p>Your help makes a difference.</p>
                </div>
                <div className="w-full p-6 mb-4 text-center bg-teal-100 rounded-lg shadow-md md:w-1/3 md:mb-0">
                    <h2 className="mb-2 text-2xl font-semibold">JOIN US</h2>
                    <p>Be a part of our community.</p>
                </div>
                <div className="w-full p-6 mb-4 text-center bg-blue-100 rounded-lg shadow-md md:w-1/3 md:mb-0">
                    <h2 className="mb-2 text-2xl font-semibold">VISIT US</h2>
                    <p>Explore our world and connect.</p>
                </div>
            </section>*/}
                  

    
        </div>
    );
}
