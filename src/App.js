import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./pages/Router/Router";
function App() {
  return (
    <div className=" max-w-screen-xl m-auto  ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
