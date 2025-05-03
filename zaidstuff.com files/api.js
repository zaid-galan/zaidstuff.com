/***************************************************************************************************************************

For use with P5.js bramble projects

Version 0.1

Description: Provides a lightweight wrapper around Google's Mediapipe library and tensorflow. Supports an interface to
detect face and hand landmarks, in additon to simple object recognition via a live Webcam feed. Designed to easily
integrate with the main P5.js render loop's draw() function.

****************************************************************************************************************************/

/*___________________________________________________________________________________________________________________________

Constants
____________________________________________________________________________________________________________________________*/

const Landmarks = {
  Wrist: 0,
  Thumb_Base: 1,
  Thumb_Bone: 2,
  Thumb_Knuckle: 3,
  Thumb_Tip: 4,
  Pointer_Base: 5,
  Pointer_Lower_Knuckle: 6,
  Pointer_Upper_Knuckle: 7,
  Pointer_Tip: 8,
  Middle_Base: 9,
  Middle_Lower_Knuckle: 10,
  Middle_Upper_Knuckle: 11,
  Middle_Tip: 12,
  Ring_Base: 13,
  Ring_Lower_Knuckle: 14,
  Ring_Upper_Knuckle: 15,
  Ring_Tip: 16,
  Pinky_Base: 17,
  Pinky_Lower_Knuckle: 18,
  Pinky_Upper_Knuckle: 19,
  Pinky_Tip: 20
};

const Finger = {
  Thumb: 0,
  Pointer: 1,
  Middle: 2,
  Ring: 3,
  Pinky: 4
};

const LandmarksStrings = {};

Object.keys(Landmarks).map(function (key, id) {
  LandmarksStrings[id] = String(key);
});

const P5_CANVAS_ID = "defaultCanvas0";
const ATTACHMENT_DIV = "attachmentDiv";

/*___________________________________________________________________________________________________________________________

General Video Manager
____________________________________________________________________________________________________________________________*/

class VideoManager {
  constructor() {
    this.attachRoot = document.getElementById(ATTACHMENT_DIV);
    if (!this.attachRoot) {
      this.attachRoot = document.body;
    }
    this.element = document.createElement("video");
    this.element.setAttribute("autoplay", true);
    this.attachRoot.appendChild(this.element);
      this.element.controls = true;
      this.element.width = 700;

    const mediaDevices = navigator.mediaDevices;
    const _this = this;
    mediaDevices
      .getUserMedia({
        video: true,
        audio: false
      })
      .then(stream => {
        _this.element.srcObject = stream;
        _this.ready = true;
      });
    this.element.load();

    this.debugCanvas = document.createElement("canvas");
    this.debugCanvas.setAttribute("id", "debugCanvas");
    this.debugCanvas.style.position = "absolute";
    this.debugCanvas.style.display = "inline-block";

    let p5attach = document.getElementById("p5AttachmentDiv");

    if (p5attach) {
      p5attach.appendChild(this.debugCanvas);
    } else {
      document.body.appendChild(this.debugCanvas);
    }

    window.onload = event => {
      this.p5Canvas = document.getElementById(P5_CANVAS_ID);
      this.videoVisible ? this.show(this.cachedOpacity) : this.hide();

      if (this.p5Canvas) {
        this.element.style.width = width + "px";
        this.element.style.height = height + "px";
        if (p5attach) {
          p5attach.appendChild(this.p5Canvas);
          p5attach.appendChild(this.element);
        }
      }
    };

    this.videoVisible = false;
  }

  getVideoElement() {
    return this.element;
  }

  getP5CanvasElement() {
    return this.p5Canvas;
  }

  getDebugCanvasElement() {
    this.debugCanvas.width = width;
    this.debugCanvas.height = height;
    this.debugCanvas.style.width = width + "px";
    this.debugCanvas.style.height = height + "px";
    return this.debugCanvas;
  }

  show(opacity) {
    this.videoVisible = true;

    if (!this.p5Canvas) {
      this.hide();
      this.cachedOpacity = opacity;
      return;
    }

    const l = this.p5Canvas.getBoundingClientRect().left;
    this.element.style.display = "inline-block";

  }

  hide() {
    this.element.style.display = "none";
  }
}

/*___________________________________________________________________________________________________________________________

Intermediate Storage
____________________________________________________________________________________________________________________________*/

class MediaPipeBuffer {
  constructor() {
    this.ready = false;

    this.predictions = {
      Face: null,
      Hand: null
    };
  }
}

