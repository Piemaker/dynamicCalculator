export const CalculatorNumberButton = (num, rowNode) => {
  rowNode.innerHTML += `
                 <td id =table__cell-${num}><button  class="button--number" value = ${num}>${num}</button></td>
`;
};

// module.exports = {
//   CalculatorNumberButton,
// };
