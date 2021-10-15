import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AddRecipe from "./pages/AddRecipe";
import { dark, light } from "./themes";
import { ThemeProvider } from "styled-components";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme, changeTheme } = useTheme();

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage selectedTheme={theme} changeTheme={changeTheme} />
          </Route>
          <Route path="/addrecipe" exact>
            <AddRecipe selectedTheme={theme} changeTheme={changeTheme} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
