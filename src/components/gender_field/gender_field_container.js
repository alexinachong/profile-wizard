import { connect } from 'react-redux';
import { addGender } from '../../actions/profile_actions';
import GenderField from './gender_field';

const mapStateToProps = (state, ownProps) => {
  return {
    profiles: state.profiles
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addGender: gender => dispatch(addGender(gender))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenderField);
