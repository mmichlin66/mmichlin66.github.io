let p = require( "path");
let ps = require( "process");
let cps = require( "child_process");

ps.chdir( p.join( __dirname, ".."));
console.log( "Current directory: " + ps.cwd());

console.log( "Copy scripts to " + p.join( ps.cwd(), "scripts"));
exec( "xcopy ..\\..\\mimurl\\lib\\mimurl.js     scripts\\ /i /y /d");
exec( "xcopy ..\\..\\mimurl\\lib\\mimurl.dev.js scripts\\ /i /y /d");
exec( "xcopy ..\\..\\mimbl\\lib\\mimbl.js       scripts\\ /i /y /d");
exec( "xcopy ..\\..\\mimbl\\lib\\mimbl.dev.js   scripts\\ /i /y /d");
exec( "xcopy ..\\..\\mimcl\\lib\\mimcl.js       scripts\\ /i /y /d");
exec( "xcopy ..\\..\\mimcl\\lib\\mimcl.dev.js   scripts\\ /i /y /d");


console.log( "Copy mimurl-demo to " + p.join( ps.cwd(), "mimurl"));
exec( "xcopy ..\\..\\mimurl-demo\\lib\\mimurl-demo.js        mimurl\\ /i /y /d");
exec( "xcopy ..\\..\\mimurl-demo\\lib\\mimurl-demo.css       mimurl\\ /i /y /d");
exec( "xcopy ..\\..\\mimurl-demo\\lib\\mimurl-demo.dev.js    mimurl\\ /i /y /d");
exec( "xcopy ..\\..\\mimurl-demo\\lib\\mimurl-demo.dev.css   mimurl\\ /i /y /d");

console.log( "copyLibs.js script has finished");



function exec( cmd, logErrorMessage)
{
	try { cps.execSync( cmd); } catch(err) { if (logErrorMessage) console.log( err.message); }
}