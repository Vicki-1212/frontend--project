 import React from 'react'

const JobContext = React.createContext({
    jobList: [],
    jobDetails: {},
    bookMarkJobList: [],
    updateJobList: () => {},
    updateJobDetails: () => {},
    updateBookMarkJobList: () => {}
 })

 export default JobContext