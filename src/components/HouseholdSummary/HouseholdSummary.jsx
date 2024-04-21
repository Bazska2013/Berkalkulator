import {useTaxState} from "../../state/TaxState.jsx";
import {useEffect, useState} from "react";

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
          ---------------------------------------------------
          <h2>HouseholdSummary</h2>
          <h2>Háztartás összesített jövedelme</h2>
          <table>
              <tbody>
              <tr>
                  <th>Családtag</th>
                  <th>Nettó bér</th>
              </tr>
              {Object.keys(family).map((id) => (
                  <tr key={id}>
                      <td>{family[id]['name']}</td>
                      <td>{isNaN(family[id]['netSalary']) ? '0' : family[id]['netSalary']} Ft</td>
                  </tr>
              ))}
              <tr>
                  <td>Összesen:</td>
                  <td>{isNaN(totalNetSalary) ? '0' : totalNetSalary} Ft</td>
              </tr>
              </tbody>
          </table>
          ---------------------------------------------------
      </>
  );
};

export default HouseholdSummary;
