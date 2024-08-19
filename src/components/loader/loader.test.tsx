import { render, screen } from '@testing-library/react';

import { Loader } from '.';

describe('Loader', () => {
    it('should not render the loader when isLoading is false', () => {
        render(<Loader isLoading={false} />);

        const loaderElement = screen.queryByTestId('loader-container');

        expect(loaderElement).toBeNull();
    });

    it('should render the loader when isLoading is true', () => {
        render(<Loader isLoading={true} />);

        const loaderElement = screen.getByTestId('loader-container');

        expect(loaderElement).toBeInTheDocument();
    });

    it('should render the loader with the default size', () => {
        render(<Loader isLoading={true} />);

        const loaderElement = screen.getByTestId('loader-container');

        expect(loaderElement).toHaveStyle({ width: '80px', height: '80px' });
    });

    it('should render the loader with the custom size', () => {
        const customSize = 100;

        render(<Loader isLoading={true} size={customSize} />);

        const loaderElement = screen.getByTestId('loader-container');

        expect(loaderElement).toHaveStyle({
            width: `${customSize}px`,
            height: `${customSize}px`,
        });
    });
});
