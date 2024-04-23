import {useEffect, useState} from "react";
import {useTaxState} from "../../state/TaxState.jsx";
import {Button, ButtonGroup, Card, FloatingLabel, Form, InputGroup} from "react-bootstrap";

const SalaryCalculator = () => {
      const {name, grossSalary, netSalary, frissHazasok, csaladi, changeName, changeGrossSalary, checkBoxes, validateMarriage, validMarriage, changeGrossSalaryByPercentage, changeNumOfDependents, numOfDependents, changeNumOfEligibleDependents, SZJA, szemelyi} = useTaxState();

  return (
      <>
          <FloatingLabel
          controlId="nameInput"
          label="Családtag neve"
          className="mb-3"
          >
                  <Form.Control type="text" onChange={(e) => changeName(e.target.value)} value={name}/>
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
          <h3>Kedvezmények</h3>
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
          isValid={validMarriage === true && frissHazasok === true}
          />
          {frissHazasok ? (
              <>
                  <Form.Control
                  type="date"
                  name="dateOfWedding"
                  onChange={(e) => validateMarriage(e.target.value)}
                  />
                  {validMarriage ? <p>Jogosult</p> : <p>Nem jogosult</p>}
              </>
          ) : null}
              <Form.Check
                  type="switch"
                  id="szemelyi"
                  name="szemelyi"
                  label="Személyi adókedvezmény"
                  onChange={checkBoxes}
                  checked={szemelyi === true}
                  isValid={szemelyi === true}
              />
              <Form.Check
                  type="switch"
                  id="csaladi"
                  name="csaladi"
                  label="Családi kedvezmény"
                  onChange={checkBoxes}
                  checked={csaladi === true}
                  isValid={csaladi === true}
              />
          {csaladi ? (
              <>
                      <InputGroup className="mb-3">
                              <Form.Control placeholder="1" type="number" min="1" onChange={(e) => changeNumOfDependents(e.target.value)} />
                              <InputGroup.Text id="eligibleText">
                                      Eltartott, ebből kedvezményezett
                              </InputGroup.Text>
                              <Form.Control placeholder="0" type="number" min="0" max={numOfDependents} onChange={(e) => changeNumOfEligibleDependents(e.target.value)}/>
                      </InputGroup>
              </>
          ) : null}
              <Card>
                      <Card.Body>
                              <Card.Title>
                                      <h2>Számított nettó bér:</h2>
                              </Card.Title>
                              <Card.Text>
                                      <h3>{netSalary} Ft</h3>
                              </Card.Text>
                      </Card.Body>
              </Card>
      </>
  );
};

export default SalaryCalculator;
