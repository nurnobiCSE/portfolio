const FooterSection = () => {
    return (
        <footer className="flex flex-col gap-4 bg-[#ffb800] py-7">
            <ul className="flex flex-col md:flex-row gap-6 cursor-pointer text-center justify-center">
                <li><a href="/" className="hover:text-[#2d5668] font-ppns text-base">HOME</a></li>
                <li><a href="#about" className="hover:text-[#2d5668] font-ppns text-base">ABOUT</a></li>
                <li><a href="#portfolio" className="hover:text-[#2d5668] font-ppns text-base">PORTFOLIO</a></li>
                <li><a href="#contact" className="hover:text-[#2d5668] font-ppns text-base">CONTACT</a></li>
            </ul>
            <p className="font-pm text-xl font-bold text-center">Mr.NURNOBI</p>
            <p className="text-xs text-center">c@pyright by Mr.Nurnobi Hossain -2023</p>
        </footer>
    )
}

export default FooterSection
