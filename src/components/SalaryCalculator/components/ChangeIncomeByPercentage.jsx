import {Button, ButtonGroup} from "react-bootstrap";
import PropTypes from "prop-types";

const ChangeIncomeByPercentage = (props) => {
    return (
        <>
            <ButtonGroup aria-label="Basic example">
                <Button variant={props.variant} onClick={props.onClickFunction(95)}>-5%</Button>
                <Button variant={props.variant} onClick={props.onClickFunction(99)}>-1%</Button>
                <Button variant={props.variant} onClick={props.onClickFunction(101)}>+1%</Button>
                <Button variant={props.variant} onClick={props.onClickFunction(105)}>+5%</Button>
            </ButtonGroup>
        </>
    )
}

ChangeIncomeByPercentage.propTypes = {
    variant: PropTypes.string.isRequired,
    onClickFunction: PropTypes.func.isRequired
}

export default ChangeIncomeByPercentage;