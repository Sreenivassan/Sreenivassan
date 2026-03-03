function CustomImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-24 h-24 object-contain rounded-full shadow-lg bg-white p-2"
    />
  );
}

export default CustomImage;
