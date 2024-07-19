import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from './Home';
import NextPage from './Next';

export default function App() {
  return (
    <div>

    <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        exact
                        path="/Next"
                        element={<NextPage />}
                    />
                </Routes>
            </BrowserRouter>
    </div>
  );
}
