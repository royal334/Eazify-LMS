import { create } from "zustand";
import { persist } from "zustand/middleware";

type Course = {
  title: string;
  description: string;
};

type EnrolledCourseType = {
  enrolledCourses: Course[]; // Array of enrolled courses
  setEnrolledCourses: (course: Course) => void; // Function to add a course
};

const useEnrolledCourseStore = create(
  persist<EnrolledCourseType>(
    (set, get) => ({
      enrolledCourses: [],
      setEnrolledCourses: (course: Course) => {
        const { enrolledCourses } = get();
        const isAlreadyEnrolled = enrolledCourses.some((c) => c.title === course.title);
        if (!isAlreadyEnrolled) {
          set({ enrolledCourses: [...enrolledCourses, course] });
        }
      },
    }),
    {
      name: "enrolled-courses-storage", // Key for localStorage
    }
  )
);

export default useEnrolledCourseStore;