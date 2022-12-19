import CustomImage from "./Image";

const ImageRow = ({ imagesResp, isToggleIdArray, handleToggleClick }) => {
  if (imagesResp.length) {
    return imagesResp.map((image) => {
      return (
        <CustomImage
          key={image.id}
          image={image}
          isToggleIdArray={isToggleIdArray}
          onImageToggle={() => {
            handleToggleClick(image);
          }}
        />
      );
    });
  }
  return <div>ImageGrid</div>;
};

export default ImageRow;
