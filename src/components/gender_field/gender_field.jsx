import React from 'react';

class GenderField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // what is default gender?
      // gender: ''
    };
  }

  render() {
    return (
      <div className="gender-field-container">
        <h2>Select {this.props.profiles.name}s <strong>gender</strong>:</h2>

        <div className="gender-field-options-container">
          <img src="./boy.jpg" className="gender-field-options" />
          <img src="./girl.jpg" className="gender-field-options" />
        </div>
      </div>
    );
  }

}

export default GenderField;
