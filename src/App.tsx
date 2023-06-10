import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// project import
import Login from "@screen/Login";
import Admin from "@screen/Admin";
import Dashboard from "@screen/Dashboard";
import ProtectRoutes from "@guards/ProtectRoutes";
import { UserInfo } from "@models";

const App = () => {
  const [userInfo] = useState<UserInfo | null>(null);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: (
        <ProtectRoutes userInfo={userInfo}>
          <Dashboard />
        </ProtectRoutes>
      ),
      children: userInfo
        ? [
            // {index: true, element: <ProductList />},
            {
              path: "/admin",
              element: (
                <ProtectRoutes userInfo={userInfo} defineRoles={["admin"]}>
                  <Admin />
                </ProtectRoutes>
              ),
            },
          ]
        : [],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;