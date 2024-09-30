### 1. **README.md File for GitHub**

```markdown
# React Notification System

This project demonstrates a custom React Notification system using hooks. It allows you to trigger toast notifications with different types (success, info, warning, error) and stack them one above the other. Each notification can be manually closed or automatically removed after a specified duration.

## Features

- Multiple types of notifications (Success, Info, Warning, Error)
- Notifications are stacked and can be closed manually or removed automatically after a duration.
- Flexible positioning (top-right, top-left, bottom-right, bottom-left)
- Customizable animation and duration for notifications.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-notification-system.git
   ```

2. Navigate into the project directory:

   ```bash
   cd react-notification-system
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

## Usage

1. Import the `useNotification` hook:

   ```js
   import useNotification from "./hooks/use-notification";
   ```

2. Inside your component, use the `triggerNotification` function to trigger notifications:

   ```js
   const { NotificationComponent, triggerNotification } = useNotification("bottom-right");

   return (
     <div>
       {NotificationComponent}
       <button onClick={() => triggerNotification({ type: "success", message: "Success!", duration: 3000 })}>
         Show Success
       </button>
     </div>
   );
   ```

3. Customize the notification types, messages, durations, and positions as needed.

## Project Structure

- `src/hooks/use-notification.js`: Custom hook to manage notifications.
- `src/components/Notification.js`: Notification component with different icons and message types.
- `src/App.js`: Main app where notifications are triggered.

## Future Improvements

Feel free to contribute and suggest improvements! If you encounter any issues or want to add new features, pull requests are welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```