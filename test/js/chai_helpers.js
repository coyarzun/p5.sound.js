// // Setup chai
// var expect = chai.expect;
// var assert = chai.assert;

// assert.arrayApproximately = function(arr1, arr2, delta) {
//   assert.equal(arr1.length, arr2.length);
//   for(var i = 0; i < arr1.length; i++) {
//     assert.approximately(arr1[i], arr2[i], delta);
//   }
// }


// // a custom assertion for validation errors that correctly handles
// // minified p5sound libraries.
// assert.validationError = function(fn) {
//   if (p5sound.ValidationError) {
//     assert.throws(fn, p5sound.ValidationError);
//   } else {
//     assert.doesNotThrow(fn, Error, 'got unwanted exception');
//   }
// };
