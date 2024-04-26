import {Form, InputGroup} from "react-bootstrap";
import PropTypes from "prop-types";

const Dependents = (props) => {
    return (
        props.csaladi ? (
            <>
                <InputGroup className={props.className}>
                    <Form.Control placeholder="1" type="number" min="1" onChange={(e) => props.changeNumOfDependents(e.target.value)} />
                    <InputGroup.Text id="eligibleText">
                        Eltartott, ebből kedvezményezett
                    </InputGroup.Text>
                    <Form.Control placeholder="0" type="number" min="0" max={props.numOfDependents} onChange={(e) => props.changeNumOfEligibleDependents(e.target.value)}/>
                </InputGroup>
            </>
        ) : null
    )
}

Dependents.propTypes = {
    csaladi: PropTypes.bool,
    className: PropTypes.string,
    changeNumOfDependents: PropTypes.func.isRequired,
    numOfDependents: PropTypes.number.isRequired,
    changeNumOfEligibleDependents: PropTypes.func.isRequired
}

export default Dependents;