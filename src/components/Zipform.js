import React from "react";

class ZipForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcode: ""
    };
    this.inputUpdated = this.inputUpdated.bind(this);
    this.submitZipcode = this.submitZipCode.bind(this);
  }

  inputUpdated(e) {
    const { value } = e.target;
    this.setState({
      zipcode: value
    });
  }

  submitZipCode(e) {
    e.preventDefault();

    const { zipcode } = this.state;
    const { onSubmit } = this.props;

    onSubmit(zipcode);

    this.setState({ zipcode: "" });
  }

  render() {
    return (
      <div className="zip-form">
        <form onSubmit={this.submitZipcode}>
          <label htmlFor="zipcode">Zip Code</label>
          <input
            className="form-control"
            type="input"
            name="zipcode"
            value={this.state.zipcode}
            onInput={this.inputUpdated}
          />
          <button type="submit" className="btn btn-success">
            Get Forcast
          </button>
        </form>
      </div>
    );
  }
}

export default ZipForm;
