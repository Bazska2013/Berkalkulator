import { useTaxState } from "../../state/TaxState";

const FamilyMemberTabs = () => {
  const {family, addFamilyMember, changeCurrentFamilyMember, numberOfFamilyMembers, deleteFamilyMember, currentFamilyMember} = useTaxState();

  return <div>FamilyMemberTabs
    {Array.from({ length: numberOfFamilyMembers()}).map((_, index) => (
        <button key={index} onClick={() => changeCurrentFamilyMember(index+1)}>{family[index+1]['name']}</button>
    ))}
    <button onClick={addFamilyMember}>+</button>
    <button onClick={() => deleteFamilyMember(currentFamilyMember)}>-</button>
  </div>;
};

export default FamilyMemberTabs;
