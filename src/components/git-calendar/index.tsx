import styled from 'styled-components';

export const CalendarLayout = styled.div<{ darkMode: boolean }>`
  min-height: 100vh;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ darkMode }) => (darkMode ? '#000' : '#fff')};
`;

const commitGridSize = (gridSize = 30) => (
  gridSize < 30 ? gridSize : 30
);

export const CommitDay = styled.div<{
  color: string,
  darkMode: boolean,
  count: number,
  gridSize?: number,
}>`
  border-radius: ${({ gridSize }) => (`${commitGridSize(gridSize) / 10}px`)};
  height: ${({ gridSize }) => (`${commitGridSize(gridSize)}px`)};
  width: ${({ gridSize }) => (`${commitGridSize(gridSize)}px`)};
  background-color: ${({ darkMode, color, count }) => {
    if (count) {
      return color;
    }
    return darkMode ? '#2e3642' : '#EBEDF0';
  }};
  margin: 1px;
`;
