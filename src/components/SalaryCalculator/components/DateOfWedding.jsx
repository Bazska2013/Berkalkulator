import {FloatingLabel, Form} from "react-bootstrap";
import PropTypes from "prop-types";
import ValidMarriage from "./ValidMarriage.jsx";

const DateOfWedding = (props) => {
    return (
        props.frissHazasok ? (
            <>
                <FloatingLabel
                    controlId="dateOfWedding"
                    label="Add meg a házasságkötés dátumát:"
                    className={props.className}
                >
                    <Form.Control
                        type="date"
                        name="dateOfWedding"
                        onChange={(e) => props.onChangeFunction(e.target.value)}
                    />
                </FloatingLabel>
                <ValidMarriage validMarriage={props.validMarriage} />
            </>
        ) : null
    )
}

DateOfWedding.propTypes = {
    frissHazasok: PropTypes.bool,
    className: PropTypes.string,
    onChangeFunction: PropTypes.func.isRequired,
    validMarriage: PropTypes.bool,
}

export default DateOfWedding;