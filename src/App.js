import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/Dashboard";
// import { useState } from "react";
import Sidebar from "./scenes/global/Sidebar";
// import Users from "./scenes/users";
// import Integrations from "./scenes/integrations";
// import Logs from "./scenes/logs";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Sidebar />
          <div className="content">
            <Topbar />
            <Routes>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/users" element={<Users />} />
                <Route path="/integrations" element={<Integrations />} />
                <Route path="/logs" element={<Logs />} /> */}
              </Routes>
            </Routes>
          </div>
        </div>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
