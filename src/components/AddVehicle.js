import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import style from '../styles/Auth.module.css';

const AddVehicle = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [financeFee, setFinanceFee] = useState('');
  const [purchaseFee, setPurchaseFee] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [duration, setDuration] = useState('');
  const [apr, setApr] = useState('');
  const [city, setcity] = useState('');
  const [error, setError] = useState('');

  // Hard Coded Admin Value
  // eslint-disable-next-line camelcase
  const adminId = 1;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name.trim() === '') {
        setError("Name can't be blank");
        return;
      }
      const dataToSend = {
        adminId,
        name,
        description,
        image,
        financeFee,
        purchaseFee,
        totalAmount,
        duration,
        apr,
        city,
      };
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post(
        'http://127.0.0.1:3000/api/v1/items',
        dataToSend,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(response, 'car');

      // Reset form fields first
      setName('');
      setDescription('');
      setImage('');
      setFinanceFee('');
      setPurchaseFee('');
      setTotalAmount('');
      setDuration('');
      setApr('');
      setcity('');

      if (response.data.success) {
        // If success is true, display success alert
        alert('Vehicle Added successfully.');
        navigate('/');
      } else if (response.data.message && response.data.message.length > 0) {
        // If success is false and there is an error message, display error message
        setError(response.data.message[0]);
      } else {
        setError('An error occurred');
      }
    } catch (error) {
      if (
        error.response
   && error.response.data
   && error.response.data.message
   && error.response.data.message.length > 0
      ) {
        setError(error.response.data.message[0]);
      } else {
        setError('An error occurred');
      }
    }
  };
  return (
    <div className={style['section-auth-container']}>
      <div className={style.container}>
        <h2 className={style.heading}>Create a New Car</h2>
        <form className={style['new-item-form']} onSubmit={handleSubmit}>
          <div className={style['form-group']}>
            <label htmlFor="item-name" className={style['form-lable']}>
              <span>Name:</span>
              <input
                id="item-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </label>
          </div>
          <div className={style['form-group']}>
            <label htmlFor="item-desc" className={style['form-lable']}>
              <span>Description:</span>
              <input
                id="item-desc"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
              />
            </label>
          </div>
          <div className={style['form-group']}>
            <label htmlFor="item-fee" className={style['form-lable']}>
              <span>Finance Fee ($):</span>
              <input
                id="item-fee"
                type="number"
                value={financeFee}
                onChange={(e) => setFinanceFee(e.target.value)}
                placeholder="Finance Fee"
                required
              />
            </label>
          </div>
          <div className={style['form-group']}>
            <label htmlFor="item-option-fee" className={style['form-lable']}>
              <span>Option to Purchase Fee ($):</span>
              <input
                id="item-option-fee"
                type="number"
                value={purchaseFee}
                onChange={(e) => setPurchaseFee(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Purchase Fee"
                required
              />
            </label>
          </div>
          <div className={style['form-group']}>
            <label htmlFor="item-total-amount" className={style['form-lable']}>
              <span>Total Amount Payable ($):</span>
              <input
                id="item-total-amount"
                type="number"
                value={(totalAmount)}
                onChange={(e) => setTotalAmount(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Total amount"
                required
              />
            </label>
          </div>
          <div className={style['form-group']}>
            <label htmlFor="item-duration" className={style['form-lable']}>
              <span>Duration (months):</span>
              <input
                id="item-duration"
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Duration"
                required
              />
            </label>
          </div>
          <div className={style['form-group']}>
            <label htmlFor="item-apr" className={style['form-lable']}>
              <span>APR Representative (%):</span>
              <input
                id="item-apr"
                type="number"
                value={apr}
                onChange={(e) => setApr(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Apr in percentage"
                required
              />
            </label>
          </div>
          <div className={style['form-group']}>
            <label htmlFor="item-city" className={style['form-lable']}>
              <span className={style['select-span']}>City:</span>
              <input
                id="item-city"
                type="text"
                value={city}
                onChange={(e) => setcity(e.target.value)}
                placeholder="City"
                required
              />
            </label>
          </div>
          <div className={style['form-group']}>
            <label htmlFor="item-image" className={style['form-lable']}>
              <span className={style['select-span']}>Image:</span>
              <input
                type="text"
                id="image"
                className={style['chose-input']}
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image Url"
                required
              />
            </label>
          </div>
          {error && <div className={style['error-msg']}>{error}</div>}
          <button type="submit" className={style['submit-btn']}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddVehicle;
