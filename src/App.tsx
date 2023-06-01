import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SendNotifications from './components/sendNotification.tsx';
import ReceiveNotifications from './components/receiveNotification.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SendNotifications />,
  },
  {
    path: "/receive",
    element: <ReceiveNotifications />,
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;