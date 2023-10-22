import { faFacebook, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const myFacebook = "https://www.facebook.com/nurnobi.cse";
const myLinkedin = "https://www.linkedin.com/in/nurnobicse";
const myGithub = "https://www.github.com/nurnobicse";

const ContactSection = () => {
    return (
        <div id="contact" className="mt-20">
            <div className="flex gap-3 text-center items-center justify-center">
                <span className="font-ppns font-normal text-2xl">CONTACT</span>
                <svg className="mt-6" width="72" height="2" viewBox="0 0 72 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H71" stroke="black" stroke-width="2" stroke-linecap="round" />
                </svg>
            </div> <br />
            <p className="text-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#000] hover:text-blue-900 text-lg" />
                <a className="text-blue-950 mb-2" href="https://mail.google.com/mail/u/0/#inbox?compose=new"> nurnobicse4114@gmail.com</a> <br />
                Or,</p>

            <div className="flex flex-col gap-5 md:flex-row md:gap-52 justify-center mt-10" >
                <div>
                    <p className="font-pm font-normal text-2xl text-[#ffb800] uppercase py-5">let's work</p>
                    <p className="font-ppns text-sm text-justify md:pr-40">
                        It's important to have a brand that represents you and what you stand for. That's why I'm committed to helping you create a website that truly represents you, resonates with your audience, and makes a real difference. Together we can create a website that inspires, inspires and makes an impact. Let's do that!
                    </p>

                    <div className="flex mb-2 flex-row mt-10 gap-4">
                        <a href={myLinkedin} target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="text-[#ffb800] hover:text-blue-900 text-3xl" /></a>
                        <a href={myFacebook} target="_blank"><FontAwesomeIcon icon={faFacebook} className="text-[#ffb800] hover:text-blue-900 text-3xl" /></a>
                        <a href={myGithub} target="_blank"><FontAwesomeIcon icon={faGithub} className="text-[#ffb800] hover:text-blue-900 text-3xl" /></a>
                    </div>
                </div>

                {/* form part */}
                <div>
                    <form action="">
                        <label htmlFor="name">Name</label> <br />
                        <input className="border-none rounded-xl bg-[#0000000F]" type="text" name="name" id="" placeholder="Enter your Name" required /> <br /> <br />
                        <label htmlFor="email">Email</label> <br />
                        <input className="border-none rounded-xl bg-[#0000000F]" type="email" name="email" id="" placeholder="Enter your email"  required/> <br /> <br />
                        <label htmlFor="message">Message</label> <br />
                        <textarea className="border-none rounded-xl bg-[#0000000F]" name="message" id="" placeholder="Type your messages" cols={22} required></textarea><br />
                        <div className="flex md:justify-end py-3">
                            <button className="hover:text-[#ffb800] hover:bg-blue-950 bg-[#ffb800] text-white rounded-full px-7 py-1" type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
