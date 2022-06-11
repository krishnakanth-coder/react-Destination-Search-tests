import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const SearchResultList = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="destination-search-page">
        <div className="home-card">
          <h1 className="search-header">Destination Search</h1>
          <input
            type="search"
            className="search-button"
            placeholder="Search Destinations"
            onChange={this.onChangeSearchInput}
            alt="search icon"
          />
        </div>

        <ul className="multiple-cards-container">
          {SearchResultList.map(eachItem => (
            <DestinationItem
              singledestinationsList={eachItem}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
