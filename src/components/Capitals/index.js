import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  clickCountry = event => {
    this.setState({activeId: event.target.value})
  }

  getfilteredAnswer = () => {
    const {activeId} = this.state
    const filteredAnswer = countryAndCapitalsList.find(
      each => each.id === activeId,
    )
    return filteredAnswer.country
  }

  render() {
    const {activeId} = this.state
    const country = this.getfilteredAnswer(activeId)

    return (
      <div className="bg-container">
        <div className="capitals-page-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="data">
            <select
              className="option-box"
              onChange={this.clickCountry}
              value={this.activeId}
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} className="box-text" value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description">is capital of which country?</p>
          </div>
          <p className="capital-city">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
