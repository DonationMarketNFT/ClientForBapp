import { css } from "styled-components";

// 다크모드에서 변경할 부분 + 자주 쓰는 css 추가

// 임시 작성
const font = {
  small: css`
    font-size: 1.2rem;
    font-weight: 400;
  `,
  medium: css`
    font-size: 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 2rem;
    font-weight: 700;
  `,
  xlarge: css`
    font-size: 3rem;
    font-weight: 700;
  `,
};

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const theme = {
  color: {
    main_color: "#333",
    sub_color1: "#fcc",
    bg_color: "#fff",
  },
  font,
  flexCenter,
};
