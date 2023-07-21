import { Link } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
    borderRadius: 4,
    boxShadow: '1px 1px 2px 1px white',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(1px)',
  },
  title: {
    fontWeight: 500,
    fontSize: 42,
    color: 'white',
    textAlign: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
  letsStart: {
    marginTop: 25,
    padding: 10,
    fontSize: 16,
    border: '0px solid transparent',
    borderRadius: 4,
    textDecoration: 'none',
    color: 'black',
    boxShadow: '1px 1px 2px 1px grey',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(2px)',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome to Your personal Phonebook
        <span role="img" aria-label="Greeting icon">
          🌎
        </span>
        <p style={styles.text}>
          For effortless organization! Sign up in seconds and Log in anytime to
          access your contacts securely. Adding new contacts is a breeze, while
          deleting old ones takes just a tap. Stay connected with ease and
          simplicity. Experience the convenience of a phonebook designed for
          your everyday life!
        </p>
        <Link to="/register" title="Let's start!">
          <button style={styles.letsStart}>Let's start!</button>
        </Link>
      </h1>
    </div>
  );
}
