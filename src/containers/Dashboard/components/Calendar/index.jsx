import React, { useEffect, useRef, useState } from 'react';

import styles from './styles.module.css';

import calendarIcon from '../../../../assets/icons/calendar.png';
import arrow from '../../../../assets/icons/arrow-down.png';
import closeBlack from '../../../../assets/icons/close-black.png';

import CustomCalendar from '../CustomCalendar';

const Calendar = () => {
  const calendarRef = useRef();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isShowCalendar, setIsShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setIsShowCalendar(!isShowCalendar);
  }

  const handleClick = (e) => {
    if (calendarRef.current.contains(e.target)) {
      return;
    }

    setIsShowCalendar(false);
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    }
  }, []);

  const handleChangeStartDate = (date) => {
    setStartDate(date);
  }

  const handleChangeEndDate = (date) => {
    setEndDate(date);
  }

  return (
    <div className={styles.container} ref={calendarRef}>
      <div className={styles.infoContainer}>
        <img className={styles.calendarIcon} src={calendarIcon} alt='' />
        <p className={styles.title}>Period</p>
        <p className={styles.date}>{endDate} - {startDate}</p>
        <button
          className={styles.buttonArrow}
          onClick={toggleCalendar}
        >
          {!isShowCalendar && (
            <img
              className={styles.arrowDown}
              src={arrow}
              alt=''
            />
          )}
          
          {isShowCalendar && (
            <img
              className={styles.arrowDown}
              src={closeBlack}
              alt=''
            />
          )}
          
        </button>
      </div>
      
      {isShowCalendar && (
        <div 
          className={styles.calendarContainer}
        >
          <CustomCalendar 
            changeStartDate={handleChangeStartDate}
            changeEndDate={handleChangeEndDate}
          />
        </div>
      )}
    </div>
  );
};

export default Calendar;