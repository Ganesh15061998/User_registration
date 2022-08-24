import React from 'react'
import {useState} from 'react'


class Fibunacci extends React.Component {
    constructor(props){
        super(props);
        this.state={
            num1:1,
            num2:0,
            // count:0
        }
    }


    clickInc=(e)=>{
        let a = this.state.num1 + this.state.num2;
        this.setState({
            num1:a,
            num2:this.state.parseInt.num1
        })
        }
        clickDec = (e)=>{
            this.setState({
            num1:this.state.num2,
            num2:this.state.num1 - this.state.num2
            })

            
          
        }

        

    render(){
        return(
            <div>
                Fibonacci series
                <span>this current Number is</span><b>{this.state.num1}</b>
                <br></br>
                <button onClick={this.clickDec}>+</button>
                <br></br>
                <button onClick={this.clickInc}>-</button>

                 {/* <h1>{count}</h1> */}
                 <h1><b>{this.state.num2}</b></h1>


            

            </div>
        )
    }
    
}

export default Fibunacci