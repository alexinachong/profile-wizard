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

  render() {
    return (
      <div className="birthday-field-container">
        <h2>When is {}s birthday?</h2>

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
    )
  }

}

export default BirthdayField;
