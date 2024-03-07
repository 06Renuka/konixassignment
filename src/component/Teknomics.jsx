import React from 'react';
import Chart from 'react-apexcharts';

class Teknomics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      earnings: [50, 35, 45],
      earningChartOptions: {
        dataLabels: {
          enabled: false,
        },
        colors: ["#06B48A", "#6560F0", "#6FD3F7"],
        legend: {
          show: false,
          fontWeight: 500,
          fontSize: "14px",
          fontFamily: "Red Hat Display, sans-serif",
          labels: {
            colors: "#9C9AB6",
          },
          markers: {
            offsetX: -2,
            offsetY: 1,
          },
        },
        stroke: {
          width: 0,
        },
        tooltip: {
          enabled: false,
          style: {
            fontSize: "14px",
            fontFamily: "Red Hat Display, sans-serif",
          },
        },
      },
    };
  }

  render() {
    return (
      <div className="card mb-25 border-0 rounded-0 bg-white expected-earnings-box">
        <div className="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
          <h4 className="d-block mb-6 fs-13  fw-medium text-dark-emphasis">
            Intial Distribution
          </h4>
         
          <div className='row  w-100'>
          <ul className="list ps-0 mb-0 list-unstyled mt-15 col-8 w-50" >
            <li className="text-muted position-relative fw-medium">
              Groceries - <span className="text-black fw-bold">$9,500</span>
            </li>
            <li className="text-muted position-relative fw-medium">
              Electronics - <span className="text-black fw-bold">$11,500</span>
            </li>
            <li className="text-muted position-relative fw-medium">
              Others - <span className="text-black fw-bold">$11,000</span>
            </li>
          </ul>
          <div id="earningChart" className="chart col-4 w-50">
            <Chart
              type="donut"
              height={150}
              options={this.state.earningChartOptions}
              series={this.state.earnings}
            />
          </div>

          </div>
          
         
        </div>
      </div>
    );
  }
}

export default Teknomics;
