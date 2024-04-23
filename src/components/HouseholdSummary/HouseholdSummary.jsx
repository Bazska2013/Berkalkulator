import {useTaxState} from "../../state/TaxState.jsx";
import {useEffect, useState} from "react";
import {Table} from "react-bootstrap";

const HouseholdSummary = () => {

    const {family, addFamilyMember, changeCurrentFamilyMember, numberOfFamilyMembers, deleteFamilyMember, currentFamilyMember} = useTaxState();

    const [totalNetSalary, setTotalNetSalary] = useState(0);

    useEffect(() => {
        const calculateTotalNetSalary = () => {
            let totalNetSalary = 0;
            for (let id in family) {
                totalNetSalary += family[id]['netSalary'];
            }
            setTotalNetSalary(totalNetSalary);
        };

        calculateTotalNetSalary();
    }, [family]);

  return (
      <>
          <h2>Háztartás összesített jövedelme</h2>
          <Table striped bordered hover>
              <thead>
              <tr>
                  <th>Családtag</th>
                  <th>Nettó bér</th>
              </tr>
              </thead>
              <tbody>
                  {Object.keys(family).map((id) => (
                      <tr key={id} onClick={() => changeCurrentFamilyMember(id)}>
                          <td>{family[id]['name']}</td>
                          <td>{isNaN(family[id]['netSalary']) ? '0' : family[id]['netSalary']} Ft</td>
                      </tr>
                  ))}
              </tbody>
              <tfoot>
                  <tr>
                      <th>Összesen:</th>
                      <th>{isNaN(totalNetSalary) ? '0' : totalNetSalary} Ft</th>
                  </tr>
              </tfoot>
          </Table>
      </>
  );
};

export default HouseholdSummary;
