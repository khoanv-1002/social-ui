import { useState } from "react";
import {
  CircleX,
  BadgeCheck,
  ChevronRight,
  ImagePlus,
  Logs,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export const ModalAddPost = ({ onClose }) => {
  const { user } = useAuth();
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageFiles = files.map((file) => URL.createObjectURL(file));
    console.log("Selected images:", imageFiles);
    setImages((prevImages) => [...prevImages, ...imageFiles]);
  };

  const handlePost = () => {
    console.log("Posting:", content);
    setContent("");
  };

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-70 flex items-center justify-center z-50">
      <div className="w-full max-w-xl bg-zinc-900 text-white rounded-2xl shadow p-4">
        {/* Header */}
        <Header onClose={onClose} />

        {/* Content */}
        <div className="flex gap-3 mt-4">
          <img
            loading="lazy"
            src="https://i.pravatar.cc/300"
            className="w-10 h-10 rounded-full object-cover"
            alt="avatar"
          />
          <div className="flex-1">
            <div className="flex items-center gap-1 text-sm font-medium text-white">
              {user.name}
              <BadgeCheck className="ml-1 text-green-500 w-3 h-3 md:w-4 md:h-4" />
              <span className="text-zinc-500">
                <ChevronRight />
              </span>
              <span className="text-zinc-400">Thêm bài viết</span>
            </div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Có gì mới không?"
              rows={3}
              className="w-full bg-transparent resize-none text-sm mt-2 placeholder-zinc-500 focus:outline-none"
            />

            {images && images.length > 0 && (
              <div className="py-2">
                <div className="flex gap-2 max-w-full overflow-x-auto scroll-smooth">
                  {images && images.length > 0 && (
                    <div className="py-2">
                      <div className="w-full flex gap-2 overflow-hidden">
                        
                          {images.map((img, index) => (
                            <ImageShow key={index} img={img} />
                          ))}
                        
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <label
            htmlFor="img"
            className="flex p-2 rounded-2xl dark:bg-zinc-300 items-center cursor-pointer text-black hover:text-white transition-colors duration-200 bg-white text-sm font-medium"
          >
            <ImagePlus size={16} className="text-sm" />
            <span className="ml-1 text-xs">Chọn ảnh</span>
          </label>
          <input
            accept="image/*"
            multiple
            type="file"
            id="img"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        {/* Action icons + Post */}
        <SubmitPost func={handlePost} desc={content} />
      </div>
    </div>
  );
};

const ImageShow = ({ img }) => (
  <div className=" w-48 h-36 shrink-0">
    <img src={img} className="w-full h-full object-cover rounded-lg" />
    <button
      type="button"
      className="absolute top-2 right-2 bg-black/60 rounded-full p-1 hover:bg-black/80"
      // onClick={() => handleRemoveImage(index)}
    >
      <CircleX className="text-red-500 w-5 h-5" />
    </button>
  </div>
);

const Header = ({ onClose }) => (
  <div className="flex items-center justify-between border-b border-zinc-700 pb-3">
    <button
      onClick={onClose}
      className="text-sm text-zinc-300 font-medium hover:text-white transition-colors duration-200"
    >
      <CircleX size={20} />
    </button>
    <h2 className="text-lg font-semibold">Bài viết mới</h2>
    <div></div>
  </div>
);

const SubmitPost = ({ ...action }) => (
  <div className="flex justify-center items-center mt-4 border-t border-zinc-700 pt-3">
    <button
      disabled={!action.desc.trim()}
      onClick={action.func}
      className={`px-4 py-1.5 rounded-2xl text-sm font-medium ${
        action.desc.trim()
          ? "bg-white text-black hover:bg-zinc-300"
          : "bg-zinc-700 text-zinc-500 cursor-not-allowed"
      }`}
    >
      Đăng
    </button>
  </div>
);
