import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="https://google.com">Google</a> | React.js Project
      </p>
    </div>
  )
}

export default Header
