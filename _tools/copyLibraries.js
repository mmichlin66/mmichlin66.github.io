let p = require( "path");
let ps = require( "process");
let cps = require( "child_process");

ps.chdir( p.join( __dirname, ".."));
console.log( "Current directory: " + ps.cwd());

console.log( "Copy scripts to " + p.join( ps.cwd(), "scripts"));
exec( "xcopy ..\\..\\mimurl\\dist\\mimurl.js     scripts\\ /i /y /d");
exec( "xcopy ..\\..\\mimurl\\dist\\mimurl.dev.js scripts\\ /i /y /d");
exec( "xcopy ..\\..\\mimbl\\dist\\mimbl.js       scripts\\ /i /y /d");
exec( "xcopy ..\\..\\mimbl\\dist\\mimbl.dev.js   scripts\\ /i /y /d");
exec( "xcopy ..\\..\\mimcl\\dist\\mimcl.js       scripts\\ /i /y /d");
exec( "xcopy ..\\..\\mimcl\\dist\\mimcl.dev.js   scripts\\ /i /y /d");


console.log( "Copy mimurl-demo to " + p.join( ps.cwd(), "mimurl"));
exec( "xcopy ..\\..\\mimurl-demo\\dist\\mimurl-demo.js        mimurl\\ /i /y /d");
exec( "xcopy ..\\..\\mimurl-demo\\dist\\mimurl-demo.css       mimurl\\ /i /y /d");
exec( "xcopy ..\\..\\mimurl-demo\\dist\\mimurl-demo.dev.js    mimurl\\ /i /y /d");
exec( "xcopy ..\\..\\mimurl-demo\\dist\\mimurl-demo.dev.css   mimurl\\ /i /y /d");

console.log( "Copy mimurl reference to " + p.join( ps.cwd(), "mimurl/reference"));
// rem rmdir /S /Q ..\mimurl\reference
exec( "xcopy ..\\..\\mimurl\\dist\\reference\\*.*   mimurl\\reference\\*.* /i /y /d /s");

console.log( "Copy mimbl reference to " + p.join( ps.cwd(), "mimbl/reference"));
// rem rmdir /S /Q ..\\mimbl/reference
exec( "xcopy ..\\..\\mimbl\\dist\\reference\\*.*   mimbl\\reference\\*.* /i /y /d /s");

console.log( "copyLibraries.js script has finished");



function exec( cmd, logErrorMessage)
{
	try { cps.execSync( cmd); } catch(err) { if (logErrorMessage) console.log( err.message); }
}