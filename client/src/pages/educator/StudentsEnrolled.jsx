import React, { useEffect } from 'react'
import { useState } from 'react'
import { dummyStudentEnrolled } from '../../assets/assets';
import Loading from '../../components/student/Loading';

const StudentsEnrolled = () => {

  const [enrolledStudents, setenrolledStudents] = useState(null);
  const fetchEnrolledStudents = async ()=> {
    setenrolledStudents(dummyStudentEnrolled)
  }

  useEffect(()=>{
    fetchEnrolledStudents()
  }, )

  return enrolledStudents ? (
    <div className='min-h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0 '>
      <div className='flex flex-col items-start w-full max-w-4xl  overflow-hidden border border-gray-500/20 rounded-md'>
        <table className='table-fixed md:table-auto w-full overflow-hidden pb-4 items-center'>
          <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left'>
            <tr className=''>
              <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>#</th>
              <th className='px-4 py-3 font-semibold'>Student Name</th>
              <th className='px-4 py-3 font-semibold'>Course Title</th>
              <th className='px-4 py-3 font-semibold hidden sm:table-cell'>Date</th>
            </tr>
          </thead>
          <tbody className='text-sm text-gray-500'>
            {enrolledStudents.map((item, index)=>(
              <tr className='border-b border-gray-500/20'>
                <td className='px-4 py-3 text-center hidden sm:table-cell'>{index+1}</td>
                <td className='md:px-4 px-2 py-3 flex items-center space-x-3'>
                  <img src={item.student.imageUrl} alt="" className='w-9 h-9 rounded-full'/>
                  <span className='truncate'>{item.student.name}</span>
                </td>
                <td className='px-4 py-3 truncate'>{item.courseTitle}</td>
                <td className='px-4 py-3 hidden sm:table-cell'>{new Date(item.purchaseDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  ) : <Loading/>
}

export default StudentsEnrolled
