import { createContext, useState } from 'react';

export const totalFavCoursesContext = createContext();

export default function TotalFavCourses({ children }) {

    const [totalFavCourses, setTotalFavCourses] = useState(0);

    const changeTotalFavCourses = (value) => {
        setTotalFavCourses(value);
    }

    return (
        <totalFavCoursesContext.Provider value={[totalFavCourses, changeTotalFavCourses]}>
            {children}
        </totalFavCoursesContext.Provider>
    )
}
