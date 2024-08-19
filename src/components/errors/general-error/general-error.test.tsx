import { render, screen } from '@testing-library/react';

import { GeneralError } from '.';

describe('GeneralError', () => {
    it('should render the default error message when no message is provided', () => {
        render(<GeneralError />);

        expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
    });

    it('should render the provided error message', () => {
        const customMessage = 'Custom error message';

        render(<GeneralError message={customMessage} />);

        expect(screen.getByText(customMessage)).toBeInTheDocument();
    });
});
