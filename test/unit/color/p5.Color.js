// suite('p5sound.Color', function() {
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

//   var c;

//   suite('p5sound.prototype.color(r,g,b)', function() {
//     setup(function() {
//       c = myp5sound.color(255, 0, 102);
//     });
//     test('should create instance of p5sound.Color', function() {
//       assert.instanceOf(c, p5sound.Color);
//     });

//     test('should correctly set RGBA property', function() {
//       assert.deepEqual(c.levels, [255, 0, 102, 255]);
//     });

//     test("shouldn't set HSBA property before hsb access func is called", function() {
//       assert.equal(c.hsba, undefined);
//     });

//     test("shouldn't set HSLA property before hsb access func is called", function() {
//       assert.equal(c.hsla, undefined);
//     });

//     test('color(): missing param #0 + throws error', function() {
//       expect(function() {
//         c = myp5sound.color();
//       }).to.throw();
//     });
//   });

//   suite('p5sound.prototype.color("rgb(r,g,b)")', function() {
//     setup(function() {
//       c = myp5sound.color('rgb(255,0,102)');
//     });
//     test('should create instance of p5sound.Color', function() {
//       assert.instanceOf(c, p5sound.Color);
//     });

//     test('should correctly set RGBA property', function() {
//       assert.deepEqual(c.levels, [255, 0, 102, 255]);
//     });

//     test('spot check variant spacing', function() {
//       // Exhaustive testing of spacing variations within RGB format is
//       // prohibitive: spot check a set of representative values
//       c = myp5sound.color('rgb(0,0,0)');
//       assert.deepEqual(c.levels, [0, 0, 0, 255]);
//       c = myp5sound.color('rgb(0,100 ,0)');
//       assert.deepEqual(c.levels, [0, 100, 0, 255]);
//       c = myp5sound.color('rgb( 100,255,137)');
//       assert.deepEqual(c.levels, [100, 255, 137, 255]);
//       c = myp5sound.color('rgb(0, 50,0)');
//       assert.deepEqual(c.levels, [0, 50, 0, 255]);
//       c = myp5sound.color('rgb(0,100, 0)');
//       assert.deepEqual(c.levels, [0, 100, 0, 255]);
//       c = myp5sound.color('rgb( 111, 255, 57)');
//       assert.deepEqual(c.levels, [111, 255, 57, 255]);
//       c = myp5sound.color('rgb(40, 0, 0)');
//       assert.deepEqual(c.levels, [40, 0, 0, 255]);
//       c = myp5sound.color('rgb(0,255, 10 )');
//       assert.deepEqual(c.levels, [0, 255, 10, 255]);
//     });

//     test('invalid RGB values resolve to white', function() {
//       c = myp5sound.color('rgb(100.5, 40, 3)');
//       assert.deepEqual(c.levels, [255, 255, 255, 255], 'decimal R value');
//       c = myp5sound.color('rgb(100, 40.00009, 3)');
//       assert.deepEqual(c.levels, [255, 255, 255, 255], 'decimal G value');
//       c = myp5sound.color('rgb(100, 40, 3.14159265)');
//       assert.deepEqual(c.levels, [255, 255, 255, 255], 'decimal B value');
//       c = myp5sound.color('rgb(.9, 40, 3, 1.0)');
//       assert.deepEqual(
//         c.levels,
//         [255, 255, 255, 255],
//         'decimal without leading 0'
//       );
//       c = myp5sound.color('skip a beat');
//       assert.deepEqual(c.levels, [255, 255, 255, 255], 'non-color strings');
//     });
//   });

//   suite('p5sound.prototype.color([])', function() {
//     setup(function() {
//       c = myp5sound.color([255, 0, 102]);
//     });
//     test('should create instance of p5sound.Color', function() {
//       assert.instanceOf(c, p5sound.Color);
//     });
//     test('should correctly set RGBA property', function() {
//       assert.deepEqual(c.levels, [255, 0, 102, 255]);
//     });
//   });

//   suite('p5sound.Color in RGB mode with grayscale value', function() {
//     setup(function() {
//       myp5sound.colorMode(myp5sound.RGB);
//       c = myp5sound.color(100);
//     });

//     test('should create instance of p5sound.Color', function() {
//       assert.instanceOf(c, p5sound.Color);
//     });

//     test('should correctly set RGB levels', function() {
//       assert.deepEqual(c.levels, [100, 100, 100, 255]);
//     });
//   });

//   suite('p5sound.Color in RGB mode with grayscale value and alpha', function() {
//     setup(function() {
//       myp5sound.colorMode(myp5sound.RGB);
//       c = myp5sound.color(100, 70);
//     });

//     test('should create instance of p5sound.Color', function() {
//       assert.instanceOf(c, p5sound.Color);
//     });

//     test('should correctly set RGB levels', function() {
//       assert.deepEqual(c.levels, [100, 100, 100, 70]);
//     });
//   });

//   suite('p5sound.Color in HSB mode with grayscale value', function() {
//     setup(function() {
//       myp5sound.colorMode(myp5sound.HSB);
//       c = myp5sound.color(39.3);
//     });

//     test('should create instance of p5sound.Color', function() {
//       assert.instanceOf(c, p5sound.Color);
//     });

//     test('should correctly set RGB levels', function() {
//       assert.deepEqual(c.levels, [100, 100, 100, 255]);
//     });
//   });

//   suite('p5sound.Color in HSB mode with grayscale value and alpha', function() {
//     setup(function() {
//       myp5sound.colorMode(myp5sound.HSB);
//       c = myp5sound.color(39.3, 0.275);
//     });

//     test('should create instance of p5sound.Color', function() {
//       assert.instanceOf(c, p5sound.Color);
//     });

//     test('should correctly set RGB levels', function() {
//       assert.deepEqual(c.levels, [100, 100, 100, 70]);
//     });
//   });

//   suite('p5sound.Color in HSL mode with grayscale value', function() {
//     setup(function() {
//       myp5sound.colorMode(myp5sound.HSL);
//       c = myp5sound.color(39.3);
//     });

//     test('should create instance of p5sound.Color', function() {
//       assert.instanceOf(c, p5sound.Color);
//     });

//     test('should correctly set RGB levels', function() {
//       assert.deepEqual(c.levels, [100, 100, 100, 255]);
//     });
//   });

//   suite('p5sound.Color in HSL mode with grayscale value and alpha', function() {
//     setup(function() {
//       myp5sound.colorMode(myp5sound.HSL);
//       c = myp5sound.color(39.3, 0.275);
//     });

//     test('should create instance of p5sound.Color', function() {
//       assert.instanceOf(c, p5sound.Color);
//     });

//     test('should correctly set RGB levels', function() {
//       assert.deepEqual(c.levels, [100, 100, 100, 70]);
//     });
//   });

//   suite('p5sound.Color.prototype.toString', function() {
//     var colorStr;

//     setup(function() {
//       myp5sound.colorMode(myp5sound.RGB, 255, 255, 255, 255);
//       c = myp5sound.color(128, 0, 128, 128);
//       colorStr = c.toString();
//     });

//     test('should generate (r,g,b,a) color string with 0-1 normalized alpha', function() {
//       // Will not exactly equal 0.5 due to math: test "0.5" substr of
//       // 'rgba(128,0,128,0.5...' instead of checking the entire string
//       assert.equal(colorStr.slice(15, 18), '0.5');
//     });

//     test('should consistently generate the same output', function() {
//       assert.equal(colorStr, '' + c);
//     });

//     test('should not mutate color levels', function() {
//       assert.deepEqual(c.levels, [128, 0, 128, 128]);
//     });
//   });
// });
