import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './NotificationsPage.css';
import {FiBell} from "react-icons/fi";

const initialNotifications = [
  {
  id: 1,
  type: 'lab_order',
  title: 'Lab Order Ready',
  message: 'A new lab result is ready for review.',
  timestamp: '10 mins ago',
  read: false,
  labOrderId: 'LAB-8921',
  },
  {
    id: 2,
    type: 'appointment',
    title: 'Upcoming Appointment',
    message: 'Reminder: Consultation with Dr. Smith tomorrow at 10:00 AM.',
    timestamp: '2 hours ago',
    read: false,
    labOrderId: null,
  },
  {
  id: 3,
  type: 'lab_order',
  title: 'Lab Order Processing',
  message: 'Your lab sample has been received and is being processed.',
  timestamp: '1 day ago',
  read: true,
  labOrderId: 'LAB-7043',
  },
  {
    id: 4,
    type: 'system',
    title: 'Security Alert',
    message: 'Your account password was successfully updated.',
    timestamp: '3 days ago',
    read: true,
    labOrderId: null,
  },
  {
  id: 5,
  type: 'prescription',
  title: 'New Prescription',
  message: 'Dr. Mehreen Fatima has issued a new prescription for you.',
  timestamp: '5 hours ago',
  read: false,
  labOrderId: null,
  },
];

export default function NotificationsPage() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState('all'); 

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, read: true } : item))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, read: true })));
  };

  const handleViewLabOrder = (e, notifId) => {
  e.stopPropagation();
  markAsRead(notifId);
  navigate("/lab-orders");
  };

  const handleViewPrescription = (e, notifId) => {
  e.stopPropagation();
  markAsRead(notifId);
  navigate("/prescriptions");
  };

  const filteredNotifications = notifications.filter((notif) => {
    if (filter === 'unread') return !notif.read;
    if (filter === 'lab') return notif.type === 'lab_order';
    return true;
  });

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
   <div className="notifications-container">
  <header className="notifications-header">
    <div className="header-title">
      <FiBell className="bell-icon" />
      <h1>Notifications</h1>
      {unreadCount > 0 && <span className="badge">{unreadCount} New</span>}
    </div>
    {unreadCount > 0 && (
      <button className="btn-secondary" onClick={markAllAsRead}>
        Mark all as read
      </button>
    )}
  </header>

      <div className="notifications-tabs">
        <button
          className={`tab-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`tab-btn ${filter === 'unread' ? 'active' : ''}`}
          onClick={() => setFilter('unread')}
        >
          Unread
        </button>
        <button
          className={`tab-btn ${filter === 'lab' ? 'active' : ''}`}
          onClick={() => setFilter('lab')}
        >
          Lab Orders
        </button>
      </div>

      <div className="notifications-list">
        {filteredNotifications.length === 0 ? (
          <div className="empty-state">
            <p>No notifications found.</p>
          </div>
        ) : (
          filteredNotifications.map((notif) => (
            <div
              key={notif.id}
              className={`notification-card ${!notif.read ? 'unread' : ''}`}
              onClick={() => markAsRead(notif.id)}
            >
              <div className="notif-icon-wrapper">
                <span className={`notif-icon ${notif.type}`}>
                  {notif.type === 'lab_order' && '🧪'}
                  {notif.type === 'appointment' && '📅'}
                  {notif.type === 'prescription' && '💊'}
                  {notif.type === 'system' && '⚙️'}
                </span>
              </div>

              <div className="notif-content">
                <div className="notif-top">
                  <h3 className="notif-title">{notif.title}</h3>
                  <span className="notif-time">{notif.timestamp}</span>
                </div>
                <p className="notif-message">{notif.message}</p>

                {notif.type === 'lab_order' && notif.labOrderId && (
                  <div className="notif-actions">
                    <button className="btn-lab-view" onClick={(e) => handleViewLabOrder(e, notif.id)}>
                      View Lab Orders &rarr;
                    </button>
                  </div>
                )}

                {notif.type === 'prescription' && (
                  <div className="notif-actions">
                    <button className="btn-lab-view" onClick={(e) => handleViewPrescription(e, notif.id)}>
                      View Prescription &rarr;
                    </button>
                  </div>
                )}
              </div>

              {!notif.read && <div className="unread-dot" />}
            </div>
          ))
        )}
      </div>
    </div>
  );
}