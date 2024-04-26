import {useTaxState} from "../../state/TaxState.jsx";
import {Card, Form} from "react-bootstrap";
import InputWithLabel from "./components/InputWithLabel.jsx";
import ChangeIncomeByPercentage from "./components/ChangeIncomeByPercentage.jsx";
import CheckBox from "./components/CheckBox.jsx";
import DateOfWedding from "./components/DateOfWedding.jsx";
import Dependents from "./components/Dependents.jsx";

const SalaryCalculator = () => {
      const {name, grossSalary, netSalary, frissHazasok, csaladi, changeName, changeGrossSalary, checkBoxes, validateMarriage, validMarriage, changeGrossSalaryByPercentage, changeNumOfDependents, numOfDependents, changeNumOfEligibleDependents, SZJA, szemelyi} = useTaxState();

  return (
      <>
          <InputWithLabel id="nameInput" label="Családtag neve" className="mb-3" inputType="text" originalValue={name} onChangeFunction={changeName} />
          <InputWithLabel id="grossInput" label="Bruttó bér" className="mb-3" inputType="number" placeholder={grossSalary.toString()} onChangeFunction={changeGrossSalary} originalValue={grossSalary.toString()} />
          <Form.Label htmlFor="grossRange" className="mb-3">Add meg a bruttó béredet!</Form.Label>
          <Form.Range id="grossRange" min="1" max="10000" onChange={(e) => changeGrossSalary(e.target.value * 100)} value={grossSalary / 100} />
          <ChangeIncomeByPercentage variant="secondary" onClickFunction={changeGrossSalaryByPercentage} />
          <h3>Kedvezmények</h3>
          <CheckBox checkBoxId="SZJA" checkBoxName="SZJA" checkBoxLabel="25 év alattiak SZJA mentessége" checkBoxFunction={checkBoxes} checkBoxChecked={SZJA === true} checkBoxValid={SZJA === true} />
          <CheckBox checkBoxId="frissHazasok" checkBoxName="frissHazasok" checkBoxLabel="Friss házasok kedvezménye" checkBoxFunction={checkBoxes} checkBoxChecked={frissHazasok === true} checkBoxValid={validMarriage === true && frissHazasok === true} />
          <DateOfWedding className="mb-3" frissHazasok={frissHazasok} validMarriage={validMarriage} onChangeFunction={validateMarriage} />
          <CheckBox checkBoxId="szemelyi" checkBoxName="szemelyi" checkBoxLabel="Személyi adókedvezmény" checkBoxFunction={checkBoxes} checkBoxChecked={szemelyi === true} checkBoxValid={szemelyi === true} />
          <CheckBox checkBoxId="csaladi" checkBoxName="csaladi" checkBoxLabel="Családi kedvezmény" checkBoxFunction={checkBoxes} checkBoxChecked={csaladi === true} checkBoxValid={csaladi === true} />
          <Dependents csaladi={csaladi} className="mb-3" numOfDependents={Number(numOfDependents)} changeNumOfDependents={changeNumOfDependents} changeNumOfEligibleDependents={changeNumOfEligibleDependents} />
          <Card>
              <Card.Body>
                  <Card.Title>
                      <h2>Számított nettó bér:</h2>
                  </Card.Title>
                      <h3>{netSalary} Ft</h3>
              </Card.Body>
          </Card>
      </>
  );
};

export default SalaryCalculator;
