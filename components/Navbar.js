import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const listMenu = [
    { name: "Home", href: "/" },
    { name: "Promotion", href: "/promotion" },
    { name: "Directory", href: "/directory" },
    { name: "Resdience", href: "/residence" },
    { name: "Contact us", href: "/contactus" },

];

const Navbar = () => {


    const [navbarOpen, setNavbarOpen] = useState(false);
    const [hover, setHover] = useState(false);
    const router = useRouter();
    const { locale } = router;

    const handleMouseIn = () => {
        setHover(true);
    };


    const handleMouseOut = () => {
        setHover(false);
    };

    // const handleMouseOut = () => setTimeout(() => setHover(false), 2000);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    };


    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale, scroll: false });
    };


    return (
        <>
            <div className="w-full flex justify-center mt-6 ">

                <div className="px-4 md:px-10 max-w-7xl h-16 w-full flex justify-center items-center relative ">
                    <div className="w-96 h-full relative ">
                        <Image
                            src="/assets/OSP-Logo.png"
                            alt="logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div className=" h-10  absolute right-4 md:right-10">
                        <div className="w-full flex justify-end items-center">
                            <div className="w-4 h-4 sm:w-6 sm:h-6 relative">
                                <Image
                                    src="/assets/translation.png"
                                    alt="flag"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>

                            <select
                                name="changeLocal"
                                onChange={changeLanguage}
                                defaultValue={locale}
                                className="text-black  bg-transparent  text-xs sm:text-sm "
                            >
                                <option className="" value="en">
                                    English
                                </option>
                                <option className="" value="th">
                                    ภาษาไทย
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="!z-50 fixed w-full flex justify-center bottom-8 ">
                <div className="max-w-7xl p-3 px-4 rounded-full w-fit h-fit bg-[#0A3255] bg-gradient-to-r from-[#292D76] to-[#0A3255] inline-flex text-white items-center justify-center gap-3 drop-shadow-lg hover:scale-105 duration-300 cursor-pointer ">
                    {listMenu.map((item, index) => (
                        <p key={index} className={classNames(router.pathname === item.href ? "bg-white text-black p-1 py-2" : "hover:bg-slate-500", "p-2 rounded-full px-4 text-sm duration-500")}>{item.name}  </p>
                    ))}


                </div>

            </div>
        </>
    );
};

export default Navbar;