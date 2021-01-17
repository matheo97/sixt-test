export type Theme = {
  backgrounds: {
    default: string;
    primary: string;
    secondary: string;
    terciary: string;
  };
  font: {
    colors: {
      primary: string;
    };
  };
};

export const theme: Theme = {
  backgrounds: {
    default: '#fafafa',
    primary: '#ffffff',
    secondary: '#ff5f00',
    terciary: '#191919',
  },
  font: {
    colors: {
      primary: '#191919',
    },
  },
};
