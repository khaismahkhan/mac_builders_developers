import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { appTheme } from './container/material.theme/app.theme/app.material.theme';
import CssBaseline from '@mui/material/CssBaseline';
import PageNotFound from './container/not.found.page/not.found.page';
import Home from './container/home/home';
import ContactUs from './container/contact.us/contact.us';
import AboutUs from './container/about.us/about.us';
import ProjectCategories from './container/project.categories/project.categories';
import Header from "./container/header/header";
import Footer from "./container/footer/footer";

function App() {

  return (
    <div>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <Router>
          {/* <Header/> */}
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/:project" element={<ProjectCategories/>} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
          <Footer/>
          </Router >
        </ThemeProvider>
      </StyledEngineProvider>
    </div>

  );
}

export default App;
