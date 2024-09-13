import { useEffect, useState } from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";
import JobList from '../JobList'
import Navbar from '../Navbar';
import JobContext from '../../context/JobContext';
import './index.css'

const apiStatusConstant = {
    initial: "INITIAL",
    success: "SUCCESS",
    failure: "FAILURE",
    inProgress: "INPROGRESS"
}

const Jobs = () => {
    const [dataList, setData] = useState([])
    const [page, setPage] = useState(1);
    const [apiStatus, setApiStatus] = useState(apiStatusConstant.initial)
    
    useEffect(() => {
        const getData = async() => {
            setData([])
            setApiStatus(apiStatusConstant.inProgress)
            const url = `https://testapi.getlokalapp.com/common/jobs?page=${page}`
            const options = {
                method: 'GET',
            }

            const response = await fetch(url, options);
            if(response.ok === true) {
                const apiData = await response.json();
                const updatedData = apiData.results;
                setData(updatedData)
                setApiStatus(apiStatusConstant.success)
            }
            else {
                setApiStatus(apiStatusConstant.failure)
            }
        }
        getData();
    }, [page]);

    const onClickPage = (number) => {
        setPage(number)

    }

    const renderLoadingView = () => (
        <div className="loader">
            <PropagateLoader size={15} color={"#c55ffc"}/>
        </div>
    )

    const renderFailureView = () => (
        <div className="failure-container">
            <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1726052599/w9ofkclowrtf3seirxxs.svg" alt="error-image" className="failure-image" />
            <h1 className="failure-view-heading">Page Not Found</h1>
            <p className="failure-view-description">Oops! It seems we couldn't find the page you were looking for. Please check the URL or try searching for it using the navigation bar above.,/</p>
        </div>
    )

    const renderSuccessView = () => (
        <JobContext.Consumer>
            {value => {
                const {jobList, updateJobList, updateJobDetails} = value

                updateJobList(dataList)

                return (
                    <>
                        {jobList.map(eachData => (
                            <JobList key={eachData.id} jobList={eachData} updateJobDetails={updateJobDetails}/>
                        ))}
                    </>
                )
            }}
        </JobContext.Consumer>
    )

    const renderApiStatus = () => {
        switch(apiStatus) {
            case apiStatusConstant.success:
                return renderSuccessView()
            case apiStatusConstant.failure:
                return renderFailureView()
            case apiStatusConstant.inProgress:
                return renderLoadingView()
            default:
                return null
        }
    }

    const renderNoView = () => (
        <>
            <div className="no-view-container">
                <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1726062935/kq8iwkwvaxru3aq9zqic.svg" alt="noData" className="no-view-image" />
                <h1 className="no-view-heading">No Job is available</h1>
                <button className="retry-button">Retry</button>
            </div>
        </>
    )

    return(
        <>
            <div className="jobs-container">
                <div className="job-all-card-container">
                    {dataList.length > 0 ? renderApiStatus() : renderNoView()}
                </div>
                <div>
                    <div className="pagination-container">
                        <button className={page === 1 ? "page-button highlight" : "page-button"} onClick={() => onClickPage(1)}>1</button>
                        <button className={page === 2 ? "page-button highlight" : "page-button"} onClick={() => onClickPage(2)}>2</button>
                        <button className={page === 3 ? "page-button highlight" : "page-button"} onClick={() =>onClickPage(3)}>3</button>
                    </div>
                </div>
                
            </div>
            
            <Navbar />
        </>
    )
}

export default Jobs 

