// Read through the following code. Why will it log 'debugging'?

function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();
// In the body of the function declaration of debugIt, the function logger is
// declared. Within the body of the logger function a call to console.log is
// made passing in the variable status as an argument. Because status is
// declared in the surrounding context of the declaration of logger, it is
// available to the logger function. The last line within the body of debugIt
// is the invocation of the logger function.

// The debugIt function defines a local variable named status and a function
// named logger. logger is an inner (nested) function, so it has access to any
// variables declared in the scope of its outer (parent) function, debugIt, due
// to lexical scoping rules.
