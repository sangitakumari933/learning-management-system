import React, { useEffect, useState, useContext } from "react";
import { assets, dummyDashboardData } from "../../assets/assets";
import Loading from "../../components/student/Loading";
import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { currency } = useContext(AppContext);
  const [dashboardData, setdashboardData] = useState(null);

  const fetchDashboardData = async () => {
    setdashboardData(dummyDashboardData);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return dashboardData ? (
    <div className="min-h-screen flex md:p-8 p-4 pt-8">
      <div className="">
        <div className="flex gap-5 flex-wrap items-center">
          <div className="flex gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md">
            <img src={assets.patients_icon} alt="patients_icon" />
            <div>
              <p className="text-2xl">
                {dashboardData.enrolledStudentsData.length}
              </p>
              <p>Total Enrollments</p>
            </div>
          </div>
          <div className="flex gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md">
            <img src={assets.appointments_icon} alt="patients_icon" />
            <div>
              <p className="text-2xl">{dashboardData.totalCourses}</p>
              <p>Total Courses</p>
            </div>
          </div>
          <div className="flex gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md">
            <img src={assets.earning_icon} alt="patients_icon" />
            <div>
              <p className="text-2xl">
                {currency}
                {dashboardData.totalEarnings}
              </p>
              <p>Total earnings</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="p-4 text-lg font-medium">Latest enrollments</h2>
          <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden bg-white border border-gray-500/20 rounded-md">
            <table className="table-fixed md:table-auto w-full overflow-hidden">
              <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell">#</th>
                  <th className="px-4 py-3 font-semibold">Student Name</th>
                  <th className="px-4 py-3 font-semibold">Course Title</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-500">
                {dashboardData.enrolledStudentsData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-500/20">
                    <td className="px-4 py-3 text-center hidden sm:table-cell">{index + 1}</td>
                    <td className="md:px-4 px-2 py-3 flex items-center space-x-3">
                      <img
                        src={item.student.imageUrl}
                        alt="profile"
                        className="w-9 h-9 rounded-full"
                      />
                      <span className="truncate">{item.student.name}</span>
                    </td>
                    <td className="px-4 py-3 truncate">{item.courseTitle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Dashboard;
