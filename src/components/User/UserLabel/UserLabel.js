import React, {useContext} from "react";

import styles from "./UserLabel.module.css";
import Card from "../../UserInterface/Card";
import AuthContext from "../../../store/auth-context";

const UserLabel = () => {
    const ctx = useContext(AuthContext);

    return (
        <Card className={styles['user-label']} >
            <div className={styles['user-label-content']}>
                <nav className={styles['nav-menu']} >
                    <ul className={styles['nav-list']}>
                        {ctx.isLoggedIn && (
                            <li className={styles['nav-item']}>
                                <a href="/">Users</a>
                            </li>
                        )}
                        {ctx.isLoggedIn && (
                            <li className={styles['nav-item']}>
                                <a href="/">Admin</a>
                            </li>
                        )}
                        <li className={styles['nav-item']}>
                            <a href="/">Help</a>
                        </li>
                    </ul>
                </nav>
                {(ctx.isLoggedIn) ? (
                    <div className={styles['user-data']}>
                        <div
                            className={`${styles['user-data-item']} ${styles['user-avatar']}`}
                            style={{backgroundColor: ctx.userData.avatar}}
                        >
                        </div>
                        <div className={`${styles['user-data-item']} ${styles['user-first-name']}`}>
                            {(ctx.userData.firstName) ? ctx.userData.firstName : 'user'}
                        </div>
                        <div className={`${styles['user-data-item']} ${styles['user-second-name']}`}>
                            {(ctx.userData.secondName) ? ctx.userData.secondName : 'unknown'}
                        </div>
                        <button onClick={ctx.onLogout} className={styles['btn-logout']}>Log out</button>

                    </div>
                ) : (
                    <button className={styles['btn-login']}>Log in</button>
                )}

            </div>
        </Card>
    );
}

export default UserLabel;