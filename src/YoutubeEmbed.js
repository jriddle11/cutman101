import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import './MainStyles.css';

const YoutubeEmbed = ({ embedId }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 100); // Adding a slight delay to ensure component is ready

    return () => clearTimeout(timer);
  }, []);

  return ready ? (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  ) : (
    <p>Loading...</p>
  );
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;