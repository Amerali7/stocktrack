import React from "react";
import { useState, Component } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import Axios from 'axios';
import moment from "moment";




    const RCalendar = () => {
        const [date, setDate] = useState(new Date());
        const [names,setnames] = useState("");
        
        const ipoinformation = {title:'UPCOMING IPO',name: names};

        const onChange = date => {
            setDate(date); 
            Axios.get("https://finnhub.io/api/v1/calendar/ipo?from=2022-02-01&to=2022-12-30&token=c9u0nbiad3i9vd5jc76g").then((response)=>{
            //console.log(response);
            //console.log(response.data.ipoCalendar);
            const responses = response.data.ipoCalendar;
            
            console.log(responses);
            
            const formatedDate = moment(date).format("YYYY-MM-DD")
            console.log(formatedDate);
            for (var i = 0; i < responses.length; i++) {
              if (formatedDate===response.data.ipoCalendar[i].date){
                  console.log(response.data.ipoCalendar[i].name);
                  setnames(formatedDate +" : "+ response.data.ipoCalendar[i].name);
              }  
            } 

    })

            
    };


    return (
        <div><Calendar onChange={onChange}
        value={date} />
        
        <div className="ipoinfo">
            <h2>{ipoinformation.title}</h2>
            <p>{ipoinformation.name}</p>
        </div>
        
        </div>
        
        );
    };
    
    
    export default RCalendar;
    