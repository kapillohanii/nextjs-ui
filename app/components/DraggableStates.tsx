'use client';

import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult, DroppableProps } from 'react-beautiful-dnd';
import { TbGridDots } from "react-icons/tb";
import AddItem from '../ui/AddItem';
import { showCustomAlert } from '../ui/CustomAlert';
import { FiTrash2 } from "react-icons/fi";
import { State } from '../types';
import ScrollableVariants from './ScrollableVariants';
import { IoAddOutline } from 'react-icons/io5';
import { BsThreeDotsVertical } from "react-icons/bs";

const initialStates: State[] = [
    { id: 'a', index: 1, filters: [{ label: 'onsale', isActive: false }, { label: 'tags', isActive: true }, { label: 'contains', isActive: false }], variants: [{ imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/71PGrWUKyeL._AC_UL210_SR210,210_.jpg', imageCaption: 'macus aurelius - meditaions' }] },
    { id: 'b', index: 2, filters: [{ label: 'onsale', isActive: false }, { label: 'tags', isActive: true }, { label: 'contains', isActive: false }], variants: [{ imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/71PGrWUKyeL._AC_UL210_SR210,210_.jpg', imageCaption: 'macus aurelius - meditaions' }] },
    { id: 'c', index: 3, filters: [{ label: 'onsale', isActive: false }, { label: 'tags', isActive: true }, { label: 'contains', isActive: false }], variants: [{ imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/71PGrWUKyeL._AC_UL210_SR210,210_.jpg', imageCaption: 'macus aurelius - meditaions' }] },
    { id: 'd', index: 4, filters: [{ label: 'onsale', isActive: false }, { label: 'tags', isActive: true }, { label: 'contains', isActive: false }], variants: [{ imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/71PGrWUKyeL._AC_UL210_SR210,210_.jpg', imageCaption: 'macus aurelius - meditaions' }] },
    { id: 'e', index: 5, filters: [{ label: 'onsale', isActive: false }, { label: 'tags', isActive: true }, { label: 'contains', isActive: false }], variants: [{ imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/71PGrWUKyeL._AC_UL210_SR210,210_.jpg', imageCaption: 'macus aurelius - meditaions' }] },
];

export const StrictModeDroppable = ({ children, ...props }: DroppableProps) => {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const animation = requestAnimationFrame(() => setEnabled(true));

        return () => {
            cancelAnimationFrame(animation);
            setEnabled(false);
        };
    }, []);

    if (!enabled) {
        return null;
    }

    return <Droppable {...props}>{children}</Droppable>;
};


const DraggableStates: React.FC = () => {
    const [states, setStates] = useState<State[]>(initialStates);

    const handleAddState = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const newId = Math.random().toString(36).substr(2, 9);
        const newIndex = states.length + 1;

        const variants = states.length > 0 ? Array(states[0].variants.length).fill({ imageUrl: "", imageCaption: "" }) : [];
        setStates([...states, { id: newId, index: newIndex, filters: [], variants: variants }]);
        showCustomAlert('State added')
    }

    const handleDeleteState = async (id: string) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const updatedStates = states.filter(state => state.id !== id);
        const reorderedStates = updatedStates.map((state, index) => ({
            ...state,
            index: index + 1,
        }));
        setStates(reorderedStates);
        showCustomAlert('State removed')
    }

    const handleAddVariant = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const updatedStates = states.map(state => ({
            ...state,
            variants: [...state.variants, { imageUrl: "", imageCaption: "" }]
        }));
        setStates(updatedStates);
        showCustomAlert('Variant added')
    }


    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const updatedStates = Array.from(states);
        const [movedState] = updatedStates.splice(result.source.index, 1);
        updatedStates.splice(result.destination.index, 0, movedState);

        const reorderedStates = updatedStates.map((state, index) => ({
            ...state,
            index: index + 1,
        }));
        setStates(reorderedStates);
    };

    return (
        <div className='border border-gray-200 rounded-md bg-[#f9fbfc] px-4 py-8 space-y-4'>
            <div className='flex flex-row'>
                <span className='w-28 flex-shrink-0'></span>
                <div className='w-80 flex-shrink-0 items-center py-2 border-r border-gray-300 text-center'>
                    <p className='text-gray-500 font-semibold text-sm'>Product Filter</p>
                </div>
                <div className='flex flex-grow min-w-0 overflow-x-scroll' style={{ scrollbarWidth: 'none' }}>
                    {
                        states.length > 0 &&
                        states[0].variants.map((variant, index) => (
                            <div className='flex flex-row w-52 items-center justify-between p-3 border-r border-gray-300 text-center'>
                                <p className='text-gray-500 font-semibold text-sm'>{index === 0 ? 'Primary Variant' : `Variant ${index + 1}`}</p>
                                <BsThreeDotsVertical size={16} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                <StrictModeDroppable droppableId="droppable">
                    {(provided) => (
                        <div
                            className="flex flex-col space-y-4"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {states.map((state, index) => (
                                <Draggable key={state.id} draggableId={state.id} index={index}>
                                    {(provided) => (
                                        <div
                                            className="text-2xl cursor-pointer group flex flex-row"
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <div className="w-28 flex-shrink-0 items-center p-8 border-r border-gray-300">
                                                <div className='flex flex-col items-center'>
                                                    <FiTrash2
                                                        size={20}
                                                        className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleDeleteState(state.id);
                                                        }}
                                                    />
                                                    <div className='flex flex-row space-x-2 items-center'>
                                                        <p className='font-bold'>{state.index}</p> <TbGridDots size={20} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='p-4 w-80 flex-shrink-0 border-r border-gray-300'>
                                                <div className='w-full h-full bg-white border-2 border-dashed items-center flex flex-row justify-center space-x-1 rounded-md'>
                                                    {
                                                        state.filters.length > 0
                                                            ? state.filters.map((filter, index) => (
                                                                <div key={index} className={`border rounded-md px-2 w-max text-sm ${filter.isActive ? 'text-green-500 border-green-500 bg-green-50' : ''}`}>{filter.label}</div>
                                                            ))
                                                            : <button className="border rounded-md p-1 shadow flex flex-row items-center space-x-1">
                                                                <IoAddOutline size={16} />
                                                                <p className="text-xs">Add product filter</p>
                                                            </button>
                                                    }
                                                </div>
                                            </div>
                                            <div className='flex-grow min-w-0'>
                                                <ScrollableVariants variants={state.variants} handleAddVariant={handleAddVariant} />
                                            </div>

                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </StrictModeDroppable>
            </DragDropContext>
            <div className='px-10 py-6'>
                <AddItem handleAddItem={handleAddState} />
            </div>

        </div>

    );
};

export default DraggableStates;
