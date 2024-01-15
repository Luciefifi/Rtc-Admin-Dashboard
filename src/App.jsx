import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Inventory } from "./components/Inventory";
import DefaultLayout from "./layouts/DefaultLayout";
import { Orders } from "./components/Orders";

const routes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/inventory", element: <Inventory /> },
      { path: "/orders", element: <Orders /> },
    ],
  },
];

const router = (
  <BrowserRouter>
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element}>
          {route.children.map((child) => (
            <Route key={child.path} path={child.path} element={child.element} />
          ))}
        </Route>
      ))}
    </Routes>
  </BrowserRouter>
);

function App() {
  return router;
}
export default App;
