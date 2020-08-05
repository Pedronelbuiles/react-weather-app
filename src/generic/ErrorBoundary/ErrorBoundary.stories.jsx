import React from 'react';
import ErroBoundary from './ErrorBoundary'

export default {
    title: "ErrorBundary",
    component: ErroBoundary
}

const ComponentWithoutError = () => <h1>Sin error</h1>

const prop = undefined
const ComponentWithError = () => <h1>{prop.hola}</h1>

export const ErrorBoundaryWithError = () => (
    <ErroBoundary>
        <ComponentWithError />
    </ErroBoundary>
)

export const ErrorBoundaryWithoutError = () => (
    <ErroBoundary>
        <ComponentWithoutError />
    </ErroBoundary>
)