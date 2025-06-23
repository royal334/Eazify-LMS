'use client';
import DashboardCourse from './components/DashboardCourse';
import { items } from '../Courses'
import useSearchStore from '@/store/Search';


function Page() {
  const { search, setSearch } = useSearchStore()

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  const filteredItems = items.filter((item) => {
    const searchTerm = search.toLowerCase()
    if(searchTerm === ''){
      return true; // shows all items
    }
    else{
      return item.title.toLowerCase().includes(searchTerm)
    }
  })


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
      <div>
        <input type="text"
          placeholder='Search for courses...'
          className="w-[90%] p-2 m-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-bright-blue dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
          autoComplete='off'
          value= {search}
          onChange= {handleSearchChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {filteredItems.map((item) => (
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