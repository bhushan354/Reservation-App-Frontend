import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from '../styles/Auth.module.css';

export default function DeleteVehicle() {
  const [itemId, setItemId] = useState('');
  const [message, setMessage] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/items');
        setItems(response.data.items);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/v1/items/${itemId}`);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error deleting item');
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className={style['section-auth-container']}>
      <div className={style.container}>
        <h2 className={style.heading}>Delete Vehicle</h2>
        <select
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
          className={`${style['form-select']} ${style['custom-select']}`}
          style={{ fontSize: '18px', padding: '12px', width: '300px' }}
        >
          <option value="">Select an Item</option>
          {items.map((item) => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </select>

        <button type="button" onClick={handleDelete} disabled={!itemId} className={style['submit-btn']}>Delete Item</button>
        {message && <p className={style['success-msg']}>{message}</p>}
      </div>
    </div>
  );
}
