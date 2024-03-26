import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../HomePage";
import PrivateRoute from "../PrivateRoute";
import LoginPage from "../LoginPage";
import {QueryClient, QueryClientProvider} from "react-query";
const App = () => {

    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={
                    <PrivateRoute>
                        <HomePage />
                    </PrivateRoute>
                    }
                />
                <Route path="/user/:username" element={
                    <PrivateRoute>
                        <HomePage />
                    </PrivateRoute>
                }
                />
                <Route path="/login" element={
                    <LoginPage />
                }/>
                <Route path="/logout" element={
                    <LoginPage />
                }/>
                <Route path={"/"} element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
        </QueryClientProvider>
    );
};

export default App;