class LoadingScreenManager {
  constructor() {
    this.queue = 0;
    this.element = document.createElement("div");
    this.element.setAttribute("id", "loadingScreen");

    const overlay = document.createElement("div");
    overlay.setAttribute("id", "overlay");
    this.element.appendChild(overlay);

    const text = document.createElement("div");
    text.innerHTML = "Loading Models";
    text.setAttribute("id", "overlayText");
    this.element.appendChild(text);

    document.body.append(this.element);
  }

  show() {
    this.queue++;
    this.element.style.display = "flex";
  }

  hide() {
    this.queue = Math.max(0, --this.queue);
    if (this.queue === 0) {
      this.element.style.display = "none";
    }
  }
}

/*___________________________________________________________________________________________________________________________

Global Variables
____________________________________________________________________________________________________________________________*/

const _G_VM = new VideoManager();
const _G_MP_Buffer = new MediaPipeBuffer();
const _G_Loader = new LoadingScreenManager();
/*___________________________________________________________________________________________________________________________

Detectors
____________________________________________________________________________________________________________________________*/

class RecognizerBase {
  showVideo(opacity) {
    opacity = opacity || 1;
    _G_VM.show(Math.min(100, Math.max(opacity, 0)) / 100);
  }

  hideVideo() {
    _G_VM.hide();
  }
}

