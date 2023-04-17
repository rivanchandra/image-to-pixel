import React, { useState, useRef } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { ChromePicker } from 'react-color';
import Popper from '@mui/material/Popper';
import { Pixelify } from "react-pixelify";

export default function Home() {
  const [image, setImage] = useState([]);
  const [height, setHeight] = useState(30);
  const [width, setWidth] = useState(30);
  const [pixelSize, setPixelSize] = useState(10);
  const [background, setBackground] = useState('#000');
  const [centered, setCentered] = useState(true);

  const handleImageUpload = (event) => {
    const uploadedImage = event.target.files[0];
    localStorage.setItem('upload', [image, URL.createObjectURL(uploadedImage)])
    setImage(URL.createObjectURL(uploadedImage));
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-fixed bg-center bg-gradient-to-r from-purple-200 to-pink-200">
      <div className="h-screen flex flex-row justify-center items-center">
        <div className="w-1/2 p-4 backdrop-filter backdrop-blur-lg rounded-md ">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Image to Pixel</h1>
          <form className="p-4 bg-white rounded-md shadow-md">
            <div>
              <label
                  class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  <span class="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <span class="font-medium text-gray-600">
                          Click to upload, or &nbsp;
                          <span class="text-blue-600 underline">browse</span>
                      </span>
                  </span>
                  <input type="file" name="file_upload" class="hidden" onChange={handleImageUpload} />
              </label>
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
              <dt className="text-sm font-medium leading-6 text-gray-900">Background</dt>
              <dd className="mt-1 leading-6 sm:col-span-2 sm:mt-0">
                <Button variant="contained" onClick={handleClick} style={{backgroundColor: background}}>
                  {background}
                </Button>
                <Popper id={id} open={open} anchorEl={anchorEl}>
                  <ChromePicker 
                    color={ background }
                    onChangeComplete={(color) => setBackground(color.hex) }
                  />
                </Popper>
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
            fillTransparencyColor={background}
          />}
          
        </div>
      </div>
    </div>
  );
}