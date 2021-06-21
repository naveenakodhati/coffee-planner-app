// Write your code here.
import {Component} from 'react'
import CoffeePlannerQuestion from '../CoffeePlannerQuestion'
import './index.css'

class CoffeePlanner extends Component {
  state = {
    selectedCoffeePlanner: {
      DRINK_TYPE: '',
      COFFEE_TYPE: '',
      QUANTITY: '',
      GRIND_TYPE: '',
      DELIVER_TYPE: '',
    },
    showMessage: false,
  }

  onChangeOptions = () => {
    const {selectedCoffeePlanner} = this.state
    if (
      selectedCoffeePlanner.DRINK_TYPE !== '' &&
      selectedCoffeePlanner.COFFEE_TYPE !== '' &&
      selectedCoffeePlanner.QUANTITY !== '' &&
      selectedCoffeePlanner.GRIND_TYPE !== '' &&
      selectedCoffeePlanner.DELIVER_TYPE !== ''
    ) {
      return true
    }
    return false
  }

  onMakeCoffee = () => {
    this.setState({showMessage: true})
  }

  showTextMessage = () => {
    const {selectedCoffeePlanner, showMessage} = this.state

    if (showMessage === true) {
      return (
        <>
          {this.onChangeOptions() ? (
            <div className="display-container">
              <p>
                I Drink my coffee as
                <span className="highlight">
                  {` ${selectedCoffeePlanner.DRINK_TYPE}`}
                </span>
                , with a
                <span className="highlight">
                  {` ${selectedCoffeePlanner.COFFEE_TYPE}`}
                </span>{' '}
                type of bean.
                <span className="highlight">
                  {` ${selectedCoffeePlanner.QUANTITY} `}
                </span>
                of
                <span className="highlight">
                  {` ${selectedCoffeePlanner.GRIND_TYPE} `}
                </span>
                ground, send to me
                <span className="highlight">
                  {` ${selectedCoffeePlanner.DELIVER_TYPE}`}
                </span>
                .
              </p>
            </div>
          ) : (
            <div>
              <p>Kindly select options for all the questions</p>
            </div>
          )}
        </>
      )
    }
    return null
  }

  getQuestionType = (optionTitle, questionType) => {
    const {selectedCoffeePlanner} = this.state
    const newPlanner = {...selectedCoffeePlanner}
    newPlanner[questionType] = optionTitle
    this.setState({selectedCoffeePlanner: newPlanner})
  }

  render() {
    const {coffeePlannerList} = this.props
    const {selectedCoffeePlanner} = this.state

    return (
      <div className="main-bg-container">
        <div className="bg-container">
          <div>
            <h1 className="heading">Create a Plan</h1>
            <p className="description">
              We offer a assortment of the best artesian coffees
              <br /> from the globe delivered fresh to the door
              <br /> create your plan with this
            </p>
          </div>
        </div>
        <ul className="card-container">
          {coffeePlannerList.map(eachQuestion => (
            <CoffeePlannerQuestion
              getSelectedContainer={selectedCoffeePlanner}
              key={eachQuestion.id}
              questionData={eachQuestion}
              getQuestionType={this.getQuestionType}
            />
          ))}
        </ul>
        <div className="button-container">
          <button onClick={this.onMakeCoffee} className="button" type="button">
            Create my plan
          </button>
          {this.showTextMessage()}
        </div>
      </div>
    )
  }
}

export default CoffeePlanner
