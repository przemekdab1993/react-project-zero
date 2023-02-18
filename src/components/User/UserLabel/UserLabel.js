import React from "react";

import styles from "./UserLabel.module.css";
import Card from "../../UserInterface/Card";

const UserLabel = (props) => {
    return (
        <Card className={styles['user-label']} >
            <div className={styles['user-label-content']}>
                <div className={styles['user-data']}>
                    <div
                        className={`${styles['user-data-item']} ${styles['user-avatar']}`}
                        style={{backgroundColor: props.userAvatar}}
                    >
                    </div>
                    <div className={`${styles['user-data-item']} ${styles['user-first-name']}`}>
                        {(props.userFirstName) ? props.userFirstName : 'user'}
                    </div>
                    <div className={`${styles['user-data-item']} ${styles['user-second-name']}`}>
                        {(props.userSecondName) ? props.userSecondName : 'unknown'}
                    </div>
                </div>
                {(!props.isLogin) ? (
                    <button className={styles['btn-login']}>Log in</button>
                ) : (
                    <button onClick={props.onLogout} className={styles['btn-logout']}>Log out</button>
                )}

            </div>
        </Card>
    );
}

export default UserLabel;