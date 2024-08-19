import React from 'react';

type ErrorBoundaryProps = {
    children: React.ReactNode;
    fallback?: React.ReactNode;
};

type ErrorBoundaryState = {
    hasError: boolean;
};

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = { hasError: false };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        // eslint-disable-next-line no-console
        console.error('Error caught by Error Boundary:', error, errorInfo);
    }

    render(): React.ReactNode {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return <p>Something went wrong.</p>;
        }

        return this.props.children;
    }
}
