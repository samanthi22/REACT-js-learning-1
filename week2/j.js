/*
stack
-------
how stack works

--------
*/

/* APIs
 run in the browser
 
 setTimeout
 printOne 1s
 fetch
 run in the browser not necessarily javascript itself
 
 
 printOne
 1s
 printTwo 0s, goes to function queue
 printThree on the stack immediately, or queue
 three gets console.logged.
 
*/

/*
function queue
printTwo goes in function queue 
and gets erased from stack
*/

/* 
event loop
*/ 

// whens stack is empty 
// is there anything in the event queue
// moves printTwo() from function queue to stack

