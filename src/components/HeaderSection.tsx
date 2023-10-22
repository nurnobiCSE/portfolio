const HeaderSection = () => {
    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="/" className="hover:text-[#FFB800] font-ppns text-base">HOME</a></li>
                            <li><a href="#about" className="hover:text-[#FFB800] font-ppns text-base">ABOUT</a></li>
                            <li><a href="#portfolio" className="hover:text-[#FFB800] font-ppns text-base">PORTFOLIO</a></li>
                            <li><a href="#contact" className="hover:text-[#FFB800] font-ppns text-base">CONTACT</a></li>
                        </ul>
                    </div>
                    <a className="text-[#FFB800] text-3xl font-pm font-bold">NUR</a>
                </div>
                <div className="navbar-end hidden md:flex">
                    <ul className="flex flex-row gap-6 cursor-pointer">
                        <li><a href="/" className="hover:text-[#FFB800] font-ppns text-base">HOME</a></li>
                        <li><a href="#about" className="hover:text-[#FFB800] font-ppns text-base">ABOUT</a></li>
                        <li><a href="#portfolio" className="hover:text-[#FFB800] font-ppns text-base">PORTFOLIO</a></li>
                        <li><a href="#contact" className="hover:text-[#FFB800] font-ppns text-base">CONTACT</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default HeaderSection
