import React from 'react';
import style from '../styles/Auth.module.css';
import pakistanCities from '../Data/pakistanCities.json';

const AddCar = () => (
  <div className={style['section-auth-container']}>
    <div className={style.container}>
      <h2 className={style.heading}>Create a New Car</h2>
      <form className={style['new-item-form']}>
        <div className={style['form-group']}>
          <label htmlFor="item-name" className={style['form-lable']}>
            <span>Name:</span>
            <input id="item-name" type="text" />
          </label>
        </div>
        <div className={style['form-group']}>
          <label htmlFor="item-desc" className={style['form-lable']}>
            <span>Description:</span>
            <input id="item-desc" type="text" />
          </label>
        </div>
        <div className={style['form-group']}>
          <label htmlFor="item-fee" className={style['form-lable']}>
            <span>Finance Fee ($):</span>
            <input id="item-fee" type="number" />
          </label>
        </div>
        <div className={style['form-group']}>
          <label htmlFor="item-option-fee" className={style['form-lable']}>
            <span>Option to Purchase Fee ($):</span>
            <input id="item-option-fee" type="number" />
          </label>
        </div>
        <div className={style['form-group']}>
          <label htmlFor="item-total-amount" className={style['form-lable']}>
            <span>Total Amount Payable ($):</span>
            <input id="item-total-amount" type="number" />
          </label>
        </div>
        <div className={style['form-group']}>
          <label htmlFor="item-duration" className={style['form-lable']}>
            <span>Duration (months):</span>
            <input id="item-duration" type="number" />
          </label>
        </div>
        <div className={style['form-group']}>
          <label htmlFor="item-apr" className={style['form-lable']}>
            <span>APR Representative (%):</span>
            <input id="item-apr" type="number" />
          </label>
        </div>
        <div className={style['form-group']}>
          <label htmlFor="item-city" className={style['form-lable']}>
            <span className={style['select-span']}>City:</span>
            <select id="item-city">
              <option value="">Select a city of Pakistan</option>
              {pakistanCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className={style['form-group']}>
          <label htmlFor="item-image" className={style['form-lable']}>
            <span className={style['select-span']}>Image:</span>
            <input id="item-image" type="file" accept="image/*" className={style['chose-input']} />
          </label>
        </div>
        <button type="submit" className={style['submit-btn']}>Submit</button>
      </form>
    </div>
  </div>
);

export default AddCar;
