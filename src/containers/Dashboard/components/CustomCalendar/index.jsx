import React, { useState } from 'react';
import { addDays, endOfMonth, startOfMonth } from 'date-fns';
import { DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import styles from './styles.module.css';

const CustomCalendar = () => {
  const [currentRangeType, setCurrentRangeType] = useState('');
  const [dateRange, setDateRange] = useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
    color: '#31A445',
  }]);

  const rangeButtonType = [
    {
      type: 'today',
      label: 'Today',
    },
    {
      type: 'yesterday',
      label: 'Yesterday',
    },
    {
      type: 'sevendays',
      label: 'Last 7 Days',
    },
    {
      type: 'thirtydays',
      label: 'Last 30 Days',
    },
    {
      type: 'month',
      label: 'This Month',
    },
    {
      type: 'custom',
      label: 'Custom'
    }
  ];

  const setCalendar = (type) => {
    if (type === 'today') {
      setDateRange([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection',
        },
      ]);
    }
    if (type === 'yesterday') {
      setDateRange([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), -1),
          key: 'selection',
        },
      ]);
    }
    if (type === 'sevendays') {
      setDateRange([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), -7),
          key: 'selection',
        },
      ]);
    }
    if (type === 'thirtydays') {
      setDateRange([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), -30),
          key: 'selection',
        },
      ]);
    }
    if (type === 'month') {
      setDateRange([
        {
          startDate: startOfMonth(new Date()),
          endDate: endOfMonth(new Date()),
          key: 'selection',
        },
      ]);
    }
  };

  const handleRangeChange = () => {
    setCalendar(currentRangeType);
  };

  const listButtonRange = rangeButtonType.map((type, index) => {
    return (
      (type.type === currentRangeType)
        ? (
          <button
            className={styles.selectedRange}
            onClick={() => setCurrentRangeType(type.type)}
            key={index}
          >
            {type.label}
          </button>
        )
        : (
          <button
            className={styles.dayButton}
            onClick={() => setCurrentRangeType(type.type)}
            key={index}
          >
            {type.label}
          </button>
        )
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        {listButtonRange}
        <button className={styles.applyButton} onClick={handleRangeChange}>Apply</button>
      </div>

      <DateRange
        editableDateInputs={true}
        onChange={item => setDateRange([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={dateRange}
        months={2}
        direction='horizontal'
        maxDate={addDays(new Date(), -1)}
        minDate={addDays(new Date(), -180)}
        showDateDisplay={false}
        moveRangeOnFirstSelection={false}
        showMonthAndYearPickers={false}
        rangeColors={['#31A445', '#a43131', '#4631a4']}
      />
    </div>
  );
};

export default CustomCalendar;