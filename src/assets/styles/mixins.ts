export const customDropShadow = (amount: string): string => {
  return `
    -webkit-box-shadow: ${amount};
    -moz-box-shadow: ${amount};
    box-shadow: ${amount};
  `;
};
