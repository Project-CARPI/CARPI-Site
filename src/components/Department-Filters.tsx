import React from 'react';

interface Department {
  code: string;
  name: string;
}

const departments: Department[] = [
  { code: 'STSO', name: 'Science, Technology, & Society' },
  { code: 'ERTH', name: 'Earth & Environmental Sci' },
  { code: 'ADMN', name: 'Administrative Courses' },
  { code: 'BMED', name: 'Biomedical Engineering' },
  { code: 'CIVL', name: 'Civil Engineering' },
  { code: 'COMM', name: 'Communication' },
  { code: 'BCBP', name: 'BioChemistry & BioPhysics' },
  { code: 'CHME', name: 'Chemical Engineering' },
  { code: 'ISCI', name: 'Interdisciplinary Science' },
  { code: 'ECSE', name: 'Electrical, Computer, Systems Engineering' },
  { code: 'USAR', name: 'Military Science' },
  { code: 'USAF', name: 'Aerospace Studies' },
  { code: 'MATP', name: 'Math PPPPP' },
  { code: 'GSAS', name: 'Games & Simulation Arts & Sciences' },
  { code: 'ITWS', name: 'Information Technology & Web Sci' },
  { code: 'MTLE', name: 'Material Sciences & Engineering' },
  { code: 'ISYE', name: 'Industrial & Systems Engineering' },
  { code: 'LGHT', name: 'Lighting' },
  { code: 'IENV', name: 'Interdisciplinary Environmental' },
  { code: 'MANE', name: 'Mech, Aero, Nucl Engineer' },
  { code: 'ENVE', name: 'Environmental Engineering' },
  { code: 'ARTS', name: 'Arts' },
  { code: 'ENGR', name: 'Core Engineering' },
  { code: 'IHSS', name: 'HASS Inquiry' },
  { code: 'PHYS', name: 'Physics' },
  { code: 'ASTR', name: 'Astronomy' },
  { code: 'COGS', name: 'Cognitive Science' },
  { code: 'CSCI', name: 'Computer Science' },
  { code: 'LITR', name: 'Literature' },
  { code: 'MATH', name: 'Mathematics' },
  { code: 'USNA', name: 'Naval Science' },
  { code: 'PHIL', name: 'Philosophy' },
  { code: 'LANG', name: 'Languages' },
  { code: 'ARCH', name: 'Architecture' },
  { code: 'CHEM', name: 'Chemistry' },
  { code: 'BUSS', name: 'Business' },
  { code: 'ECON', name: 'Economics' },
  { code: 'BIOL', name: 'Biology' },
  { code: 'WRIT', name: 'Writing' }
];

interface DepartmentFiltersProps {
  onSelect?: (department: Department) => void;
  selectedDepartment?: string;
}

const DepartmentFilters: React.FC<DepartmentFiltersProps> = ({ 
  onSelect,
  selectedDepartment 
}) => {
  return (
    <div className="w-full h-full px-1 pt-2 pb-5 justify-center items-start gap-2 inline-flex overflow-auto">
      {departments.map((dept) => (
        <div
          key={dept.code}
          className={`px-2.5 py-1 rounded-xl border justify-center items-center gap-2.5 flex ${selectedDepartment === dept.code ? 'border-blue-500' : 'border-black'}`}
          onClick={() => onSelect?.(dept)}
        >
          <div>
            <span className="text-[#283044] text-xs font-bold font-['Helvetica']">
              {dept.code}{' '}
            </span>
            <span className="text-[#283044] text-xs font-normal font-['Helvetica']">
              {dept.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DepartmentFilters;