import React from 'react';
import {
  LineChart,
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

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
    upt: 8,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
    upt: 9,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
    upt: 10,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
    upt: 5,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
    upt: 8,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
    upt: 20,
  }
];

const CustomChart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3>AVERAGE PURCHASE VALUE</h3>
        <div className={styles.header}>
          <div className={styles.range}>
            <button>Last 6 months</button>
            <img className={styles.arrow} src={arrow} alt=''/>
          </div>
          <img className={styles.more} src={more} alt='' />
        </div>
      </div>

      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="upt" stackId='a' barSize={20} fill="#707070" />
        <Bar dataKey="uv" stackId='a' barSize={20} fill="#37B04C" />
        <Bar dataKey="cnt" stackId='a' barSize={20} fill="#289E45" />
        <Line type="monotone" dataKey="uv" stroke="#FFE854" />
      </ComposedChart>
    </div>

  );
};

export default CustomChart;