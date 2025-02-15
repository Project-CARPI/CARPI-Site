import FilterSection from "./FilterSection";

type Filters = {
  Subject: string[];
  Attributes: string[];
  Semesters: string[];
};

interface FilterPanelProps {
  filters: { [key: string]: string[] };
  updateFilters: (category: keyof Filters, value: string) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, updateFilters }) => {

  const tags = [
    { id: 1, code: "CS101" },
    { id: 2, code: "CS102" },
    { id: 3, code: "CS103" },
    { id: 4, code: "CS101" },
    { id: 5, code: "CS102" },
    { id: 6, code: "CS103" },
  ];

  return (
    // <div className="absolute z-10 bg-carpipink w-full p-6 pt-0 left-0">
    <div>
      <FilterSection sectionName="Subject" tags={tags} selected={filters.Subject} updateFilters={updateFilters}  />
      <FilterSection sectionName="Attributes" tags={tags} selected={filters.Attributes} updateFilters={updateFilters}/>
      <FilterSection sectionName="Semesters" tags={tags} selected={filters.Semesters} updateFilters={updateFilters} />
    </div>
  );
};

export default FilterPanel;