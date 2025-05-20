import { Refine } from "@refinedev/core";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import { ThemedLayoutV2, useNotificationProvider, AuthPage } from "@refinedev/antd";
import { ConfigProvider } from "antd";
import routerBindings, { NavigateToResource, UnsavedChangesNotifier } from "@refinedev/react-router";
import { RefineAiErrorComponent } from "./components/catch-all";
import { dataProviderInstance } from "./providers/data";
import { liveProvider } from "@refinedev/supabase";
import { supabaseClient } from "./utility/supabaseClient";
import type { AuthBindings } from "@refinedev/core";
import { Authenticated } from "@refinedev/core";
import { rolePermissions, UserRole, ResourcePermission } from "./types";
import { authProvider } from "./providers/auth";

const App = () => {
  return (
    <BrowserRouter>
      <ConfigProvider theme={{ token: { colorPrimary: "#1677ff" } }}>
        <Refine
          dataProvider={dataProviderInstance}
          liveProvider={liveProvider(supabaseClient)}
          authProvider={authProvider as AuthBindings}
          routerProvider={routerBindings}
          notificationProvider={useNotificationProvider}
          options={{
            liveMode: "auto",
            syncWithLocation: true,
          }}
          accessControlProvider={{
            can: async ({ action, resource }) => {
              const rolePromise = authProvider?.getPermissions?.();
              if (!rolePromise) return { can: false };

              const role = await rolePromise;
              if (typeof role !== "string") return { can: false };

              const userRole = role as UserRole;
              if (userRole === "admin") return { can: true };

              const permissions = rolePermissions[userRole] as ResourcePermission[];
              const resourcePermission = permissions.find(
                (p: ResourcePermission) => p.resource === resource || p.resource === "*",
              );

              if (!resourcePermission) return { can: false };

              return {
                can: resourcePermission.actions.includes(action as any),
              };
            },
          }}
          resources={[
            {
              name: "businesses",
              list: "/businesses",
              show: "/businesses/:id",
              create: "/businesses/create",
              edit: "/businesses/:id/edit",
            },
            {
              name: "inspections",
              list: "/inspections",
              show: "/inspections/:id",
              create: "/inspections/create",
              edit: "/inspections/:id/edit",
            },
            {
              name: "legislation",
              list: "/legislation",
              show: "/legislation/:id",
              create: "/legislation/create",
              edit: "/legislation/:id/edit",
            },
            {
              name: "equipment",
              list: "/equipment",
              show: "/equipment/:id",
              create: "/equipment/create",
              edit: "/equipment/:id/edit",
            },
            {
              name: "complaints",
              list: "/complaints",
              show: "/complaints/:id",
              create: "/complaints/create",
              edit: "/complaints/:id/edit",
            },
            {
              name: "investigations",
              list: "/investigations",
              show: "/investigations/:id",
              create: "/investigations/create",
              edit: "/investigations/:id/edit",
            },
          ]}>
          <Routes>
            <Route
              element={
                <Authenticated key="protected-routes" fallback={<Route path="/login" />}>
                  <ThemedLayoutV2>
                    <Outlet />
                  </ThemedLayoutV2>
                </Authenticated>
              }>
              <Route index element={<NavigateToResource resource="businesses" />} />
              <Route path="*" element={<RefineAiErrorComponent />} />
            </Route>
            <Route
              element={
                <Authenticated key="auth-pages" fallback={<Outlet />}>
                  <NavigateToResource resource="businesses" />
                </Authenticated>
              }>
              <Route path="/login" element={<AuthPage type="login" />} />
              <Route path="/register" element={<AuthPage type="register" />} />
              <Route path="/forgot-password" element={<AuthPage type="forgotPassword" />} />
              <Route path="/update-password" element={<AuthPage type="updatePassword" />} />
            </Route>
          </Routes>
          <UnsavedChangesNotifier />
        </Refine>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;
