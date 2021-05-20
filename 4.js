import React, { Component } from 'react';

class Four extends Component {
    constructor() {
        super();
        this.state = {
            datalist:[]
        }
    }

    getData = () => {
        fetch("http://www.example.com/api/get/1")
            .then(response => response.json())
            .then(result => this.setState({
                 datalist: result 
                })
            )
    }

    componentDidMount(){
        this.getData();
    }

    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12 text-center">
                        {
                             this.state.datalist.map(xcity=>
                             {
                                 return(
                                     <p>{xcity}</p>
                                 )
                             })
                        }
                    </div>
                </div>

                
            </div>
            
        )
    }
}

export default Four;