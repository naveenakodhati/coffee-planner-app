// Write your code here.
import {Component} from 'react'
import './index.css'

class QuestionOption extends Component {
  getSelectedOption = () => {
    const {getQuestionType, questionType, optionsData} = this.props
    const {optionTitle} = optionsData
    getQuestionType(optionTitle, questionType)
  }

  render() {
    const {optionsData, selectedOptionData} = this.props
    const {optionTitle, description} = optionsData
    const optionSelected = selectedOptionData === optionTitle
    const selectedImage = optionSelected
      ? 'https://assets.ccbp.in/frontend/react-js/coffee-planner-white-cup-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png'
    const altImageText = optionSelected ? 'white cup' : 'blue cup'
    const backgroundDesign = optionSelected
      ? 'styling-questions-2'
      : 'styling-questions-1'
    return (
      <li>
        <button
          type="button"
          className={backgroundDesign}
          onClick={this.getSelectedOption}
        >
          <div className="row-styling">
            <h1 className="coffee-heading">{optionTitle}</h1>
            <img className="cup-image" src={selectedImage} alt={altImageText} />
          </div>
          <p className="coffee-description">{description}</p>
        </button>
      </li>
    )
  }
}

export default QuestionOption
