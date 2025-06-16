'use client';
import DashboardCourse from './components/DashboardCourse';
import { items } from '../Courses'


function Page() {
 


  return (
    <div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold mb-4">Welcome to the Eazify Academy</h1>
          
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          This is your dashboard where you can manage your account and view your courses.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {items.map((item) => (
          <DashboardCourse
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;