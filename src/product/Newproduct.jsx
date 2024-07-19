import React from 'react'

export default function Newproduct() {
    return (
        <div className="p-8">
            <form action="" className="bg-white ">
                <div className="grid p-8 gap-2">
                    <label htmlFor="category">Category</label>
                    <input className="border border-customGray rounded-lg w-48" type="text" name="category" id="" />
                    <label htmlFor="productname">Product Name</label>
                    <input className="border border-customGray rounded-lg w-48" type="text" name="productname" />
                    <label htmlFor="productdesign">Product Design</label>
                    <input className="border border-customGray rounded-lg w-48" type="text" name="productdesign" />
                    <label htmlFor="price">price</label>
                    <input className="border border-customGray rounded-lg w-48" type="number" name="price" />
                    <label htmlFor="description">Description</label>
                    <textarea className="border border-customGray rounded-lg w-1/2" name="description" id="" cols="30" rows="5"></textarea>
                </div>
                <div className="flex p-8 gap-4">
                    {/* <div>
                        <p >Color</p>
                        <input className="border border-customGray rounded-lg" type="color" name="color" id="" />
                    </div> */}
                    {/* <div>
                        <p >Size</p>
                        <input className="border border-customGray rounded-lg" type="number" name="size" />
                    </div> */}
                    <div>
                        <p >Stock</p>
                        <input className="border border-customGray rounded-lg" type="number" name="quantity" />
                    </div>
                    <div class="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-lg p-4">
                        <p class="mb-2 text-lg font-semibold text-gray-700">Upload image</p>
                        <label for="file-upload" class="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg">
                            Choose File
                        </label>
                        <input id="file-upload" type="file" class="hidden" />
                    </div>
                </div>
                <button id="button" type="submit"  >Continue</button>
            </form>
        </div>
    )
}
