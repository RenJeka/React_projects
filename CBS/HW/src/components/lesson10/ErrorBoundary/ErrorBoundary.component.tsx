import React, {Component} from 'react';

interface Props {
    children: JSX.Element | JSX.Element[]
}

interface State {
    hasError: boolean
}

class ErrorBoundaryComponent extends Component<Props, State> {

    state:State = {
        hasError: false,
    }

    static getDerivedStateFromError(error: Error, errorInfo: React.ErrorInfo) {
        console.log('getDerivedStateFromError: ', {error, errorInfo});
        return {hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log('componentDidCatch: ', {error, errorInfo});
    }

    render() {

        if (this.state.hasError) {
            return <h1 style={{color: 'brown'}}>Something went wrong</h1>
        }
        return (
            this.props.children
        );
    }
}

export default ErrorBoundaryComponent;
