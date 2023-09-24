import Styles from "./Profile.module.css"

const Profile = () => {
  return (
    <div className={Styles["profile"]}>
      <div className={Styles["card-container"]}>
      <span className={Styles["pro"]}>PRO</span>
      <img className={Styles["round"]} src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
      <h3>Ricky Park</h3>
      <h6>New York</h6>
      <p>User interface designer and <br/> front-end developer</p>
      <div className={Styles["skills"]}>
        <h6>Skills</h6>
        <ul>
          <li>UI / UX</li>
          <li>Front End Development</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Profile
