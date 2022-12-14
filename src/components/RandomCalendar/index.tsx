import React from 'react';
import Heatmap from 'react-calendar-heatmap';
import {subYears, isBefore, isSameDay,addDays} from 'date-fns';
import { Container } from './styles';


type HeatmapValue = {
    date: Date;
    count: number;
}

const RandomCalendar = ()=>{

    const startDate = subYears(new Date(),1);
    const endDate = new Date();

  /*  const values : HeatmapValue[] = [];
    values.push({
        date: new Date(),
        count: 3
    });
*/
    return(
        <Container>
            <div className = "wrapper">
                <Heatmap
                    startDate={startDate}
                    endDate={endDate}
                    values={generateHeatmapValues(startDate, endDate)}
                    gutterSize={3.5}
                    classForValue={(item:HeatmapValue)=>{
                        let clampedCount = 0;
                        
                        if(item !== null){
                            clampedCount = Math.max(item.count, 0);// ñ pode ser < 0
                            clampedCount = Math.min(item.count, 4);// ñ pode ser > 4
                        }
                        return `scale-${clampedCount}`;
                    }}
                    showWeekdayLabels
                />
            </div>
            <span>
                Random calendar (do not represent actual data)
            </span>
        </Container>
    );
}
const generateHeatmapValues = (starDate: Date, endDate:Date) =>{
    const values: HeatmapValue[] = [];
    let currentDate = starDate;
    while(isBefore(currentDate, endDate)|| isSameDay(currentDate, endDate)){
        const count = Math.random()*4;
        values.push({date: currentDate, count: Math.round(count)});
        currentDate = addDays(currentDate,1);
    }
    return values;
}
export default RandomCalendar;