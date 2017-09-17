export default class Problem {

  constructor (problem, result) {

    this.problem = problem;
    this.result = result;
  }

  getProblem = () => {
    return this.problem;
  }

  setProblem = (problem) => {
    this.problem = problem;
  }

  getResult = () => {
    return this.result;
  }

  setResult = (result) => {
    this.result = result;
  }

  toString = () => {
    return this.problem + " = " + this.result;
  }

  qString = () => {
    return this.problem + " = ?";
  }

  rString = () => {
    return this.result.toString();
  }

}
