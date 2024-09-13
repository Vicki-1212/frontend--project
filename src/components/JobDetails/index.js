import { PiBriefcaseLight } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import './index.css'
import Navbar from "../Navbar";
import JobContext from "../../context/JobContext";
import { useState } from "react";

const JobDetails = () => {

    const [isBookMark, setBookMark] = useState(false)


    const renderJobDetailsView = () => (

        <JobContext.Consumer>
            {value => {
                const {jobDetails, updateBookMarkJobList} = value
                const {job_location_slug, job_role, whatsapp_no, custom_link, company_name, openings_count, creatives, other_details, button_text, contact_preference, job_category, job_hours, expire_on, primary_details, } = jobDetails
                const image = creatives[0].thumb_url !== null ? creatives[0].thumb_url : ""
                const experience = primary_details.Experience !== null ? primary_details.Experience : "Fresher"
                const salary = primary_details.Salary != null ? primary_details.Salary : "Less then 3 LPA"
                const qualification = primary_details.Qualification != null ? primary_details.Qualification : "Any Degree"

                const onClickBookMark = () => {
                    updateBookMarkJobList(jobDetails)
                    setBookMark(!isBookMark)
                }

                return (
                    <>
                        <div className="job-details-bg-container">
                            <div className="job-details-app-container">
                                <div className="job-book-mark-container">
                                    <div className="image-job-info-container">
                                        <img src={image} alt="job-image" className="job-details-image" />
                                        <div className="job-info-container">
                                            <p className="job-company-name">{company_name}</p>
                                            <p className="job-company-role">{job_role}</p>
                                            <div className="job-vacant-exp-container">
                                                <div className="exp-container">
                                                    <PiBriefcaseLight size={20} />
                                                    <p className="job-experience">{experience}</p>
                                                </div>
                                                <p className="job-opening">Openings: {openings_count}</p>
                                                
                                            </div>
                                            <div className="job-details-location-container">
                                                <FaLocationDot size={20} color={"#FF0000"} />
                                                <p className="job-details-location">{job_location_slug}</p>
                                            </div>
                                        </div>
                                    </div>
                                    {isBookMark ? <BsFillBookmarkFill onClick={onClickBookMark} className="book-mark-icon" /> : <BsBookmark  className="book-mark-icon" onClick={onClickBookMark} />}
                                </div>
                                <hr />
                                <p className="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui autem diffidet perpetuitati bonorum suorum, timeat necesse est, ne aliquando amissis illis sit miser. Nec vero umquam summum bonum assequi quisquam posset, si omnia illa, quae sunt extra, quamquam expetenda, summo bono continerentur. Nec vero potest quisquam de bonis et malis vere iudicare nisi omni cognita ratione naturae et vitae etiam deorum, et utrum conveniat necne natura hominis cum universa. Nemo est igitur, quin hanc affectionem animi probet atque laudet, qua non modo utilitas nulla quaeritur, sed contra utilitatem etiam conservatur fides. Quid enim interest, divitias, opes, valitudinem bona dicas anne praeposita, cum ille, qui ista bona dicit, nihilo plus iis tribuat quam tu, qui eadem illa praeposita nominas? Et ais, si una littera commota sit, fore tota ut labet disciplina. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Admirantes quaeramus ab utroque, quonam modo vitam agere possimus, si nihil interesse nostra putemus, valeamus aegrine simus, vacemus an cruciemur dolore, frigus, famem propulsare possimus necne possimus.  
                                </p>
                                <div className="other-details">
                                    <h1 className="job-information">Job Description:</h1>
                                    <p className="job-details-info">{other_details}</p>
                                    <div className="job-details-contact-container">
                                        <FaWhatsapp size={30} color={"#25D366"} />
                                        <p className="job-details-whatsapp">{whatsapp_no}</p>
                                    </div>
                                    <div className="job-details-contact-container">
                                        <p>{button_text}</p>
                                        <p className="telephone-no">{custom_link}</p>
                                    </div>
                                    <p className="job-detail-call-time">Call Time: {contact_preference.preferred_call_start_time} - {contact_preference.preferred_call_end_time}</p>
                                </div>
                                <hr />
                                <div>
                                    <h1 className="job-information"> Requirement:</h1>
                                    <p className="reqirement-info"> Job Category: {job_category}</p>
                                    <p className="reqirement-info">Job Time: {job_hours}</p>
                                    <p className="reqirement-info">Salary Range: {salary}</p>
                                    <p className="reqirement-info">Expire Data: {expire_on}</p>
                                    <p className="reqirement-info">Qualification: {qualification}</p>
                                </div>
                                <button className="apply-button">Apply</button>
                            </div>
                        </div>
                        <Navbar />
                    </>
                )

            }}
    </JobContext.Consumer>

    )

    return (
        <>
            {renderJobDetailsView()}
        </>
    )


    

    

    
}


export default JobDetails