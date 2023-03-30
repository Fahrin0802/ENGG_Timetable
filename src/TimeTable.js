import React, { Component } from 'react';
import Table from './Table';
import CoursePalette from './CoursePalette';
import Seminar from './Seminar'
import Lab from './Lab'
import OptionDashBoard from './OptionDashBoard'
import { useLocation } from 'react-router-dom';
import './Terms.css';
import Dropdown from './Dropdown';


const Terms = (props) => {
        // Retrieve selectedProgram and selectedPlan
        const location = useLocation()
        const{selectedProgram, selectedPlan} = location.state
        
        // const termList = // Call Ji's function to get term data using plan and program name
        const termList = [
          "Term 1",
          "Term 2",
          "Term 3",
          "Term 4",
          "Term 5",
          "Term 6",
          "Term 7",
          "Term 8",
        ]
        
        const cells = termList.map((term,index)=> {
            return(
              <div
                key={index} 
                programInfo={term}
                className = "indvTerm"
                onClick={(event) =>{
                  props.setSelectedProgramPlanTerm(selectedProgram, selectedPlan, term)
                  console.log(selectedProgram, selectedPlan, term)
                  props.setCoursesSeminarsLabs(selectedProgram, selectedPlan, term)
                }}
              >  
              {term}
              </div>
            )
        })

        return(
          <div className = "termPalette">
            <h3>Terms</h3>
            {cells}
          </div>
        )      
}


