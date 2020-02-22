import React from "react";

class Filters extends React.Component {
    constructor(props) {
        super(props);
    }

    // TODO:
    // Animations for minimizing and maximizing filter pane

    render() {
        return (
            <div className='filters'>
                <h3>Filters</h3>
                <div>
                    <label htmlFor='title' className='labelh'>Title</label><br/>
                    <input type='text' name='title'></input>
                </div>
                <div>
                    <label htmlFor='' className='labelh'>Year</label><br/>
                    <input type='radio' ></input>
                    <label>Before</label>
                    <input type='text'></input><br/>

                    <input type='radio'></input>
                    <label>After</label>
                    <input type='text'></input><br/>

                    <input type='radio'></input>
                    <label>Between</label>
                    <input type='text'></input>
                    <input type='text'></input><br/>
                </div>
                <div>
                    <label htmlFor='' className='labelh'>Rating</label><br/>
                    <input type='radio' name=''></input>
                    <label>Below</label>
                    <input type='range' min='0' max='10' value='5' name=''></input><br/>

                    <input type='radio' name=''></input>
                    <label>Above</label>
                    <input type='range' min='0' max='10' value='5' name=''></input><br/>

                    <input type='radio'></input>
                    <label>Between</label>
                    <input type='range' min='0' max='10' value='5' name=''></input>
                    <input type='range' min='0' max='10' value='5' name=''></input>
                </div>
            </div>
        );
    }
}
export default Filters