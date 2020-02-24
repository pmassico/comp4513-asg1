import React from "react";
import * as cloneDeep from 'lodash/cloneDeep';

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            year_after: 1950,
            year_before: 1950,
            year_lower: 1900,
            year_upper: 2000,
            rating_below: 5,
            rating_above: 5,
            rating_lower: 5,
            rating_upper: 5
        };
    }

    // Animations for minimizing and maximizing filter pane
    handleChange = (e) => {
        this.setState({[e.currentTarget.id]: e.currentTarget.value});
        // if it's title calling this method then also call this state change function
        if (e.currentTarget.name === 'title') {
            this.props.filterTitle(e)
        }
    };

    filterYear = (e) => {
        // calls prop, sends current state value of called component
        // grab value from checked radio button's corresponding number input
        const id = e.currentTarget.id.split("-");
        const comparison = e.currentTarget.id.split("_");

        if (comparison[1] === "between") {
            const name = e.currentTarget.name;
            const value1 = document.querySelector("#"+name+"_lower").value;
            const value2 = document.querySelector("#"+name+"_upper").value;

            this.props.filterYear(comparison[1], value1, value2);
        } else {
            console.log(comparison[1] + " " + document.querySelector("#" + id[1]).value);
            this.props.filterYear(comparison[1], document.querySelector("#" + id[1]).value);
        }
    };

    filterRating = (e) => {
        // calls prop, sends current state value of called component
        // grab value from checked radio button's corresponding number input
        const id = e.currentTarget.id.split("-");
        const comparison = e.currentTarget.id.split("_");

        if (comparison[1] === "between") {
            const name = e.currentTarget.name;
            const value1 = document.querySelector("#"+name+"_lower").value;
            const value2 = document.querySelector("#"+name+"_upper").value;

            this.props.filterRating(comparison[1], value1, value2);
        } else {
            console.log(comparison[1] + " " + document.querySelector("#" + id[1]).value);
            this.props.filterRating(comparison[1], document.querySelector("#" + id[1]).value);
        }
    };

    render() {
        return (
            <div className='filters'>
                <h3>Filters</h3>
                <div>
                    <label htmlFor='title' className='labelh'>Title</label><br/>
                    <input type='text' name='title' id='title'
                           value={this.state.title} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor='year' className='labelh'>Year</label><br/>
                    <input type='radio' name='year' id='radio-year_before' onChange={this.filterYear} />
                    <label>Before</label>
                    <input type='number' name='year' id='year_before'
                           value={this.state.year_before} onChange={this.handleChange} /><br/>

                    <input type='radio' name='year' id='radio-year_after' onChange={this.filterYear} />
                    <label>After</label>
                    <input type='number' name='year' id='year_after'
                           value={this.state.year_after} onChange={this.handleChange} /><br/>

                    <input type='radio' name='year' id='radio-year_between' onChange={this.filterYear} />
                    <label>Between</label>
                    <input type='number' name='year' id='year_lower'
                           value={this.state.year_lower} onChange={this.handleChange} />
                    <input type='number' name='year' id='year_upper'
                           value={this.state.year_upper} onChange={this.handleChange} /><br/>
                </div>
                <div>
                    <label htmlFor='rating' className='labelh'>Rating</label><br/>
                    <input type='radio' name='rating' id='radio-rating_below'
                           onChange={this.filterRating}/>
                    <label>Below</label>
                    <input type='range' min='0' max='10' name='rating' id='rating_below'
                           value={this.state.rating_below} onChange={this.handleChange} /><br/>

                    <input type='radio' name='rating' id='radio-rating_above'
                           onChange={this.filterRating} />
                    <label>Above</label>
                    <input type='range' min='0' max='10' name='rating' id='rating_above'
                           value={this.state.rating_above} onChange={this.handleChange} /><br/>

                    <input type='radio' name='rating' id='radio-rating_between'
                           onChange={this.filterRating}/>
                    <label>Between</label>
                    <input type='range' min='0' max='10' name='rating' id='rating_lower'
                           value={this.state.rating_lower} onChange={this.handleChange} />
                    <input type='range' min='0' max='10' name='rating' id='rating_upper'
                           value={this.state.rating_upper} onChange={this.handleChange} />
                </div>
            </div>
        );
    }
}
export default Filters