import React from "react";
import { Variant } from "../types";
import { IoAddOutline } from 'react-icons/io5';
import { LiaEdit } from "react-icons/lia";
import AddItem from "../ui/AddItem";

function VariantItem({ variant }: { variant: Variant }) {
    return (
        <div className="w-44 h-44 border-2 border-dashed text-xs bg-white justify-center flex flex-col items-center p-4 rounded-md space-y-1">
            {
                variant.imageUrl !== ""
                    ?
                    <>
                        <div className="group relative w-28 h-28 rounded-md overflow-hidden">
                            <img
                                src={variant.imageUrl}
                                alt="img"
                                className="w-full h-full object-none"
                            />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="bg-white p-2 w-max rounded-md">
                                    <LiaEdit className="text-black w-6 h-6" />
                                </div>
                            </div>
                        </div>
                        <p className="w-32 truncate text-xs font-semibold">
                            {variant.imageCaption}
                        </p>
                    </>
                    : <button className="border rounded-md p-1 shadow flex flex-row items-center space-x-1">
                        <IoAddOutline size={16} />
                        <p className="text-xs">Add design</p>
                    </button>
            }
        </div>
    );
}

interface ScrollableVariantsProps {
    variants: Variant[];
    handleAddVariant: () => Promise<void>;
    onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
}

const ScrollableVariants = React.forwardRef<HTMLDivElement, ScrollableVariantsProps>(({ variants, handleAddVariant, onScroll }, ref) => (
    <div
        ref={ref}
        className="flex flex-grow min-w-0 items-center overflow-x-scroll"
        style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            width: '100%'
        }}
        onScroll={(e) => onScroll(e)}
    >
        {variants.map((variant, index) => (
            <div key={index} className="p-4 border-r border-gray-300">
                <VariantItem variant={variant} />
            </div>
        ))}
        <div className="w-20 items-center justify-center flex flex-shrink-0">
            <AddItem handleAddItem={handleAddVariant} />
        </div>
    </div>
))

export default ScrollableVariants