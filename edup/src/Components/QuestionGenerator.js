import React from 'react';


export default class questionGenerator extends Component {

  constructor (problem, result) {
    super();
    this.problem = problem;
    this.result = result;
    this.operator = '';
  }

  randBetween (high, low) => {
    return Math.round(Math.random() * (high - low)) + low;
  }

  compute (diff) => {
    var a;
    var b;
    var c;
    var d;
    var e;
    var f;
    if(diff == 1) {
        a = randBetween(0, 99);
        b = randBetween(0, 99);
      }
      else if(operator == '+') {
        result = a + b;
      }
      else if(operator == '*') {
        result = a * b;
      }
      else if(operator == '/') {
        result = a / b;
      }
      problem = "" + a + " " + operator + " " + b + "";
    }
    else if(diff == 2) {
       a = randBetween(0, 999);
       b = randBetween(0, 999);
       if(operator == '+') {
           result = a + b;
       } else if(operator == '-') {
           result = a - b;
       } else if(operator == '*') {
           result = (a * b);
       } else if(operator == '/') {
           result = a / b;
       }
       problem = "" + a + " " + operator + " " + b + "";
    }
    else if (diff == 3) {
        a = randBetween(0, 99);
        b = randBetween(0, 99);
        c = randBetween(0, 99);
        d = randBetween(0, 99);
        if(operator == '+') {
            result = (a/c) + (b/d);
        } else if(operator == '-') {
            result = (a/c) - (b/d);
        } else if(operator == '*') {
            result = (a/c) * (b/d);
        } else if(operator == '/') {
            result = (a/c) / (b/d);
        }
        problem = "" + a + "/" + c + " " + operator + " " + b + "/" + d;
    }
    else if (diff == 4) {
        a = randBetween(0, 999);
        b = randBetween(0, 999);
        c = randBetween(0, 999);
        d = randBetween(0, 999);
        e = randBetween(0, 999);
        f = randBetween(0, 999);
        if(operator == '+') {
            result = (a/c) + (b/d) + (e/f);
        } else if(operator == '-') {
            result = (a/c) - (b/d) - (e/f);
        } else if(operator == '*') {
            result = (a/c) * (b/d) * (e/f);
        } else if(operator == '/') {
            result = ((a/c) / (b/d)) / (e/f);
        }
      }
    }

    makeProblem (lvl, diff) => {
      switch(lvl){
            case 1:
                operator = '+';
                compute(diff);
                break;
            case 2:
                operator = '-';
                compute(diff);
                break;
            case 3:
                operator = '*';
                compute(diff);
                break;
            case 4:
                operator = '/';
                compute(diff);
                break;
            case 5:
                switch (randBetween(1,4)) {
                    case 1:
                        operator = '+';
                        compute(diff);
                        break;
                    case 2:
                        operator = '-';
                        compute(diff);
                        break;
                    case 3:
                        operator = '*';
                        compute(diff);
                        break;
                    case 4:
                        operator = '/';
                        compute(diff);
                        break;
                    default:
                        operator = '\0';
                        result = 'NaN';
                }
                break;
            default:
                operator = '\0';
                result = 'NaN';
        }
        return new Problem(problem,result);
    }

    random = () => {
      var prob = makeProblem(5,4);
    }

  render() {
    return();
  }
}
