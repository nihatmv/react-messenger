import { useState } from "react";
import "./App.css";

function App() {
  const [divs, setDivs] = useState([]);
  const [comment, setComment] = useState("");

  const DynamicDivComponent = ({ content }) => {
    return <div className="comment-section">{content}</div>;
  };

  const handleButtonClick = () => {
    setDivs((prevDivs) => [
      ...prevDivs,
      <DynamicDivComponent key={prevDivs.length} content={comment} />,
    ]);
    setComment("");
  };

  const handleTextareaChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="messenger">
      <div className="messenger-top-bar">
        <div>
          <img src="avatar-image.jpeg" alt="image" className="profile-image" />
          <textarea
            name="textarea"
            id="textarea"
            cols="35"
            rows="10"
            placeholder="Write a comment"
            className="textarea"
            value={comment}
            onChange={handleTextareaChange}
          ></textarea>
        </div>
        <div className="buttons">
          <button className="reset-button">Reset</button>
          <button className="comment-button" onClick={handleButtonClick}>
            Comment
          </button>
        </div>
      </div>

      <div className="messenger-body">
        {divs.map((div, index) => (
          <div key={index}>{div}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
