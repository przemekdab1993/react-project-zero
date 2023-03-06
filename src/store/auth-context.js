import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    userDate: {firstName: '', secondName: '', avatar: ''},
    onLogout: () => {}
});

export default AuthContext;