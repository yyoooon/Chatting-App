import { Theme } from '@emotion/react';

const theme: Theme = {
  color: {
    charcoal_grey: '#464052',
    black: '#000',
    cool_grey: '#a4a6b0',
    battleship_grey: '#74747e',
    pale_grey: '#f9f9fb',
    pale_lilac: '#e6e6eb',
    maincolor: '#5b36ac',
    black_10: 'rgba(0, 0, 0, 0.1)',
  },

  font: {
    text_style_3: `
      font-family: AppleSDGothicNeo;
      font-size: 1rem;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.2px;
      color: #464052;
    `,
    text_style_2: `
      font-family: AppleSDGothicNeo;
      font-size: 0.875rem;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.1px;
      color: #363a42;
  `,
    text_style: `
      font-family: AppleSDGothicNeo;
      font-size: 0.875rem;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.1px;
      text-align: right;
      color: #fff;
  `,
    text_style_small: `
    opacity: 40%;
    font-family: AppleSDGothicNeo;
    font-size: 0.75rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #363a42;
    `,
  },

  mixin: {
    one_line_ellipsis: `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
    `,
    two_line_ellipsis: `
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.3;
    `,
  },
};

export default theme;
