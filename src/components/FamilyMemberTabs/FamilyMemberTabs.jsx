import { useTaxState } from "../../state/TaxState";
import {Button, Col, Container, Row, Tab, Tabs} from "react-bootstrap";

const FamilyMemberTabs = () => {
  const {family, addFamilyMember, changeCurrentFamilyMember, numberOfFamilyMembers, deleteFamilyMember, currentFamilyMember} = useTaxState();

  return <div>
    <Container>
      <Row>
        <Col>
          <Tabs
              defaultActiveKey={1}
              id="family-member-tabs"
              className="mb-3"
              onSelect={(k) => changeCurrentFamilyMember(parseInt(k)+1)}
          >
            {Array.from({ length: numberOfFamilyMembers()}).map((_, index) => {
              const familyMember = family[index+1];
              if (!familyMember) {
                return null;
              }
              return (
                  <Tab eventKey={index} key={index} title={familyMember['name']}>{familyMember['name']}</Tab>
              );
            })}
          </Tabs>
        </Col>
        <Col>
          <Button variant="primary" onClick={addFamilyMember}>Hozzáadás</Button>
          <Button variant="danger" onClick={() => deleteFamilyMember(currentFamilyMember)}>Eltávolítás</Button>
        </Col>
      </Row>
    </Container>
  </div>;
};

export default FamilyMemberTabs;
