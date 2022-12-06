import { useState } from "react";
import "./styles.css";

export default function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false }
      ]
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false }
      ]
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false }
      ]
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true }
      ]
    }
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  // const [styleAnswerOption, setStyleAnswerOption] = useState("");
  const [score, setScore] = useState(0);

  //onClicking we change the question and answers being shown
  //we also keep track of the score
  function handleAnswerButtonClick(answerObj) {
    //code that keeps track of the score
    //if the button clicked has its answer correct we change its classname to correct
    //else we change its classname to incorrect
    if (answerObj.isCorrect) {
      setScore(score + 1);
    } else {
    }
    //we can even create a variable and anytime the user gets an answer correct, we increment
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // alert("you have reached the end of your questions");
      setShowScore(true);
      // on finishing the quiz just show the score rather than alert
    }
  }

  function handleReset() {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
  }

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
            <div style={{ marginTop: "15px" }}>
              <p>Your current score : {score}</p>
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answer) => {
              return (
                <button
                  onClick={() => {
                    handleAnswerButtonClick(answer);
                  }}
                >
                  {answer.answerText}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

//if user has answered all the questions, display the score div
//but if user hasn't answered all questions, just display the current questions

/*

Challenges. 
1.find a way to reset the quiz on button click so that it takes us back to the start.
2.find a way to display the previous scores
3.find a way to make the correct answers light green and the wrong answers light red
*/

/*
 
I wanted a way to change color but honestly, the questions and answer change once the button
is clicked so there is no need since there will be no time interval before the questions along with
all the answers shuffle for the user to see the correct answers. 

// unless I make the correct answer and incorrect answer visible on mouseover which completely
//defeats the whole point of a quiz app since the user will see the correct answer before selecting it.
The color changing background functionality should only happen 
if all the questions and chosen answers can be seen.*/

//I will do an actual quiz app but I will use select boxes to achieve pretty much the same results
