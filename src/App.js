import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Schedules from './components/Schedules';


function App() {
  
  let appointmentsInitial = JSON.parse(localStorage.getItem('appointments'));
  if(!appointmentsInitial) {
    appointmentsInitial = []
  }

  const [appointments, setAppointments] = useState(appointmentsInitial);


  useEffect(() => {
    let appointmentsInitial = JSON.parse(localStorage.getItem('appointments'));
    if(appointmentsInitial) {
      localStorage.setItem('appointments', JSON.stringify(appointments))
    } else {
      localStorage.setItem('appointments', JSON.stringify([]))
    }
  },[appointments]);

  const addNewAppointment = appointment => (
    setAppointments([
      ...appointments,
      appointment
    ])
  );

  const deleteAppointment = id => {
    const newAppointments = appointments.filter(item => item.id !== id)
    setAppointments(newAppointments);
  }

  const title = appointments.length === 0 ? "No have appointments" : "Administrator"

  return (
    <>
      <h1>Patients Administrator</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              addNewAppointment={addNewAppointment}
            />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            { appointments.map(item => (
              <Schedules
                key={item.id}
                appointments={item}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
