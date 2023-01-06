import React, {useEffect, useState} from 'react';
import {deleteProduct, fetchProducts} from "../../api/product/productFuncs";
import HeaderTitle from "../../components/Buttons/Header";
import SearchButton from "../../components/Buttons/searchButton";
import {downloadImage, downloadImages} from "../../api/product/Image";
import ProductButton from "../../components/Buttons/ProductButton";
import {useRouter} from "next/router";
import {CloudDownloadIcon} from '@heroicons/react/outline'
import {TrashIcon, PencilIcon, StarIcon} from '@heroicons/react/solid'
import Link from 'next/link';



const AllProducts = () => {
    const [productArray, setProductArray] = useState([]);
    const [imageArray, setImageArray] = useState([]);
    const [imageBase64Array, setImageBase64Array] = useState([]);

    const router = useRouter();

    useEffect(async () => {
        await fetchProducts().then(res => {
            setProductArray(res);
        })
    }, []);

    useEffect(() => {


        productArray.every(async (product) => {

            setImageArray((prev) => {
                return [...prev, product.selectedImage]
            });


        })

    }, [productArray]);

    const redirectToAddProductPage = () => {
        router.push('/product/addProduct')
    }

    useEffect(async () => {
        downloadImages(imageArray).then(res => {
            setImageBase64Array(res);
        })

    }, [imageArray]);

    return (
        <div>
            <HeaderTitle title={"Favourite Products"}/>
            <div>
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center">
                        <div className="sm:flex-auto">
                            <SearchButton/>{" "}
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                            <ProductButton name={"Add Product"} handleAction={redirectToAddProductPage}/>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col">
                        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-primary sm:pl-6 md:pl-0"
                                        >
                                            SKU
                                        </th>
                                        <th scope="col"
                                            className="py-3.5 px-3 text-left text-sm font-semibold text-primary">
                                            IMAGE
                                        </th>
                                        <th scope="col"
                                            className="py-3.5 px-3 text-left text-sm font-semibold text-primary">
                                            PRODUCT NAME
                                        </th>
                                        <th scope="col"
                                            className="py-3.5 px-3 text-left text-sm font-semibold text-primary">
                                            PRICE
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0">
                                            <span className="sr-only">ACTIONS</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                    {productArray.map((singleProduct, index) => (
                                        <tr key={singleProduct._id}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-secondary sm:pl-6 md:pl-0">
                                                #{singleProduct.SKU.toUpperCase()}
                                            </td>
                                            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">

                                                {imageBase64Array.length > 0 ?
                                                    <img
                                                        src={`data:jpeg;base64,${imageBase64Array[index]}`}
                                                        alt=""
                                                        className={`w-20 h-20 object-cover rounded-lg`}/> :
                                                    <div className={`w-20 h-20 bg-background rounded-lg`}>
                                                        <CloudDownloadIcon className={`animate-pulse`}/>
                                                    </div>
                                                }

                                            </td>
                                            <td className="whitespace-nowrap py-4 px-3 text-sm font-normal text-text">{singleProduct.Name}</td>
                                            <td className="whitespace-nowrap py-4 px-3 text-sm font-normal text-text">$
                                                24.00
                                            </td>
                                            <td>
                                                <div className={`grid grid-cols-3 h-10 cursor-pointer`}>
                                                    <p onClick={(x) => {
                                                        deleteProduct(singleProduct._id).then(async () => {
                                                            await fetchProducts().then(res => {
                                                                setProductArray(res);
                                                            })
                                                        })
                                                    }} className="text-indigo-600 hover:text-indigo-900">
                                                        <TrashIcon/>
                                                        <span
                                                            className="sr-only">, {singleProduct.name}</span>
                                                    </p>

                                                    <Link href={`/product/editProduct/${singleProduct._id}`}>
                                                        <a href="#"
                                                           className="text-indigo-600 hover:text-indigo-900">
                                                            <PencilIcon/><span
                                                            className="sr-only">, {singleProduct.name}</span>
                                                        </a></Link>

                                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                        <StarIcon/><span
                                                        className="sr-only">, {singleProduct.name}</span>
                                                    </a>

                                                </div>
                                            </td>

                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AllProducts;
