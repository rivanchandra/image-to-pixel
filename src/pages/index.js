import React, { useState, useRef } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import { Pixelify } from "react-pixelify";

export default function Home() {
  const [image, setImage] = useState(null);
  const [height, setHeight] = useState(30);
  const [width, setWidth] = useState(30);
  const [pixelSize, setPixelSize] = useState(10);
  const [centered, setCentered] = useState(true);

  const handleImageUpload = (event) => {
    const uploadedImage = event.target.files[0];
    setImage(URL.createObjectURL(uploadedImage));
  };

  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-fixed bg-center bg-gradient-to-r from-purple-200 to-pink-200">
      <div className="h-screen flex flex-row justify-center items-center">
        <div className="w-1/2 p-4 backdrop-filter backdrop-blur-lg rounded-md ">
          <form className="p-4 bg-white rounded-md shadow-md">
            <div className="col-span-full">
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleImageUpload}/>
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Height</dt>
              <dd className="mt-1 leading-6 sm:col-span-2 sm:mt-0">
                <Slider
                  size="small"
                  value={height}
                  onChange={(e, newValue) => setHeight(newValue)}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                />
              </dd>
              <dt className="text-sm font-medium leading-6 text-gray-900">Width</dt>
              <dd className="mt-1 leading-6 sm:col-span-2 sm:mt-0">
                <Slider
                  size="small"
                  value={width}
                  onChange={(e, newValue) => setWidth(newValue)}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                />
              </dd>
              <dt className="text-sm font-medium leading-6 text-gray-900">Pixel</dt>
              <dd className="mt-1 leading-6 sm:col-span-2 sm:mt-0">
                <Slider
                  size="small"
                  value={pixelSize}
                  onChange={(e, newValue) => setPixelSize(newValue)}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                />
              </dd>
              <dt className="text-sm font-medium leading-6 text-gray-900">Centered</dt>
              <dd className="mt-1 leading-6 sm:col-span-2 sm:mt-0">
                <Checkbox defaultChecked value={centered} onChange={(e, newValue) => setCentered(newValue)}/>
              </dd>
            </div>
          </form>
        </div>
        <div className="w-1/2 p-4">
          {image && 
          <Pixelify
            src={image}
            width={width*10}
            height={height*10}
            centered={centered}
            pixelSize={pixelSize}
          />}
          
        </div>
      </div>
    </div>
  );
}