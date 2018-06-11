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

  componentWillUnmount() {
    this.props.addBirthday(this.state.birthday);
  }

  render() {
    return (
      <div className="birthday-field-container">
        <h2>When is {this.props.profiles.firstName}&#x27;s <strong>birthday</strong>?</h2>

        <img src="https://icdn.kiwicrate.com/site/account/letscelebrate.png" />

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
