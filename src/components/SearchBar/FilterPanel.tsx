import api from "../../axios";
import FilterSection from "./FilterSection";
import { useEffect, useState } from "react";

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

  const [subjects, setSubjects] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [semesters, setSemesters] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      const response = await api.get("/course/filter/values/departments");
      const subjects = response.data.map((subject: string, index: number) => {
        return {
          id: index,
          code: subject,
        }
      })
      setSubjects(subjects);
    };

    const fetchAttributes = async () => {
      const response = await api.get("/course/filter/values/attributes");
      const attributes = response.data.map((attribute: string, index: number) => {
        return {
          id: index,
          code: attribute,
        }
      })
      setAttributes(attributes);
    }

    const fetchSemesters = async () => {
      const response = await api.get("/course/filter/values/semesters");
      const semesters = response.data.map((semester: string, index: number) => {
        return {
          id: index,
          code: semester,
        }
      })
      setSemesters(semesters);
    }

    fetchSubjects();
    fetchAttributes();
    fetchSemesters();

  }, []);

  return (
    // <div className="absolute z-10 bg-carpipink w-full p-6 pt-0 left-0">
    <div>
      <FilterSection sectionName="Subject" tags={subjects} selected={filters.Subject} updateFilters={updateFilters}  />
      <FilterSection sectionName="Attributes" tags={attributes} selected={filters.Attributes} updateFilters={updateFilters}/>
      <FilterSection sectionName="Semesters" tags={semesters} selected={filters.Semesters} updateFilters={updateFilters} />
    </div>
  );
};

export default FilterPanel;