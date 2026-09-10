import React, { useState } from 'react';
import { 
  FaCalendarAlt, 
  FaClock, 
  FaPlus, 
  FaTrashAlt, 
  FaCheckCircle, 
  FaGlobe 
} from 'react-icons/fa';
import './ScheduleManagement.css';

const ScheduleManagement = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [saveMessage, setSaveMessage] = useState('');
  const [timeSlots, setTimeSlots] = useState({
    Monday: [
      { id: 1, start: '09:00 AM', end: '12:00 PM', type: 'Video Consultation' },
      { id: 2, start: '02:00 PM', end: '05:00 PM', type: 'In-Clinic Visit' },
    ],
    Tuesday: [
      { id: 3, start: '10:00 AM', end: '01:00 PM', type: 'Video Consultation' },
    ],
    Wednesday: [],
    Thursday: [
      { id: 4, start: '09:00 AM', end: '01:00 PM', type: 'Video Consultation' },
    ],
    Friday: [
      { id: 5, start: '03:00 PM', end: '07:00 PM', type: 'Second Opinion Only' },
    ],
    Saturday: [],
    Sunday: [],
  });

  const [newSlot, setNewSlot] = useState({
    start: '09:00 AM',
    end: '10:00 AM',
    type: 'Video Consultation',
  });

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleAddSlot = (e) => {
    e.preventDefault();
    const updatedDaySlots = [
      ...timeSlots[selectedDay],
      { id: Date.now(), ...newSlot },
    ];
    setTimeSlots({ ...timeSlots, [selectedDay]: updatedDaySlots });
  };

  const handleDeleteSlot = (id) => {
    const updatedDaySlots = timeSlots[selectedDay].filter((slot) => slot.id !== id);
    setTimeSlots({ ...timeSlots, [selectedDay]: updatedDaySlots });
  };

  const handleSaveSchedule = () => {
    // You can send 'timeSlots' to an API endpoint / backend here if needed
    setSaveMessage('Schedule saved!');
    setTimeout(() => {
      setSaveMessage('');
    }, 3000);
  };

  return (
    <div className="schedule-container">
      {/* Top Banner */}
      <div className="welcome-banner">
        <div className="welcome-text">
          <h1>Schedule & Availability Management</h1>
          <p>Set your recurring weekly availability and consultation slot parameters.</p>
        </div>
        <button className="btn-primary-red" onClick={handleSaveSchedule}>
          Save Schedule
        </button>
      </div>

      {/* Save Toast Banner */}
      {saveMessage && (
        <div className="save-toast-banner">
          <FaCheckCircle style={{ marginRight: '8px' }} />
          <span>{saveMessage}</span>
        </div>
      )}

      {/* Main Grid */}
      <div className="schedule-grid">
        {/* Left Column: Day Selector */}
        <div className="content-card day-selector-card">
          <h3>Select Day</h3>
          <div className="day-list">
            {daysOfWeek.map((day) => (
              <button
                key={day}
                className={`day-btn ${selectedDay === day ? 'active' : ''}`}
                onClick={() => setSelectedDay(day)}
              >
                <span>{day}</span>
                <span className="slot-count-badge">
                  {timeSlots[day].length} slots
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Time Slots & Form */}
        <div className="schedule-main-panel">
          {/* Add Slot Card */}
          <div className="content-card">
            <div className="card-header">
              <h2>
                <FaClock style={{ marginRight: '8px', color: '#003853' }} />
                Add Slot for {selectedDay}
              </h2>
            </div>
            <form onSubmit={handleAddSlot} className="add-slot-form">
              <div className="form-group">
                <label>Start Time</label>
                <input
                  type="text"
                  value={newSlot.start}
                  onChange={(e) => setNewSlot({ ...newSlot, start: e.target.value })}
                  placeholder="09:00 AM"
                  required
                />
              </div>

              <div className="form-group">
                <label>End Time</label>
                <input
                  type="text"
                  value={newSlot.end}
                  onChange={(e) => setNewSlot({ ...newSlot, end: e.target.value })}
                  placeholder="10:00 AM"
                  required
                />
              </div>

              <div className="form-group">
                <label>Consultation Type</label>
                <select
                  value={newSlot.type}
                  onChange={(e) => setNewSlot({ ...newSlot, type: e.target.value })}
                >
                  <option value="Video Consultation">Video Consultation</option>
                  <option value="In-Clinic Visit">In-Clinic Visit</option>
                  <option value="Second Opinion Only">Second Opinion Only</option>
                </select>
              </div>

              <button type="submit" className="btn-action-green add-btn">
                <FaPlus style={{ marginRight: '6px' }} /> Add Slot
              </button>
            </form>
          </div>

          {/* Slot Active List Card */}
          <div className="content-card slot-list-card">
            <div className="card-header">
              <h2>
                <FaCalendarAlt style={{ marginRight: '8px', color: '#003853' }} />
                Configured Slots for {selectedDay}
              </h2>
            </div>

            {timeSlots[selectedDay].length === 0 ? (
              <div className="empty-state">
                <p>No availability configured for {selectedDay}. Add a slot above to begin receiving bookings.</p>
              </div>
            ) : (
              <div className="slot-list">
                {timeSlots[selectedDay].map((slot) => (
                  <div key={slot.id} className="slot-item">
                    <div className="slot-details">
                      <div className="slot-time">
                        <FaClock className="icon-blue" />
                        <span>{slot.start} – {slot.end}</span>
                      </div>
                      <span className="slot-type-tag">{slot.type}</span>
                    </div>

                    <div className="slot-actions">
                      <span className="status-badge ready">
                        <FaCheckCircle style={{ marginRight: '4px' }} /> Active
                      </span>
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteSlot(slot.id)}
                        title="Delete Slot"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleManagement;