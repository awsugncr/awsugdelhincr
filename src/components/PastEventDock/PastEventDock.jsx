import Dock from "../../ui/Dock/Dock";
import {
  FaImage,
  FaInfoCircle,
  FaUsers,
  FaHandshake,
  FaEnvelope,
  FaUserFriends,
} from "react-icons/fa";
import PropTypes from "prop-types";

const PastEventDock = ({ eventData }) => {
  // Dynamic dock nav items based on available sections
  const dockItems = [
    {
      label: "Images",
      icon: <FaImage />,
      onClick: () =>
        document
          .getElementById("images")
          ?.scrollIntoView({ behavior: "smooth" }),
      condition: eventData?.eventImages && eventData.eventImages.length > 0,
    },
    {
      label: "About",
      icon: <FaInfoCircle />,
      onClick: () =>
        document
          .getElementById("about")
          ?.scrollIntoView({ behavior: "smooth" }),
      condition: eventData?.aboutEvent || eventData?.agenda,
    },
    {
      label: "Speakers",
      icon: <FaUsers />,
      onClick: () =>
        document
          .getElementById("speakers")
          ?.scrollIntoView({ behavior: "smooth" }),
      condition: eventData?.speakers && eventData.speakers.length > 0,
    },
    {
      label: "Volunteers",
      icon: <FaUserFriends />,
      onClick: () =>
        document
          .getElementById("volunteers")
          ?.scrollIntoView({ behavior: "smooth" }),
      condition: eventData?.volunteers && eventData.volunteers.length > 0,
    },
    {
      label: "Sponsors",
      icon: <FaHandshake />,
      onClick: () =>
        document
          .getElementById("sponsors")
          ?.scrollIntoView({ behavior: "smooth" }),
      condition: eventData?.sponsors && eventData.sponsors.length > 0,
    },
    {
      label: "Contact",
      icon: <FaEnvelope />,
      onClick: () =>
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" }),
      condition: true, // Always show contact
    },
  ].filter((item) => item.condition !== false);

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        width: "auto",
      }}
    >
      <Dock
        items={dockItems}
        className="past-event-dock-navbar"
        panelHeight={60}
        dockHeight={120}
        baseItemSize={40}
        magnification={60}
      />
    </div>
  );
};

PastEventDock.propTypes = {
  eventData: PropTypes.shape({
    eventImages: PropTypes.array,
    aboutEvent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    agenda: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    speakers: PropTypes.array,
    volunteers: PropTypes.array,
    sponsors: PropTypes.array,
  }),
};

export default PastEventDock;
