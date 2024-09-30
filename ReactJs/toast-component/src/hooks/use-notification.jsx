import { useCallback, useState } from "react";
import Notification from "../components/Notification";

const useNotification = (position = "top-right") => {
  const [notifications, setNotifications] = useState([]);

  const triggerNotification = useCallback((notificationProps) => {
    const id = Math.random().toString(36).substring(2, 9); // Unique ID for each notification

    setNotifications((prev) => [...prev, { ...notificationProps, id }]);

    setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((notification) => notification.id !== id)
      );
    }, notificationProps.duration || 3000);
  }, []);

  const closeFunc = (i) => {
    setNotifications((prev) => prev.filter((_, index) => index !== i));
  };
  const NotificationComponent =
    notifications.length > 0 ? (
      <div className={`${position}`}>
        {notifications.map((notification, index) => (
          <Notification
            key={notification.id}
            {...notification}
            onClose={() => closeFunc(index)}
          />
        ))}
      </div>
    ) : null;

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
