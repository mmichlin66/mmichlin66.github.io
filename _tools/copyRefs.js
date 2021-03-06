let p = require( "path");
let ps = require( "process");
let cps = require( "child_process");

ps.chdir( p.join( __dirname, ".."));
console.log( "Current directory: " + ps.cwd());

console.log( "Copy mimcss reference to " + p.join( ps.cwd(), "mimcss/reference"));
exec( "xcopy ..\\mimcss\\reference\\*.*   mimcss\\reference\\ /i /y /d /s");

console.log( "Copy mimurl reference to " + p.join( ps.cwd(), "mimurl/reference"));
exec( "xcopy ..\\mimurl\\reference\\*.*   mimurl\\reference\\ /i /y /d /s");

console.log( "Copy mimbl reference to " + p.join( ps.cwd(), "mimbl/reference"));
exec( "xcopy ..\\mimbl\\reference\\*.*   mimbl\\reference\\ /i /y /d /s");

console.log( "copyRefs.js script has finished");



function exec( cmd, logErrorMessage)
{
	try { cps.execSync( cmd); } catch(err) { if (logErrorMessage) console.log( err.message); }
}