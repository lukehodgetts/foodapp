import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { dark, light } from "./themes";
import { ThemeProvider } from "styled-components";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Router>
        <Switch>
          <Route path="/homepage">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
