import PropTypes from "prop-types";
import {Card} from "react-bootstrap";

const ValidMarriage = (props) => {
    return (
        props.validMarriage ?
            (
                <>
                    <Card style={{ width: '9rem' }} border="success">
                        <Card.Body>
                            <Card.Text>Jogosult</Card.Text>
                        </Card.Body>
                    </Card>
                </>
            )
            :
            (
                <>
                    <Card style={{ width: '9rem' }} border="danger">
                        <Card.Body>
                            <Card.Text>Nem jogosult</Card.Text>
                        </Card.Body>
                    </Card>
                </>
            )
    )
}

ValidMarriage.propTypes = {
    validMarriage: PropTypes.bool,
}

export default ValidMarriage;