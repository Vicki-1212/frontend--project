import {Link} from 'react-router-dom'
import { useState } from 'react'
import './index.css'

const Navbar = () => {

    const [activeSection, setActiveSection] = useState("jobs")

    const handleSection = (section) => {
        setActiveSection(section)
    }
    return (
        <nav className="nav-bar-container">
            <Link to="/" className="nav-link">
                <button className={activeSection === "jobs" ? "nav-button hover" : "nav-button"} onClick={() => handleSection("jobs")}> Jobs</button>
            </Link>
            
            <Link to="/book-mark" className="nav-link">
                <button className={activeSection === "bookmark" ? "nav-button hover" : "nav-button"} onClick={() => handleSection("bookmark")}>BookMarks</button>
            </Link>
        </nav>
    )
}

export default Navbar