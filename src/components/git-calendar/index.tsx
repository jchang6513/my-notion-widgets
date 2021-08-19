import React from 'react';
import styled from 'styled-components';

export const CalendarLayout = styled.div<{ darkMode: boolean }>`
  min-height: 100vh;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ darkMode }) => darkMode ? '#000' : '#fff'};
`;

export const CommitDay = styled.div<{ color: string, darkMode: boolean, count: number }>`
  border-radius: 3px;
  height: 20px;
  width: 20px;
  background-color: ${({ darkMode, color, count }) => {
    if (count) {
      return color;
    }
    return darkMode ? '#2e3642' : '#EBEDF0'; 
  }};
  margin: 1px;
`;
