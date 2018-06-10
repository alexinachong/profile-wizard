import { connect } from 'react-redux';
import { addBirthday } from '../../actions/profile_actions';
import BirthdayField from './birthday_field';

const mapStateToProps = (state, ownProps) => {
  return {
    profiles: state.profiles
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addBirthday: birthday => dispatch(addBirthday(birthday))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BirthdayField);
