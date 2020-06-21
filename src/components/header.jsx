import React from 'react'

class Header extends React.Component
{
    render(){
        const style1={
            fontSize: 40,
            fontFamily: 'monospace',
            color : 'green',
            textAlign  : 'center'
        };
        const style2={
            fontSize: 40,
            fontFamily: 'monospace',
            color : 'red',
            textAlign  : 'center'
        };
        const style3={
            fontFamily: 'monospace',
            color : 'black',
            textAlign  : 'center'
        };
        
        return(
        <div>
        <h3 style ={style1}> Incrementer</h3>
        <h6 style ={style3}> & </h6>
        <h3 style ={style2}> Decrementer <hr/></h3> 
        </div>
    )}
}
export default Header
