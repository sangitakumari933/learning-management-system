import { createContext, useEffect } from "react";
import { assets, dummyCourses } from "../assets/assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import humanizeDuration from 'humanize-duration'

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setEducator] = useState(true);
  const [enrolledCourses, setenrolledCourses] = useState([]);

  //fetch all courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };
 
  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
    }

    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });

    return totalRating / course.courseRatings.length;
  };

  //function to calculate course chapter time

  const calculateChapterTime = (chapter)=>{
    let time = 0;
    chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration)
    return humanizeDuration(time * 60 * 1000 , {unit : ['h', 'm']});
  }
  
  //function to calculate the total course duration

  let calculateCourseDuration = (course)=>{
    let time = 0;
    course.courseContent.map((chapter)=> chapter.chapterContent.map((lecture)=>time += lecture.lectureDuration))
    return humanizeDuration(time * 60 * 1000 , {unit : ['h', 'm']});
  }

  //function to calculate no of lectures in course
  let calculateNoOfLectures = (course)=>{
    let totalLectures = 0;

    course.courseContent.forEach(chapter=>{
      if(Array.isArray(chapter.chapterContent)){
        totalLectures += chapter.chapterContent.length;
      }
    })

    return totalLectures;

  }

  //fetch user Enrolled Courses
  const fetchUserEnrolledCourses = async ()=>{
    setenrolledCourses(dummyCourses);
  }

  useEffect(() => {
    fetchAllCourses(),
    fetchUserEnrolledCourses()
  }, []);

  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setEducator,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
    enrolledCourses,
    fetchUserEnrolledCourses
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
