import React, { Component, ErrorInfo,} from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from '../../models/models';
class ErrorBoundary extends Component <ErrorBoundaryProps ,ErrorBoundaryState >{
    state = {hasError: false, errorMessage: ''};

    static getDerivedStateFromError(error: Error){
        return { hasError: true, errorMessage: error.message };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error caught by error boundary:', error, errorInfo);
    }

    render() {
        const { fallback } = this.props;
        const { errorMessage, hasError } = this.state;

        if (hasError) {
            return React.cloneElement(fallback as React.ReactElement, { errorMessage });
        }
        return this.props.children; 
    }
}

export default ErrorBoundary;
