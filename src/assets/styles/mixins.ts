export function customDropShadow(amount: string) {
  return `
  -webkit-box-shadow: ${amount};
  -moz-box-shadow: ${amount};
   box-shadow: ${amount};
  `;
}
