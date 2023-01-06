import React from 'react';

const InsertField = ({title, value, setValue, type}) => {
    return (
        <div className={`grid grid-cols-4 grid-rows-1 gap-3 w-full`}>
            <div className={`col-span-1 grid place-items-center`}>
                <h3 className={`text-sm font-medium text-gray-700`}>{title}</h3>
            </div>
            <div
                className="col-span-3 grid place-items-start mt-1 border-b border-gray-300 focus-within:border-primary">
                <input
                    value={value}
                    type={type || "text"}
                    name="name"
                    id="name"
                    className="block w-full border-0 border-transparent bg-background focus:border-indigo-600 focus:ring-0 sm:text-sm"
                    onChange={(event) => {
                        setValue(event.target.value)
                    }}
                />
            </div>
        </div>
    );
};

export default InsertField;
