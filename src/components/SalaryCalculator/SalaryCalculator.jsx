import {useEffect, useState} from "react";
import {useTaxState} from "../../state/TaxState.jsx";
import {Button, ButtonGroup, FloatingLabel, Form} from "react-bootstrap";

const SalaryCalculator = () => {
      const {name, grossSalary, netSalary, frissHazasok, csaladi, changeName, changeGrossSalary, checkBoxes, validateMarriage, validMarriage, changeGrossSalaryByPercentage, changeNumOfDependents, numOfDependents, changeNumOfEligibleDependents, SZJA, szemelyi} = useTaxState();

  return (
      <>
          ------------------------------------------------------
          Salary Calculator
          <FloatingLabel
          controlId="nameInput"
          label="Családtag neve"
          className="mb-3"
          >
                  <Form.Control type="text" placeholder={name} onChange={(e) => changeName(e.target.value)} />
          </FloatingLabel>
          <FloatingLabel
          controlId="grossInput"
          label="Bruttó bér"
          className="mb-3">
                  <Form.Control type="number" placeholder={grossSalary} onChange={(e) => changeGrossSalary(e.target.value)} value={grossSalary} />
          </FloatingLabel>
          <Form.Label controlId="grossRange" className="mb-3">Add meg a bruttó béredet!</Form.Label>
          <Form.Range id="grossRange" min="1" max="10000" onChange={(e) => changeGrossSalary(e.target.value * 100)} value={grossSalary / 100} />
          <ButtonGroup aria-label="Basic example">
                  <Button variant="secondary" onClick={changeGrossSalaryByPercentage(95)}>-5%</Button>
                  <Button variant="secondary" onClick={changeGrossSalaryByPercentage(99)}>-1%</Button>
                  <Button variant="secondary" onClick={changeGrossSalaryByPercentage(101)}>+1%</Button>
                  <Button variant="secondary" onClick={changeGrossSalaryByPercentage(105)}>+5%</Button>
          </ButtonGroup>
          <h2>Kedvezmények</h2>
          <Form.Check
          type="switch"
          id="SZJA"
          name="SZJA"
          label="25 év alattiak SZJA mentessége"
          onChange={checkBoxes}
          checked={SZJA === true}
          isValid={SZJA === true} />
          <Form.Check
          type="switch"
          id="frissHazasok"
          name="frissHazasok"
          label="Friss házasok kedvezménye"
          onChange={checkBoxes}
          checked={frissHazasok === true}
          isValid={validMarriage === true}
          />
          {frissHazasok ? (
              <>
                  <input type="date" name="dateOfWedding" onChange={(e) => validateMarriage(e.target.value)}/>
                  {validMarriage ? <p>Jogosult</p> : <p>Nem jogosult</p>}
              </>
          ) : null}
          <label htmlFor="frissHazasok">Friss házasok kedvezménye</label>
          <input type="checkbox" name="szemelyi" onChange={checkBoxes} checked={szemelyi === true}/>
          <label htmlFor="szemelyi">Személyi adókedvezmény</label>
          <input type="checkbox" name="csaladi" onChange={checkBoxes} checked={csaladi === true}/>
          {csaladi ? (
              <>
                  <input type="number" min="1" onChange={(e) => changeNumOfDependents(e.target.value)}/>
                  Eltartott, ebből kedvezményezett
                  <input type="number" min="0" max={numOfDependents}
                         onChange={(e) => changeNumOfEligibleDependents(e.target.value)}/>
              </>
          ) : null}
          <label htmlFor="csaladi">Családi kedvezmény</label>
          <h1>Számított nettó bér:</h1>
          <p>{netSalary} Ft</p>
          ------------------------------------------------------
      </>
  );
};

export default SalaryCalculator;
