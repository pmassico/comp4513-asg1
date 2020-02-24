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
            <div className='filters container'>
                <h3>Filters</h3>
                <div className='row'>
                    <label htmlFor='title' className='labelh'>Title</label>
                </div>
                <div className='row'>
                    <input type='text' name='title' id='title'
                           value={this.state.title} onChange={this.handleChange} />
                </div>
                <div className='row'>
                    <label htmlFor='year' className='labelh'>Year</label>
                </div>
                <div className='row'>
                    <div className='col'>
                        <input type='radio' name='year' id='radio-year_before' onChange={this.filterYear} />
                        <label>Before</label>
                    </div>
                    <div className='col'>
                        <input type='number' name='year' id='year_before'
                               value={this.state.year_before} onChange={this.handleChange} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <input type='radio' name='year' id='radio-year_after' onChange={this.filterYear} />
                        <label>After</label>
                    </div>
                    <div className='col'>
                        <input type='number' name='year' id='year_after'
                               value={this.state.year_after} onChange={this.handleChange} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <input type='radio' name='year' id='radio-year_between' onChange={this.filterYear} />
                        <label>Between</label>
                    </div>
                    <div className='col'>
                        <input type='number' name='year' id='year_lower'
                               value={this.state.year_lower} onChange={this.handleChange} />
                        <input type='number' name='year' id='year_upper'
                               value={this.state.year_upper} onChange={this.handleChange} />
                    </div>
                </div>
                <div className='row'>
                    <label htmlFor='rating' className='labelh'>Rating</label>
                </div>
                <div className='row'>
                    <div className='col'>
                        <input type='radio' name='rating' id='radio-rating_below'
                               onChange={this.filterRating}/>
                        <label>Below</label>
                    </div>
                    <div className='col'>
                        <input type='range' min='0' max='10' name='rating' id='rating_below'
                               value={this.state.rating_below} onChange={this.handleChange} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <input type='radio' name='rating' id='radio-rating_above'
                               onChange={this.filterRating} />
                        <label>Above</label>
                    </div>
                    <div className='col'>
                        <input type='range' min='0' max='10' name='rating' id='rating_above'
                               value={this.state.rating_above} onChange={this.handleChange} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <input type='radio' name='rating' id='radio-rating_between'
                               onChange={this.filterRating}/>
                        <label>Between</label>
                    </div>
                    <div className='col'>
                        <input type='range' min='0' max='10' name='rating' id='rating_lower'
                               value={this.state.rating_lower} onChange={this.handleChange} />
                        <input type='range' min='0' max='10' name='rating' id='rating_upper'
                               value={this.state.rating_upper} onChange={this.handleChange} />
                    </div>



                </div>
            </div>
        );
    }
}
export default Filters