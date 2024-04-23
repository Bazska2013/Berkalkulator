import { useTaxState } from "../../state/TaxState";
import {Button, Tab, Tabs} from "react-bootstrap";

const FamilyMemberTabs = () => {
  const {family, addFamilyMember, changeCurrentFamilyMember, numberOfFamilyMembers, deleteFamilyMember, currentFamilyMember} = useTaxState();

  return <div>FamilyMemberTabs
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
    {/*{Array.from({ length: numberOfFamilyMembers()}).map((_, index) => (*/}
    {/*    <button key={index} onClick={() => changeCurrentFamilyMember(index+1)}>{family[index+1]['name']}</button>*/}
    {/*))}*/}
    <Button variant="secondary" onClick={addFamilyMember}>+</Button>
    <Button variant="danger" onClick={() => deleteFamilyMember(currentFamilyMember)}>-</Button>
  </div>;
};

export default FamilyMemberTabs;
