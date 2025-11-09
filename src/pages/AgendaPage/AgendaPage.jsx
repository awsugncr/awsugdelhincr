import UpcomingEventAgenda from '../../components/UpcomingEventAgenda/UpcomingEventAgenda';
import styles from './AgendaPage.module.css';

const AgendaPage = () => {
  return (
    <div className={styles.agendaPage}>
      <main className={styles.main}>
        <UpcomingEventAgenda />
      </main>
    </div>
  );
};

export default AgendaPage;