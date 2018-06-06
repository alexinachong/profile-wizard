import { connect } from 'react-redux';
// import actions
import { goToNextPage } from '../../actions/profile_actions';
import ProfilePage from './profile_page';

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // check this
    // goToNextPage: () => dispatch(goToNextPage())

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
