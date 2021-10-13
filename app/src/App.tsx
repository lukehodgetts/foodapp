import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { dark, light } from "./themes";
import { ThemeProvider } from "styled-components";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme, changeTheme } = useTheme();

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Router>
        <Switch>
          <Route path="/">
            <Homepage selectedTheme={theme} changeTheme={changeTheme} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
