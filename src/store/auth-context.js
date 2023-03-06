import React, {useEffect, useState} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    userDate: {firstName: '', secondName: '', avatar: ''},
    onLogout: () => {},
    onLogin: (userData) => {}

});

export const AuthContextProvider = (props) => {

    const [userIsLogin, setUserIsLogin] = useState(false);
    const [userData, setUserData] = useState({firstName: '', secondName: '', avatar: ''});

    useEffect(() => {
        const localStorageIsLoginInformation = localStorage.getItem('userIsLogin');
        const localStorageUserData = localStorage.getItem('userData');

        if (localStorageIsLoginInformation === '1') {
            setUserIsLogin(prevState => true);
            setUserData(prevState => JSON.parse(localStorageUserData));

        }
    }, []);

    const logoutHandler = () => {
        setUserData(prevState => {return ({firstName: '', secondName: '', avatar: ''})});
        setUserIsLogin(false);

        localStorage.setItem('userIsLogin', '0');
        localStorage.removeItem('userData');
    }

    const loginHandler = (userData) => {
        setUserData(prevState => userData);
        setUserIsLogin(true);

        localStorage.setItem('userIsLogin', '1');
        localStorage.setItem('userData', JSON.stringify(userData));
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: userIsLogin,
                userData: userData,
                onLogout: logoutHandler,
                onLogin: loginHandler
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}


export default AuthContext;