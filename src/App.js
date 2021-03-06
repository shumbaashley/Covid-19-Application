import React from 'react'
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'
import covidImage from './images/image.png'

class App extends React.Component {

  state = {
    data : {},
    country : ''
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({data : fetchedData, country : country})
  }

  async componentDidMount(){
    const fetchedData = await fetchData()
    this.setState({data : fetchedData})
  }

  render(){
    const { data, country } = this.state

    return (
      <div className={styles.container}>
        <img className={styles.image} src={covidImage} alt="Covid 19"></img>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
        <Chart data={data} country={country}></Chart>
      </div>
    );
  }
}

export default App;
