import React from 'react';
import { FaShoppingCart, FaBan } from 'react-icons/fa';
import { BsFillBagXFill } from "react-icons/bs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { FaShoppingBasket } from "react-icons/fa";
import { BsBagCheckFill } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
import { CiBurger } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { FaCrosshairs } from "react-icons/fa";
import 'react-circular-progressbar/dist/styles.css';
import './Dashboard.css';
import { FaChevronCircleRight } from "react-icons/fa";

const percentage = 70;

const data = [
  { name: '5', uv: 4000, pv: 2400, amt: 2400 },
  { name: '9', uv: 7000, pv: 3400, amt: 2400 },
  { name: '11', uv: 6000, pv: 2800, amt: 2400 },
  { name: '13', uv: 5000, pv: 3900, amt: 2400 },
  { name: '15', uv: 4000, pv: 4300, amt: 2400 },
  { name: '17', uv: 6000, pv: 4800, amt: 2400 },
  { name: '19', uv: 9000, pv: 3800, amt: 2400 },
  { name: '21', uv: 12000, pv: 4300, amt: 2400 },
  { name: '23', uv: 10000, pv: 4300, amt: 2400 },
  { name: '25', uv: 12000, pv: 4800, amt: 2400 },
  { name: '27', uv: 9000, pv: 3800, amt: 2400 },
];

const orders = [
  { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
  { customer: 'Jane Cooper', orderNo: '48965786', amount: '$365.02', status: 'Delivered' },
  { customer: 'Guy Hawkins', orderNo: '78958215', amount: '$45.88', status: 'Cancelled' },
  { customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending' },
  { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
  { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
];

const reviews = [
  {
    name: 'Jenny Wilson',
    rating: 5,
    comment:
      'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
  },
  {
    name: 'Dianne Russell',
    rating: 5,
    comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service',
  },
  {
    name: 'Devon Lane',
    rating: 4,
    comment: 'Normally wings are wings, but theirs are lean meaty and tender, and',
  },
];

const Dashboard = () => {
  const [activeReview, setActiveReview] = React.useState(null);

  const handleReviewClick = (index) => {
    setActiveReview(index);
  };

  return (
    <div className='dashboard-container'>
      <div className='dashboard'>
        <h1>Dashboard</h1>
        <div className='dashboard-metrics'>
          <div className='metric'>
            <FaShoppingBasket color='dodgerblue' size={50} />
            <h2>Total Orders</h2>
            <p>75 <span className='trend up'>▲ 3%</span></p>
          </div>
          <div className='metric'>
            <BsBagCheckFill size={50} color='forestgreen ' />
            <h2>Total Delivered</h2>
            <p>70 <span className='trend down'>▼ 3%</span></p>
          </div>
          <div className='metric'>
            <BsFillBagXFill color='indianred ' size={50} />

            <h2>Total Cancelled</h2>
            <p>05 <span className='trend up'>▲ 3%</span></p>
          </div>
          <div className='metric'>
            <BsBagCheckFill size={50} color='hotpink' />
            <FiDollarSign color='hotpink' />
            <h2>Total Revenue</h2>
            <p>$12k <span className='trend down'>▼ 3%</span></p>
          </div>
          <div className='metric1'>
            <p>Net Profit</p>
            <div></div>
            <h1>$6759.25 <span className='trend up'><h6>▲ 3%</h6></span></h1>
            <div className="circular-progress-container">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  pathColor: `#00BFFF`,
                  textColor: '#fff',
                  trailColor: '#2c2f36',
                  backgroundColor: '#3e98c7',
                  textSize: '16px',
                  fontWeight: 'bold',
                })}
              />
            </div>
          </div>
        </div>
        <div className='activity-section'>
          <div className='activity-chart'>
            <h3>Activity</h3>
            <ResponsiveContainer width='100%' height={200}>
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Bar dataKey='uv' fill='#82ca9d' />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className='activity-legend'>
            <div className="legend-item">
              <FaCrosshairs color='orangered' size={50} />
              <div className="text"> <h2>Goals</h2></div>
            </div>
            <div className="legend-item">
              <CiBurger color='deepskyblue ' size={50} />

              <div className="text"><h2>PopluarDishes</h2></div>
            </div>
            <div className="legend-item">
              <BiSolidDish color='mediumturquoise  ' size={50} />
              <div className="text"> <h2>Menus</h2></div>
            </div>
          </div>
        </div>
        <div className='bottom-sections'>
          <div className='recent-orders'>
            <h3>Recent Orders</h3>
            <table>
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Order No.</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>
                      {order.customer}
                    </td>
                    <td>{order.orderNo}</td>
                    <td>{order.amount}</td>
                    <td className={order.status.toLowerCase()}>{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='customer-feedback'>
            <h3>Customer's Feedback</h3>
            <ul>
              {reviews.map((review, index) => (
                <li
                  key={index}
                  onClick={() => handleReviewClick(index)}
                  className={activeReview === index ? 'active' : ''}
                >
                  <p>{review.name}</p>
                  <p>{'⭐'.repeat(review.rating)}</p>
                  {activeReview === index && <p>{review.comment}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
