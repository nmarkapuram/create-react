import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element

// const jsxHeading = <h1 id="heading" className="header">Hello React from js</h1>;
// console.log(jsxHeading);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxHeading);


// React Functional Component
const HeadingComponent = function() {
    return (
        <h1 id="heading" className="header">Hello React from js</h1>
    );
}

const HeadingComponent2 = () => (
    <div className="container">
        <h1 id="heading" className="header">Hello React from js 2</h1>
        <HeadingComponent />
    </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent2 />);
