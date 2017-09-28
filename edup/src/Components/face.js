import React, { Component } from 'react';
import $ from 'jquery';
import Webcam from 'react-webcam';

import QuestionGenerator from './QuestionGenerator'

export default class Face extends Component {

  constructor () {
    super();
    this.state = {value: ''};
    this.emotion = [];
    this.emotion[0] = 0;
    this.emotion[1] = 0;
    this.emotion[2] = 0;
    this.emotion[3] = 0;
    this.emotion[4] = 0;
    this.emotion[5] = 0;
    this.emotion[6] = 0;
    this.emotion[7] = 0;
    this.emoValue = 0;
  }


  setRef = (webcam) => {
    this.webcam = webcam;
  }

  autoprogo = () => {
    let timeroutId = setTimeout(() => this.automatedProcess(), 5000);
  }

  automatedProcess = () => {
    let timerId = setInterval(() => this.captureAndProcess(), 999);
    setTimeout(() => { clearInterval(timerId); this.emoValue = this.emoCheck(); }, 5000);
    console.log("automated Process started");
  };

  captureAndProcess = () => {
    let imageSrc = this.webcam.getScreenshot();
    imageSrc = imageSrc.substr(23);
    const imgBlob = this.b64toBlob(imageSrc, "image/jpeg");
    this.processImage(imgBlob);
  };

    b64toBlob(b64Data, contentType, sliceSize) {
      contentType = contentType || '';
      sliceSize = sliceSize || 512;

      var byteCharacters = atob(b64Data);
      var byteArrays = [];

      for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
      }

      var blob = new Blob(byteArrays, {type: contentType});
      return blob;
    }


    processImage(blob) {
            var subscriptionKey = "c0a9244aa8a348498e7a58f345a9cb0b";
            var uriBase = "https://westus.api.cognitive.microsoft.com/face/v1.0/detect";

            // Request parameters.
            var params = {
                "returnFaceId": "false",
                "returnFaceLandmarks": "false",
                "returnFaceAttributes": "emotion",
            };

            // Display the image.
            //var sourceImageUrl = document.getElementById("inputImage").value;
            //document.querySelector("#sourceImage").src = sourceImageUrl;

            // Perform the REST API call.
            $.ajax({
                url: uriBase + "?" + $.param(params),
                contentType: false,
                processData: false,
                // Request headers.
                beforeSend: function(xhrObj){
                  //xhrObj.setRequestHeader("Content-Type","application/json");
                  xhrObj.setRequestHeader("Content-Type","application/octet-stream");
                  xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
                },

                type: "POST",

                // Request body.
                data: blob,
            })

            .done((data) => {
                // Show formatted JSON on webpage.
                $("#responseTextArea").val(JSON.stringify(data, null, 2));
                console.log(JSON.stringify(data, null, 2));
                if (data[0] != null) {
                    this.emotion[0] += data[0].faceAttributes.emotion.anger;
                    this.emotion[1] += data[0].faceAttributes.emotion.contempt;
                    this.emotion[2] += data[0].faceAttributes.emotion.disgust;
                    this.emotion[3] += data[0].faceAttributes.emotion.fear;
                    this.emotion[4] += data[0].faceAttributes.emotion.happiness;
                    this.emotion[5] += data[0].faceAttributes.emotion.neutral;
                    this.emotion[6] += data[0].faceAttributes.emotion.sadness;
                    this.emotion[7] += data[0].faceAttributes.emotion.surprise;
                    console.log(this.emotion);
                }
            })

            .fail(function(jqXHR, textStatus, errorThrown) {
                // Display error message.


                var errorString = (errorThrown === "") ? "Error. " : errorThrown + " (" + jqXHR.status + "): ";
                errorString += (jqXHR.responseText === "") ? "" : (JSON.parse(jqXHR.responseText)) ?
                    JSON.parse(jqXHR.responseText).message : JSON.parse(jqXHR.responseText).error.message;
                alert(errorString);

            });
        };

      regen = () => {
        this.emotion = [0,0,0,0,0,0,0,0];
        this.setState({value: this.value +1});
        document.getElementById("response").innerHTML = "";
        document.getElementById("answerInput").value = "";
      }

      emoCheck = () => {
        let emocheckVal = 0;
        let sad = this.emotion[0]+this.emotion[1]+this.emotion[2]+this.emotion[3]+this.emotion[6]+this.emotion[7];
        if (sad > 3 && this.emotion[4] > 3 && sad > this.emotion[4])
          emocheckVal = -1;
        else if (sad > 3 && this.emotion[4] > 3 && sad < this.emotion[4])
          emocheckVal = 1;

        if (this.emotion[4]/5 > 0.4)
          emocheckVal = 1;
        if (sad/5 > 0.1)
          emocheckVal = -1;

        console.log("emoval is "+emocheckVal);
        return emocheckVal;
      }

  render() {
    this.autoprogo();
    const styles = {
      font: {
        textAlign: 'center',
        color: 'white',
        marginTop: '100px',
        marginBottom: '40px'
      }
    }

    return (
      <div>
        <QuestionGenerator difficulty={this.emoValue}/>
        <div style={styles.font}>
          <button className ="btn btn-primary my-2 my-sm-0" type="submit" onClick={this.regen} >Next Question</button>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
          <Webcam
            audio={false}
            height={500}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={500}
          />
          <br/>
          <button onClick={this.automatedProcess}>Magic Button</button>
        </div>

        <br/><br/>
        <div id="wrapper" style={this.outputStyle}>
            <div id="jsonOutput" style={this.imageStyle}>
                Response:
                <br/><br/>
                <textarea id="responseTextArea" className="UIInput" style={{width:'580px', height:'400px'}}></textarea>
            </div>
        </div>

      </div>
    );
  }
}
