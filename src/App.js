import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./component/HomePage";
import LandingPage from "./component/LandingPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/homepage/:id",
    element: <HomePage />,
  },
 
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
