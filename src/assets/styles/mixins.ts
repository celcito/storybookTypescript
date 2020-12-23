export const customDropShadow = (amount: string): string => {
  return `
    -webkit-box-shadow: ${amount};
    -moz-box-shadow: ${amount};
    box-shadow: ${amount};
  `;
};

export const customBorderRadius = (amount: string): string => {
  return `
    -webkit-border-radius: ${amount};
    -moz-border-radius: ${amount};
    box-border-radius: ${amount};
  `;
};
