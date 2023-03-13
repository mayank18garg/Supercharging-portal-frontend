import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AdminPage } from "./pages/admin-page";
import { HomePage } from "./pages/home-page";
import { NotFoundPage } from "./pages/not-found-page";
import { ProfilePage } from "./pages/profile-page";
import { ProtectedPage } from "./pages/protected-page";
import { PublicPage } from "./pages/public-page";
import { CallbackPage } from "./pages/callback-page";
import {AuthenticationGuard} from "./components/authentication-guard";
import { PageLoader } from "./components/page-loader";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBarTab } from "./components/navigation/desktop/nav-bar-tab";
import { PrivateRoute } from "./utils/private-route";

import {Chart as ChartJS} from "chart.js/auto";
import { Colors } from "chart.js/auto";

export const App = () => {
  ChartJS.register(Colors);
  ChartJS.defaults.font.size = 18;
  ChartJS.defaults.font.style = 'oblique';
  ChartJS.defaults.color = "Green";

  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }
  return (
    <Routes>
      <Route 
        exact path="/"  
        // element={< Navigate replace to="/profile" />}
        element={<HomePage/>}
      />
      <Route 
        path="/profile" 
        element={<AuthenticationGuard component={ProfilePage} />}
      />
      <Route path="/public" element={<PublicPage />} />
      <Route path="/protected" element={<ProtectedPage />} />
      <Route element={<PrivateRoute /> }>
        <Route path="/admin" exact element={<AdminPage />} />
      </Route>
      
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/callback" element={<CallbackPage />} />
    </Routes>
  );
};
