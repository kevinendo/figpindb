import React, { useState } from "react";
import PinDataService from "../services/pin";
import { Link } from "react-router-dom";

const AddPin = props => {
  let initialReviewState = ""

  let editing = false;

  if (props.location.state && props.location.state.currentPin) {
    editing = true;
    initialReviewState = props.location.state.currentPin.text
  }

  const [pin, setPin] = useState(initialPinState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    setPin(event.target.value);
  };

  const savePin = () => {
    var data = {
      tags: props.tags,
      notes: props.notes,
      number: props.match.params.number
    };

    if (editing) {
      data.number = props.location.state.currentPin.number
      PinDataService.updatePin(data)
        .then(response => {
          setSubmitted(true);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      PinDataService.createPin(data)
        .then(response => {
          setSubmitted(true);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }

  };

  return (
    <div>
      {props.user ? (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <Link to={"/restaurants/" + props.match.params.id} className="btn btn-success">
              Back to Restaurant
            </Link>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="description">{ editing ? "Edit" : "Create" } Review</label>
              <input
                type="text"
                className="form-control"
                id="text"
                required
                value={review}
                onChange={handleInputChange}
                name="text"
              />
            </div>
            <button onClick={saveReview} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>

      ) : (
      <div>
        Please log in.
      </div>
      )}

    </div>
  );
};

export default AddReview;