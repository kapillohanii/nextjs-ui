'use client';

import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult, DroppableProps } from 'react-beautiful-dnd';
import { TbGridDots } from "react-icons/tb";
import AddItem from '../ui/AddItem';
import { showCustomAlert } from '../ui/CustomAlert';
import { FiTrash2 } from "react-icons/fi";

interface Filter {
    label: string;
    isActive: boolean;
}

interface Row {
    id: string;
    index: number;
    filters: Filter[];
}



const initialRows: Row[] = [
    { id: 'a', index: 1, filters: [{label: 'onsale', isActive: false}, {label: 'tags', isActive: true}, {label: 'contains', isActive: false}] },
    { id: 'b', index: 2, filters: [{label: 'onsale', isActive: false}, {label: 'tags', isActive: true}, {label: 'contains', isActive: false}] },
    { id: 'c', index: 3, filters: [{label: 'onsale', isActive: false}, {label: 'tags', isActive: true}, {label: 'contains', isActive: false}] },
    { id: 'd', index: 4, filters: [{label: 'onsale', isActive: false}, {label: 'tags', isActive: true}, {label: 'contains', isActive: false}] },
    { id: 'e', index: 5, filters: [{label: 'onsale', isActive: false}, {label: 'tags', isActive: true}, {label: 'contains', isActive: false}] },
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
    const [rows, setRows] = useState<Row[]>(initialRows);

    const handleAddState = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const newId = Math.random().toString(36).substr(2, 9);
        const newIndex = rows.length + 1;
        setRows([...rows, { id: newId, index: newIndex, filters: []}]);
        showCustomAlert('State added')
    }

    const handleDeleteRow = async (id: string) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const updatedRows = rows.filter(row => row.id !== id);
        const reorderedRows = updatedRows.map((row, index) => ({
            ...row,
            index: index + 1,
        }));
        setRows(reorderedRows);
        showCustomAlert('State removed')
    }



    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const updatedRows = Array.from(rows);
        const [movedRow] = updatedRows.splice(result.source.index, 1);
        updatedRows.splice(result.destination.index, 0, movedRow);

        const reorderedRows = updatedRows.map((row, index) => ({
            ...row,
            index: index + 1,
        }));
        setRows(reorderedRows);
    };

    return (
        <div className='border border-gray-200 rounded-md bg-[#f9fbfc] px-4 py-8 space-y-4'>
            <div className='flex flex-row'>
                <span className='w-28'></span>
                <div className='w-80 items-center py-2 border-r border-gray-300 text-center'>
                     <p className='text-gray-500 font-semibold text-sm'>Product Filter</p>
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
                            {rows.map((row, index) => (
                                <Draggable key={row.id} draggableId={row.id} index={index}>
                                    {(provided) => (
                                        <div
                                            className="text-2xl cursor-pointer group flex flex-row space-x-2"
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <div className="w-max items-center p-8 border-r border-gray-300">
                                                <div className='flex flex-col items-center'>
                                                    <FiTrash2
                                                        size={20}
                                                        className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleDeleteRow(row.id);
                                                        }}
                                                    />
                                                    <div className='flex flex-row space-x-2 items-center'>
                                                        <p className='font-bold'>{row.index}</p> <TbGridDots size={20} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='p-4 w-80 border-r border-gray-300'>
                                                <div className='w-full h-full bg-white border-2 border-dashed items-center flex flex-row justify-center space-x-1'>
                                                    {
                                                        row.filters.map((filter, index) => (
                                                            <div key={index} className={`border rounded-md px-2 w-max text-sm ${filter.isActive ? 'text-green-500 border-green-500 bg-green-50': '' }`}>{filter.label}</div>
                                                        ))
                                                    }
                                                </div>
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
