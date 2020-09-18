import React from "react";
import intl from "react-intl-universal";
import { Link, useHistory } from "react-router-dom";
import styles from "./index.module.less";

interface propTypes {}

export const AuthLayout: React.FC<propTypes> = (props) => {
  const { children } = props;

  const history = useHistory();

  const typeAll = [
    {
      link: "login",
      name: "LOGIN",
    },
    {
      link: "register",
      name: "REGISTER_ACCOUNT",
    },
    {
      link: "forget",
      name: "FORGET_PASSWORD",
    },
  ];

  const type = history?.location?.pathname;

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <p className={styles.title}>{intl.get("WELCOME_SYSTEM")}</p>
        {children}

        <div className={styles.footer}>
          {typeAll
            .filter((item) => {
              let regxp = new RegExp(item.link);
              return !regxp.test(type);
            })
            .map((item, index) => (
              <span key={item.link}>
                {index !== 0 && <span> | </span>}
                <Link to={`/auth/${item.link}`}>{intl.get(item.name)}</Link>
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
