import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import {Col, Container, Row} from "react-bootstrap";

const HouseholdSalaryCalculator = () => {
    const colStyle = {
        backgroundColor: '#f2f2f2',
        padding: '20px',
        margin: '5px',
        borderRadius: '10px',
    };

    return (
        <>
            <Container fluid="md">
                <Row>
                    <Col style={colStyle}>
                        <h1>Bérkalkulátor alkalmazás</h1>
                    </Col>
                </Row>
                <Row>
                    <Col style={colStyle}>
                        <header>
                            <FamilyMemberTabs/>
                        </header>
                    </Col>
                </Row>
                <main>
                    <Row>
                        <Col style={colStyle}><SalaryCalculator/></Col>
                        <Col style={colStyle}><HouseholdSummary/></Col>
                    </Row>
                </main>
            </Container>
        </>
      );
};

export default HouseholdSalaryCalculator;
