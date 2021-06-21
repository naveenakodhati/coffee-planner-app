// Write your code here.
import {Component} from 'react'
import QuestionOption from '../QuestionOption'
import './index.css'

class CoffeePlannerQuestion extends Component {
  render() {
    const {questionData, getQuestionType, getSelectedContainer} = this.props
    const {questionType, questionTitle, optionsList} = questionData
    const selectedOption = getSelectedContainer[questionType]

    return (
      <li className="list-style">
        <h1 className="coffee-title">{questionTitle}</h1>
        <ul className="row-styling-container">
          {optionsList.map(eachList => (
            <QuestionOption
              selectedOptionData={selectedOption}
              questionType={questionType}
              getQuestionType={getQuestionType}
              optionsData={eachList}
              key={eachList.id}
            />
          ))}
        </ul>
      </li>
    )
  }
}

export default CoffeePlannerQuestion
