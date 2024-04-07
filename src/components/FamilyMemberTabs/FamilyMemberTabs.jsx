import { useTaxState } from "../../state/TaxState";

const FamilyMemberTabs = () => {
  const {name, grossSalary, netSalary, frissHazasok, csaladi, changeName, changeGrossSalary, checkBoxes, validateMarriage, validMarriage, changeGrossSalaryByPercentage, changeNumOfDependents, numOfDependents, changeNumOfEligibleDependents} = useTaxState();

  return <div>FamilyMemberTabs
    <button>{name ? name : "Name"}</button>
    <button>+</button>
  </div>;
};

export default FamilyMemberTabs;
