import React, { Component } from 'react';
import axios from 'axios';

class Requester extends Component {

    state = {
        resultStr: ""
    }

   
    componentDidMount() {
        console.log("data component mounted");
        axios.get('http://localhost:8080/json').then((result) => {
            console.log(result.data);
            this.setState({ resultStr: result.data });
        });
        
    }



    render() {
        if (this.state.resultStr.length > 0) {
            console.log(this.state.resultStr[0].courseName);
            return <div>
                {this.state.resultStr[1].courseName}
            </div>
        }

        return <div>
            
        </div>
    }

}
export default Requester;