let p = require( "path");
let ps = require( "process");
let cps = require( "child_process");

buildLib( "mimcss");
buildLib( "mimbl");
buildLib( "mimurl");
buildLib( "mimcl");
buildLib( "mimurl-demo");

console.log( "buildLibs.js script has finished");



function buildLib( libName)
{
	ps.chdir( p.join( __dirname, "..\\..\\..\\" + libName));
	console.log( "Build " + libName + " Dev");
	exec( "buildDev.bat");
	console.log( "Build " + libName + " Prod");
	exec( "buildProd.bat");
}



function exec( cmd, options, logErrorMessage)
{
	try { cps.execSync( cmd, options); } catch(err) { if (logErrorMessage) console.log( err.message); }
}



