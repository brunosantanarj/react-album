import React, { Component } from 'react';

export default class Figura2 extends Component {
    componentDidMount() {
        let pai = document.querySelector('.father');
        console.log(pai.getBoundingClientRect().left)
    }
    
    render() {
        const figuraStyle = {
            display: "block",
            width: "400px",
            height: "200px",
            backgroundColor: '#069',
            margin: '10px',
            float: 'right'
        }
        return (
            <div style={figuraStyle} className="father">
            </div>
        )
    }
}