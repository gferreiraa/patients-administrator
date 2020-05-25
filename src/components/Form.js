import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Form = ({addNewAppointment}) => {

  const [appointment, setAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptoms: ''
  });

  const [error, setError] = useState(false);

  const handleChange = e => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    })
  }

  const { pet, owner, date, time, symptoms } = appointment;

  const addAppointment = e => {
    e.preventDefault();
  
    // Validate Form
    if(pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === ''){
      setError(true);
      return;
    }

    // Remove error mensage
    setError(false);
    
    // ADD Uuid
    appointment.id = uuidv4();
  
    // ADD new appointment
    addNewAppointment(appointment);

    // Clear Form
    setAppointment({
      pet: '',
      owner: '',
      date: '',
      time: '',
      symptoms: ''
    })

  }

  return (
    <>
      <h2>Schedule Appointment</h2>

      { error ? <p className="alerta-error">All fields are mandatory</p> : null}

      <form
        onSubmit={addAppointment}
      >

        <label>Pet name:</label>
        <input 
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Enter the name of your pet"
          onChange={handleChange}
          value={pet}
        />

        <label>Pet owner:</label>
        <input 
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Enter the name of pet owner"
          onChange={handleChange}
          value={owner}
        />

        <label>Date:</label>
        <input 
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />

        <label>Time:</label>
        <input 
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleChange}
          value={time}
        />

        <label>Symptoms:</label>
        <textarea 
          name="symptoms"
          className="u-full-width"
          onChange={handleChange}
          value={symptoms}
          >
        </textarea>

        <button
          type="submit"
          className="u-full-width button-primary"
        > Schedule </button>
      </form>
    </>
  );
}

Form.propTypes = {
  addNewAppointment: PropTypes.func.isRequired
}
 
export default Form;