import FilterPill from "./FilterPill";

const FilterPills = ({ filterList, updateActiveFilters, activeFilters }) => {
  if (filterList.size) {
    const filterListArr = Array.from(filterList);
    return (
      <div className="root_filterPills">
        {filterListArr.map((filter) => (
          <FilterPill
            key={filter}
            filter={filter}
            activeFilters={activeFilters}
            updateActiveFilters={updateActiveFilters}
          />
        ))}
      </div>
    );
  }
  return <div />;
};

export default FilterPills;
