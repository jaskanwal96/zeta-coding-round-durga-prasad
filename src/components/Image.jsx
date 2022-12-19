const CustomImage = ({ image, onImageToggle, isToggleIdArray }) => {
  if (isToggleIdArray.includes(image.id)) {
    return (
      <div className="root_image" onClick={onImageToggle}>
        {image.category}
      </div>
    );
  }
  return (
    <div className="root_image" onClick={onImageToggle}>
      <img src={image?.thumbnail} alt="grid item" />
    </div>
  );
};

export default CustomImage;
