import React from 'react'
import ReactDom from 'react-dom'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import './style.css'
ReactDom.render( <div><Header/><Main/><Footer/> </div>,document.getElementById('main'))