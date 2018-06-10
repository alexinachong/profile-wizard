import { connect } from 'react-redux';
import { addRelationship } from '../../actions/profile_actions';
import RelationshipField from './relationship_field';

const mapStateToProps = (state, ownProps) => {
  return {
    profiles: state.profiles
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addRelationship: relationship => dispatch(addRelationship(relationship))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RelationshipField);
