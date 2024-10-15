'use client'
import { FiArrowLeft } from "react-icons/fi";
import { useState } from "react";

export default function Header() {
    const [title, setTitle] = useState('Rules Creation');
    return (
        <div className="flex flex-row justify-between py-6 border-b-2 border-gray-50">
            <div className="flex flex-row justify-between space-x-4 items-center">
                <button className="text-black hover:text-gray-800" title="back">
                    <FiArrowLeft size={28} />
                </button>
                <input type="text" value={title} className="border-b border-black focus:outline-none text-2xl font-semibold p-2" onChange={(e) => setTitle(e.target.value)} />
                <button className="h-max text-xs bg-blue-50 text-blue-400 font-semibold px-2 rounded-full border-2 border-blue-400 shadow-sm">
                    Primary Feed
                </button>
            </div>

            <button className="h-max text-sm px-4 py-3 bg-[#01af57] text-white rounded-md">
                Publish Feed
            </button>

        </div>
    );
}