class HandRecognizer extends RecognizerBase {
  constructor() {
    _G_Loader.show();

    super();
    this.model = new Hands({
      locateFile: file => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands@${VERSION}/${file}`;
      }
    });

    _G_MP_Buffer.predictions = {
      Left: null,
      Right: null
    };

    this.model.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
      selfieMode: true
    });

    this.model.onResults(this.onResults);
    _G_VM.getVideoElement().addEventListener("loadeddata", event => {
      (async () => {
        await this.model
          .send({
            image: _G_VM.getVideoElement()
          })
          .catch();
        _G_Loader.hide();
      })();
    });

    this.mapping = {
      [Finger.Thumb]: [Landmarks.Thumb_Tip, Landmarks.Thumb_Knuckle, Landmarks.Thumb_Bone],
      [Finger.Pointer]: [
        Landmarks.Pointer_Tip,
        Landmarks.Pointer_Upper_Knuckle,
        Landmarks.Pointer_Lower_Knuckle
      ],
      [Finger.Middle]: [
        Landmarks.Middle_Tip,
        Landmarks.Middle_Upper_Knuckle,
        Landmarks.Middle_Lower_Knuckle
      ],
      [Finger.Ring]: [
        Landmarks.Ring_Tip,
        Landmarks.Ring_Upper_Knuckle,
        Landmarks.Ring_Lower_Knuckle
      ],
      [Finger.Pinky]: [
        Landmarks.Pinky_Tip,
        Landmarks.Pinky_Upper_Knuckle,
        Landmarks.Pinky_Lower_Knuckle
      ]
    };
  }

  onResults(results) {
    _G_MP_Buffer.ready = true;
    _G_MP_Buffer.predictions = {
      Left: null,
      Right: null
    };

    if (results.multiHandLandmarks && results.multiHandedness) {
      for (let index = 0; index < results.multiHandLandmarks.length; index++) {
        const landmarks = results.multiHandLandmarks[index];
        if (results.multiHandedness[index].label === "Right") {
          _G_MP_Buffer.predictions.Right = landmarks;
        } else {
          _G_MP_Buffer.predictions.Left = landmarks;
        }
      }
    }
  }

  async predict() {
    if (_G_VM.ready && _G_MP_Buffer.ready) {
      await this.model.send({
        image: _G_VM.getVideoElement()
      });
    }
  }

  getRightLandmark(identifier) {
    let pos = {
      x: Math.MAX_VALUE,
      y: Math.MAX_VALUE
    };

    const data = _G_MP_Buffer.predictions.Right;

    if (!data) {
      return pos;
    }

    const landmark = _G_MP_Buffer.predictions.Right[identifier];
    if (!landmark) {
      return pos;
    }

    return {
      x: landmark.x * width,
      y: landmark.y * height
    };
  }

  getLeftLandmark(identifier) {
    let pos = {
      x: Math.MAX_VALUE,
      y: Math.MAX_VALUE
    };

    if (!_G_MP_Buffer.predictions.Left) {
      return pos;
    }

    const landmark = _G_MP_Buffer.predictions.Left[identifier];
    return {
      x: landmark.x * width,
      y: landmark.y * height
    };
  }

  rightHandVisible() {
    return _G_MP_Buffer.predictions.Right ? true : false;
  }

  leftHandVisible() {
    return _G_MP_Buffer.predictions.Left ? true : false;
  }

  rightHandPinched() {
    const data = _G_MP_Buffer.predictions.Right;
    if (!data) return;

    const pointerX = data[Landmarks.Pointer_Tip].x * width;
    const pointerY = data[Landmarks.Pointer_Tip].y * height;
    const thumbX = data[Landmarks.Thumb_Tip].x * width;
    const thumbY = data[Landmarks.Thumb_Tip].y * height;
    const distance = Math.sqrt((pointerX - thumbX) ** 2 + (pointerY - thumbY) ** 2);
    return distance < 10;
  }

  leftHandPinched() {
    const data = _G_MP_Buffer.predictions.Left;
    if (!data) return;

    const pointerX = data[Landmarks.Pointer_Tip].x;
    const pointerY = data[Landmarks.Pointer_Tip].y;
    const thumbX = data[Landmarks.Thumb_Tip].x;
    const thumbY = data[Landmarks.Thumb_Tip].y;
    let distance = Math.sqrt((indexX - thumbX) ** 2 + (indexY - thumbY) ** 2);
    return distance < 10;
  }

  rightFingerExtended(finger) {
    if (!_G_MP_Buffer.predictions.Right) return false;
    const joint = this.mapping[finger];
    return this._fingerExtended(
      _G_MP_Buffer.predictions.Right[joint[0]],
      _G_MP_Buffer.predictions.Right[joint[1]],
      _G_MP_Buffer.predictions.Right[joint[2]],
      _G_MP_Buffer.predictions.Right[Landmarks.Wrist]
    );
  }

  leftFingerExtended(finger) {
    if (!_G_MP_Buffer.predictions.Left) return false;
    const joint = this.mapping[finger];
    return this._fingerExtended(
      _G_MP_Buffer.predictions.Left[joint[0]],
      _G_MP_Buffer.predictions.Left[joint[1]],
      _G_MP_Buffer.predictions.Left[joint[2]],
      _G_MP_Buffer.predictions.Left[Landmarks.Wrist]
    );
  }

  _fingerExtended(joint0, joint1, joint2, palmJoint) {
    let theta =
      Math.atan2(joint2.y - joint1.y, joint2.x - joint1.x) -
      Math.atan2(joint0.y - joint1.y, joint0.x - joint1.x);
    theta = Math.abs((theta * 180) / Math.PI);
    theta = theta > 180 ? 360 - theta : theta;
    const threshold = 6;

    const dToPalmFromTip2 = (joint0.y - palmJoint.y) ** 2 + (joint0.x - palmJoint.x) ** 2;
    const dToPalmFromMid2 = (joint1.y - palmJoint.y) ** 2 + (joint1.x - palmJoint.x) ** 2;

    if (dToPalmFromTip2 < dToPalmFromMid2) {
      return false;
    }

    return Math.abs(180 - theta) < threshold;
  }

  drawLandmarks(withLabels) {
    const data = _G_MP_Buffer.predictions;
    if (!data) {
      return;
    }

    const canvas = _G_VM.getDebugCanvasElement();
    const ctx = canvas.getContext("2d");
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const colors = {
      Right: "#9812ff",
      Left: "#66ff66"
    };

    for (const hand of ["Right", "Left"]) {
      const pred = data[hand];
      if (!pred) {
        continue;
      }

      for (const connection of HAND_CONNECTIONS) {
        const p1 = pred[connection[0]];
        const p2 = pred[connection[1]];
        const x = p1.x * width;
        const y = p1.y * height;
        const x2 = p2.x * width;
        const y2 = p2.y * height;

        ctx.beginPath();
        ctx.fill();
        ctx.strokeStyle = colors[hand];
        ctx.lineWidth = 1;
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      for (const [id, pos] of Object.entries(pred)) {
        const x = pos.x * width;
        const y = pos.y * height;

        ctx.beginPath();
        ctx.arc(x, y, 2, 0, 2 * Math.PI, false);
        ctx.fillStyle = "#ff8c1a";
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.stroke();

        if (withLabels) {
          ctx.lineWidth = 5;
          ctx.fillStyle = "black";
          ctx.fillText(LandmarksStrings[id], x, y);
        }
      }
    }
  }
}

const Mode = {
  Camera: 0,
  Canvas: 1
};

class butt extends RecognizerBase {
  constructor() {
    super();

    this.classes = [
      {
        name: "Class 1",
        count: 0
      },
      {
        name: "Class 2",
        count: 0
      }
    ];

    this.config = {
      batchSize: 5,
      epochs: 12,
      shuffle: true
    };

    this.mode = Mode.Camera;
    this.TYNKER_FILE_EXTENSION = ".json";

    this.reset();
    this._recompileModel();
    this.tensorInputDimensions = 224;

    (async () => await this._load())();

    this.fileInput = document.createElement("input");
    this.fileInput.type = "file";
    this.fileInput.accept = ".jpg, .jpeg, .png";
    this.fileInput.multiple = "multiple";

    this.fileInput.onchange = e => {
      for (const file of this.fileInput.files) {
        try {
          const reader = new FileReader();

          reader.onload = () => {
            const img = new Image();
            img.src = reader.result;
            img.onload = () => {
              this._addTrainingData(this.inputClass, img);
              console.log(
                `Successfully uploading file ${file.name} for class '${
                  this.classes[this.inputClass].name
                }'`
              );
            };
          };

          reader.readAsDataURL(file);
        } catch (e) {
          console.error(`Failed uploading file ${file.name}: ${e}`);
        }
      }
    };

    this.fileInputLoadModel = document.createElement("input");
    this.fileInputLoadModel.type = "file";
    this.fileInputLoadModel.accept = this.TYNKER_FILE_EXTENSION;
    this.fileInputLoadModel.onclick = () => {
      this.fileInputLoadModel.value = null;
    };
    this.fileInputLoadModel.onchange = e => {
      if (this.fileInputLoadModel.length < 1) {
        return;
      }
      const file = this.fileInputLoadModel.files[0];
      try {
        const reader = new FileReader();

        reader.onload = async () => {
          await this._loadModelFromMemory(JSON.parse(reader.result));
        };

        reader.readAsText(file);
      } catch (e) {
        console.error(`Failed uploading saved model ${file.name}: ${e}`);
      }
    };

    this.downloadHandler = document.createElement("a");

    const trainingPanel = document.getElementById("trainingPanelContainer");
    if (trainingPanel) trainingPanel.style.display = "flex";
  }

  async _loadModelFromMemory(obj) {
    if (typeof obj !== "object") return;
    if (!Array.isArray(obj.classes) || obj.length < 2) return;
    this.classes = obj.classes;

    obj.model.weightData = this._B64toAB(obj.model.weightData);

    this.model = await tf.loadLayersModel(
      tf.io.fromMemory({
        modelTopology: obj.model.modelTopology,
        weightSpecs: obj.model.weightSpecs,
        weightData: obj.model.weightData
      })
    );
    console.log("Successfully loaded saved model");

    this.training = false;
    this.trained = true;
  }

  _ABtoB64(buffer) {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  _B64toAB(base64) {
    const binary_string = atob(base64);
    const len = binary_string.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }

  useCamera() {
    this.mode = Mode.Camera;
  }

  useCanvas() {
    this.mode = Mode.Canvas;
  }

  reset() {
    this.trainingInput = [];
    this.trainingClass = [];

    for (const cls of this.classes) {
      cls.count = 0;
      cls.score = 0;
    }

    this._recompileModel();

    this.trained = false;
  }

  async _load() {
    _G_Loader.show();

    const srcUrl =
      "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v3_small_100_224/feature_vector/5/default/1";
    this.mobilenet = await tf
      .loadGraphModel(srcUrl, {
        fromTFHub: true
      })
      .catch(e => console.log(`TBHub Fetch Error: ${e}`));

    tf.tidy(() => {
      this.mobilenet.predict(
        tf.zeros([1, this.tensorInputDimensions, this.tensorInputDimensions, 3])
      );
    });

    _G_Loader.hide();
  }

  _recompileModel() {
    this.model = tf.sequential();
    this.model.add(
      tf.layers.dense({
        inputShape: [1024],
        units: 128,
        activation: "relu"
      })
    );
    this.model.add(
      tf.layers.dense({
        units: this.classes.length,
        activation: "softmax"
      })
    );
    this.model.compile({
      optimizer: "adam",
      loss: this.classes.length == 2 ? "binaryCrossentropy" : "categoricalCrossentropy",
      metrics: ["accuracy"]
    });
  }

  _collectFeatures(htmlElement) {
    try {
      return tf.tidy(() => {
        const htmlTensor = tf.browser.fromPixels(htmlElement);
        const inputTensor = tf.image
          .resizeBilinear(htmlTensor, [this.tensorInputDimensions, this.tensorInputDimensions], true)
          .div(255);
        return this.mobilenet.predict(inputTensor.expandDims()).squeeze();
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  _getElement() {
    if (this.mode === Mode.Canvas) {
      return _G_VM.getP5CanvasElement();
    } else if (this.mode === Mode.Camera && _G_VM.ready) {
      return _G_VM.getVideoElement();
    }

    return null;
  }

  _addTrainingData(classIndex, element) {
    const features = this._collectFeatures(element);
    this.trainingInput.push(features);
    this.trainingClass.push(classIndex);

    this.classes[classIndex].count++;
  }

  async save(fileName) {
    if (!this.model || !this.trained) {
      return;
    }

    const results = await this.model.save(tf.io.withSaveHandler(async artifacts => artifacts));
    results.weightData = this._ABtoB64(results.weightData);

    const serialized = {
      classes: this.classes,
      model: results
    };

    const data = `text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(serialized))}`;

    if (fileName) {
      this.downloadHandler.href = `data:${data}`;
      this.downloadHandler.download = fileName;
      this.downloadHandler.click();
    }
  }

  _getProjectID() {
    const reg = /.*project\/([a-z0-9]{24})/;
    return window.location.pathname.match(reg)[1];
  }

  _getDownloadFileURL(file) {
    if (file.startsWith("/")) return file;
    return `${window.location.origin}/code/project/vfs/project/${this._getProjectID()}/${file}`;
  }

  async load(workspaceFile) {
    if (workspaceFile) {
      const result = await fetch(this._getDownloadFileURL(workspaceFile));
      const json = await result.json();
      await this._loadModelFromMemory(json);
    } else {
      this.fileInputLoadModel.click();
    }
  }

  addTrainingBatchFromPC(classIndex) {
    this.inputClass = classIndex;
    this.fileInput.click();
  }

  addTrainingData(classIndex) {
    const element = this._getElement();
    if (!element) {
      return;
    }
    this._addTrainingData(classIndex, element);
  }

  async train() {
    if (!this.mobilenet || !this.model) {
      console.error("Cannot train, models have not been loaded");
      return;
    }

    for (const cls of this.classes) {
      if (cls.count <= 0) {
        console.error("Provide training data for class 0 before training the model");
        return;
      }
    }

    if (this.training) {
      console.error("Model training already in progress.");
      return;
    }

    this.training = true;

    tf.util.shuffleCombo(this.trainingInput, this.trainingClass);
    const oneHotEncoded = tf.oneHot(tf.tensor1d(this.trainingClass, "int32"), this.classes.length);
    const input = tf.stack(this.trainingInput);
    await this.model.fit(input, oneHotEncoded, this.config);

    this.training = false;
    this.trained = true;
  }

  setClassNames() {
    if (arguments.length < 2) {
      console.error("You must provide at least two classes");
      return;
    }

    const oldClassLength = this.classes.length;

    this.classes = [];
    for (const arg of arguments) {
      this.classes.push({
        name: arg,
        count: 0
      });
    }

    if (oldClassLength != arguments.length) {
      this._recompileModel();
    }
  }

  getClassName(index) {
    if (index < 0 || index >= this.classes.length) {
      return null;
    }

    return this.classes[index].name;
  }

  getTrainingCount(index) {
    if (index < 0 || index >= this.classes.length) {
      return null;
    }

    return this.classes[index].count;
  }

  predict() {
    const htmlElement = this._getElement();
    if (!this.mobilenet || !this.model || !this.trained || !htmlElement) {
      return null;
    }

    const features = this._collectFeatures(htmlElement);
    if (!features) {
      return null;
    }

    const prediction = this.model.predict(features.expandDims()).squeeze();
    const classIndex = prediction.argMax().arraySync();

    if (classIndex < 0 || classIndex >= this.classes.length) {
      return null;
    }

    const scores = prediction.arraySync();
    for (let i = 0; i < this.classes.length; ++i) {
      this.classes[i].score = Math.floor(scores[i] * 100);
    }

    return this.classes[classIndex].name;
  }
}
const recognizer = new butt();

function setup() {
    createCanvas(360, 240);
    frameRate(30);

    //use setClassNames to set the classes as 'Fist' and 'Peace Sign'
  

    recognizer.showVideo(50);
    recognizer.useCamera();
  
}