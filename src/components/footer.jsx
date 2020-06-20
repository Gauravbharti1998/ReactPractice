import React from 'react'

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
        const style={
        }
        return(
            <div style={style}>
                <h3>{this.state.time.getHours().toString().padStart(2,'0')}:{this.state.time.getMinutes().toString().padStart(2,'0')}:{this.state.time.getSeconds().toString().padStart(2,'0')}</h3>
                
            </div>
        ) 
    }
}
export default Footer