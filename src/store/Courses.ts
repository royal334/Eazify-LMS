import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Course = {
  title: string;
  description: string;
};

type EnrolledCourseType = {
  enrolledCourses: Course[]; // Array of enrolled courses
  setEnrolledCourses: (courses: Course[]) => void; // Function to set courses
  addEnrolledCourse: (course: Course) => void; // Function to add a single course
};

const useEnrolledCourseStore = create(
  persist<EnrolledCourseType>(
    (set, get) => ({
      enrolledCourses: [],
      setEnrolledCourses: (courses: Course[]) => {
        set({ enrolledCourses: courses }); // Replace the entire array
      },
      addEnrolledCourse: (course: Course) => {
        const { enrolledCourses } = get();
        const isAlreadyEnrolled = enrolledCourses.some((c) => c.title === course.title);
        if (!isAlreadyEnrolled) {
          set({ enrolledCourses: [...enrolledCourses, course] });
        }
      },
    }),
    {
      name: "enrolled-courses-storage", // Key for sessionStorage
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useEnrolledCourseStore;