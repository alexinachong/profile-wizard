import React from 'react';

class GenderField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: ''
    };
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  componentWillUnmount() {
    this.props.addGender(this.state.gender);
  }

  render() {
    return (
      <div className="gender-field-container">
        <h2>Select {this.props.profiles.firstName}&#x27;s <strong>gender</strong>:</h2>

        <div className="gender-field-options-container">
          <img src="http://icdn.kiwicrate.com/site/account/gender-boy.png" className="gender-field-options" />
          <img src="http://icdn.kiwicrate.com/site/account/gender-girl.png" className="gender-field-options" />
        </div>
      </div>
    );
  }

}

export default GenderField;
