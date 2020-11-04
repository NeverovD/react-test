import React from 'react'
import './styleCalendarPage.css'
import moment from "moment";

const SettingData = () => {
const years = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023]
    return (
        <div>
            <header>
                <button>{'<'}</button>
                <select>{moment.monthsShort().map((name,index)=>
                    <option key={name} value={index}>{name}</option>)}</select>
                <select>{years.map((name,index)=>
                    <option key={name} value={index}>{name}</option>)}</select>
                <button>{'>'}</button>
                <button>{'Now'}</button>
            </header>
        </div>
    );
};

export {SettingData};
