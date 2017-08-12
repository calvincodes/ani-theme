import React, { Component } from 'react';
import Router from 'react-router';
import { Link } from "react-router";
import { Table } from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';
import {Panel, Input, Button} from 'react-bootstrap';
import { History } from 'history';
import { If } from 'react-if';
import PieChart from 'react-simple-pie-chart';
import { Chart, Pies, Title, Transform } from 'rumble-charts';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import $ from "jQuery";

class Word extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            knowCount: 0,
            dontKnowCount: 0,
            showWord: true
        };
    }

    toggleWordMeaningState() {
        this.setState({showWord: !this.state.showWord});
    }

    renderWord() {
        var series = [{
            // Adding two redundant variables as category10 of d3 has GREEN and RED at 3rd and 4th place
            // http://bl.ocks.org/aaizemberg/78bd3dade9593896a59d
            data: [{y: this.state.dontKnowCount, color: 'red'}, {y: this.state.knowCount, color: 'green'}]
        }]
        return (
            <Col xs={6} md={4}>
                <Jumbotron>
                    <Table>
                        <tbody>
                        <tr>
                            <td>
                                <h2>{this.props.word}</h2>
                            </td>
                            <td>
                                <If condition = {this.state.knowCount > 0 || this.state.dontKnowCount > 0}>
                                    <Chart width={170} height={50} series={series}>
                                        <Transform method={['transpose', 'stack']}>
                                            <Pies 
                                                colors = 'category10'
                                                combined={true} 
                                                pieAttributes={{
                                                    onMouseMove: (e) => e.target.style.opacity = 1.5,
                                                    onMouseLeave: (e) => e.target.style.opacity = 0.85
                                                }}
                                                pieStyle={{opacity: 0.85}}
                                                />
                                        </Transform>
                                    </Chart>
                                </If>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                    <p> 
                        <a className="btn btn-primary btn-outline btn-rounded" 
                            onClick={this.toggleWordMeaningState.bind(this)}>meaning</a>
                    </p>
                </Jumbotron>
            </Col>
        );
    }

    handleIKnew() {
        this.setState({knowCount: this.state.knowCount + 1});
        this.toggleWordMeaningState();
    }

    handleDontKnow() {
        this.setState({dontKnowCount: this.state.dontKnowCount + 1});
        this.toggleWordMeaningState();
    }

    renderMeaning() {
        return (
                <Col xs={6} md={4}>
                    <Jumbotron>
                        <p><b>{this.props.word}</b></p>
                        <p><i>{this.props.meaning}</i></p>
                        <p> 
                            <a className="btn btn-primary btn-lg btn-outline btn-rounded"
                                onClick={this.handleIKnew.bind(this)}>I Knew</a> 
                            <a className="btn btn-primary btn-lg btn-outline btn-rounded"
                                onClick={this.handleDontKnow.bind(this)}>Didn't Know</a> 
                        </p> 
                    </Jumbotron>
                </Col>
            );
    }

    render() {
        if (this.state.showWord) {
            return this.renderWord();
        } else {
            return this.renderMeaning();
        }
    }
}

export default Word;