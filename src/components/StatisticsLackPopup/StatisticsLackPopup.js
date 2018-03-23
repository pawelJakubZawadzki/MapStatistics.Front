import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'react-toolbox/lib/dialog';
import { Button } from 'react-toolbox/lib/button';
import { themr } from 'react-css-themr';
import { STATISTICS_LACK_WARNING, BUTTON_LABEL } from './constants';
import { COMPONENTS } from '../../constants';

const StatisticsLackPopup = (props) => {
  const { isStatisticsLackPopupVisible, hideStatisticsLackPopup, theme } = props;

  return (
    <Dialog
      active={isStatisticsLackPopupVisible}
      onOverlayClick={hideStatisticsLackPopup}
      className={theme.warningPopup}
    >
      <p>{STATISTICS_LACK_WARNING}</p>
      <Button
        label={BUTTON_LABEL}
        onClick={hideStatisticsLackPopup}
        className={theme.closeButton}
        raised
        primary
      />
    </Dialog>
  );
};

StatisticsLackPopup.propTypes = {
  isStatisticsLackPopupVisible: PropTypes.bool.isRequired,
  hideStatisticsLackPopup: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

export default themr(COMPONENTS.STATISTICS_LACK_POPUP)(StatisticsLackPopup);
