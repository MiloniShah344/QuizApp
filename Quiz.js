import React,{Component} from 'react'

class Quiz extends Component{
    constructor(props){

        super(props)
        this.state = {
            ques : [
            {id:1, question:"Question 1", options:["Op 1","Op 2","Op 3","Op 4"], CorrAns:"Op 1" },
            {id:2, question:"Question 2", options:["Op 1","Op 2","Op 3","Op 4"], CorrAns:"Op 2" },
            {id:3, question:"Question 3", options:["Op 1","Op 2","Op 3","Op 4"], CorrAns:"Op 3" },
            {id:4, question:"Question 4", options:["Op 1","Op 2","Op 3","Op 4"], CorrAns:"Op 4" },
            {id:5, question:"Question 5", options:["Op 1","Op 2","Op 3","Op 4"], CorrAns:"Op 1" }
            ],
            answers:{}
        }
        
    }
    handleOptions = (e,id)=>{
        
        this.setState({
            answers:{...this.state.answers, [id]:e.target.value}
        })
    }
    handleClick = ()=>{
        
        let score=0
        this.state.ques.map((val)=>{
            if(this.state.answers[val.id]==val.CorrAns){
                // this.setState({score:this.state.score+1})
                score++
            }
        })
        console.log(this.state.answers)
        console.log(score)
        localStorage.setItem('Score',JSON.stringify(score))
        {this.props.Quizval()}
    }
    render(){
    
        
        return(
            <>
            <div>
                <center>
                <h1>QUIZ APP</h1>
                </center>
                <hr/>
                {this.state.ques.map((val)=>(
                    <>
                    <p>{val.id}&nbsp;&nbsp;{val.question}</p>
                    {val.options.map((op)=>(
                        <>
                            <input type='radio' name={val.id} value={op} onChange={(e)=>{this.handleOptions(e,val.id)}}/>{op}<br/>
                        </>
                    ))}
                    {/* <input type='radio' name='Option' value={val.options[0]} onChange={(e)=>{this.handleOptions(e)}}/>{val.options[0]}<br/>
                    <input type='radio' name='Option' value={val.options[1]} onChange={(e)=>{this.handleOptions(e)}}/>{val.options[1]}<br/>
                    <input type='radio' name='Option' value={val.options[2]} onChange={(e)=>{this.handleOptions(e)}}/>{val.options[2]}<br/>
                    <input type='radio' name='Option' value={val.options[3]} onChange={(e)=>{this.handleOptions(e)}}/>{val.options[3]}<br/><br/> */}
                    </>
                ))}
                <button type='submit' onClick={()=>{this.handleClick()}}>SUBMIT</button>
                {/* <button type='button' onClick={()=>{this.props.Quizval()}}>SCORE</button> */}

            </div>
        
            </>
        )
    }
}
export default Quiz