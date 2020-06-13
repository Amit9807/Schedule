import * as React from "react";
import Schedule from './Schedule'
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Inject,
  ViewsDirective,
  ViewDirective
} from "@syncfusion/ej2-react-schedule";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state={
      Data: false
    }
    this.scheduleData = [
      {
        Id: 3,
        
        Subject: "Testing",
        StartTime: new Date(2018, 1, 11, 9, 0),
        EndTime: new Date(2018, 1, 11, 10, 0),
        Describiton: "Online test",
        Location: "mumbai",
        IsAllDay: false
      },
      {
        Id: 4,
        Subject: "Vacation",
        StartTime: new Date(2018, 1, 13, 9, 0),
        EndTime: new Date(2018, 1, 13, 10, 0),
        Describiton: "Goa and manali",
        Location: "mumbai",
        IsAllDay: false
      }
    ];
  }
  onAddClick() {
    console.log(this.scheduleData);

    this.setState({
      Data: true
    })
    let Data = [
      {
        Id: 1,
        Subject: "Conference",
        StartTime: new Date(2018, 1, 12, 9, 0),
        EndTime: new Date(2018, 1, 12, 10, 0),
        Describiton: "Zoom Meet",
        Location: "mumbai",
        IsAllDay: false
      },
      {
        Id: 2,
        Subject: "Meeting",
        StartTime: new Date(2018, 1, 15, 10, 0),
        EndTime: new Date(2018, 1, 15, 11, 30),
        Describiton: "Google Duo",
        Location: "mumbai",
        IsAllDay: false
      }
    ];
    this.scheduleObj.addEvent(Data);
    this.buttonObj.element.setAttribute("disabled", "true");
  }
  render() {
    return (
      <div>
       
        {

         Object.keys(this.scheduleData).map((key)=>{
            return (
                   
                    <Schedule Subject={this.scheduleData[key].Subject}
                    Id={this.scheduleData[key].Id}
                    StartTime={this.scheduleData[key].StartTime}
                    EndTime={this.scheduleData[key].EndTime}
                    Location={this.scheduleData[key].Location}
                    Describiton={this.scheduleData[key].Describiton}
                    ></Schedule>
                  )
              })
    
     }
        <ButtonComponent
          id="add"
          title="Add"
          ref={t => (this.buttonObj = t)}
          onClick={this.onAddClick.bind(this)}
        >
          Add
        </ButtonComponent>
        <ScheduleComponent
          ref={t => (this.scheduleObj = t)}
          width="100%"
          height="550px"
          selectedDate={new Date(2018, 1, 15)}
          eventSettings={{ dataSource: this.scheduleData }}
        >
          <ViewsDirective>
            <ViewDirective option="Day" />
            <ViewDirective option="Week" />
            <ViewDirective option="WorkWeek" />
            <ViewDirective option="Month" />
          </ViewsDirective>
          <Inject services={[Day, Week, WorkWeek, Month]} />
        </ScheduleComponent>

     
        
      </div>
    );
  }
}
export default App;
