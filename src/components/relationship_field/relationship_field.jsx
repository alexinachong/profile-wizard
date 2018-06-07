import React from 'react';

class RelationshipField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // what is default relationship?
      // relationship: ''
    };
  }

  render() {
    return (
      <div className="relationship-field-container">
        <h2>What is {this.props.profiles.gender} <strong>relationship</strong> to you?</h2>

        <div className="relationship-field-options-container">
          <p>Checkboxes go here</p>
        </div>
      </div>
    );
  }

}

export default RelationshipField;
