import { connect } from 'react-redux';
// import actions
import NameField from './name_field';

const mapStateToProps = (state, ownProps) => {
  return {
    profiles: state.profiles
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NameField);
