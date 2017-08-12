import React, { Component } from 'react';
import Router from 'react-router';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';
import {Panel, Input, Button} from 'react-bootstrap';
import { History } from 'history';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import $ from "jQuery";
import Word from "./Word"

class RandomWordGrid extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="overview-page" key="overview"> 
                <Grid>
                    <Row className="show-grid">
                        <Word word = "embryonic" meaning = "in a rudimentary stage with potential for development"/>
                        <Word word = "archaic" meaning = "very old or old-fashioned"/>
                        <Word word = "oblique" meaning = "not expressed or done in a direct way"/>
                    </Row>
                    <Row className="show-grid">
                        <Word word = "iconoclastic" meaning = "criticizing or attacking cherished beliefs or institutions"/>
                        <Word word = "frugal" meaning = "sparing or economical as regards money or food"/>
                        <Word word = "parsimonious" meaning = "very unwilling to spend money or use resources"/>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default RandomWordGrid;