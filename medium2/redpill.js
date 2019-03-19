/* Read through the code below and determine what will be logged. You may refer
to the ASCII Table to look up character code values. */
// 87 - W, 101 - e, 108 - l, 99 - c, 111 - o, 109 - m, 101 - e
// 116 - t, 111 - o
// 116 - t, 104 - h, 101 - e
// 77 - M, 97 - a, 116 - t, 114 -r, 105 - i, 120 - x, 33 - !

function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne() {
    let result = '';
    let i;
    for (i = 0; i < arguments.length; i += 1) {
      result += String.fromCharCode(arguments[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101));
    anotherOne(116, 111);
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101);
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);
// Welcome
// to
// the
// Matrix!
