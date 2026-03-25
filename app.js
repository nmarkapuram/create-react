import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element

// const jsxHeading = <h1 id="heading" className="header">Hello React from js</h1>;
// console.log(jsxHeading);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxHeading);

const title = () => {
    return ( <h3>Namaste from React Title</h3>);
}


// React Functional Component
const HeadingComponent = function() {
    return (
        <h1 id="heading" className="header">Hello React from js</h1>
    );
}

const HeadingComponent2 = () => (
    <div className="container">
        {HeadingComponent()}
        <HeadingComponent />
        <HeadingComponent> {title()}</HeadingComponent>
        <h1 id="heading" className="header">Hello React from js 2</h1>
        {HeadingComponent()}
    </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent2 />);
