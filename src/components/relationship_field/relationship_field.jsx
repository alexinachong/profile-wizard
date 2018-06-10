import React from 'react';

class RelationshipField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relationship: ''
    };

    this.genderPronoun = this.genderPronoun.bind(this);
    this.renderSpecificGenderOptions = this.renderSpecificGenderOptions.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  componentWillUnmount() {
    this.props.addRelationship(this.state.relationship);
  }

  genderPronoun(gender) {
    let pronoun = "";
    if (gender === "male") {
      pronoun = "his";
    } else {
      pronoun = "her";
    }
    return pronoun;
  }

  renderSpecificGenderOptions(gender) {
    if (gender === "male") {
      return (
        <div className="relationship-field-options-container">
          <label>
            <input type="radio" id="relationship-option-1"
              name="relationship" value="son" />
              <span>Son</span>
          </label>

          <label>
            <input type="radio" id="relationship-option-3"
              name="relationship" value="family-friend" />
              <span>Family Friend</span>
          </label>

          <label>
            <input type="radio" id="relationship-option-4"
              name="relationship" value="grandson" />
              <span>Grandson</span>
          </label>

          <label>
            <input type="radio" id="relationship-option-6"
              name="relationship" value="other" />
              <span>Other</span>
          </label>

          <label>
            <input type="radio" id="relationship-option-7"
              name="relationship" value="nephew" />
              <span>Nephew</span>
          </label>
        </div>
      );
    } else {
      return (
        <div className="relationship-field-options-container">
          <label>
            <input type="radio" id="relationship-option-2"
              name="relationship" value="daughter" />
              <span>Daughter</span>
          </label>

          <label>
            <input type="radio" id="relationship-option-3"
              name="relationship" value="family-friend" />
              <span>Family Friend</span>
          </label>

          <label>
            <input type="radio" id="relationship-option-5"
              name="relationship" value="granddaughter" />
              <span>Granddaughter</span>
          </label>

          <label>
            <input type="radio" id="relationship-option-6"
              name="relationship" value="other" />
              <span>Other</span>
          </label>

          <label>
            <input type="radio" id="relationship-option-8"
              name="relationship" value="niece" />
              <span>Niece</span>
          </label>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="relationship-field-container">
        <h2>What is {this.genderPronoun(this.props.profiles.gender)} <strong>relationship</strong> to you?</h2>

        {this.renderSpecificGenderOptions(this.props.profiles.gender)}

      </div>
    );
  }

}

export default RelationshipField;
