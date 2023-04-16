import * as React from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { Pixelify } from "react-pixelify";

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-fixed bg-center bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="h-screen flex flex-row justify-center items-center">
        <div className="w-1/2 p-4 backdrop-filter backdrop-blur-lg rounded-md ">
          <form className="p-4 bg-white rounded-md shadow-md">
            <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
            <input type="text" name="name" id="name" className="px-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-100" />
            <label htmlFor="email" className="block mt-4 font-medium text-gray-700">Email</label>
            <input type="email" name="email" id="email" className="px-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-100" />
            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="w-1/2 p-4">
          <Pixelify
            src={"https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1528693940/mona-lisa_custom-31a0453b88a2ebcb12c652bce5a1e9c35730a132-s300-c85_boz4fn.jpg"}
            width={250}
            height={250}
            centered={true}
            pixelSize={8}
          />
        </div>
      </div>
    </div>
  );
}