import React from 'react';

// check input type on form field

class BirthdayField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // separate MMDDYY fields? - check
      birthday: ''
    };
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  render() {
    return (
      <div className="birthday-field-container">
        <h2>When is this.props.profiles.names <strong>birthday</strong>?</h2>

        <img src="https://icdn.kiwicrate.com/site/account/punchcard/onboarding/letscelebrate.png" />

        <label>
          <input
            type="date"
            value={this.state.birthday}
            onChange={this.update('birthday')}
            placeholder="MM/DD/YY"
            className="profile-input"
            id="birthday-field"
            autoFocus
          />
        </label>
      </div>
    );
  }

}

export default BirthdayField;
