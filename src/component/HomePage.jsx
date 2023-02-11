import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./HomePage.module.css";
import Profile from "./Profile";
import Posts from "./Posts";
import Gallery from "./Gallery";
import Todo from "./Todo";
import { useEffect, useState } from "react";

const HomePage = () => {
  let root=document.querySelector(":root")

  // document.querySelector(".chatheader").addEventListener("click",)
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user"));
  let { id } = useParams();
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
  console.log(userData)
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Link to="/homepage/profile" className={styles.links}>
          <div className={styles.active}><span>Profile</span></div>
        </Link>
        <Link to="/homepage/posts" className={styles.links}>
          <div><span>Posts</span></div>
        </Link>
        <Link to="/homepage/gallery" className={styles.links}>
          <div><span>Gallery</span></div>
        </Link>
        <Link to="/homepage/todo" className={styles.links}>
          <div><span>Todo</span></div>
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
      <div className={styles.chat}>
        <div className={styles.chatheader} onClick={()=>{
    let tranlateValue=getComputedStyle(root).getPropertyValue("--translatevalue");
    if(tranlateValue==="230px"){

      root.style.setProperty("--translatevalue","0px")
    }else{
      root.style.setProperty("--translatevalue","230px")

    }


}}>Chat</div>
        <div className={styles.users}>
          {userData.map(user=>
            <div className={styles.user}>
              <img src={user.profilepicture} alt="" />
              <span>{user.name}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
