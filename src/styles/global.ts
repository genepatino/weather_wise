import { createGlobalStyle, styled } from "styled-components"

interface IFlexContainer {
  gap: string,
  width: string,
  padding: string,
  margin: string,
}

interface IGridContainer {
  gap: string,
  width: string,
  padding: string,
  margin: string,
  columns: string
}

interface IBaseTextContainer {
  fontSize: string,
  lineHeight: string,
  opacity: string,
  bold: string,
  padding: string,
  margin: string,
}

export const GlobalStyle = createGlobalStyle`
  body{
      margin: 0;
      padding: 0;
      box-sizing:border-box;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (min-width: 930px) {
        margin:63px auto
      }
  };

  html{
    font-size: 62.5%;
    font-family: sans-serif;
  }
`
export const FlexContainer = styled.div<IFlexContainer>`
  display: flex;

  &.column {
    flex-direction: column;
  }
  &.a-center {
    align-items: center;
  }
  &.j-between {
    justify-content: space-between;
  }
  &.j-end {
    justify-content: flex-end;
  }

  ${({ gap }) => gap && `gap: ${gap};`};
  ${({ width }) => width && `width: ${width};`};
  ${({ padding }) => padding && `padding: ${padding};`};
  ${({ margin }) => margin && `margin: ${margin};`};
`;

export const GridContainer = styled.div<IGridContainer>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr) `};
  grid-template-rows: auto;

  ${({ gap }) => gap && `gap: ${gap};`};
  ${({ width }) => width && `width: ${width};`};
  ${({ padding }) => padding && `padding: ${padding};`};
  ${({ margin }) => margin && `margin: ${margin};`};
`;

export const BaseText = styled.span<IBaseTextContainer>`
  font-size: 1rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.colors.neutral.mirage};

  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`};
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`};
  ${({ opacity }) => opacity && `opacity: ${opacity};`};
  ${({ bold }) => bold && `font-weight: bold;`};
  ${({ padding }) => padding && `padding: ${padding};`};
  ${({ margin }) => margin && `margin: ${margin};`};
`;