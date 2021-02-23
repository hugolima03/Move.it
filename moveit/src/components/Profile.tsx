import styles from '../styles/components/Profile.module.css';

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://pbs.twimg.com/profile_images/1359656352100937728/_7Wu7Bll_400x400.jpg"
        alt="ProfileImg"
      />
      <div>
        <strong>Hugo Lima</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
