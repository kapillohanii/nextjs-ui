import React from "react";
import { Dialog, DialogTitle, DialogPanel } from '@headlessui/react';
import { IoClose } from "react-icons/io5";
import { IoImageOutline } from "react-icons/io5";
import { Variant } from "../types";
import { designs } from "../constants";
import SearchInput from "./ui/SearchInput";



const InsertDialog = ({
  isOpen,
  onClose,
  handleVariantChange,
}: {
  isOpen: boolean;
  onClose: () => void;
  handleVariantChange: (variant: Variant) => Promise<void>;
}) => {

  const handleInsert = (design: Variant) => {
    handleVariantChange({ imageUrl: design.imageUrl, imageCaption: design.imageCaption });
    onClose();
  }
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-max rounded-lg bg-white p-6">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute -right-2 -top-2 p-2 rounded-sm"
            >
              <IoClose className="h-4 w-4" />
            </button>
            <div className="pt-6">
              <DialogTitle className="mb-4">
                <div className="flex flex-col space-y-4">
                  <div className="flex justify-right">
                    <IoImageOutline size={28} className="text-green-500" />
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <p className="font-semibold text-gray-700 text-md">Select a design to link</p>
                    <div className="w-48">
                      <SearchInput />
                    </div>
                  </div>
                </div>
              </DialogTitle>
              <div className="border-t p-2 max-h-80 overflow-y-scroll" style={{ scrollbarWidth: 'thin' }}>
                <div className="flex flex-row">
                  {
                    <div className="grid grid-cols-4 gap-4 mt-4">
                      {designs.map((design, index) => (
                        <div key={index} className="w-32">
                          <div className="group relative w-28 h-28 rounded-md overflow-hidden">
                            <img
                              src={design.imageUrl}
                              alt="img"
                              className="w-full h-full object-none"
                            />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <button
                                className="bg-white p-2 w-max rounded-md text-xs"
                                onClick={() => handleInsert(design)}>
                                Insert
                              </button>
                            </div>
                          </div>
                          <p className="w-32 text-xs font-normal">
                            {design.imageCaption}
                          </p>
                        </div>
                      ))}
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default InsertDialog;