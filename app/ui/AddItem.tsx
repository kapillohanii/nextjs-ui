import React, { useState } from 'react';
import { IoAddOutline } from 'react-icons/io5';
import { showCustomAlert } from './CustomAlert';


interface AddItemProps {
    handleAddItem?: () => Promise<void>;
}

const AddItem: React.FC<AddItemProps> = ({ handleAddItem }) => {
    const [loading, setLoading] = useState(false);

    const onClick = async () => {
        setLoading(true);
        try {
            if(handleAddItem){
                await handleAddItem();
            } else {
                await new Promise((resolve) => setTimeout(resolve, 2000));
                showCustomAlert("Item added!")
            }
        } catch (error) {
            console.error('Error while adding item:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            className='bg-white p-2 rounded-sm shadow w-max h-max'
            onClick={onClick}
            disabled={loading}
        >
            {loading ? (
                <div className="loader"></div>
            ) : (
                <IoAddOutline size={20} />
            )}

            <style jsx>{`
        .loader {
          border: 2px solid #fff;
          border-radius: 50%;
          border-top: 2px solid #000;
          width: 20px;
          height: 20px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
        </button>
    );
};

export default AddItem;
