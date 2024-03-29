import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './card';

const Anchor = ({
 text, fetchCaptcha, submitResponse, verified,
}) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {!verified && open && (
        <div>
          <div className="scaptcha-hidden" onClick={handleClose} />
          <Card
            fetchCaptcha={fetchCaptcha}
            submitResponse={submitResponse}
            text={text}
          />
        </div>
      )}
    </div>
  );
};

Anchor.propTypes = {
  fetchCaptcha: PropTypes.func.isRequired,
  submitResponse: PropTypes.func.isRequired,
  text: PropTypes.shape({
    anchor: PropTypes.string,
    challenge: PropTypes.string,
  }).isRequired,
  verified: PropTypes.bool.isRequired,
};

export default Anchor;
