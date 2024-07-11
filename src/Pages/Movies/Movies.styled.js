import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieLink = styled(Link)`
  text-decoration: none;
  padding: 2px 8px;
`;

export const MovieList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;
