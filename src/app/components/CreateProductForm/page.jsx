'use client';
import { errorToast, successToast } from '@/libs/toast';
import React, { useState, useRef } from 'react';

const CreateProductForm = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [imageFile, setImageFile] = useState([]);
  const inputRef = useRef(null);
  const showInput = () => {
    if (imageFile.length > 2) return;
    inputRef.current.click();
  };

  const handleImageInput = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImageFile([
      ...imageFile,
      {
        imageUrl: base64,
      },
    ]);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!title && !desc && !price && imageFile.length === 0)
      errorToast('All feilds are required!');

    const res = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description: desc,
        price,
        image: imageFile,
      }),
    });
    const data = await res.json();
    if (data.success) successToast("Product Created!")
    else errorToast("Failed to create data")
  };

  return (
    <div className='w-full'>
      <form
        onSubmit={onSubmitHandler}
        className='flex w-full flex-col gap-4 overflow-hidden rounded-md border bg-white p-8 md:w-[80%]'
      >
        <div className='parent flex w-full flex-col gap-3 lg:flex-row lg:gap-6'>
          <div className='flex w-full flex-col gap-2'>
            <label
              className='text-lg font-semibold text-[#333]'
              htmlFor='title'
            >
              Title :
            </label>
            <input
              className='rounded-md border px-3 py-2 outline-indigo-400'
              type='text'
              name='title'
              placeholder='Enter your title..'
              required
              minLength={6}
              autoComplete='off'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className='flex w-full flex-col gap-2'>
            <label
              className='text-lg font-semibold text-[#333]'
              htmlFor='price'
            >
              Price :
            </label>
            <input
              className='rounded-md border px-3 py-2 outline-indigo-400'
              type='number'
              name='price'
              placeholder='Enter your price..'
              required
              maxLength={12}
              autoComplete='off'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <label
            className='text-lg font-semibold text-[#333]'
            htmlFor='deccription'
          >
            Deccription :
          </label>
          <textarea
            className='rounded-md border px-3 py-3 outline-indigo-400'
            name='decription'
            id='desc'
            cols='30'
            rows='4'
            placeholder='Enter your description..'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>

        <div>
          <input
            type='file'
            name='file'
            id='file'
            required
            className='hidden'
            ref={inputRef}
            onChange={handleImageInput}
          />
          <div className='flex gap-3'>
            <div
              onClick={showInput}
              className={`upload flex h-[80px] w-[150px] cursor-pointer items-center justify-center rounded border-2 text-[#555] transition duration-300 hover:border-indigo-300 hover:text-indigo-300 ${
                imageFile.length > 2
                  ? 'border-red-400 text-red-400 hover:border-red-400 hover:text-red-400'
                  : null
              }`}
            >
              Upload Image
            </div>
            {imageFile && (
              <div className='flex gap-3'>
                {imageFile.map((image, index) => (
                  <div
                    key={index}
                    className='h-[80px] w-[120px] overflow-hidden border border-green-300 object-contain'
                  >
                    <img
                      src={image.imageUrl}
                      alt={'image'}
                      className='h-[80px] w-[120px]'
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <button className=' rounded-md border bg-indigo-500 px-5 py-2 text-white'>
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;

// base64 image url

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
