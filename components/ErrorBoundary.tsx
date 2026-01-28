"use client";

import React, { Component, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
                    <div className="text-center max-w-md">
                        <h1 className="text-6xl md:text-8xl font-black mb-4 text-loly-pink">Oops!</h1>
                        <p className="text-xl md:text-2xl mb-8 font-medium">
                            Something went horribly wrong. Even we can't fix this rug pull.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-loly-pink text-white px-8 py-3 rounded-full font-bold border-2 border-white shadow-neo-lg hover:shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
