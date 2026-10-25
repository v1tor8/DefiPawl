// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DefiPawl title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DefiPawl/i);
    expect(titleElement).toBeInTheDocument();
});
