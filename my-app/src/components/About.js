import React from "react";

class About extends React.Component {

    // sort array of objects
    // https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
    //
    // object destructuring
    // https://itnext.io/using-es6-to-destructure-nested-objects-in-javascript-avoid-undefined-errors-that-break-your-code-612ae67913e9
    //
    // /* fixed cut off bottom border */
    // /*https://github.com/twbs/bootstrap/issues/27124#issuecomment-509009622*/
    render() {
        return (
            <div>
                <p>Resources used</p>
                <p><a href="https://github.com/twbs/bootstrap/issues/27124#issuecomment-509009622">fixing cut off accordion border</a></p>
                <p><a href="https://itnext.io/using-es6-to-destructure-nested-objects-in-javascript-avoid-undefined-errors-that-break-your-code-612ae67913e9">object destructuring</a></p>
                <p><a href="https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/">sorting array of objects by property</a></p>
            </div>
        );
    }
}
export default About