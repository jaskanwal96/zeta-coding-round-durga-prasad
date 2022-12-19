import { useState } from "react";
import CustomImage from "./Image";

const ImageGrid = ({ imagesResp, activeFilters }) => {
  const [isToggleIdArray, updateIsToggle] = useState([]);

  let filteredResponse = [...imagesResp];
  if (activeFilters.size) {
    filteredResponse = filteredResponse.filter((filter) =>
      activeFilters.has(filter.category)
    );
  }

  const handleToggleClick = (image) => {
    if (isToggleIdArray.includes(image.id)) {
      let temp = [...isToggleIdArray];
      temp = temp.filter((i) => i !== image.id);
      updateIsToggle(temp);
    } else {
      let temp = [...isToggleIdArray];
      temp.push(image.id);
      updateIsToggle(temp);
    }
  };

  if (imagesResp.length) {
    return (
      <div className="root_imageGrid">
        {filteredResponse.map((image) => {
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
        })}
      </div>
    );
  }
  return <div />;
};

export default ImageGrid;
