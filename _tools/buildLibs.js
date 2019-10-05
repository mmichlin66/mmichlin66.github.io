let p = require( "path");
let ps = require( "process");
let cps = require( "child_process");

ps.chdir( p.join( __dirname, "..\\..\\..\\mimbl"));
console.log( "Build mimbl Dev");
exec( "buildDev.bat");
console.log( "Build mimbl Prod");
exec( "buildProd.bat");

ps.chdir( p.join( __dirname, "..\\..\\..\\mimurl"));
console.log( "Build mimurl Dev");
exec( "buildDev.bat");
console.log( "Build mimurl Prod");
exec( "buildProd.bat");

ps.chdir( p.join( __dirname, "..\\..\\..\\mimcl"));
console.log( "Build mimcl Dev");
exec( "buildDev.bat");
console.log( "Build mimcl Prod");
exec( "buildProd.bat");

ps.chdir( p.join( __dirname, "..\\..\\..\\mimurl-demo"));
console.log( "Build mimurl-demo Dev");
exec( "buildDev.bat");
console.log( "Build mimurl-demo Prod");
exec( "buildProd.bat");

// ps.chdir( __dirname);
// exec( "node copyLibs.js")

console.log( "buildLibs.js script has finished");



function exec( cmd, options, logErrorMessage)
{
	try { cps.execSync( cmd, options); } catch(err) { if (logErrorMessage) console.log( err.message); }
}