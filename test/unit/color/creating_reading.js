// suite('color/CreatingReading', function() {
//   var myp5sound;

//   setup(function(done) {
//     new p5sound(function(p) {
//       p.setup = function() {
//         myp5sound = p;
//         done();
//       };
//     });
//   });

//   teardown(function() {
//     myp5sound.remove();
//   });

//   var fromColor;
//   var toColor;
//   var c;
//   var val;

//   suite('p5sound.prototype.alpha', function() {
//     setup(function() {
//       myp5sound.colorMode(myp5sound.RGB);
//     });
//     test('no friendly-err-msg I', function() {
//       assert.doesNotThrow(
//         function() {
//           var string = 'magenta';
//           c = myp5sound.color(string);
//           val = myp5sound.alpha(c);
//           assert.approximately(val, 255, 0.01);
//         },
//         Error,
//         'got unwanted exception'
//       );
//     });
//     test('no friendly-err-msg II', function() {
//       assert.doesNotThrow(
//         function() {
//           c = myp5sound.color('hsba(160, 100%, 50%, 0.5)');
//           val = myp5sound.alpha(c);
//           assert.approximately(val, 127.5, 0.01);
//         },
//         Error,
//         'got unwanted exception'
//       );
//     });
//     test('wrong param type at #0', function() {
//       assert.validationError(function() {
//         c = 20;
//         val = myp5sound.alpha(c);
//       });
//     });
//   });

//   suite('p5sound.prototype.red, green, blue', function() {
//     setup(function() {
//       myp5sound.colorMode(myp5sound.RGB);
//     });
//     test('red(): no friendly-err-msg', function() {
//       assert.doesNotThrow(
//         function() {
//           c = myp5sound.color('hsl(126, 100%, 60%)');
//           val = myp5sound.red(c);
//           assert.approximately(val, 51, 0.5);
//         },
//         Error,
//         'got unwanted exception'
//       );
//     });
//     test('green(): no friendly-err-msg', function() {
//       assert.doesNotThrow(
//         function() {
//           c = myp5sound.color('hsl(126, 100%, 60%)');
//           val = myp5sound.green(c);
//           assert.approximately(val, 255, 0.5);
//         },
//         Error,
//         'got unwanted exception'
//       );
//     });
//     test('blue(): no friendly-err-msg', function() {
//       assert.doesNotThrow(
//         function() {
//           c = myp5sound.color('hsl(126, 100%, 60%)');
//           val = myp5sound.blue(c);
//           assert.approximately(val, 71, 0.5);
//         },
//         Error,
//         'got unwanted exception'
//       );
//     });
//   });

//   suite('p5sound.prototype.hue, brightness, lightness, saturation', function() {
//     setup(function() {
//       myp5sound.colorMode(myp5sound.HSL);
//     });
//     test('hue(): no friendly-err-msg', function() {
//       assert.doesNotThrow(
//         function() {
//           c = myp5sound.color('#7fffd4');
//           val = myp5sound.hue(c);
//           assert.approximately(val, 160, 0.5);
//         },
//         Error,
//         'got unwanted exception'
//       );
//     });
//     test('brightness(): no friendly-err-msg', function() {
//       assert.doesNotThrow(
//         function() {
//           c = myp5sound.color('#7fffd4');
//           val = myp5sound.brightness(c);
//           assert.approximately(val, 100, 0.5);
//         },
//         Error,
//         'got unwanted exception'
//       );
//     });
//     test('lightness(): no friendly-err-msg', function() {
//       assert.doesNotThrow(
//         function() {
//           c = myp5sound.color('#7fffd4');
//           val = myp5sound.lightness(c);
//           assert.approximately(val, 75, 0.5);
//         },
//         Error,
//         'got unwanted exception'
//       );
//     });
//     test('saturation(): no friendly-err-msg', function() {
//       assert.doesNotThrow(
//         function() {
//           c = myp5sound.color('#7fffd4');
//           val = myp5sound.saturation(c);
//           assert.approximately(val, 100, 0.5);
//         },
//         Error,
//         'got unwanted exception'
//       );
//     });
//   });

