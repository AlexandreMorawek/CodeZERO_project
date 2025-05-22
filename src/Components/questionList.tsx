import { useState } from "react"
import data from "../data/questions.json"
import Carte from "../Components/Carte"

function QuestionList () {

    const [startQuiz, setStartQuiz] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    

    const handleNextQuestion = () => {
        if (currentQuestion < data.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setStartQuiz(false)
            setCurrentQuestion(0)
            alert("Quiz terminé")
        }
    }

    return (
        <>
            {!startQuiz && (
                <div className="button1">
                    <button type="button" className="quiz_button" onClick={() => setStartQuiz(true)}>Commencer le quiz !</button>
                </div>
            )}
            {startQuiz && (
                <div className="questionCard">
                    <Carte
                    key={data[currentQuestion].id}
                    question={data[currentQuestion].question}
                    answer1={data[currentQuestion].answer1}
                    answer2={data[currentQuestion].answer2}
                    answer3={data[currentQuestion].answer3}
                    answer4={data[currentQuestion].answer4}
                    correct_answer={data[currentQuestion].correct_answer}
                    explanation={data[currentQuestion].explanation}
                    onNext={handleNextQuestion}
                    />
            </div>
            )}
        </>
    )
}

export default QuestionList