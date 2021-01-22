import { render, screen } from '@testing-library/react';
import NeppoKnowledge from './neppo-knowledge';

test('renders learn react link', () => {
  render(<NeppoKnowledge />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
