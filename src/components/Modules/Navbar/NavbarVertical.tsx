import { navbarVerticalItems } from "../../../constants/navbarItems";
import { Link, Image, User } from "@nextui-org/react"
import logo from "/icons/logo-mobile.svg"
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import profile from "../../../assets/images/joker.webp"

export default function NavbarVertical({ isNavbarShown }: { isNavbarShown: boolean }) {
    return (
        <div className={`w-[220px] fixed h-screen ${isNavbarShown ? 'showSidebarAnimation' : 'hideSidebarAnimation'} bg-white/10 backdrop-blur-2xl z-50 transition-all duration-500 py-6 flex flex-col justify-between`}>
            <div><Image src={logo} alt="" className="mb-6 px-4" />
                <ul className="space-y-2 px-4 mb-4">
                    {navbarVerticalItems.map((item, index) => (
                        <li key={index}><Link className="text-white hover:text-black-12 transition-all text-lg" href={item.route}>{item.title}</Link></li>
                    ))}
                </ul>
                <ThemeSwitch />
            </div>
            <User classNames={{
                base: ["rounded-md backdrop-blur-2xl mx-3 p-2 cursor-pointer"],
                description: ["text-red-45"]
            }}
                name="Mohammad Nosrati"
                description="Premium"
                avatarProps={{
                    src: profile
                }} />
        </div>
    )
}
