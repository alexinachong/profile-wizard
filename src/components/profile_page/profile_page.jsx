import React from 'react';
import NameFieldContainer from '../name_field/name_field_container';
import BirthdayFieldContainer from '../birthday_field/birthday_field_container';
import GenderFieldContainer from '../gender_field/gender_field_container';
import RelationshipFieldContainer from '../relationship_field/relationship_field_container';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    // this.state?

    this.handleSubmit = this.handleSubmit.bind(this);
    // other methods?
  }

  handleSubmit(e) {
    e.preventDefault();
    // call action to advance to next page
    // if fields are not empty:
    // this.props.goToNextPage();
  }

  // method to determine what page to display

  render() {
    return (
      <div className="profile-page-container">
        <form onSubmit={this.handleSubmit} className="profile-form">
          <h1>Name -> Birthday -> Gender -> Relationship</h1>

          <NameFieldContainer />
          <BirthdayFieldContainer />
          <GenderFieldContainer />
          <RelationshipFieldContainer />


          <input type="submit" value="Next >>" className="form-buttons" />
        </form>
      </div>
    );
  }
}

export default ProfilePage;
