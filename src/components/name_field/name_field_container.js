import { connect } from 'react-redux';
import { addFirstName, addLastName } from '../../actions/profile_actions';
import NameField from './name_field';

const mapStateToProps = (state, ownProps) => {
  return {
    profiles: state.profiles
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addFirstName: firstName => dispatch(addFirstName(firstName)),
    addLastName: lastName => dispatch(addLastName(lastName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NameField);
