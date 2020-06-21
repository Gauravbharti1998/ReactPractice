import React from 'react'
import { grey } from 'color-name';

class Footer extends React.Component{
    constructor(){
        super()
        this.state = {time: new Date()}
        this.updateTime = this.updateTime.bind(this)
    }
    componentDidMount(){
        setInterval(this.updateTime, "1000")
    } 
    updateTime(){
        this.setState({time: new Date()})
    }
    render(){
        const style1={
            fontSize: '25px',
            textAlign : 'right',
            color: 'grey'
        }
        return(
            <div>
                <h3>{this.state.time.getHours().toString().padStart(2,'0')}:{this.state.time.getMinutes().toString().padStart(2,'0')}:{this.state.time.getSeconds().toString().padStart(2,'0')}</h3>
                <h5 style ={style1}><a href ="https://github.com/Gauravbharti1998/ReactPractice">Click to see GitHub Repo</a></h5>
                
            </div>
        ) 
    }
}
export default Footer