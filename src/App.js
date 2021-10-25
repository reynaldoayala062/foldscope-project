import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
      text: "",
      answer: []

  }

  handleChange = (e) => {

    // console.log(e.target.value)
    // let answer = []
    // for(let x = 1; x < e.target.value.length; x++){
    //   console.log('Hello')
    // }

    let a = e.target.value;
    let b= {};
    for (let i=0;i<a.length;i++){
        if((a.match(new RegExp(a[i], "g"))).length > 0){
            b[a[i]]=(a.match(new RegExp(a[i], "g"))).length;
        }
    }

    console.log(b)

    this.setState({
      ...this.state,
      text: a,
      answer: Object.entries(b)

  })
}

  

  render() {
    return(
      <div className="home">
        <div className="home-container">
          <div className="home-wrapper">
            <h1>
              Foldscope Project
            </h1>
            <h2> Reynaldo Ayala Submission </h2>
            <p> Requirements:
              Build a React web-app to let users count characters with the following limitations:</p>
              <ul>The web-app has a text area.</ul>
              <ul>Text of any length may be entered in the text area. The web app
              should count and display the number of times each character
              appeared in the text.</ul>
              <ul>The character and their respective counts should be displayed in
              the order that the characters appeared in the original text.</ul>
              <ul>Web app should also highlight the 5 most frequent characters in
              the text</ul>
              <textarea onChange={this.handleChange}></textarea>
              <h3> Answer </h3>
              <p> Text: {this.state.text} </p>
              <ul> Character Count: {this.state.answer} </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App

