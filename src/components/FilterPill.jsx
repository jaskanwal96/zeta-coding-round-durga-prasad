const FilterPill = ({ filter, activeFilters, updateActiveFilters }) => {
  const handleFilterToggle = (filter) => {
    const temp = new Set(activeFilters);
    if (temp.has(filter)) {
      temp.delete(filter);
      updateActiveFilters(temp);
    } else {
      temp.add(filter);
      updateActiveFilters(temp);
    }
  };

  return (
    <div
      className={activeFilters?.has(filter) ? "filterPillActive" : "filterPill"}
      onClick={() => {
        handleFilterToggle(filter);
      }}
    >
      {filter}
    </div>
  );
};

export default FilterPill;
