import Logo from "@/app/assets/retain-iq.png"
import Image from "next/image";
import { IconType } from 'react-icons';
import { IoImageOutline } from "react-icons/io5";
import { FaMeta } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FaShopify } from "react-icons/fa6";

type NavItem = {
    icon: IconType;
    label: string;
}

const upperNavItems: NavItem[] = [
    { icon: IoImageOutline, label: 'Image' },
    { icon: FaMeta, label: 'Meta' },
    { icon: FaShopify, label: 'Shopify'},
]

const lowerNavItems: NavItem[] = [
    { icon: IoSettingsOutline, label: 'Settings' },
]

function NavIcon({ icon: Icon, label }: { icon: IconType; label: string }) {
    return (
        <div className="flex justify-center">
            <button className="text-gray-400 hover:text-white" title={label}>
                <Icon size={24} />
            </button>
        </div>
    );
}

export default function Sidebar() {
    return (
        <div className="w-16 bg-black flex flex-col py-2">
            <div className="py-8 px-4">
                <Image src={Logo} alt="logo.png" width={32} />
            </div>
            <div className="flex-1 flex flex-col justify-between py-4">
                <div className="space-y-6">
                    {upperNavItems.map((item) => (
                        <NavIcon key={item.label} icon={item.icon} label={item.label} />
                    ))}
                </div>
                <div className="space-y-6">
                    {lowerNavItems.map((item) => (
                        <NavIcon key={item.label} icon={item.icon} label={item.label} />
                    ))}
                </div>
            </div>
        </div>
    );
}
