import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      charcoal_grey: string;
      black: string;
      cool_grey: string;
      battleship_grey: string;
      pale_grey: string;
      pale_lilac: string;
      maincolor: string;
      black_10: string;
    };
    font: {
      text_style_3: string;
      text_style_2: string;
      text_style: string;
      text_style_small: string;
    };
    mixin: {
      one_line_ellipsis: string;
      two_line_ellipsis: string;
    };
  }
}
