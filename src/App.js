import { useState } from "react";
import AddButton from "./components/AddButton";
import FilterPills from "./components/FilterPills";
import ImageGrid from "./components/ImageGrid";
import "./styles.css";

const BASE_URL = "https://dummyjson.com/products/";

export default function App() {
  const [filterList, updateFilterList] = useState(new Set());
  const [imagesResp, updateImagesResp] = useState([]);
  const [count, updateCount] = useState(0);
  const [activeFilters, updateActiveFilters] = useState(new Set());

  const fetchImagesBatch = () => {
    Promise.all([
      fetch(`${BASE_URL}${count + 1}`).then((res1) => res1.json()),
      fetch(`${BASE_URL}${count + 2}`).then((res2) => res2.json()),
      fetch(`${BASE_URL}${count + 3}`).then((res3) => res3.json())
    ])
      .then(([res1, res2, res3]) => {
        updateImagesResp([...imagesResp, res1, res2, res3]);
        const temp = new Set(filterList);
        temp.add(res1.category);
        temp.add(res2.category);
        temp.add(res3.category);
        updateFilterList(temp);
      })
      .catch((e) => console.log(e));
  };

  const addClickHander = () => {
    fetchImagesBatch();
    updateCount(count + 3);
  };

  return (
    <div className="root_app">
      <FilterPills
        filterList={filterList}
        activeFilters={activeFilters}
        updateActiveFilters={updateActiveFilters}
      />
      <ImageGrid imagesResp={imagesResp} activeFilters={activeFilters} />
      <AddButton onAddClick={addClickHander} />
    </div>
  );
}
