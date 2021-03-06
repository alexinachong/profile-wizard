import React from 'react';

class NameField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };

  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  componentWillUnmount() {
    this.props.addFirstName(this.state.firstName);
    this.props.addLastName(this.state.lastName);
  }

  render() {
    return (
      <div className="name-field-container">
        <h2>What is the child's <strong>name</strong>?</h2>

        <div className="name-inner-container">
          <label className="name-labels">
            <h4>First Name</h4>
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.update('firstName')}
              placeholder="Steve"
              className="profile-input"
              id="first-name-field"
              autoFocus
            />
          </label>

          <label className="name-labels" id="last-name-input">
            <h4>Last Name</h4>
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.update('lastName')}
              placeholder="Kiwi"
              className="profile-input"
              id="last-name-field"
            />
          </label>
        </div>
      </div>
    );
  }

}

export default NameField;
