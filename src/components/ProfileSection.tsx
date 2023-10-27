import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const myFacebook = "https://www.facebook.com/nurnobi.cse";
const myLinkedin = "https://www.linkedin.com/in/nurnobicse";
const myGithub = "https://www.github.com/nurnobicse";
const ProfileSection = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between mt-32">
            {/* social icon */}
            <div className="hidden md:flex mb-2 flex-col mt-10 md:mt-20 gap-6">
                <a href={myLinkedin} target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="text-4xl" /></a>
                <a href={myFacebook} target="_blank"><FontAwesomeIcon icon={faFacebook} className="text-4xl" /></a>
                <a href={myGithub} target="-blank"><FontAwesomeIcon icon={faGithub} className="text-4xl" /></a>
            </div>

            {/* profile */}
            <div className="flex gap-5 flex-col justify-center items-center">
                <img className="w-60 md:w-72" src="images/profile/nur.jpeg" alt="" /> <br />
                <p className="font-pm font-bold text-3xl text-[#FFB800]">Mr.Nurnobi Hossain</p>
                <p className="font-ppns text-xl">I am a web developer</p> <br />
                <p className="font-pm font-bold text-3xl text-[#FFB800]">EDUCATIONAL BACKGROUND</p>
                <ul className="flex flex-col gap-4">
                    <li>
                        Degree
                        <p className="text-[#FFB800] font-bold text-lg">Bachelor of Science (B.Sc) in Computer Science</p>
                    </li>
                    <li>
                        Univarsity <p className="text-[#462a68]">
                            <a className="hover:underline font-bold text-lg" href="https://www.bubt.edu.bd/" target="_blank">BUBT (Bangladesh University of Business and Technology)</a>
                        </p>
                    </li>
                    <li className="flex flex-col md:flex-row md:gap-8">
                        <div>
                            <p> Graduation Year</p>
                            <p className="text-[#FFB800] font-bold text-lg">2023</p>

                        </div>
                        <p className="hidden md:block text-[#ffb800]">|</p>
                        <div>
                            <p> GPA</p>
                            <p className="text-[#FFB800] font-bold text-lg">
                            3.69 <span className="text-green-800">out of</span> <span className="text-red-950">4.00</span>
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
            <div className="flex md:hidden justify-center mb-2 mt-10 md:mt-8 gap-6">
                <a href={myLinkedin} target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="text-4xl" /></a>
                <a href={myFacebook} target="_blank"><FontAwesomeIcon icon={faFacebook} className="text-4xl" /></a>
                <a href={myGithub} target="-blank"><FontAwesomeIcon icon={faGithub} className="text-4xl" /></a>
            </div>

            {/* title vertivcal */}
            <div className="mt-36">
                <p className="-mr-14 px-0 hidden md:block tracking-widest uppercase -rotate-90">webdeveloper</p>
            </div>
        </div>
    )
}

export default ProfileSection
