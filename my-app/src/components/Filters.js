import React from "react";
import * as cloneDeep from 'lodash/cloneDeep';
import {Button, FormLabel, InputGroup, Collapse, Card, Accordion} from "react-bootstrap";
import {InputGroupText} from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {Link} from "react-router-dom";

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            year_after: null,
            year_before: null,
            year_lower: null,
            year_upper: null,
            rating_below: 5,
            rating_above: 5,
            rating_lower: 5,
            rating_upper: 5,
            isOpen: true,
            setIsOpen: false
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

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return (
            <Accordion defaultActiveKey="0" className='filters col'>
                <Card bg="dark" text="white" className="rounded">
                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" onClick={this.toggle}><h5 style={{margin: 0}}>Filters</h5></Accordion.Toggle>


                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <label htmlFor='title' className='labelh'>Title</label>
                            <div><FormControl type='text' name='title' id='title' className='' style={{marginBottom: "1rem"}}
                                                        value={this.state.title} onChange={this.handleChange} /></div>

                            <label htmlFor='year' className='labelh'>Year</label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox type='radio' name='year' id='radio-year_before' onChange={this.filterYear} />
                                </InputGroup.Prepend>
                                <FormControl placeholder="Before" type='number' name='year' id='year_before'
                                             value={this.state.year_before} onChange={this.handleChange} />
                            </InputGroup>

                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox type='radio' name='year' id='radio-year_after' onChange={this.filterYear} />
                                </InputGroup.Prepend>
                                <FormControl placeholder="After" type='number' name='year' id='year_after'
                                       value={this.state.year_after} onChange={this.handleChange} />
                            </InputGroup>

                            <InputGroup style={{marginBottom: "1rem"}}>
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox type='radio' name='year' id='radio-year_between' onChange={this.filterYear} />
                                </InputGroup.Prepend>
                                <FormControl placeholder="Between X" type='number' name='year' id='year_lower'
                                       value={this.state.year_lower} onChange={this.handleChange} />
                                <FormControl placeholder="and Y" type='number' name='year' id='year_upper'
                                       value={this.state.year_upper} onChange={this.handleChange} />
                            </InputGroup>


                            <label htmlFor='rating' className='labelh'>Rating</label>

                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox type='radio' name='rating' id='radio-rating_below' onChange={this.filterRating}/>
                                    <InputGroup.Text>Below</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl type='range' min='0' max='10' name='rating' id='rating_below'
                                             value={this.state.rating_below} onChange={this.handleChange} />
                            </InputGroup>

                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox type='radio' name='rating' id='radio-rating_above' onChange={this.filterRating} />
                                    <InputGroup.Text>Above</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl type='range' min='0' max='10' name='rating' id='rating_above'
                                       value={this.state.rating_above} onChange={this.handleChange} />
                            </InputGroup>

                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox type='radio' name='rating' id='radio-rating_between' onChange={this.filterRating}/>
                                    <InputGroup.Text>Between</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl type='range' min='0' max='10' name='rating' id='rating_lower'
                                       value={this.state.rating_lower} onChange={this.handleChange} />
                                       <InputGroup.Text>&</InputGroup.Text>
                                <FormControl type='range' min='0' max='10' name='rating' id='rating_upper'
                                       value={this.state.rating_upper} onChange={this.handleChange} />
                            </InputGroup>

                            <InputGroup style={{marginTop: "1.5rem"}}>
                                <Link to='/movies'><Button variant="secondary">Reset</Button></Link>
                            </InputGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }
}
export default Filters