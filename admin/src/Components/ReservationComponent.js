import React, { useEffect, useState } from 'react';
import './ReservationComponent.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

function ReservationComponent() {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const url = 'http://localhost:4000/reservations';
      const response = await axios.get(url);
      if (response) {
        setData(response.data.reservation);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const cancelReservation = async (id) => {
    try {
      const url = `http://localhost:4000/reservations/${id}`;
      const response = await axios.delete(url);
      if (response) { 
        toast.success('Reservation Cancelled Sucessfully',{autoClose:1000})
        setData(data.filter((item)=>item._id!==id))
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to cancel reservation');
    }
  };

  return (
    <div className="reservationcomponent">
      <div className="reservation-header">
        <h2>Reservation Details</h2>
      </div>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div className="reservation-details" key={index}>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Mobile Number: {item.number}</p>
            <p>Date & Time: {item.date_and_time}</p>
            <p>Status: {item.status}</p>
            <button className="reservation-button" onClick={() => cancelReservation(item._id)}
              disabled={item.status === 'cancelled'}>CANCEL</button>
          </div>
        ))
      ) : (
        <p>No Reservations</p>
      )}
      <ToastContainer />
    </div>
  );
}

export default ReservationComponent;
