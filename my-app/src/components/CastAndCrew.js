import React from "react";
import * as cloneDeep from 'lodash/cloneDeep';
import Card from "react-bootstrap/Card";
import {Tab} from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import CardColumns from "react-bootstrap/CardColumns";

class CastAndCrew extends React.Component {
    constructor(props) {
        super(props);
    }

    // cast properties
    // cast_id
    // character
    // credit_id
    // gender
    // id
    // order
    // {c.cast_id}{c.character}{c.credit_id}{c.gender}{c.id}{c.order}

    populateCast = () => {
        if (this.props.production != null) {
            const {cast} = this.props.production;

            cast.sort((a,b) => a.order-b.order);

            return (
                    <CardColumns>
                        {cast.map((c, i) =>
                            <Card bg='dark' text='white' httclassName="p-2" key={i} >
                                <img src="" />
                                <Card.Body>
                                    <Card.Title>{c.name}</Card.Title>
                                    <Card.Text>{c.character}</Card.Text>
                                </Card.Body>

                            </Card>)}
                    </CardColumns>
            );
        }
    };

    // crew properties
    // credit_id
    // department
    // gender
    // id
    // job
    // {c.credit_id}{c.department}{c.gender}{c.id}{c.job}{c.name}

    populateCrew = () => {
        if (this.props.production != null) {
            const {crew} = this.props.production;

            crew.sort((a,b) => {
                // https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
                const dep1 = a.department.toLowerCase();
                const dep2 = b.department.toLowerCase();

                let comparison = 0;
                if (dep1 > dep2) {
                    comparison = 1;
                } else if (dep1 < dep2) {
                    comparison = -1;
                }
                return comparison;
            });

            return crew.map((c, i) => {
                return(
                    <div key={i}>
                        <h4>{c.department}</h4>
                        <p>{c.job}: {c.name} / {c.department}</p>
                    </div>
                );

            })
        }
    };

    render() {
        //const production = {...this.props.movie.production};
        //const companies = {...production.companies};
        //const countries = {...production.countries};
        return(
                        <Tabs defaultActiveKey="cast">
                            <Tab eventKey="cast" title="Cast">
                                {this.populateCast()}
                            </Tab>
                            <Tab eventKey="crew" title="Crew">
                                {this.populateCrew()}
                            </Tab>
                        </Tabs>
        );

    }

}
export default CastAndCrew