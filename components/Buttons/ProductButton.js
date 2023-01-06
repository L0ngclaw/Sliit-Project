import React from 'react';

const ProductButton = ({name, handleAction}) => {
    return (
        <div>
            <button
                onClick={(event) => {
                    handleAction(event);
                }}
                className="bg-primary px-8 py-2 rounded-md text-white font-medium">
                {name}
            </button>
        </div>
    );
};

export default ProductButton;
