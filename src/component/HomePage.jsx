import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./HomePage.module.css";
import Profile from "./Profile";
import Posts from "./Posts";
import Gallery from "./Gallery";
import Todo from "./Todo";
import { useState } from "react";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user"));
  let { id } = useParams();
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Link to="/homepage/profile" className={styles.links}>
          <div>Profile</div>
        </Link>
        <Link to="/homepage/posts" className={styles.links}>
          <div>Posts</div>
        </Link>
        <Link to="/homepage/gallery" className={styles.links}>
          <div>Gallery</div>
        </Link>
        <Link to="/homepage/todo" className={styles.links}>
          <div>Todo</div>
        </Link>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.nav}>
          <div>
            <h3>Profile</h3>
          </div>
          <div
            className={styles.profile}
            onClick={() => setShowModal(!showModal)}
          >
            <img src={user.profilepicture} alt="" />
            <h6>{user.name}</h6>
            {showModal && (
              <div className={styles.popup}>
                <img src={user.profilepicture} alt="" />
                <p>{user.name}</p>
                <span className={styles.email}>{user.email}</span>
                <div>
                  <img src={user.profilepicture} alt="" />
                  <span>{user.name}</span>
                </div>
                <button
                  onClick={() => {
                    localStorage.removeItem("user");
                    navigate("/");
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
        <div className={styles.dynamicContent}>
          {id === "profile" && <Profile />}
          {id === "posts" && <Posts />}
          {id === "gallery" && <Gallery />}
          {id === "todo" && <Todo />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
