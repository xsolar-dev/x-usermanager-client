import { Refine, Authenticated } from "@refinedev/core";
import { ThemedLayoutV2, ThemedTitleV2, ThemedHeaderV2, useNotificationProvider } from "@refinedev/antd";
import { ConfigProvider, App as AntdApp, Layout } from "antd";
import { RefineKbar } from "@refinedev/kbar";

import routerProvider , { NavigateToResource } from "@refinedev/react-router-v6";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import { deviceDataProvider } from "./providers/data-provider-device";
import { customerDataProvider } from "./providers/data-provider-customer";
import { authProvider } from "./providers/auth-provider";

import { ShowPage } from "./pages/device/show";
import { EditPage } from "./pages/device/edit";
import { ListPage } from "./pages/device/list";
import { CreateDevice } from "./pages/device/create";

import { ListCustomer } from "./pages/customer/list";
import { ShowCustomer } from "./pages/customer/show";
import { CreateCustomer } from "./pages/customer/create"
import { EditCustomer } from "./pages/customer/edit";

import { Login } from "./pages/login";

import "antd/dist/reset.css";


export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ConfigProvider>
        <AntdApp>
        <Refine 
          dataProvider={{
            default: deviceDataProvider,
            customer: customerDataProvider,
          }}
          authProvider={authProvider}
          routerProvider={routerProvider}
          notificationProvider={useNotificationProvider}
          resources={[
            {
              name: "device",
              identifier: "device-region",
              list: "/device/list",
              show: "/device/:id",
              edit: "/device/:id/edit",
              create: "/device/create",
              meta: { label: "Devices"},
            },
            {
              name: "customer",
              identifier: "customer-region",
              list: "/customer/list",
              show: "/customer/:id",
              edit: "/customer/:id/edit",
              create: "/customer/create",
              meta: { label: "Customer", dataProviderName: "customer" },
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
                            text="XSolar Manager V1"
                          />
                        )}
                        
                        // Footer={() => (
                        //   <Layout.Footer
                        //     style={{
                        //       textAlign: "center",
                        //       color: "#fff",
                        //       backgroundColor: "#7dbcea",
                        //     }}
                        //   >
                        //     My Custom Footer
                        //   </Layout.Footer>
                        // )}
                      >
                        <Outlet />
                      </ThemedLayoutV2>
                    </Authenticated>
                  }
                >
                {/* <Route
                  index element={<NavigateToResource resource="device" />}
                /> */}

                <Route path="/device">
                  <Route index element={<ListPage />} />
                  <Route path="list" element={<ListPage />} />
                  <Route path=":id" element={<ShowPage />} />
                  <Route path=":id/edit" element={<EditPage />} />
                  <Route path="create" element={<CreateDevice />} />
                </Route>

                <Route path="/customer">
                  <Route index element={<ListCustomer />} />
                  <Route path="list" element={<ListCustomer />} />
                  <Route path=":id" element={<ShowCustomer />} />
                  <Route path=":id/edit" element={<EditCustomer />} />
                  <Route path="create" element={<CreateCustomer />} />
                </Route>

              </Route>

              <Route
                element={
                  <Authenticated key="auth-pages" fallback={<Outlet />}>                  
                    <NavigateToResource resource="device" />
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