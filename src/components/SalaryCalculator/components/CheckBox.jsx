import {Form} from "react-bootstrap";
import PropTypes from "prop-types";

const CheckBox = (props) => {
    return (
        <>
            <Form.Check
                type="switch"
                id={props.checkBoxId}
                name={props.checkBoxName}
                label={props.checkBoxLabel}
                onChange={props.checkBoxFunction}
                checked={props.checkBoxChecked}
                isValid={props.checkBoxValid} />
        </>
    )
}

CheckBox.propTypes = {
    checkBoxId: PropTypes.string.isRequired,
    checkBoxName: PropTypes.string.isRequired,
    checkBoxLabel: PropTypes.string.isRequired,
    checkBoxFunction: PropTypes.func.isRequired,
    checkBoxChecked: PropTypes.bool.isRequired,
    checkBoxValid: PropTypes.bool,
}

export default CheckBox;