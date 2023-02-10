import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
const LandingPage = () => {
  const [userData, setUserData] = useState([]);

  const fetchUsers = async () => {
    try {
      let users = await fetch("https://panorbit.in/api/users.json");
      users = await users.json();
      setUserData(users.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Select and Account</h4>
      <div className={styles.users}>
        {userData.map((user) => {
          return (
            <Link to="/homepage" className={styles.links}>
              <div
                className={styles.user}
                onClick={() => {
                  localStorage.setItem("user", JSON.stringify(user));
                }}
              >
                <img src={user.profilepicture} alt="" />
                <p>{user.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;
