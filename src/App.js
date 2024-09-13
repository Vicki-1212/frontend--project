import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react';
import './App.css';
import Jobs from './components/Jobs';
import JobContext from './context/JobContext';
import JobDetails from './components/JobDetails';
import BookMarks from './components/BookMarks';

const App = () => {
  const [jobList, setJobList] = useState([])

  const [jobDetails, setJobDetails] = useState({})

  let [bookMarkJobList, setBookMarkJobList] = useState([])
 

  const updateJobList = (dataList) => {
    setJobList(dataList)
  }

  const updateJobDetails = (details) => {
    setJobDetails(details)
  }

  const updateBookMarkJobList = (newDetails) => {
    setBookMarkJobList(prevState => [...prevState, newDetails])
  }

  useEffect(() => {
    if(bookMarkJobList !== null) {
      sessionStorage.setItem("JobList", JSON.stringify(bookMarkJobList))
    }
  })

  return (

    <JobContext.Provider 
      value={{
        jobList,
        jobDetails,
        bookMarkJobList,
        updateJobList: updateJobList,
        updateJobDetails: updateJobDetails,
        updateBookMarkJobList: updateBookMarkJobList,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Jobs />} />
          <Route path="/jobs-details" element={<JobDetails />} />
          <Route path="/book-mark" element={<BookMarks />} />
        </Routes>
      </BrowserRouter>

    </JobContext.Provider>



    
    
  )
}

export default App