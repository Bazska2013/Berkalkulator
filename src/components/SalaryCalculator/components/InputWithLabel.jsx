import {FloatingLabel, Form} from "react-bootstrap";
import PropTypes from "prop-types";

const InputWithLabel = (props) => {
    return (
      <>
          <FloatingLabel
              controlId={props.id}
              label={props.label}
              className={props.className}
          >
              <Form.Control type={props.inputType} onChange={(e) => props.onChangeFunction(e.target.value)} value={props.originalValue} placeholder={props.placeholder}/>
          </FloatingLabel>
      </>
    );
}

InputWithLabel.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    originalValue: PropTypes.string.isRequired,
    onChangeFunction: PropTypes.func.isRequired,
    placeholder: PropTypes.string
}

export default InputWithLabel;