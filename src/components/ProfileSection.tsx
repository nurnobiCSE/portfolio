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
                <p className="font-ppns text-xl">I am a web developer</p>
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
