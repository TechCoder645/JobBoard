import Navbar from "./components/Navbar"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import JobCard from "./components/JobCard"
import JobData from "./JobDummyData"
function App() {
  
  return (
    <div>
       <Navbar/>
        <Header/>
        <SearchBar/>
        {JobData.map((job)=>(
          <JobCard key={job.id} {...job}/>
        ))}
    </div>
  )
}

export default App
