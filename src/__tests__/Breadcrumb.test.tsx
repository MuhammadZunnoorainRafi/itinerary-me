import Breadcrumb from '@itineract/components/Breadcrumb';
import { cleanup, render } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';

describe('Breadcrumb', () => {
  afterEach(cleanup);

  it('displays without issues', () => {
    render(<Breadcrumb />);
  });

  it('displays two list items', () => {
    const { getAllByRole } = render(<Breadcrumb />);

    const listItems = getAllByRole('listitem');
    expect(listItems.length).toBe(2);
  });
});
