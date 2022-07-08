// GLOBALS - NO WINDOW

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules (CommonJS)
// module       - info about current module (file)
// process      - info about env where program is being executed
// ...

console.log(__filename);
setInterval(print_message, 1000);
setInterval(()=>{console.log('hellow world 2')}, 500);

function print_message() {
    console.log('hello world')
}