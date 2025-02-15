import React, { useState } from "react";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import FilterPanel from "./FilterPanel";
import ChosenTag from "./ChosenTag";

type Filters = {
  Subject: string[];
  Attributes: string[];
  Semesters: string[];
}

interface SearchBarProps {
  // sectionName: string;
  // tags: { id: number, code: string }[];
}

const SearchBar: React.FC<SearchBarProps> = ({  }) => {
  const [showFilter, setShowFilter] = useState(false);

  const [filters, setFilters] = useState<Filters>({
    Subject: [],
    Attributes: [],
    Semesters: []
  })

  const toggleFilterSection = () => {
    setShowFilter(prev => !prev);
  };

  const updateFilters = (category: keyof Filters, value: string) => {
    setFilters(prev => {
      if (prev[category].includes(value)) {
        const newFilters: Filters = { ...prev };
        newFilters[category] = newFilters[category].filter(tag => tag !== value);
        return newFilters;
      }
      return {
        ...prev,
        [category]: [...prev[category], value]
      };
    });
  };

  const removeFilter = (value: string) => {
    setFilters(prev => {
      const newFilters: Filters = { ...prev };
      for (const category of Object.keys(prev) as (keyof Filters)[]) {
        newFilters[category] = newFilters[category].filter(tag => tag !== value);
      }
      return newFilters;
    });
  };

  return (
    <div className="p-6 pb-0">
      <div className="flex justify-between items-center border-b p-2 mb-2">
        <div className="flex items-center gap-2">
          <IoSearchOutline />
          <input
            type="text"
            placeholder="Find Courses Here"
            className="text-base"
            onClick={toggleFilterSection}
          />
        </div>
        {showFilter && <IoClose onClick={toggleFilterSection} />}
      </div>
      
      <button className="unset w-full text-right text-sm cursor-pointer" onClick={toggleFilterSection}>
        {showFilter ? "Hide Options" : "Show Options"}
      </button>

      <div className="mb-2">
        {filters.Subject.map((tag, index) => (
          <ChosenTag key={index} name={tag} onRemove={removeFilter} />
        ))}
        {filters.Attributes.map((tag, index) => (
          <ChosenTag key={index} name={tag} onRemove={removeFilter} />
        ))}
        {filters.Semesters.map((tag, index) => (
          <ChosenTag key={index} name={tag} onRemove={removeFilter} />
        ))}
      </div>

      {showFilter && <FilterPanel filters={filters} updateFilters={updateFilters} />}
    </div>
  );
};

export default SearchBar;