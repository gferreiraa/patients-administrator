import React from 'react';
import PropTypes from 'prop-types';

const Schedules = ({appointments, deleteAppointment}) => {
  return (
    <div className="shedules-items">
      <p>PET:<span>{appointments.pet}</span></p>
      <p>Owner:<span>{appointments.owner}</span></p>
      <p>Date:<span>{appointments.date}</span></p>
      <p>Time:<span>{appointments.time}</span></p>
      <p>Symptoms:<span>{appointments.symptoms}</span></p>
      <button
        className="button eliminar u-full-width"
        onClick={() => deleteAppointment(appointments.id)}
      >Delete &times;</button>
    </div>
  );
}

Schedules.propTypes = {
  appointments: PropTypes.object.isRequired,
  deleteAppointment: PropTypes.func.isRequired
}

export default Schedules;