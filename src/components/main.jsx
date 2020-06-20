import React from 'react'

class Main extends React.Component{
    constructor(){
        super()
        this.state = {
            counter: 0,
            color: 'black'
        }
        this.increment=this.increment.bind(this)
        this.decrement=this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }
    reset(){
        this.setState({color: 'black'})
    }
    increment()
    {
        this.setState((oldState)=>{
            return {counter : oldState.counter +1, color: 'green'}
        })
        setTimeout(this.reset, 2000)
        
    }
    decrement()
    {   
        if(this.state.counter >0){
            this.setState((oldState)=>{
                return {counter : oldState.counter-1, color: 'red'}
            })
        }
        setTimeout(this.reset,2000)
    }
    render()
    {   const style={
            textAlign: 'center',
            marginTop: '30vh',
            color: this.state.color,
            transition: 'color 0.5s'
        }
        return <div style = {style}>
            <h1>{this.state.counter}</h1>
            <button className='button' onClick={this.increment}>+</button>
            <button className='button' onClick={this.decrement}>-</button>
        </div>
    }

}

export default Main