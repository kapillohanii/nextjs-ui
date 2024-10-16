import React, { useState } from "react";
import { Variant } from "../types";
import { IoAddOutline } from 'react-icons/io5';
import { LiaEdit } from "react-icons/lia";
import AddItem from "./ui/AddItem";
import InsertDialog from "./InsertDialog";



function VariantItem({ variant, handleVariantChange }: { variant: Variant, handleVariantChange: (variant: Variant) => Promise<void>; }) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <>
            <div className="w-44 h-44 border-2 border-dashed text-xs bg-white justify-center flex flex-col items-center p-4 rounded-md space-y-1">
                {
                    variant.imageUrl !== ""
                        ?
                        <>
                            <div className="group relative w-28 h-28 rounded-md overflow-hidden">
                            {/* eslint-disable @next/next/no-img-element */}
                                <img
                                    src={variant.imageUrl}
                                    alt="img"
                                    className="w-full h-full object-none"
                                />
                            {/* eslint-enable @next/next/no-img-element */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button className="bg-white p-2 w-max rounded-md" onClick={() => setIsDialogOpen(true)}>
                                        <LiaEdit className="text-black w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                            <p className="w-32 truncate text-xs font-semibold">
                                {variant.imageCaption}
                            </p>
                        </>
                        : <button className="border rounded-md p-1 shadow flex flex-row items-center space-x-1" onClick={() => setIsDialogOpen(true)}>
                            <IoAddOutline size={16} />
                            <p className="text-xs">Add design</p>
                        </button>
                }
            </div>
            <InsertDialog
                isOpen={isDialogOpen}
                handleVariantChange={handleVariantChange}
                onClose={() => setIsDialogOpen(false)}
            />
        </>
    );
}

interface ScrollableVariantsProps {
    variants: Variant[];
    handleAddVariant: () => Promise<void>;
    handleVariantChange: (variantIndex: number, variant: Variant) => Promise<void>;
    onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
}

/* eslint-disable react/display-name */
const ScrollableVariants = React.forwardRef<HTMLDivElement, ScrollableVariantsProps>(({ variants, handleAddVariant, handleVariantChange, onScroll }, ref) => (
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
                <VariantItem variant={variant} handleVariantChange={(variant: Variant) => handleVariantChange(index,variant)} />
            </div>
        ))}
        <div className="w-20 items-center justify-center flex flex-shrink-0">
            <AddItem handleAddItem={handleAddVariant} />
        </div>
    </div>
))

export default ScrollableVariants;