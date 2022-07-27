export const CalculatorOperationButton = (op, rowNode) => {
  rowNode.innerHTML += `
         <td id =table__cell-${op}>
            <button class = button--operation
             value = ${op}>${op}</button>
        </td>`;
};

// module.exports = {
//   CalculatorOperationButton,
// };
