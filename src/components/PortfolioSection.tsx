import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faInstagram, faFacebook, faGithub, } from '@fortawesome/free-brands-svg-icons';
import { faLink } from "@fortawesome/free-solid-svg-icons";

const PortfolioSection = () => {
    return (
        <div id="portfolio" className="mt-20 md:mt-40">
            <div className="flex gap-3 text-center items-center justify-center">
                <span className="font-ppns font-normal text-2xl">PORTFOLIO</span>
                <svg className="mt-6" width="72" height="2" viewBox="0 0 72 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H71" stroke="black" stroke-width="2" stroke-linecap="round" />
                </svg>
            </div>

            <ul className="flex items-center justify-center flex-col md:flex-row gap-5 mt-4">
                <li className="border-b-4 border-white hover:border-[#FFB800] text-blue-800 md:text-black font-bold md:font-normal hover:text-[#FFB800]"><a href="">ALL</a></li>
                <li className="border-b-4 border-white hover:border-[#FFB800] text-blue-800 md:text-black font-bold md:font-normal hover:text-[#FFB800]"><a href="">BackEnd</a></li>
                <li className="border-b-4 border-white hover:border-[#FFB800] text-blue-800 md:text-black font-bold md:font-normal hover:text-[#FFB800]"><a href="">FrontEnd</a></li>
            </ul>
             
            <div className="max-w-screen-lg mx-auto flex flex-wrap justify-center gap-10 mt-10">
                <div className="relative bg-black w-72 shadow shadow-slate-400 rounded-md">
                    <p className="absolute items-end inset-0 pb-4 flex justify-center text-[#FFB800] text-xl font-ppns font-bold hover:hidden">Hotel Booking</p>
                    <a href="https://nurnobicse.github.io/React-vite-Hotel-Book/" target="_blank" className="block hover:opacity-30">
                        <img src="images/portfolio/hotelbook.png" alt="Your Image" className="w-72 h-auto rounded-md" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <FontAwesomeIcon icon={faLink} className="text-4xl text-white" />
                        </div>
                    </a>
                </div>
                <div className="relative bg-black w-72 shadow shadow-slate-400 rounded-md">
                    <p className="absolute items-end inset-0 pb-4 flex justify-center text-[#FFB800] text-xl font-ppns font-bold hover:hidden">Bike Zone</p>
                    <a href="https://nurnobicse.github.io/react-bikezone/" target="_blank" className="block hover:opacity-30">
                        <img src="images/portfolio/bikezone.png" alt="Your Image" className="w-72 h-auto rounded-md" />
                        <div className="absolute inset-0 flex items-center justify-center md:opacity-0 opacity-100 hover:opacity-100 transition-opacity duration-300">
                            <FontAwesomeIcon icon={faLink} className="text-4xl text-white" />
                        </div>
                    </a>
                </div>
                <div className="relative bg-black w-72 shadow shadow-slate-400 rounded-md">
                    <p className="absolute items-end inset-0 pb-4 flex justify-center text-[#FFB800] text-xl font-ppns font-bold hover:hidden">Bike Zone</p>
                    <a href="https://nurnobicse.github.io/pricebd/" target="_blank" className="block hover:opacity-30">
                        <img src="images/portfolio/price.png" alt="Your Image" className="w-72 h-auto rounded-md" />
                        <div className="absolute inset-0 flex items-center justify-center md:opacity-0 opacity-100 hover:opacity-100 transition-opacity duration-300">
                            <FontAwesomeIcon icon={faLink} className="text-4xl text-white" />
                        </div>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default PortfolioSection
