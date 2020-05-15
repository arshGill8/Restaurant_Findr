import React from "react";
import { Formik } from 'formik';
import '../styles/RestaurantForm.scss'

const RestaurantForm = ({ fetchRestaurants }) => {
  return <div>
    <Formik
      initialValues={{ cityName: '' }}
      onSubmit={(data) => {
        fetchRestaurants(data)
      }}>
      {({ values, handleChange, handleSubmit }) => (
        <form className='form' onSubmit={handleSubmit}>
          <input
            className='form__input'
            name='cityName'
            value={values.cityName}
            onChange={handleChange}
          />
          <button className='form__button' type='submit'>SUBMIT</button>
        </form>
      )}
    </Formik>
  </div>
}



export default RestaurantForm