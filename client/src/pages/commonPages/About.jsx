import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">
        About Our LMS
      </h1>

      <p className="text-gray-600 text-lg leading-8 text-center">
        Our Learning Management System is designed to make online education
        simple and accessible. Students can explore courses, watch video
        lessons, and track their learning progress, while educators can create
        and manage courses with ease.
      </p>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Browse and enroll in courses</li>
          <li>Watch video lectures</li>
          <li>Track learning progress</li>
          <li>Create and manage courses</li>
          <li>Responsive design for all devices</li>
        </ul>
      </div>

      <div className="text-center mt-10">
        <Link
          to="/course-list"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Browse Courses
        </Link>
      </div>
    </div>
  );
};

export default About;