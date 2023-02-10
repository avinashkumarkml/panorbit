import styles from "./HomePage.module.css";
const HomePage = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div>Profile</div>
        <div>Posts</div>
        <div>Gallery</div>
        <div>Todo</div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.nav}>
          <div>
            <h3>Profile</h3>
          </div>
          <div className={styles.profile}>
            <img src={user.profilepicture} alt="" />
            <h6>{user.name}</h6>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.userdata}>
            <img src={user.profilepicture} alt="" />
            <h4>{user.name}</h4>
            <div className={styles.item}>
              <span className={styles.label}>Username</span> :
              <span className={styles.name}>{user.name}</span>{" "}
            </div>
            <div>
              <span className={styles.label}>e-mail</span> :
              <span className={styles.name}>{user.email}</span>
            </div>
            <div>
              <span className={styles.label}>Phone</span> :{" "}
              <span className={styles.name}>{user.phone}</span>{" "}
            </div>
            <div>
              <span className={styles.label}>Website</span> :{" "}
              <span className={styles.name}>{user.website}</span>{" "}
            </div>
            <hr />
            <p>Company</p>
            <div>
              <span className={styles.label}>Name</span> :{" "}
              <span className={styles.name}>{user.company.name}</span>{" "}
            </div>

            <div>
              <span className={styles.label}>catchphrase</span> :{" "}
              <span className={styles.name}>{user.company.catchPhrase}</span>{" "}
            </div>

            <div>
              <span className={styles.label}>bs</span> :{" "}
              <span className={styles.name}>{user.company.bs}</span>{" "}
            </div>
          </div>
          <div className={styles.map}>
            <p>Address</p>
            <div>
              <span className={styles.label}>Street</span> :{" "}
              <span className={styles.name}>{user.address.street}</span>{" "}
            </div>

            <div>
              <span className={styles.label}>Suite</span> :{" "}
              <span className={styles.name}>{user.address.suite}</span>{" "}
            </div>
            <div>
              <span className={styles.label}>City</span> :{" "}
              <span className={styles.name}>{user.address.city}</span>{" "}
            </div>
            <div>
              <span className={styles.label}>Zipcode</span> :{" "}
              <span className={styles.name}>{user.address.zipcode}</span>{" "}
            </div>

            <div className={styles.googlemap}>
              <iframe
                title="gmap"
                name="gMap"
                className="map"
                src={`https://maps.google.com/maps?q=${user.address.city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              ></iframe>
            </div>

            <div className={styles.latlong}>
              <div>Lat:{user.address.geo.lat}</div>
              <div>Long:{user.address.geo.lng}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
