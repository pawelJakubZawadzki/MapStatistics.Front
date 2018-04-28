import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import Dialog from 'react-toolbox/lib/dialog';
import { themr } from 'react-css-themr';
import { COMPONENTS } from '../../constants';
import { LOADER_MESSAGE } from './constants';

const Loader = ({ isLoaderVisible, theme }) => (
  <Dialog
    active={isLoaderVisible}
    className={theme.loaderDialog}
  >
    <ProgressBar type="circular" mode="indeterminate" multicolor />
    <p>{LOADER_MESSAGE}</p>
  </Dialog>
);

Loader.propTypes = {
  isLoaderVisible: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default themr(COMPONENTS.LOADER)(Loader);
