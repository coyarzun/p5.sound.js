import audioContext from './audioContext.js';
import { VERSION } from './constants.js';

// P5Sound contains the final sound output bus.
class Main {
  constructor() {
    // this.input = audioContext.createGain();
    // this.output = audioContext.createGain();

    // //put a hard limiter on the output
    // this.limiter = audioContext.createDynamicsCompressor();
    // this.limiter.threshold.value = -3;
    // this.limiter.ratio.value = 20;
    // this.limiter.knee.value = 1;

    this.audioContext = audioContext;

    //   this.output.disconnect();

    //   // connect input to limiter
    //   this.input.connect(this.limiter);

    //   // connect limiter to output
    //   this.limiter.connect(this.output);

    //   // meter is just for global Amplitude / FFT analysis
    //   this.meter = audioContext.createGain();
    //   this.fftMeter = audioContext.createGain();
    //   this.output.connect(this.meter);
    //   this.output.connect(this.fftMeter);

    //   // connect output to destination
    //   this.output.connect(this.audioContext.destination);

    //   // an array of all sounds in the sketch
    //   this.soundArray = [];
    //   // an array of all musical parts in the sketch
    //   this.parts = [];

    // file extensions to search for
    this.extensions = [];

    this.VERSION = VERSION;
    // get VERSION() {
    //   return VERSION;
    // }
  }

}

// create a single instance of the p5Sound main output for use within this sketch
const p5sound = new Main();

// p5sound.VERSION;

/**
 * Returns a number representing the output volume for sound
 * in this sketch.
 *
 * @method getOutputVolume
 * @return {Number} Output volume for sound in this sketch.
 *                  Should be between 0.0 (silence) and 1.0.
 */
// p5sound.prototype.getOutputVolume = function () {
//   return p5sound.output.gain.value;
// };

/**
 *  <p>Scale the output of all sound in this sketch</p>
 *  Scaled between 0.0 (silence) and 1.0 (full volume).
 *  1.0 is the maximum amplitude of a digital sound, so multiplying
 *  by greater than 1.0 may cause digital distortion. To
 *  fade, provide a <code>rampTime</code> parameter. For more
 *  complex fades, see the Envelope class.
 *
 *  Alternately, you can pass in a signal source such as an
 *  oscillator to modulate the amplitude with an audio signal.
 *
 *  <p><b>How This Works</b>: When you load the p5.sound module, it
 *  creates a single instance of p5sound. All sound objects in this
 *  module output to p5sound before reaching your computer's output.
 *  So if you change the amplitude of p5sound, it impacts all of the
 *  sound in this module.</p>
 *
 *  <p>If no value is provided, returns a Web Audio API Gain Node</p>
 *
 *  @method outputVolume
 *  @param {Number|Object} volume  Volume (amplitude) between 0.0
 *                                     and 1.0 or modulating signal/oscillator
 *  @param {Number} [rampTime]  Fade for t seconds
 *  @param {Number} [timeFromNow]  Schedule this event to happen at
 *                                 t seconds in the future
 */
// p5sound.prototype.outputVolume = function (vol, rampTime = 0, tFromNow = 0) {
//   if (typeof vol === 'number') {
//     var now = p5sound.audioContext.currentTime;
//     var currentVol = p5sound.output.gain.value;
//     p5sound.output.gain.cancelScheduledValues(now + tFromNow);
//     if (rampTime !== 0)
//       p5sound.output.gain.linearRampToValueAtTime(currentVol, now + tFromNow);
//     p5sound.output.gain.linearRampToValueAtTime(vol, now + tFromNow + rampTime);
//   } else if (vol) {
//     vol.connect(p5sound.output.gain);
//   } else {
//     // return the Gain Node
//     return p5sound.output.gain;
//   }
// };

/**
 *  `p5sound.soundOut` is the p5sound.sound final output bus. It sends output to
 *  the destination of this window's web audio context. It contains
 *  Web Audio API nodes including a dyanmicsCompressor (<code>.limiter</code>),
 *  and Gain Nodes for <code>.input</code> and <code>.output</code>.
 *
 *  @property {Object} soundOut
 */
// p5sound.prototype.soundOut = p5sound.soundOut = p5sound;

// a silent connection to the DesinationNode
// which will ensure that anything connected to it
// will not be garbage collected
// p5sound.soundOut._silentNode = p5sound.audioContext.createGain();
// p5sound.soundOut._silentNode.gain.value = 0;
// p5sound.soundOut._silentNode.connect(p5sound.audioContext.destination);

export default p5sound;
