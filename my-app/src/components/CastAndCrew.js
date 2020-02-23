import React from "react";
import * as cloneDeep from 'lodash/cloneDeep';

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

    populateCast = () => {
        if (this.props.production != null) {
            const {cast} = this.props.production;
            return cast.map((c, i) =>
                <div key={i}>
                    <p>{c.cast_id}{c.character}{c.credit_id}{c.gender}{c.id}{c.order}</p>
                </div>)
        }
    };

    // crew properties
    // credit_id
    // department
    // gender
    // id
    // job

    populateCrew = () => {
        if (this.props.production != null) {
            const {crew} = this.props.production;
            return crew.map((c, i) => {
                return(
                    <div key={i}>
                        <p>{c.credit_id}{c.department}{c.gender}{c.id}{c.job}{c.name}</p>
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
            <div>
                <h3>Cast</h3>
                {this.populateCast()}
                <h3>Crew</h3>
                {this.populateCrew()}
            </div>
        );

    }

}
export default CastAndCrew