class TimeTable extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedPlan: "",
      selectedProgram: "",
      selectedterm: "",

      isToolTipOpen: false,
      
      sectionDashboard: [
        // {   
        //   name: "ECE325",
        //     Section: "E1",
        //     Times: "Monday 09:00-10:00, Friday 09:00-10:00",
        //     Room: "ETLC-300",
        //     Professor: "JK Rowling",

        // },

        // {
        //   name: "ECE325",
        //   Section: "E2",
        //   Times: "Monday 09:00-10:00, Wednesday 09:00-10:00",
        //   Room: "ETLC-350",
        //   Professor: "JK Rowling",
        // },

      ],

      paletteCourses: [],

      paletteSeminars: [],

      paletteLab: [],

      weekdays: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
  
      tableCourses: [
        {
            time: "08:00",
            day: [
              [], [], [], [], [],
            ],
            color: [
              '', '', '', '', '', '',
            ],
        },
        {
          time: "08:30",
          day: [
            [], [], [], [], [],
          ],
          color: [
            '', '', '', '', '', '',
          ],
        },
        {
            time: "09:00",
            day: [
              [], [], [], [], [],
            ],
            color: [
              "", "", "", "", "", "",
            ],
        },
        {
          time: "09:30",
          day: [
            [], [], [], [], [],
          ],
          color: [
            "", "", "", "", "", "",
          ],
        },
        {
            time: "10:00",
            day: [
              [], [], [], [], [],
            ],
            color: [
              "", "", "", "", "", "",
            ],
        },
        {
          time: "10:30",
          day: [
            [], [], [], [], [],
          ],
          color: [
            "", "", "", "", "", "",
          ],
        },
        {
            time: "11:00",
            day: [
              [], [], [], [], [],
            ],
            color: [
              "", "", "", "", "", "",
            ],
        },
        {
          time: "11:30",
          day: [
            [], [], [], [], [],
          ],
          color: [
            "", "", "", "", "", "",
          ],
        },
        {
          time: "12:30",
          day: [
            [], [], [], [], [],
          ],
          color: [
            "", "", "", "", "", "",
          ],
        },
        {
            time: "13:00",
            day: [
              [], [], [], [], [],
            ],
            color: [
              "", "", "", "", "", "",
            ],
        },
        {
          time: "13:30",
          day: [
            [], [], [], [], [],
          ],
          color: [
            "", "", "", "", "", "",
          ],
       },
        {
            time: "14:00",
            day: [
              [], [], [], [], [],
            ],
            color: [
              "", "", "", "", "", "",
            ],
        },
        {
          time: "14:30",
          day: [
            [], [], [], [], [],
          ],
          color: [
            "", "", "", "", "", "",
          ],
        },
        {
            time: "15:00",
            day: [
              [], [], [], [], [],
            ],
            color: [
              "", "", "", "", "", "",
            ],
        },
        {
          time: "15:30",
          day: [
            [], [], [], [], [],
          ],
          color: [
            "", "", "", "", "", "",
          ],
        },
        {
            time: "16:00",
            day: [
              [], [], [], [], [],
            ],
            color: [
              "", "", "", "", "", "",
            ],
        },
        {
          time: "16:30",
          day: [
            [], [], [], [], [],
          ],
          color: [
            "", "", "", "", "", "",
          ],
        },
        {
            time: "17:00",
            day: [
              [], [], [], [], [],
            ],
            color: [
              "", "", "", "", "", "",
            ],
        },
        {
          time: "17:30",
          day: [
            [], [], [], [], [],
          ],
          color: [
            "", "", "", "", "", "",
          ],
        },
        {
            time: "18:00",
            day: [
              [], [], [], [], [],
            ],
            color: [
              "", "", "", "", "", "",
            ],
        },
        {
          time: "18:30",
          day: [
            [], [], [], [], [],
          ],
          color: [
            "", "", "", "", "", "",
          ],
        },
        {
          time: "19:00",
          day: [
            [], [], [], [], [],
          ],
          color: [
            "", "", "", "", "", "",
          ],
        },
      ],
    }
  }


  showToolTip = (event) => {
    this.setState({isToolTipOpen: true})
  }

  hideToolTip = (event) => {
    this.setState({isToolTipOpen: false})
  }

  setCoursesSeminarsLabs = (selectedProgram, selectedPlan, selectedTerm) => {
    // Xi should use the inputs to set this.state.paletteCourses
    // Comment out the hard coded model below
      this.setState({
          paletteCourses: [
          {
            name: "ECE 325",
            color: "blue",
            extendedName: "Object-Oriented Software Design",

            description: "★ 3.8 (fi 6) (either term, 3-0-3/2) Software engineering \
            principles of object-oriented design: basic data structures, classes and \
            objects, creation tactics, inheritance, composition, polymorphism, \
            interfaces, compilation and execution. Programming Objectives: \
            introduction to advanced data structures, inner classes, and reflection. \
            Exception handling and unit testing. Prerequisite: CMPUT 275.",

            accreditionUnits: "Engineering Science: 23.6 Units\n\
            Engineering Science: 23.6 Units\n\
            Engineering Science: 23.6 Units",

            options: [
              {
                section: "EB1",
                color: "orange",
                times: ["MON_09:00-10:00", "WED_09:00-10:00", "FRI_09:00-10:00"],
              },
              {
                section: "EB2",
                color: "green",
                times: ["MON_15:00-16:00", "WED_15:00-16:00", "FRI_15:00-16:00"],
              },
            ]
          },
          {
            name: "ECE 311",
            color: "lightgray",
            extendedName: "Object-Oriented Software Design",

            description: "★ 3.8 (fi 6) (either term, 3-0-3/2) Software engineering \
            principles of object-oriented design: basic data structures, classes and \
            objects, creation tactics, inheritance, composition, polymorphism, \
            interfaces, compilation and execution. Programming Objectives: \
            introduction to advanced data structures, inner classes, and reflection. \
            Exception handling and unit testing. Prerequisite: CMPUT 275.",

            accreditionUnits: "Engineering Science: 23.6 Units\n\
            Engineering Science: 23.6 Units\n\
            Engineering Science: 23.6 Units",

            options: [
              {
                section: "EB1",
                color: "blue",
                times: ["TUE_14:00-15:00", "THU_14:00-15:00",],
              },
              {
                section: "EB2",
                color: "pink",
                times: ["TUE_10:00-11:00", "THU_10:00-11:00",],
              },
            ]
          },
          {
            name: "STAT 235",
            color: "lightgray",
            extendedName: "Object-Oriented Software Design",

            description: "★ 3.8 (fi 6) (either term, 3-0-3/2) Software engineering \
            principles of object-oriented design: basic data structures, classes and \
            objects, creation tactics, inheritance, composition, polymorphism, \
            interfaces, compilation and execution. Programming Objectives: \
            introduction to advanced data structures, inner classes, and reflection. \
            Exception handling and unit testing. Prerequisite: CMPUT 275.",

            accreditionUnits: "Engineering Science: 23.6 Units\n\
            Engineering Science: 23.6 Units\n\
            Engineering Science: 23.6 Units",

            options: [
              {
                section: "EA1",
                color: "red",
                times: ["TUE_12:00-13:00", "THU_12:00-13:00",],
              },
            ]
          },

          {
            name: "SOC 100",
            color: "lightgray",
            extendedName: "Object-Oriented Software Design",

            description: "★ 3.8 (fi 6) (either term, 3-0-3/2) Software engineering \
            principles of object-oriented design: basic data structures, classes and \
            objects, creation tactics, inheritance, composition, polymorphism, \
            interfaces, compilation and execution. Programming Objectives: \
            introduction to advanced data structures, inner classes, and reflection. \
            Exception handling and unit testing. Prerequisite: CMPUT 275.",

            accreditionUnits: "Engineering Science: 23.6 Units\n\
            Engineering Science: 23.6 Units\n\
            Engineering Science: 23.6 Units",

            options: [
              {
                section: "EA1",
                color: "purple",
                times: ["TUE_18:00-19:00",],
              },
            ]
          },

          {
            name: "CHE 243",
            color: "lightgray",
            extendedName: "Object-Oriented Software Design",

            description: "★ 3.8 (fi 6) (either term, 3-0-3/2) Software engineering \
            principles of object-oriented design: basic data structures, classes and \
            objects, creation tactics, inheritance, composition, polymorphism, \
            interfaces, compilation and execution. Programming Objectives: \
            introduction to advanced data structures, inner classes, and reflection. \
            Exception handling and unit testing. Prerequisite: CMPUT 275.",

            accreditionUnits: "Engineering Science: 23.6 Units\n\
            Engineering Science: 23.6 Units\n\
            Engineering Science: 23.6 Units",

            options: [
              {
                section: "EA1",
                color: "pink",
                times: ["TUE_14:00-15:00", "THU_14:00-15:00"],
              },
              {
                section: "EA2",
                color: "red",
                times: ["MON_15:00-16:00", "WED_15:00-16:00", "FRI_15:00-16:00",],
              },
            ]
          },

          {
            name: "ECE 321",
            color: "lightgray",
            extendedName: "Object-Oriented Software Design",

            description: "★ 3.8 (fi 6) (either term, 3-0-3/2) Software engineering \
            principles of object-oriented design: basic data structures, classes and \
            objects, creation tactics, inheritance, composition, polymorphism, \
            interfaces, compilation and execution. Programming Objectives: \
            introduction to advanced data structures, inner classes, and reflection. \
            Exception handling and unit testing. Prerequisite: CMPUT 275.",

            accreditionUnits: "Engineering Science: 23.6 Units\n\
              Engineering Science: 23.6 Units\n\
              Engineering Science: 23.6 Units",

            options: [
              {
                section: "EA1",
                color: "green",
                times: ["MON_09:00-10:00", "WED_09:00-10:00", "FRI_09:00-10:00",],
              },
              {
                section: "EA2",
                color: "orange",
                times: ["MON_13:00-14:00", "WED_13:00-14:00", "FRI_13:00-14:00",],
              },
            ]
          },
          ],

          paletteSeminars: [

          {

            name: "CHE 243 SEM",

            color: "lightgray",

            options: [

              {

                section: "EB1",

                color: "violet",

                times: ["MON_09:00-10:00"],

              },

              {

                section: "EB2",

                color: "green",

                times: ["MON_15:00-16:00"],

              },

            ]

          },

          ],

          paletteLab: [

          {

            name: "ECE 325 Lab",

            color: "lightgray",

            options: [

              {

                section: "EB1",

                color: "yellow",

                times: ["TUE_15:00-18:00"],

              },

      

            ]

          },

          {

            name: "STAT 235 Lab",

            color: "lightgray",

            options: [

              {

                section: "EB1",

                color: "yellow",

                times: ["THU_15:00-18:00"],

              },

      

            ]

          },

          ],
      })
  }

  // Function called when people manually want to add courses (such as electives)
  addCourseSemLabToPalette = (course) => {
    const {paletteCourses} = this.state
    const {paletteSeminars} = this.state
    const {paletteLab} = this.state

    // Get seminar with course.name from Xiangpeng
    // paletteSeminars.push(seminar)
    // Get Lab with course.name from Xiangpeng
    // paletteLab.push(Lab)
   
    paletteCourses.push(course)
    this.setState({ paletteCourses: paletteCourses, paletteSeminars: paletteSeminars, paletteLab: paletteLab})
  }

  displayCourseOption = (course) => {
    const{sectionDashboard} = this.state

    course.options.map((opt,optIndex) =>{
      
      //const color = opt.color //color = "orange"
      const times = opt.times // times = ["MON_09:00-10:00", "WED_09:00-10:00", "FRI_09:00-10:00"],
      
      
      var timeString = ""
      times.map((timesopt,timesoptIndex) =>{
        var day = timesopt.split('_')[0] //day = MON
        const duration = timesopt.split('_')[1] //duration = 09:00-10:00
        
      
        switch(day) {
          case 'MON':
            day = "Monday";
            break;
          case 'TUE':
            day = "Tuesday";
            break;
          case 'WED':
            day = "Wednesday";
            break;
          case 'THU':
            day = "Thursday";
            break;
          case 'FRI':
            day = "Friday";
            break;
          default:
            day = "";
        }

        const dayDuration = day + " " + duration
        timeString = timeString + ", " + dayDuration
      })

      var optCollector = {}
      optCollector.name = course.name // name = "ECE325"
      optCollector.Section = opt.section //section = "EB1"
      optCollector.Times = timeString
      optCollector.Room = opt.room // not yet present
      optCollector.Professor = opt.prof //not yet present

      sectionDashboard.push(optCollector)
    })
    this.setState({ sectionDashboard:sectionDashboard })
  }

  stopCourseOptionDisplay =() =>{
    this.setState({ sectionDashboard:[] })
  }

  highlight = (course) => {
    const {tableCourses} = this.state
   
    const info = []
    course.options.map((option, index) => {
              const color = option.color
              console.log('color', color)
              const times = option.times

              times.map((item, index) => {
                  // "MON_09:30-11:30"
                  var day = item.split('_')[0]
                  var time = item.split('_')[1]

                  var timeStart = time.split('-')[0]
                  var timeEnd = time.split('-')[1]

                  var timeStartHour = parseInt(timeStart.split(':')[0])
                  var timeStartMinute = parseInt(timeStart.split(':')[1])

                  var timeEndHour = parseInt(timeEnd.split(':')[0])
                  var timeEndMinute = parseInt(timeEnd.split(':')[1])


                  var timeStartIndex = (timeStartHour - 7) + (timeStartHour - 7 - 2)
                  if (timeStartMinute == 30){
                    timeStartIndex = timeStartIndex + 1
                  }

                  var timeEndIndex = (timeEndHour - 7) + (timeEndHour - 7 - 2)
                  if (timeEndMinute == 30){
                    timeEndIndex = timeEndIndex + 1
                  }


                  switch(day) {
                    case 'MON':
                      day = 0;
                      break;
                    case 'TUE':
                      day = 1;
                      break;
                    case 'WED':
                      day = 2;
                      break;
                    case 'THU':
                      day = 3;
                      break;
                    case 'FRI':
                      day = 4;
                      break;
                    default:
                      day = 5;
                  }
                  for(var i = timeStartIndex; i < timeEndIndex; i++) {
                    info.push([color, day, i])
                  }
                  // info.push([color, day, startTime]) //info = [yellow,0,4]
                  // info.push([color, day, endTime]) //info = [yellow,0,6]
              })

    })
    // // To highlight a table cell, I need the color, the day, and the time
    
    info.map((thing, index) => {
      tableCourses[thing[2]].color[thing[1]] = thing[0]; // tableCourses[4].color[0] = yellow
    })

    this.setState({ tableCourses: tableCourses })
  }

  unhighlight = () => {
    const {tableCourses} = this.state
    
    tableCourses.map((item, itemIndex) => {
      item.color.map((kikos, colorIndex) => {
        tableCourses[itemIndex].color[colorIndex] = ""
      })
    })
    this.setState({ tableCourses: tableCourses })
  }

  onDragStop = (event) =>{
    this.unhighlight()
    this.stopCourseOptionDisplay()
  }

  onDragStart = (event, course) => {
    this.highlight(course)
    this.displayCourseOption(course)

    console.log('dragstart on div: ', course.name);
    event.dataTransfer.setData("course", JSON.stringify(course));
  }

  addCourseToTable = (course, day, time) => {
    const {tableCourses} = this.state

    // Get which option of the lecture was chosen
    var courseOption = 0
    course.options.map((option, optionIndex) => {
        const times = option.times

        times.map((item, timeIndex) => {
            var tempDay = item.split('_')[0]
            var temptime = item.split('_')[1]

            var timeStart = temptime.split('-')[0]

            var timeStartHour = parseInt(timeStart.split(':')[0])
            var timeStartMinute = parseInt(timeStart.split(':')[1])

            var timeStartIndex = (timeStartHour - 7) + (timeStartHour - 7 - 2)
            if (timeStartMinute == 30){
              timeStartIndex = timeStartIndex + 1
            }

            switch(tempDay) {
              case 'MON':
                tempDay = 0;
                break;
              case 'TUE':
                tempDay = 1;
                break;
              case 'WED':
                tempDay = 2;
                break;
              case 'THU':
                tempDay = 3;
                break;
              case 'FRI':
                tempDay = 4;
                break;
              default:
                tempDay = 5;
            }

            if (timeStartIndex === time && tempDay === day ){
              courseOption = optionIndex
            }
        })
    })

    console.log("courseOption", courseOption)

    // Fill the table with that course 
    //item = "MON_12:00-14:00"
    course.options[courseOption].times.map((item, slotIndex) => {
        var tempDay = item.split('_')[0]

        var time = item.split('_')[1]

        var timeStart = time.split('-')[0]
        var timeEnd = time.split('-')[1]

        var timeStartHour = parseInt(timeStart.split(':')[0])
        var timeStartMinute = parseInt(timeStart.split(':')[1])

        var timeEndHour = parseInt(timeEnd.split(':')[0])
        var timeEndMinute = parseInt(timeEnd.split(':')[1])


        var timeStartIndex = (timeStartHour - 7) + (timeStartHour - 7 - 2)
        if (timeStartMinute == 30){
          timeStartIndex = timeStartIndex + 1
        }

        var timeEndIndex = (timeEndHour - 7) + (timeEndHour - 7 - 2)
        if (timeEndMinute == 30){
          timeEndIndex = timeEndIndex + 1
        }

        switch(tempDay) {
          case 'MON':
            tempDay = 0;
            break;
          case 'TUE':
            tempDay = 1;
            break;
          case 'WED':
            tempDay = 2;
            break;
          case 'THU':
            tempDay = 3;
            break;
          case 'FRI':
            tempDay = 4;
            break;
          default:
            tempDay = 5;
        }

        for (var i = timeStartIndex; i < timeEndIndex; i++){
          tableCourses[i].day[tempDay] = [course, ...tableCourses[i].day[tempDay]]
        }

        
    })
    this.setState({ tableCourses: tableCourses })
    
    // Unhighlight
    tableCourses.map((item, itemIndex) => {
      item.color.map((kikos, colorIndex) => {
        tableCourses[itemIndex].color[colorIndex] = ""
      })
    })
    this.setState({ tableCourses: tableCourses })
  }

  deleteCourseFromPalette = (course) => {
    const {paletteCourses} = this.state
    const newList = paletteCourses.filter((item) => item.name !== course.name);
    console.log("kikos", course.name)
    this.setState({ paletteCourses: newList })
  }

  deleteSemFromPalette = (course) => {
    const {paletteSeminars} = this.state
    const newList = paletteSeminars.filter((item) => item.name !== course.name);
    console.log("kikos", course.name)
    this.setState({paletteSeminars: newList })
  }

  deleteLabFromPalette = (course) => {
    const {paletteLab} = this.state
    const newList = paletteLab.filter((item) => item.name !== course.name);
    console.log("kikos", course.name)
    this.setState({paletteLab: newList })
  }

  empty = (course) => {
    const {tableCourses} = this.state
    tableCourses.map((slot, index) => {
      if(slot.day[0].length!== 0){
        tableCourses[index].day[0] = tableCourses[index].day[0].filter((item) => item.name !== course.name)
      }

      if(slot.day[1].length!== 0){
        tableCourses[index].day[1] = tableCourses[index].day[1].filter((item) => item.name !== course.name)
      }

      if(slot.day[2].length!== 0){
        tableCourses[index].day[2] = tableCourses[index].day[2].filter((item) => item.name !== course.name)
      }
      if(slot.day[3].length!== 0){
        tableCourses[index].day[3] = tableCourses[index].day[3].filter((item) => item.name !== course.name)
      }
      if(slot.day[4].length!== 0){
        tableCourses[index].day[4] = tableCourses[index].day[4].filter((item) => item.name !== course.name)
      }
      
    })
    this.setState({ tableCourses: tableCourses })

  }

  retriveToPalette = (course) => {
    const {paletteCourses} = this.state
    const {paletteSeminars} = this.state
    const {paletteLab} = this.state

    if(course.name.includes('SEM') == true){
      paletteSeminars.push(course)
    }
    else if(course.name.includes('Lab') == true){
      paletteLab.push(course)
    }
    else{
      paletteCourses.push(course)
    }
    this.setState({ paletteCourses: paletteCourses, paletteSeminars: paletteSeminars, paletteLab: paletteLab})
    
  }

  rightClickHandler = (event, course) => {
    this.empty(course)
    this.retriveToPalette(course)
    event.preventDefault()
  }


  setSelectedProgramPlanTerm = (selectedProgram, selectedPlan, selectedTerm)=> {
    this.setState({ selectedProgram: selectedProgram, selectedPlan: selectedPlan, selectedTerm: selectedTerm})
  }

  render() {
    const {paletteCourses} = this.state;
    const {courseList} = this.state;
    const {weekdays} = this.state;
    const {tableCourses} = this.state;
    const {paletteSeminars} = this.state;
    const {paletteLab} = this.state;

  return (

    <div className="App">
      <Terms setSelectedProgramPlanTerm={this.setSelectedProgramPlanTerm} setCoursesSeminarsLabs={this.setCoursesSeminarsLabs}/>


      <div className="timetableClass">

            <div className="leftSideWrapper">
              
              <img src="UAlberta.png"  width="235" height="75"/>
             
              <div className="paletteWrapper">
                  
                  <div className="crsWrapper">
                      <CoursePalette isToolTipOpen={this.state.isToolTipOpen} 
                        courseList={courseList} paletteCourses={paletteCourses} 
                        onDragStart={this.onDragStart} 
                        onDragStop={this.onDragStop}
                        showToolTip={this.showToolTip}
                        hideToolTip={this.hideToolTip}
                      />
                  </div>

                  <div classname="otherPaletteWrapper">
                    <Seminar paletteSeminars={paletteSeminars} onDragStart={this.onDragStart} onDragStop={this.onDragStop} />
                    <Lab paletteLab={paletteLab} onDragStart={this.onDragStart} onDragStop={this.onDragStop} />
                  </div>

              </div>

              <div className="complementaryStudiesElectiveDropdown">
                <Dropdown placeHolder="Complementary Electives"
                  addCourseSemLabToPalette={this.addCourseSemLabToPalette}
                  selectedterm={this.state.selectedterm}
                />
              </div>


            </div>

              <Table weekdays ={weekdays} tableCourses={tableCourses} addCourse={this.addCourseToTable} deleteCourseFromPalette={this.deleteCourseFromPalette} deleteSemFromPalette={this.deleteSemFromPalette} deleteLabFromPalette={this.deleteLabFromPalette} rightClickHandler={this.rightClickHandler}/>

              <div>
                <OptionDashBoard sectionDashboard={this.state.sectionDashboard}/>
              </div>
      </div>

    </div>

  )

  }
}

export default TimeTable