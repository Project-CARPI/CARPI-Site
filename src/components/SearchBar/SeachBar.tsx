import React, { useState, useEffect } from "react";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import api from "../../axios";
import FilterPanel from "./FilterPanel";
import ChosenTag from "./ChosenTag";

type Filters = {
  Subject: string[];
  Attributes: string[];
  Semesters: string[];
}

interface SearchBarProps {
  updateSearchResults: (results: any) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ updateSearchResults }) => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    Subject: [],
    Attributes: [],
    Semesters: []
  })

  useEffect(() => {
    const deptFilters = filters.Subject.join(",");
    const attrFilters = filters.Attributes.join(",");
    const semFilters = filters.Semesters.join(",");

    const search = async() => {
      const response = await api.get("course/search?searchPrompt=" + searchPrompt + "&deptFilters=" + deptFilters + "&attrFilters=" + attrFilters + "&semFilters=" + semFilters);
      const data = response.data;
      console.log(data);
      updateSearchResults(data);
    }

    search();
  }, [filters, searchPrompt])

  const handleSearch = (e: React.KeyboardEvent) => {
    (e.currentTarget as HTMLInputElement).blur();
    setShowFilter(false);
  }

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
    <div className="p-6 pt-0 pb-0">
      <div className="flex justify-between items-center border-b p-2 mb-2">
        <div className="flex items-center gap-2">
          <IoSearchOutline />
          <input
            type="text"
            placeholder="Find Courses Here"
            className="text-base placeholder-darkblue-40 focus:placeholder-transparent focus:outline-none focus:ring-0"
            value={searchPrompt}
            enterKeyHint="search"
            onClick={() => setShowFilter(true)}
            onChange={(e) => setSearchPrompt(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(e) }}
          />
        </div>
        {showFilter && <IoClose onClick={() => setShowFilter(false)} />}
      </div>

      <div className="flex items-start">
        <div className="flex flex-wrap mb-2 w-full">
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

        <button className="unset w-[150px] text-right text-sm cursor-pointer" onClick={() => setShowFilter(prev => !prev)}>
          {showFilter ? "Hide Options" : "Show Options"}
        </button>
      </div>



      {showFilter && <FilterPanel filters={filters} updateFilters={updateFilters} />}
    </div>
  );
};

export default SearchBar;