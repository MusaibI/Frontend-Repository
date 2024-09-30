/* eslint-disable react/prop-types */
import {
    AiOutlineCheckCircle,
    AiOutlineClose,
    AiOutlineCloseCircle,
    AiOutlineInfoCircle,
    AiOutlineWarning,
  } from "react-icons/ai";
  import "./Notification.css";
  
  const iconStyles = { marginRight: "10px" };
  const icons = {
    success: <AiOutlineCheckCircle style={iconStyles} />,
    info: <AiOutlineInfoCircle style={iconStyles} />,
    warning: <AiOutlineWarning style={iconStyles} />,
    error: <AiOutlineCloseCircle style={iconStyles} />,
  };
  
  const Notification = ({ id, type = "info", message, onClose = () => {} }) => {
    return (
      <div className={`notification ${type}`}>
        {icons[type]}
        {message}
        <AiOutlineClose
          color="black"
          className="closeBtn"
          onClick={() => onClose(id)}
        />
      </div>
    );
  };
  
  export default Notification;
  