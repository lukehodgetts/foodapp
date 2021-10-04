import { useState } from "react";

type Theme = "light" | "dark"

const useTheme = () => {
    const [theme, setTheme] = useState<Theme>("light");

    const changeTheme = (newTheme: Theme) => {
        setTheme(newTheme)
    };

    return { theme, changeTheme}
};

export default useTheme