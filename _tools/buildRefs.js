let p = require( "path");
let ps = require( "process");
let cps = require( "child_process");

ps.chdir( p.join( __dirname, "..\\..\\..\\mimcss"));
console.log( "Build mimcss Doc");
exec( "doc.bat");

ps.chdir( p.join( __dirname, "..\\..\\..\\mimbl"));
console.log( "Build mimbl Doc");
exec( "doc.bat");

ps.chdir( p.join( __dirname, "..\\..\\..\\mimurl"));
console.log( "Build mimurl Doc");
exec( "doc.bat");

ps.chdir( p.join( __dirname, "..\\..\\..\\mimcl"));
console.log( "Build mimcl Doc");
exec( "doc.bat");

// ps.chdir( __dirname);
// exec( "node copyRefs.js")

console.log( "buildRefs.js script has finished");



function exec( cmd, options, logErrorMessage)
{
	try { cps.execSync( cmd, options); } catch(err) { if (logErrorMessage) console.log( err.message); }
}