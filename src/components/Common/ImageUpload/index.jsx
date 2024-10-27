import React, { useState, useEffect } from "react";

const ImageUpload = ({ onImageSelect, existingImageUrl }) => {
  const [previewImage, setPreviewImage] = useState(existingImageUrl || null); // Hiển thị ảnh có sẵn nếu có
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (existingImageUrl) {
      setPreviewImage(existingImageUrl);
    }
  }, [existingImageUrl]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && !["image/png", "image/jpeg"].includes(file.type)) {
      setErrorMessage("Chỉ được upload file PNG hoặc JPG.");
      setPreviewImage(existingImageUrl || null); // Quay về ảnh cũ nếu có lỗi
      onImageSelect(null);
      return;
    }

    setErrorMessage(""); // Xóa lỗi nếu không có
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result); // Hiển thị ảnh mới
      onImageSelect(file); // Gửi file đã chọn ra ngoài component cha
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="post-image">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 
            border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 
            dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 
            dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          {previewImage ? (
            <img
              src={previewImage}
              alt="Preview"
              className="object-contain h-full w-full rounded-lg"
            />
          ) : (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                PNG, JPG (Max size: 800x400px)
              </p>
            </div>
          )}
          <input
            id="dropzone-file"
            type="file"
            accept="image/png, image/jpeg"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>
  );
};

export default ImageUpload;
