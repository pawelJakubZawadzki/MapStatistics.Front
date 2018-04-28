import { connect } from 'react-redux';

import { selectIsLoaderVisible } from '../../modules/Map';

const mapStateToProps = state => ({
  isLoaderVisible: selectIsLoaderVisible(state)
});

export default connect(mapStateToProps, null);
