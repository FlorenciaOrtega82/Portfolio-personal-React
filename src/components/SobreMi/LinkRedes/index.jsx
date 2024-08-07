import styles from "./LinkRedes.module.css";
import link_icon from "./link_icon.png";

const LinkRedes = ({ red }) => {
    return (
        <div className={styles.container__red}>
            <a className={styles.red}>{red}</a>
            {/* <img src={link_icon} className={styles.icon}/> */}
        </div>
    );
};

export default LinkRedes;
