import { schedule } from "../../data/acd2025";
import placeholderImg from "../../assets/speakers/Placeholder.png";
import styles from "./UpcomingEventAgenda.module.css";
import { useState } from "react";

const UpcomingEventAgenda = () => {
  const [activeTab, setActiveTab] = useState("All");

  const sortedSessions = [...schedule].sort((a, b) => {
    const getHour = (timeStr) => {
      const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/);
      if (!match) return 0;
      let hour = parseInt(match[1]);
      const period = match[3];
      if (period === "PM" && hour !== 12) hour += 12;
      if (period === "AM" && hour === 12) hour = 0;
      return hour * 60 + parseInt(match[2]);
    };
    return getHour(a.time) - getHour(b.time);
  });

  const filteredSessions = sortedSessions.filter((session) => {
    if (activeTab === "All") return true;
    if (activeTab === "Track 1") return session.track === "Track 1";
    if (activeTab === "Track 2") return session.track === "Track 2";
    return true;
  });

  const getTrackColor = (track) => {
    switch (track) {
      case "Main":
        return "var(--color-accent)";
      case "Track 1":
        return "var(--color-accent-2)";
      case "Track 2":
        return "#10B981";
      default:
        return "var(--color-accent)";
    }
  };

  const tabs = ["All", "Track 1", "Track 2"];

  return (
    <section id="agenda" className={styles.agendaSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleMain}>Agenda</span>
            <span className={styles.titleSub}>
              AWS Community Day Delhi 2025
            </span>
          </h2>
        </div>

        <div className={styles.tabsContainer}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.tab} ${
                activeTab === tab ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.timeline}>
          {filteredSessions.map((session, index) => (
            <div
              key={`${session.time}-${index}`}
              className={styles.timelineItem}
            >
              <div className={styles.timelineMarker}>
                <div
                  className={styles.marker}
                  style={{ backgroundColor: getTrackColor(session.track) }}
                />
                <div className={styles.timeInfo}>
                  <div className={styles.timeSlot}>
                    {session.time.split(" - ")[0]}
                  </div>
                  <div className={styles.duration}>
                    {session.time.includes(" - ")
                      ? session.time.split(" - ")[1]
                      : ""}
                  </div>
                </div>
              </div>

              <div className={styles.sessionContainer}>
                <div className={styles.sessionHeader}>
                  <h3 className={styles.sessionTitle}>{session.title}</h3>
                  <span
                    className={styles.trackBadge}
                    style={{
                      backgroundColor: getTrackColor(session.track),
                      color: "white",
                    }}
                  >
                    {session.track}
                  </span>
                </div>

                {session.description && (
                  <p className={styles.sessionDescription}>
                    {session.description}
                  </p>
                )}

                {session.speakers && session.speakers.length > 0 && (
                  <div className={styles.speakersSection}>
                    {session.speakers.map((speaker, speakerIndex) => (
                      <div key={speakerIndex} className={styles.speakerCard}>
                        <img
                          src={speaker.image || placeholderImg}
                          alt={speaker.name}
                          className={styles.speakerImage}
                          onError={(e) => {
                            e.target.src = placeholderImg;
                          }}
                        />
                        <span className={styles.speakerName}>
                          {speaker.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.disclaimer}>
          <p>* Timings are subject to change</p>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventAgenda;
