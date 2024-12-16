
import Modal from "react-bootstrap/Modal";
import './Modals.css'
import Pagination from '../Pagination/Pagination';


// import img from '../../assest/img12.png'
import { useNavigate } from "react-router-dom";
import { SlCloudUpload } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

import img from '../../assest/img11.png'
import img1 from '../../assest/img12.png'
import img2 from '../../assest/img13.png'
import img3 from '../../assest/img14.png'


const CreatePostModal = (props) => {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body style={{ padding: "2rem" }}>
                <div className="createpost-container-modal">
                    <div className='createpost-main-modal'>
                        <div className='addhandwrittennotes-input'>
                            <h6>Post Type</h6>
                            <div className="input-container">
                                <input type="text" id="email" required />
                                <label htmlFor="">Select post type</label>
                            </div>
                        </div>
                        <div className="createpost-input">
                            <div className='addhandwrittennotes-input'>
                                <h6>Content</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter content here</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='createpost-input-bottom'>
                        <div className='addhandwritten-input'>
                            <h6>Instruction File</h6>
                            <div className='addcourse-upload-file'>
                                <SlCloudUpload />
                            </div>
                        </div>
                        <div className='createpost-button-modal'>
                            <div className='handwritten-button'>
                                <button onClick={props.onHide}>Create Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

const PriviewNewsModal = (props) => {
    const navigate = useNavigate()
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body style={{ padding: "2rem" }}>
                <div className="preview-container-modal">
                    <div className="preview-modal-div">
                        <div className="preview-modal-div-img">
                            <img src={img} alt="" />
                        </div>
                        <div className="preview-modal-div-right">
                            <div className="preview-modal-div-heading">
                                <h1>Headline</h1>
                                <h6>Sub headline</h6>
                            </div>
                            <div className="preview-modal-div-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="preview-modal-div-readmore">
                                <span>Read more</span>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="preview-modal-div">
                        <div className="preview-modal-div-img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="preview-modal-div-right">
                            <div className="preview-modal-div-heading">
                                <h1>Headline</h1>
                                <h6>Sub headline</h6>
                            </div>
                            <div className="preview-modal-div-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="preview-modal-div-readmore">
                                <span>Read more</span>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="preview-modal-div">
                        <div className="preview-modal-div-img">
                            <img src={img2} alt="" />
                        </div>
                        <div className="preview-modal-div-right">
                            <div className="preview-modal-div-heading">
                                <h1>Headline</h1>
                                <h6>Sub headline</h6>
                            </div>
                            <div className="preview-modal-div-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="preview-modal-div-readmore">
                                <span>Read more</span>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="preview-modal-div">
                        <div className="preview-modal-div-img">
                            <img src={img3} alt="" />
                        </div>
                        <div className="preview-modal-div-right">
                            <div className="preview-modal-div-heading">
                                <h1>Headline</h1>
                                <h6>Sub headline</h6>
                            </div>
                            <div className="preview-modal-div-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="preview-modal-div-readmore">
                                <span>Read more</span>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="preview-modal-div">
                        <div className="preview-modal-div-img">
                            <img src={img} alt="" />
                        </div>
                        <div className="preview-modal-div-right">
                            <div className="preview-modal-div-heading">
                                <h1>Headline</h1>
                                <h6>Sub headline</h6>
                            </div>
                            <div className="preview-modal-div-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="preview-modal-div-readmore">
                                <span>Read more</span>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="preview-modal-btn">
                        <div className='handwritten-button'>
                            <button onClick={() => navigate('/dashboard/current-affairs')}>Publish</button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}


const QuestionsUploadedModal = (props) => {
    const navigate = useNavigate()
    const questions = [
        { id: 1, question: "Question Displays Here" },
        { id: 2, question: "Question Displays Here" },
        { id: 3, question: "Question Displays Here" },
        { id: 4, question: "Question Displays Here" },
        { id: 5, question: "Question Displays Here" },
        { id: 6, question: "Question Displays Here" },
        { id: 7, question: "Question Displays Here" },
        { id: 8, question: "Question Displays Here" },
        { id: 9, question: "Question Displays Here" },
        { id: 10, question: "Question Displays Here" },
    ];
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body style={{ padding: "2rem" }}>
                <div className="questions-container-modal">
                    <div className="questions-modal-heading">
                        <h6>Questions Uploaded</h6>
                    </div>
                    <div className="questions-modal-main">
                        {questions.map((item, index) => (
                            <div className="questions-modal-div" key={item.id}>
                                <div className="questions-modal-div-left">
                                    <div className="questions-modal-left-count">
                                        <h6>{String(index + 1).padStart(2, "0")}</h6> {/* Add leading zero */}
                                    </div>
                                    <h4>
                                        Question {index + 1}: {item.question}
                                    </h4>
                                </div>
                                <div className="questions-modal-div-right">
                                    <p>Edit</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="preview-modal-btn">
                        <div className='handwritten-button'>
                            <button onClick={() => navigate('/dashboard/current-affairs')}>Save & Publish</button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

const AddGoalsExamModal = (props) => {
    const navigate = useNavigate()

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className="addgoals-container-modal">
                    <div className='addhandwritten-inputs'>
                        <div className='addhandwritten-input-two-div'>
                            <div className='addhandwritten-input'>
                                <h6>Goal Exam<span>*</span></h6>
                                <div className='addhandwritten-inputs-div'>
                                    <div className="input-container">
                                        <select name="" id="">
                                            <option value=""></option>
                                        </select>
                                        <label htmlFor="">Select Goal Exam</label>
                                    </div>
                                    <div className='addhandwritten-inputs-icons'>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='addhandwritten-input-two-div'>
                            <div className='addhandwritten-input'>
                                <h6>Subject</h6>
                                <div className='addhandwritten-inputs-div'>
                                    <div className="input-container">
                                        <select name="" id="">
                                            <option value=""></option>
                                        </select>
                                        <label htmlFor="">Select Subject</label>
                                    </div>
                                    <div className='addhandwritten-inputs-icons'>

                                    </div>
                                </div>
                            </div>
                            <div className='addhandwritten-input'>
                                <h6>Sub Subjects (Optional)</h6>
                                <div className='addhandwritten-inputs-div'>
                                    <div className="input-container">
                                        <input type="text" />
                                        <label htmlFor="">Enter sub subject</label>
                                    </div>
                                    <div className='addhandwritten-inputs-icons'>
                                        {/* <AiFillPlusCircle /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='addhandwritten-input-two-div'>
                            <div className='addhandwritten-input'>
                                <h6>Chapter</h6>
                                <div className='addhandwritten-inputs-div'>
                                    <div className="input-container">
                                        <select name="" id="">
                                            <option value=""></option>
                                        </select>
                                        <label htmlFor="">Select Chapter</label>
                                    </div>
                                    <div className='addhandwritten-inputs-icons'>

                                    </div>
                                </div>
                            </div>
                            {props.topic &&
                                <div className='addhandwritten-input'>
                                    <h6>Topic Name</h6>
                                    <div className='addhandwritten-inputs-div'>
                                        <div className="input-container">
                                            <select name="" id="">
                                                <option value=""></option>
                                            </select>
                                            <label htmlFor="">Select Topic Name</label>
                                        </div>
                                        <div className='addhandwritten-inputs-icons'>

                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="addgoals-modal-btn">
                        <div className='handwritten-button'>
                            <button onClick={props.onHide}>Save</button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}


const TableModal = (props) => {
    const navigate = useNavigate()

    const dummyData = [
        {
            id: 1,
            questions: "Question display here",
            options: "Option1, Option2, Option3",
            solution: "Option 1",
            video: "Video Link",
        },
        {
            id: 2,
            questions: "Question display here",
            options: "Option1, Option2, Option3",
            solution: "Option 1",
            video: "Video Link",
        },
        {
            id: 3,
            questions: "Question display here",
            options: "Option1, Option2, Option3",
            solution: "Option 1",
            video: "Video Link",
        },
        {
            id: 4,
            questions: "Question display here",
            options: "Option1, Option2, Option3",
            solution: "Option 1",
            video: "Video Link",
        },
        {
            id: 5,
            questions: "Question display here",
            options: "Option1, Option2, Option3",
            solution: "Option 1",
            video: "Video Link",
        },
        {
            id: 6,
            questions: "Question display here",
            options: "Option1, Option2, Option3",
            solution: "Option 1",
            video: "Video Link",
        },
        {
            id: 7,
            questions: "Question display here",
            options: "Option1, Option2, Option3",
            solution: "Option 1",
            video: "Video Link",
        },
        {
            id: 8,
            questions: "Question display here",
            options: "Option1, Option2, Option3",
            solution: "Option 1",
            video: "Video Link",
        },
        {
            id: 9,
            questions: "Question display here",
            options: "Option1, Option2, Option3",
            solution: "Option 1",
            video: "Video Link",
        },
        {
            id: 10,
            questions: "Question display here",
            options: "Option1, Option2, Option3",
            solution: "Option 1",
            video: "Video Link",
        },
    ];
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className="addgoals-container-modal">
                    <div className='table-modal'>
                        <table>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Questions</th>
                                    <th>Options</th>
                                    <th>Solution</th>
                                    <th>Video</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.id}</td>
                                        <td>{data.questions}</td>
                                        <td>{data.options}</td>
                                        <td>{data.solution}</td>
                                        <td>
                                            <p className="videolink">{data.video}</p>
                                        </td>
                                        <td>
                                            <div className="handwrittennotes-table-icons">
                                                <div className="handwrittennotes-icon">
                                                    <FiEdit3 />
                                                </div>
                                                <div className="handwrittennotes-icon">
                                                    <AiOutlineDelete />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination />
                    </div>
                    <div className="addgoals-modal-btn">
                        <div className='handwritten-button'>
                            <button onClick={props.onHide}>Save & Close</button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}





export {
    CreatePostModal,
    PriviewNewsModal,
    QuestionsUploadedModal,
    AddGoalsExamModal,
    TableModal
}