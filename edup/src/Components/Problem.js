import React from 'react';


export default class questionGenerator extends Component {

  constructor (problem, result) {
    super();
    this.problem = problem;
    this.result = result;
  }

  getProblem = () => {
    return problem;
  }

  setProblem = (problem) => {
    this.problem = problem;
  }

  getResult = () => {
    return result;
  }

  setResult = (result) => {
    this.result = result;
  }

  toString = () => {
    return problem + " = " + result;
  }
  render() {
    return();
  }
}
