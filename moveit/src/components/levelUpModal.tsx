/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useContext } from 'react';
import styles from '../styles/components/LevelUpModal.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';

export default function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </div>
    </div>
  );
}
