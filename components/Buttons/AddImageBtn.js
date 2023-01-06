import React from 'react';
import {uploadImage} from "../../api/product/Image";

const AddImageBtn = ({handleImageArray , btnText}) => {
    return (
        <div>
            <label
                htmlFor="file-upload"
                className="ml-2 relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none"
            >
                <span>{btnText}</span>
                <input onChange={async (event) => {
                    await uploadImage(event).then(res => {
                        handleImageArray(res);
                    })
                }} id="file-upload" name="file-upload" type="file" className="sr-only"/>
            </label>
        </div>
    );
};

export default AddImageBtn;
