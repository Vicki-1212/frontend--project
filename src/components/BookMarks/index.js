import BookMarkList from "../BookMarkList";
import Navbar from "../Navbar";
import './index.css'

const BookMarks = () => {

    let list = []
    list = JSON.parse(sessionStorage.getItem("JobList"))

    const renderBookMarkListView = () => {
        return (
            <>
                {list.map(eachList => (
                    <BookMarkList key={eachList.id} markList={eachList}/>
                ))}
            </>
        )
    }

    const renderNoView = () => (
        <div className="no-bookmark-container">
            <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1726062935/kq8iwkwvaxru3aq9zqic.svg" alt="noView" className="no-view-image" />
            <h1 className="no-bookmark-heading">No Jobs Bookmarked Yet.</h1>
        </div>
    )
    

    return (
        <div className="markList-container">
            {list.length > 0 ? (renderBookMarkListView()) : (renderNoView())}
            <Navbar />
        </div>
    )


}

export default BookMarks