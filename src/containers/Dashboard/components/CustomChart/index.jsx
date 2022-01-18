import React, { useEffect, useState } from 'react';
import {
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ComposedChart,
  Legend,
  Bar
} from 'recharts';

import styles from './styles.module.css';

import arrow from '../../../../assets/icons/arrow-down.png';
import more from '../../../../assets/icons/more.png';
import closeBlack from '../../../../assets/icons/close-black.png';

import { chartData1Month, chartData3Month, chartData6Month } from './data';

const CustomChart = () => {
  const [chartWidth, setChartWidth] = useState(500);
  const [chartHeight, setChartHeight] = useState(350);
  const [chartBarSize, setChartBarSize] = useState(20);
  const [labelRange, setLabelRange] = useState('Last 6 Months');
  const [isShowListRange, setIsShowListRange] = useState(false);
  const [chartData, setChartData] = useState(chartData6Month);

  const handleChangeRange = (data, label) => {
    setChartData(data);
    setLabelRange(label);
  };

  const handleChangeChartSize = () => {
    if (window.innerWidth <= 667) {
      setChartWidth(240);
      setChartHeight(350);
      setChartBarSize(15);
    } else {
      setChartWidth(500);
      setChartHeight(350);
      setChartBarSize(20);
    }
  }

  useEffect(() => {
    if (window.innerWidth <= 667) {
      setChartWidth(240);
      setChartHeight(350);
      setChartBarSize(15);
    }
    window.addEventListener('resize', handleChangeChartSize);

    return () => {
      document.removeEventListener('mousedown', handleChangeChartSize);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3>AVERAGE PURCHASE VALUE</h3>
        <div className={styles.header}>
          <div>
            <div className={styles.range}>
              <button>{labelRange}</button>
              {!isShowListRange && (
                <img
                  className={styles.arrow}
                  src={arrow}
                  alt=''
                  onClick={() => setIsShowListRange(true)}
                />
              )}
              {isShowListRange && (
                <img
                  className={styles.arrow}
                  src={closeBlack}
                  alt=''
                  onClick={() => setIsShowListRange(false)}
                />
              )}
            </div>
            {isShowListRange && (
              <div className={styles.rangeMonth}>
                <button
                  onClick={() => handleChangeRange(chartData6Month, 'Last 6 Months')}
                >
                  6 months
                </button>
                <button
                  onClick={() => handleChangeRange(chartData3Month, 'Last 3 Months')}
                >
                  3 months
                </button>
                <button
                  onClick={() => handleChangeRange(chartData1Month, 'Last Months')}
                >
                  Last months
                </button>
              </div>
            )}
          </div>
          <img className={styles.more} src={more} alt='' />
        </div>
      </div>

      <ComposedChart
        width={chartWidth}
        height={chartHeight}
        data={chartData}
        margin={{
          top: 20,
          right: 10,
          bottom: 10,
          left: 10
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="day" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="apv" stackId='a' barSize={chartBarSize} fill="#37B04C" />
        <Bar dataKey="nett" stackId='a' barSize={chartBarSize} fill="#289E45" />
        <Bar dataKey="upt" stackId='a' barSize={chartBarSize} fill="#79d891" />
        <Line type="monotone" dataKey="gross" stroke="#FFE854" />
      </ComposedChart>
    </div>

  );
};

export default CustomChart;