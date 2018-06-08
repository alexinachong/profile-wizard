import { connect } from 'react-redux';
// import actions
import { incrementPageNum } from '../../actions/profile_actions';
import ProfilePage from './profile_page';

const mapStateToProps = (state, ownProps) => {
  return {
    profiles: state.profiles

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    incrementPageNum: () => dispatch(incrementPageNum())

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
