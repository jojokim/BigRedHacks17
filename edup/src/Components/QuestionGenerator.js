import React, {Component} from 'react';
import Problem from './Problem'

export default class questionGenerator extends Component {

  constructor (problem, result) {
    super();
    this.operator = "";
    this.problem = problem;
    this.result = result;
  }

  randBetween = (high, low) => {
    return Math.round(Math.random() * (high - low)) + low;
  }

  compute = (diff) => {
    var a;
    var b;
    var c;
    var d;
    var e;
    var f;

    if(diff === 1) {
        a = this.randBetween(0, 99);
        b = this.randBetween(0, 99);

      if(this.operator === '+') {
        this.result = a + b;
      }else if(this.operator === '-') {
          this.result = a - b;
      }
      else if(this.operator === '*') {
        this.result = a * b;
      }
      else if(this.operator === '/') {
        this.result = a / b;
      }
      this.problem = "" + a + " " + this.operator + " " + b + "";
    }
    else if(diff === 2) {
       a = this.randBetween(0, 999);
       b = this.randBetween(0, 999);
       if(this.operator === '+') {
           this.result = a + b;
       } else if(this.operator === '-') {
           this.result = a - b;
       } else if(this.operator === '*') {
           this.result = (a * b);
       } else if(this.operator === '/') {
           this.result = a / b;
       }
       this.problem = "" + a + " " + this.operator + " " + b + "";
    }
    else if (diff === 3) {
        a = this.randBetween(0, 99);
        b = this.randBetween(0, 99);
        c = this.randBetween(0, 99);
        d = this.randBetween(0, 99);
        if(this.operator === '+') {
            this.result = (a/c) + (b/d);
        } else if(this.operator === '-') {
            this.result = (a/c) - (b/d);
        } else if(this.operator === '*') {
            this.result = (a/c) * (b/d);
        } else if(this.operator === '/') {
            this.result = (a/c) / (b/d);
        }
        this.problem = "" + a + "/" + c + " " + this.operator + " " + b + "/" + d;
    }
    else if (diff === 4) {
        a = this.randBetween(0, 999);
        b = this.randBetween(0, 999);
        c = this.randBetween(0, 999);
        d = this.randBetween(0, 999);
        e = this.randBetween(0, 999);
        f = this.randBetween(0, 999);
        if(this.operator === '+') {
            this.result = (a/c) + (b/d) + (e/f);
        } else if(this.operator === '-') {
            this.result = (a/c) - (b/d) - (e/f);
        } else if(this.operator === '*') {
            this.result = (a/c) * (b/d) * (e/f);
        } else if(this.operator === '/') {
            this.result = ((a/c) / (b/d)) / (e/f);
        }
        this.problem = "not implemented";
      }
    }

    makeProblem = (lvl, diff) => {
      switch(lvl){
            case 1:
                this.operator = '+';
                this.compute(diff);
                break;
            case 2:
                this.operator = '-';
                this.compute(diff);
                break;
            case 3:
                this.operator = '*';
                this.compute(diff);
                break;
            case 4:
                this.operator = '/';
                this.compute(diff);
                break;
            case 5:
                switch (this.randBetween(1,4)) {
                    case 1:
                        this.operator = '+';
                        this.compute(diff);
                        break;
                    case 2:
                        this.operator = '-';
                        this.compute(diff);
                        break;
                    case 3:
                        this.operator = '*';
                        this.compute(diff);
                        break;
                    case 4:
                        this.operator = '/';
                        this.compute(diff);
                        break;
                    default:
                        this.operator = '\0';
                        this.result = 'NaN';
                }
                break;
            default:
                this.operator = '\0';
                this.result = 'NaN';
        }
        return new Problem(this.problem,this.result);
    }



  render() {
    let difficulty = 2 + this.props.difficulty;
    let generatedQuestion = this.makeProblem(1,difficulty);

    function checkAnswer(Element) {
      console.log(generatedQuestion.toString());
      console.log(document.getElementById("answerInput").value);
      if (generatedQuestion.rString() === document.getElementById("answerInput").value) {
        console.log("we're gonna get microsoft surface");
        document.getElementById("response").innerHTML = "Correct";
        document.getElementById("response").style.color = "green";
      }
      else {
        document.getElementById("response").innerHTML = "Incorrect";
        document.getElementById("response").style.color = "red";
      }
    }

    const styles = {
      font: {
        textAlign: 'center',
        color: 'white',
        marginTop: '100px',
        marginBottom: '40px'
      },
      middle: {
        position: 'relative',
        left: '37%',
      },
    }

    return(
      <div className="container">
        <div style={styles.font}>
          <h1 className="display-3" >{generatedQuestion.qString()}</h1>

          <div>
            <input id="answerInput" className="form-control mr-sm-2" type="text" placeholder="Enter the Answer"/>
            <button className ="btn btn-success my-2 my-sm-0" type="submit" onClick={checkAnswer} >Sumbit</button>
          </div>
            <h1 id="response" />
            <h1 id="diffIndicator">Difficulty is : {difficulty}</h1>
          </div>
      </div>
    );
  }
}
