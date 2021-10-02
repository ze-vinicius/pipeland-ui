import { css } from 'styled-components/native';

const BASE = css`
  color: ${(props) => props.theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
`;

export const variants = {
  header: css`
    ${BASE};

    font-size: ${({ theme }) => theme.fontSizes[4]}px;
    font-weight: bold;
  `,

  title: css`
    ${BASE}

    font-size: ${({ theme }) => theme.fontSizes[3]}px;
    font-weight: bold;
  `,

  subtitle: css`
    ${BASE}

    color: ${(props) => props.theme.colors.grays[5]};
  `,

  body1: css`
    ${BASE}
  `,

  body2: css`
    ${BASE}

    font-size: ${({ theme }) => theme.fontSizes[1]}px;
  `,

  caption: css`
    ${BASE}

    font-size: ${({ theme }) => theme.fontSizes[0]}px;
    color: ${({ theme }) => theme.colors.gray};
  `,
};

export type TextVariants = keyof typeof variants;
