import { useTaxState } from "../../state/TaxState";

const FamilyMemberTabs = () => {
  const {family, addFamilyMember, changeCurrentFamilyMember, numberOfFamilyMembers, grossSalary, netSalary, frissHazasok, csaladi, changeName, changeGrossSalary, checkBoxes, validateMarriage, validMarriage, changeGrossSalaryByPercentage, changeNumOfDependents, numOfDependents, changeNumOfEligibleDependents} = useTaxState();

  return <div>FamilyMemberTabs
    {Array.from({ length: numberOfFamilyMembers()}).map((_, index) => (
        <button key={index} onClick={changeCurrentFamilyMember(index+1)}>{family[index+1]['name']}</button>
    ))}
    <button onClick={addFamilyMember}>+</button>
  </div>;
};

export default FamilyMemberTabs;
