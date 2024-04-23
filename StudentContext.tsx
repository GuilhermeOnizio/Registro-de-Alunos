import React, { createContext, useContext, useState, ReactNode } from 'react';

type StudentData = {
  registration: string;
  name: string;
  grade: number;
};

type StudentContextType = {
  students: StudentData[];
  storeStudentData: (studentData: StudentData) => void;
};

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const useStudentContext = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudentContext must be used within a StudentProvider');
  }
  return context;
};

type StudentProviderProps = {
  children: ReactNode;
};

export const StudentProvider: React.FC<StudentProviderProps> = ({ children }) => {
  const [students, setStudents] = useState<StudentData[]>([]);

  const storeStudentData = (studentData: StudentData) => {
    setStudents(prevStudents => [...prevStudents, studentData]);
  };

  const contextValue: StudentContextType = {
    students,
    storeStudentData,
  };

  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
};

