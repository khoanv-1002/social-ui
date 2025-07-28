import { useState } from "react";

export const Image = () => {
  const images = [];

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/150?text=Image+Not+Found";
  };

  return (
    <div className="w-full p-4">
      {images.length === 0 ? (
        <h2 className="text-center text-white-theme dark:text-b-wt">
          Chưa có ảnh
        </h2>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 hover:scale-[1.03] transition-transform duration-300"
            >
              <img
                src={img}
                alt={`post-${index}`}
                loading="lazy"
                onError={handleImageError}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
