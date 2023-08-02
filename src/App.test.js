import React from 'react';
import { render, screen } from '@testing-library/react';
import List from './List';

describe('List component', () => {
  const testData = [
    { name: 'Item 1', target: 100, actual: 90, points: 80 },
    { name: 'Item 2', target: 50, actual: 60, points: 70 },
  ];

  test('renders table with correct data', () => {
    render(<List data={testData} />);

    // Checks if table headers are rendered
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Target Score')).toBeInTheDocument();
    expect(screen.getByText('Actual Score')).toBeInTheDocument();
    expect(screen.getByText('Total Points')).toBeInTheDocument();

    // Checks if table rows are rendered with correct data
    testData.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.target)).toBeInTheDocument();
      expect(screen.getByText(item.actual)).toBeInTheDocument();
      expect(screen.getByText(item.points)).toBeInTheDocument();
    });
  });

  test('applies "success" class to actual score cell if actual >= target', () => {
    render(<List data={testData} />);

    testData.forEach((item) => {
      const actualScoreCell = screen.getByText(item.actual);
      expect(actualScoreCell).toHaveClass(
        item.actual >= item.target ? 'success' : 'fail'
      );
    });
  });
});
