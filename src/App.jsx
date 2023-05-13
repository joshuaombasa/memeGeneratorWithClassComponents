import React from 'react'

import './App.css'
import Header from './Header'
import Hero from './Hero'

class App extends React.Component {

  state = {
    topText: '',
    bottomText: '',
    randomImg: "http://i.imgflip.com/1bij.jpg" ,
    data: []
  }

  getRandomImage = (event) => {
    event.preventDefault()
    const randomNumber = Math.floor(Math.random() * this.state.data.length)
    const randomUrl = this.state.data[randomNumber].url
    
    this.setState(preState => {
      return {
        ...preState,
        randomImg: randomUrl
      }
    })
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState(preState => {
      return {
        ...preState,
        [name]: value
      }
    })
  }

  handlSubmit = (event) => {
    event.preventDefault()
  }

  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
       .then(res => res.json())
       .then(data => {
        
        this.setState(preState => {
          return {
            ...preState,
            data: data.data.memes
          }
        })
       })
  }


render() {

  // console.log(this.state)

  return (
    <div className='container'>
      <Header />
      <Hero 
      state={this.state} 
      handleChange={this.handleChange}
      getRandomImage={this.getRandomImage}
      />
    </div>
  )
}
  
}

export default App
