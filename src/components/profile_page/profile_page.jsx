import React from 'react';
import NameFieldContainer from '../name_field/name_field_container';
import BirthdayFieldContainer from '../birthday_field/birthday_field_container';
import GenderFieldContainer from '../gender_field/gender_field_container';
import RelationshipFieldContainer from '../relationship_field/relationship_field_container';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
      components: [<NameFieldContainer />, <BirthdayFieldContainer />, <GenderFieldContainer />, <RelationshipFieldContainer />]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayButtonText = this.displayButtonText.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.pageNum < 3) {
      this.setState({pageNum: this.state.pageNum + 1});
      this.props.incrementPageNum();
    } else {
      this.setState({
        pageNum: 0,
        firstName: '',
        lastName: '',
        birthday: '',
        gender: '',
        relationship: ''
      });
    }
  }

  displayButtonText() {
    let buttonText = 'Next >>';
    if (this.state.pageNum === 3) {
      buttonText = 'Done!';
    }
    return buttonText;
  }

  render() {
    return (
      <div className="profile-page-container">

        {this.state.components[this.state.pageNum]}

        <button onClick={this.handleSubmit} className="form-buttons">{this.displayButtonText()}</button>
      </div>
    );
  }
}

export default ProfilePage;
