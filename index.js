/* Your Code Here */

const { recurseSync } = require("file-system")

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
}
function createEmployeeRecords(arrOfArr){
    return arrOfArr.map((element)=>{
        return createEmployeeRecord(element)
    })
}
function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
     this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date
    })
    return this
    }

    function createTimeOutEvent(dateStamp){
        let [date, hour] = dateStamp.split(' ')
     this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date
    })
    return this

    }
    function hoursWorkedOnDate(dateStamp){
        let timeIn = this.timeInEvents.find((element)=>
            element.date === dateStamp)
        let timeOut = this.timeOutEvents.find((element)=>
            element.date === dateStamp)
        return(timeOut.hour - timeIn.hour)/100;

    }
function wagesEarnedOnDate(dateStamp){
    let wage = hoursWorkedOnDate.call(this,dateStamp) * this.payPerHour
    return parseFloat(wage.toString());
}
function findEmployeeByFirstName(srcArray,firstName){
    return srcArray.find((e)=>{
        return e.firstName=== firstName;
    })
}
function calculatePayroll(records){
    return records.reduce((memo,rec)=>{
        return memo +allWagesFor.call(rec)
    },0)
}

function allWagesFor() {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}