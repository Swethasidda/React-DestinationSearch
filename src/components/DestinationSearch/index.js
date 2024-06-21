// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    // console.log(destinationsList)
    const {searchInput} = this.state
    const lower = searchInput.toLocaleLowerCase()

    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.toLocaleLowerCase().includes(lower),
    )
    return (
      <div className="big-container">
        <h1 className="heading">Destination Search</h1>
        <div className="small-container">
          <input
            type="search"
            className="search"
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="image"
          />
        </div>
        <ul className="Destination-Item-container">
          {searchResults.map(each => (
            <DestinationItem itemDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
