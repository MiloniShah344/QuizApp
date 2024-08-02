import React, { Component } from 'react'

export class Score extends Component {

  constructor(props){
    super(props)
  
  }
  render() {
    let score = localStorage.getItem('Score')
    return (
      <>
      <div>Score</div>
      <p>{score}</p>
      <button type='button' onClick={()=>{this.props.Quizval()}}>QUIZ</button>
      <button type='button' onClick={()=>{}}>Download PDF</button>
      </>
    )
  }
}

export default Score