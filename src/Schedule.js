import React, { Component } from 'react'
import axios from 'axios';

export default class Schedule extends Component {
    constructor(props){
        super(props);
        this.state={
            Id:'',
            Subject:'',
            Location:'',
            StartTime:'',
            EndTime:'',
            data: null
        }
    }
    // handleClick=()=>{
    //     this.setState({
    //         Id: this.props.Id,
    //         Subject: this.props.Subject,
    //         Location: this.props.Location,
    //         StartTime: this.props.StartTime,
    //         EndTime: this.props.EndTime,
    //     })
    // }
    componentDidMount(){
        const data={
            Id: this.props.Id,
            Subject: this.props.Subject,
            Location: this.props.Location,
            Describition: this.props.Describition,
            StartTime: this.props.StartTime,
            EndTime: this.props.EndTime,
            
        }
        axios.post('https://react-schedule-eac83.firebaseio.com/Schedule.json',data)
        .then(resp=>{
           console.log(resp);
          
        }) 
    }
    render() {
        return (
            <div>
             {console.log(this.props.Describiton)}
                {/* <button onClick={this.handleClick}>Save Schedule</button> */}
            </div>
        )
    }
}
