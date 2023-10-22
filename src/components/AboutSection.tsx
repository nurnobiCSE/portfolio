const AboutSection = () => {
    return (
        <div id="about" className="flex flex-col md:flex-row gap-14 justify-center items-center mx-auto md:mt-40 ">
            {/* image */}

            <img className="md:w-96 md:h-[440px] w-72 h-96" src="images/profile/nur.png" alt="" />

            {/* about me */}
            <div>
                <div className="flex gap-3 justify-center md:justify-start">
                    <span className="font-ppns font-normal text-2xl md:text-left text-center">ABOUT</span>
                    <svg className="mt-6" width="72" height="2" viewBox="0 0 72 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H71" stroke="black" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div> <br />
                {/* end about _____ */}
                <p className="text-[#FFB800] font-pm text-lg md:text-2xl text-center md:text-left">Mr. NURNOBI HOSSAIN</p> <br />
                <p className="font-ppns text-justify">"I am a web developer skilled in React, Tailwind CSS, and Django, with a passion for creating elegant and efficient web solutions. With a strong foundation in front-end and back-end technologies, I craft responsive and user-friendly applications that delight users and meet business objectives. I'm dedicated to delivering high-quality, maintainable code and thrive on solving complex problems. Let's work together to bring your digital vision to life."</p>
                <br />
                <div className="flex gap-3">
                    <span className="font-ppns font-normal text-2xl">SKILLS</span>
                    <svg className="mt-6" width="72" height="2" viewBox="0 0 72 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H71" stroke="black" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
                <br />
                <div className="flex flex-row gap-4">
                    <ul>
                        <li className="text-lg font-ppns font-normalw"><span className="text-[#FFB800] text-2xl">o </span>HTML/CSS</li>
                        <li className="text-lg font-ppns font-normalw"><span className="text-[#FFB800] text-2xl">o </span>Bootstrap</li>
                        <li className="text-lg font-ppns font-normalw"><span className="text-[#FFB800] text-2xl">o </span>TailwindCSS</li>
                        <li className="text-lg font-ppns font-normalw"><span className="text-[#FFB800] text-2xl">o </span>React</li>
                    </ul>
                    <ul>
                        <li className="text-lg font-ppns font-normalw"><span className="text-[#FFB800] text-2xl">o </span>Python(Django)</li>
                        <li className="text-lg font-ppns font-normalw"><span className="text-[#FFB800] text-2xl">o </span>MySql</li>
                        <li className="text-lg font-ppns font-normalw"><span className="text-[#FFB800] text-2xl">o </span>Sqlite</li>
                        <li className="text-lg font-ppns font-normalw"><span className="text-[#FFB800] text-2xl">o </span>PostgreSQL</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default AboutSection
