import React, { Component } from 'react';

export default class Figura extends Component {
    teste(e) {
        e.target.style.position = "relative";
        e.target.style.left = `${e.nativeEvent.x}px`;
        e.target.style.top = `${e.nativeEvent.y}px`;
    }
    
    render() {
        const figuraStyle = {
            display: "block",
            width: "300px",
            height: "150px",
            backgroundColor: '#000',
            margin: '10px',
            float: 'left'
        }

        return (
            <div style={figuraStyle} draggable="true"  onDragEnd={e => this.teste(e)}></div>
        )
    }
}