import React, { Component } from "react";
import bar from './image/3.jpg';
import train from './image/9.jpg';
import meetup from './image/4.jpg';
import touchface from './image/8.jpg';
import restaurant from './image/11.jpg';
import walking from './image/4.jpg'
class galarie extends Component {
    state = {
        index: 0, 
        picList: [bar, train, meetup, touchface, restaurant, walking]
      }
      
      onClickNext= () => {
          if (this.state.index + 1 === this.state.picList.length ){
              this.setState({ 
                  index: 0 
                })
            } else {
                this.setState({
                    index: this.state.index + 1
                })
            }

          }
          onClickPrevious= () => {
            if (this.state.index - 1 === -1 ){
                this.setState({ 
                    index: this.state.picList.length - 1
                  })
              } else {
                  this.setState({
                      index: this.state.index - 1
                  })
              }
            }
      
      render() {
        return (
          <div>
            <img alt="error" src={this.state.picList[this.state.index]} style={{"maxHeight":"40%","maxWidth":"40%"}} /> <br/>
            <button style={{"fontSize":"18px"}} onClick={this.onClickPrevious}> Previous </button>
            <button style={{"margin-left":"5px", "fontSize":"18px"}} onClick={this.onClickNext}> Next </button>
          </div>
        );
      }

}

export default galarie;