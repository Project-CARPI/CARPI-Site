import React from 'react';

// Department type
interface Department {
  code: string;
  name: string;
}

// List of Departments 
const departments: Department[] = [
  { code: 'ADMN', name: 'Administrative Courses' },
  { code: 'ARCH', name: 'Architecture' },
  { code: 'ARTS', name: 'Arts' },
  { code: 'ASTR', name: 'Astronomy' },
  { code: 'BCBP', name: 'BioChemistry & BioPhysics' },
  { code: 'BIOL', name: 'Biology' },
  { code: 'BMED', name: 'Biomedical Engineering' },
  { code: 'BUSN', name: 'Business' },
  { code: 'CHEM', name: 'Chemistry' },
  { code: 'CHME', name: 'Chemical Engineering' },
  { code: 'CIVL', name: 'Civil Engineering' },
  { code: 'COGS', name: 'Cognitive Science' },
  { code: 'COMM', name: 'Communication' },
  { code: 'CSCI', name: 'Computer Science' },
  { code: 'ECON', name: 'Economics' },
  { code: 'ECSE', name: 'Electrical, Computer, Systems Engineering' },
  { code: 'ENGR', name: 'Core Engineering' },
  { code: 'ENVE', name: 'Environmental Engineering' },
  { code: 'ERTH', name: 'Earth & Environmental Sci' },
  { code: 'GSAS', name: 'Games & Simulation Arts & Sciences' },
  { code: 'IHSS', name: 'HASS Inquiry' },
  { code: 'IENV', name: 'Interdisciplinary Environmental' },
  { code: 'ISCI', name: 'Interdisciplinary Science' },
  { code: 'ISYE', name: 'Industrial & Systems Engineering' },
  { code: 'ITWS', name: 'Information Technology & Web Sci' },
  { code: 'LANG', name: 'Languages' },
  { code: 'LGHT', name: 'Lighting' },
  { code: 'LITR', name: 'Literature' },
  { code: 'MANE', name: 'Mech, Aero, Nucl Engineer' },
  { code: 'MATH', name: 'Mathematics' },
  { code: 'MATP', name: 'Mathematical Programming, Probability, and Statistics' },
  { code: 'MTLE', name: 'Material Sciences & Engineering' },
  { code: 'PHIL', name: 'Philosophy' },
  { code: 'PHYS', name: 'Physics' },
  { code: 'STSO', name: 'Science, Technology, & Society' },
  { code: 'USAF', name: 'Aerospace Studies' },
  { code: 'USAR', name: 'Military Science' },
  { code: 'USNA', name: 'Naval Science' },
  { code: 'WRIT', name: 'Writing' }
];

// DepartmentFilters component
interface DepartmentFiltersProps {
  onSelect?: (department: Department) => void;
  selectedDepartment?: string;
  isVisible?: boolean;
}

//
const DepartmentFilters: React.FC<DepartmentFiltersProps> = ({ 
  onSelect,
  selectedDepartment,
  isVisible = true
}) => {
  if (!isVisible) return null;

  // Render the list of departments
  return (
    <div className="w-full h-full flex items-center justify-center bg-pink-100 p-2 overflow-hidden">
      <div className="flex flex-wrap gap-2 justify-center overflow-y-auto max-h-full">
        {departments.map((dept) => (
          <button
            key={dept.code}
            className={`
              flex-shrink-0
              px-3 
              py-1.5 
              rounded-full 
              border 
              border-black 
              text-xs
              transition-colors
              ${selectedDepartment === dept.code 
                ? 'bg-blue-100 border-blue-500' 
                : 'bg-transparent active:bg-gray-100'
              }
            `}
            onClick={() => onSelect?.(dept)}
          >
            <div className="flex items-center whitespace-nowrap">
              <span className="font-bold">{dept.code}</span>
              <span className="mx-1">·</span>
              <span className="font-normal">{dept.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DepartmentFilters;