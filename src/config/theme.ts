export type Theme = {
  backgrounds: {
    default: string;
    primary: string;
    secondary: string;
    terciary: string;
    modal: string;
  };
  font: {
    colors: {
      primary: string;
    };
  };
  icon: {
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
    modal:  'rgba(5, 5, 5, 0.731)',
  },
  font: {
    colors: {
      primary: '#191919',
    },
  },
  icon: {
    colors: {
      primary: '#778899',
    },
  },
};
