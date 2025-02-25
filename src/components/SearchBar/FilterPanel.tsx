import api from "../../axios";
import { Filters } from "../../types/Filters";
import FilterSection from "./FilterSection";
import { useEffect, useState } from "react";

interface FilterPanelProps {
  filters: { [key: string]: string[] };
  updateFilters: (category: keyof Filters, value: string) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, updateFilters }) => {

  const [subjects, setSubjects] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [semesters, setSemesters] = useState([]);

  useEffect(() => {
    console.log("getting filters");
    
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
    <>
      <FilterSection sectionName="Subject" tags={subjects} selected={filters.Subject} updateFilters={updateFilters}  />
      <FilterSection sectionName="Attributes" tags={attributes} selected={filters.Attributes} updateFilters={updateFilters}/>
      <FilterSection sectionName="Semesters" tags={semesters} selected={filters.Semesters} updateFilters={updateFilters} />
    </>
  );
};

export default FilterPanel;