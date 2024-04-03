import { Route, Routes } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Network from "./pages/Network";
import Jobs from "./pages/Jobs";
import Messaging from "./pages/Messaging";
import Notifications from "./pages/Notifications";
import { initializeAuthentication } from "./redux/authActh";
import { DispatchApp } from "./redux/stroe";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/authSlice";
import { auth } from "./firebase/firebase";
import AuthProteced from "./routes/AuthProteced";
import styled, { ThemeProvider } from "styled-components";
import { MdOutlineLightMode } from "react-icons/md";
import { renderPosts } from "./redux/postActh";

// Define your themes
const lightTheme = {
  colors: {
    secondary: "gray",
    background: "#FFFFFF",
    text: "#000000",
    block: "#f7f7f7",
    border: "#d6d6d6",
  },
};

const darkTheme = {
  colors: {
    secondary: "#c7c7c7",
    background: "#121212",
    text: "#FFFFFF",
    block: "#222222",
    border: "#323232",
  },
};

// Create a styled component using the theme
const StyledButton = styled.button`
  position: absolute;
  top: 10%;
  text-transform: capitalize;
  background-color: ${(props) => props.theme.colors.block};
  color: ${(props) => props.theme.colors.text};
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5); /* Shadow effect */
`;

function App() {
  const dispatch: DispatchApp = useDispatch();

  // Initialize theme state
  const [isLightTheme, setIsLightTheme] = useState(true);

  // Toggle theme function
  const toggleTheme = () => {
    setIsLightTheme((prevIsLightTheme) => !prevIsLightTheme);
  };

  // Memoize theme object creation
  const theme = useMemo(() => (isLightTheme ? lightTheme : darkTheme), [
    isLightTheme,
  ]);

  // Initialize authentication
  useEffect(() => {
    dispatch(initializeAuthentication());
    auth.onAuthStateChanged((userinfo) => {
      return dispatch(setCurrentUser(userinfo));
    });
    dispatch(renderPosts())
  }, [dispatch]);

 
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <AuthProteced>
              <Home />
            </AuthProteced>
          }
        />
        <Route
          path="/network"
          element={
            <AuthProteced>
              <Network />
            </AuthProteced>
          }
        />
        <Route
          path="/jobs"
          element={
            <AuthProteced>
              <Jobs />
            </AuthProteced>
          }
        />
        <Route
          path="/messaging"
          element={
            <AuthProteced>
              <Messaging />
            </AuthProteced>
          }
        />
        <Route
          path="/notifications"
          element={
            <AuthProteced>
              <Notifications />
            </AuthProteced>
          }
        />
      </Routes>

      <StyledButton onClick={toggleTheme}>
        mode{" "}
        {isLightTheme ? (
          <MdOutlineLightMode color="gold" size={20} />
        ) : (
          <MdOutlineLightMode color="gray" size={20} />
        )}
      </StyledButton>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ThemeProvider>
  );
}

export default App;
