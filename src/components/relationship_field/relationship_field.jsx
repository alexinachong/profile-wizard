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
        <h2>What is this.props.profiles.gender <strong>relationship</strong> to you?</h2>

        <div className="relationship-field-options-container">
          <label>
            <input type="radio" id="relationship-option-1"
              name="relationship" value="son" />
              Son
          </label>

          <label>
            <input type="radio" id="relationship-option-2"
              name="relationship" value="daughter" />
              Daughter
          </label>

          <label>
            <input type="radio" id="relationship-option-3"
              name="relationship" value="family-friend" />
              Family Friend
          </label>

          <label>
            <input type="radio" id="relationship-option-4"
              name="relationship" value="grandson" />
              Grandson
          </label>

          <label>
            <input type="radio" id="relationship-option-5"
              name="relationship" value="granddaughter" />
              Granddaughter
          </label>

          <label>
            <input type="radio" id="relationship-option-6"
              name="relationship" value="other" />
              Other
          </label>

          <label>
            <input type="radio" id="relationship-option-7"
              name="relationship" value="nephew" />
              Nephew
          </label>

          <label>
            <input type="radio" id="relationship-option-8"
              name="relationship" value="niece" />
              Niece
          </label>
        </div>

      </div>
    );
  }

}

export default RelationshipField;
