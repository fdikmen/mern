import React from "react";
import PropTypes from "prop-types";
import { Label } from "semantic-ui-react";

function InlineError(props) {
  return (
    <div>
      <Label as="a" basic color="red" pointing>
        {props.message}
      </Label>
    </div>
  );
}

InlineError.propTypes = {};

export default InlineError;
