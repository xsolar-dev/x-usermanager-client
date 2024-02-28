import { Refine, Authenticated } from "@refinedev/core";
import { ThemedLayoutV2, ThemedTitleV2, ThemedHeaderV2, useNotificationProvider } from "@refinedev/antd";
import { ConfigProvider, App as AntdApp, Layout } from "antd";

import routerProvider , { NavigateToResource } from "@refinedev/react-router-v6";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import { dataProvider } from "./providers/data-provider";
import { authProvider } from "./providers/auth-provider";

import { ShowUser } from "./pages/users/show";
import { EditUser } from "./pages/users/edit";
import { ListUsers } from "./pages/users/list";
import { CreateUser } from "./pages/users/create";
import { Login } from "./pages/login";

import "antd/dist/reset.css";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ConfigProvider>
        <AntdApp>
        <Refine 
          dataProvider={dataProvider}
          authProvider={authProvider}
          routerProvider={routerProvider}
          notificationProvider={useNotificationProvider}
          resources={[
            {
              name: "admin",
              identifier: "admin-region",
              list: "/admin/list",
              show: "/admin/user/:id",
              edit: "/admin/user/:id/edit",
              create: "/admin/create",
              meta: { label: "User Admins" },
            },
          ]}
          >
            <Routes>
              <Route
                  element={
                    <Authenticated
                      key="authenticated-routes"
                      redirectOnFail="/login"
                    >
                      <ThemedLayoutV2
                        Title={(props) => (
                          <ThemedTitleV2
                            {...props}
                            text="User Manager V1"
                          />
                        )}
                        Header={() => <ThemedHeaderV2 sticky />}
                        Footer={() => (
                          <Layout.Footer
                            style={{
                              textAlign: "center",
                              color: "#fff",
                              backgroundColor: "#7dbcea",
                            }}
                          >
                            My Custom Footer
                          </Layout.Footer>
                        )}
                      >                      
                        <Outlet />
                      </ThemedLayoutV2>
                    </Authenticated>
                  }
                >
                <Route
                  index element={<NavigateToResource resource="admin" />}
                />

                <Route path="/admin">
                  <Route index element={<ListUsers />} />
                  <Route path="list" element={<ListUsers />} />
                  <Route path="user/:id" element={<ShowUser />} />
                  <Route path="user/:id/edit" element={<EditUser />} />
                  <Route path="create" element={<CreateUser />} />
                </Route>

              </Route>

              <Route
                element={
                  <Authenticated key="auth-pages" fallback={<Outlet />}>                  
                    <NavigateToResource resource="admin" />
                  </Authenticated>
                }
              >
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </Refine>
        </AntdApp>
      </ConfigProvider>
      
    </BrowserRouter>
  );
}