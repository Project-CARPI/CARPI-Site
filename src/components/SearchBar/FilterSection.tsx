import React from "react";

type Filters = {
  Subject: string[];
  Attributes: string[];
  Semesters: string[];
};

interface TagProp {
  id: number;
  code: string;
}

interface FilterSectionProps {
  sectionName: keyof Filters;
  tags: TagProp[];
  selected: string[];
  updateFilters: (category: keyof Filters, value: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ sectionName, tags, selected, updateFilters }) => {
  return (
    <div className="mt-2">
      <h1>{sectionName}</h1>
      <div className="flex overflow-x-auto">
        {tags.map(tag => (
          <button
            key={tag.id}
            className={`rounded-2xl text-white px-3 py-1 text-sm mr-1 mb-1 font-thin 
              ${selected.includes(tag.code) ? "bg-blue-600" : "bg-darkblue"}`}
            onClick={() => updateFilters(sectionName, tag.code)}
          >
            {tag.code}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
