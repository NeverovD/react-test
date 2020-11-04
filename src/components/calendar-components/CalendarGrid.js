import React from 'react'
import './styleGrid.css'


const CalendarGrid = ({startDay}) => {
    const day = startDay.clone().subtract(1, 'day')
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());
    return (
        <div className="grid">
            {
                daysArray.map((dayItem) => (
                <div className="cell" key={dayItem.format('DDMMYYYY')}>
                <div className="row" >
                <div className="day">
                {dayItem.format('D')}
                </div>
                </div>
                </div>
                ))
            }
        </div>
    );
};

export {CalendarGrid};