//   suite('p5sound.prototype.lerpColor', function() {
//     setup(function() {
//       myp5sound.colorMode(myp5sound.RGB);
//       fromColor = myp5sound.color(218, 165, 32);
//       toColor = myp5sound.color(72, 61, 139);
//     });
//     test('should correctly get lerp colors in RGB', function() {
//       var interA = myp5sound.lerpColor(fromColor, toColor, 0.33);
//       var interB = myp5sound.lerpColor(fromColor, toColor, 0.66);
//       assert.deepEqual(interA.levels, [170, 131, 67, 255]);
//       assert.deepEqual(interB.levels, [122, 96, 103, 255]);
//     });
//     test('should correctly get lerp colors in HSL', function() {
//       myp5sound.colorMode(myp5sound.HSL);
//       var interA = myp5sound.lerpColor(fromColor, toColor, 0.33);
//       var interB = myp5sound.lerpColor(fromColor, toColor, 0.66);
//       assert.deepEqual(interA.levels, [66, 190, 44, 255]);
//       assert.deepEqual(interB.levels, [53, 164, 161, 255]);
//     });
//     test('should correctly get lerp colors in HSB', function() {
//       myp5sound.colorMode(myp5sound.HSB);
//       var interA = myp5sound.lerpColor(fromColor, toColor, 0.33);
//       var interB = myp5sound.lerpColor(fromColor, toColor, 0.66);
//       assert.deepEqual(interA.levels, [69, 192, 47, 255]);
//       assert.deepEqual(interB.levels, [56, 166, 163, 255]);
//     });
//     test('should not extrapolate', function() {
//       var interA = myp5sound.lerpColor(fromColor, toColor, -0.5);
//       var interB = myp5sound.lerpColor(fromColor, toColor, 1.5);
//       assert.deepEqual(interA.levels, [218, 165, 32, 255]);
//       assert.deepEqual(interB.levels, [72, 61, 139, 255]);
//     });
//     test('missing param #2', function() {
//       assert.validationError(function() {
//         myp5sound.lerpColor(fromColor, toColor);
//       });
//     });
//   });
//   suite('p5sound.prototype.lerpColor with alpha', function() {
//     setup(function() {
//       myp5sound.colorMode(myp5sound.RGB);
//       fromColor = myp5sound.color(218, 165, 32, 49);
//       toColor = myp5sound.color(72, 61, 139, 200);
//     });
//     test('should correctly get lerp colors in RGB with alpha', function() {
//       var interA = myp5sound.lerpColor(fromColor, toColor, 0.33);
//       var interB = myp5sound.lerpColor(fromColor, toColor, 0.66);
//       assert.deepEqual(interA.levels, [170, 131, 67, 99]);
//       assert.deepEqual(interB.levels, [122, 96, 103, 149]);
//     });
//     test('should correctly get lerp colors in HSL with alpha', function() {
//       myp5sound.colorMode(myp5sound.HSL);
//       var interA = myp5sound.lerpColor(fromColor, toColor, 0.33);
//       var interB = myp5sound.lerpColor(fromColor, toColor, 0.66);
//       assert.deepEqual(interA.levels, [66, 190, 44, 99]);
//       assert.deepEqual(interB.levels, [53, 164, 161, 149]);
//     });
//     test('should correctly get lerp colors in HSB with alpha', function() {
//       myp5sound.colorMode(myp5sound.HSB);
//       var interA = myp5sound.lerpColor(fromColor, toColor, 0.33);
//       var interB = myp5sound.lerpColor(fromColor, toColor, 0.66);
//       assert.deepEqual(interA.levels, [69, 192, 47, 99]);
//       assert.deepEqual(interB.levels, [56, 166, 163, 149]);
//     });
//     test('should not extrapolate', function() {
//       var interA = myp5sound.lerpColor(fromColor, toColor, -0.5);
//       var interB = myp5sound.lerpColor(fromColor, toColor, 1.5);
//       assert.deepEqual(interA.levels, [218, 165, 32, 49]);
//       assert.deepEqual(interB.levels, [72, 61, 139, 200]);
//     });
//   });
// });
