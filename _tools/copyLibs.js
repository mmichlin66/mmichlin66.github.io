let p = require( "path");
let ps = require( "process");
let cps = require( "child_process");

ps.chdir( p.join( __dirname, ".."));
console.log( "Current directory: " + ps.cwd());

console.log( "Copy scripts to " + p.join( ps.cwd(), "scripts"));
exec( "xcopy ..\\..\\mimcss\\lib\\mimcss.js     scripts\\ /i /y /d");
exec( "xcopy ..\\..\\mimcss\\lib\\mimcss.dev.js scripts\\ /i /y /d");
exec( "xcopy ..\\..\\mimurl\\lib\\mimurl.js     scripts\\ /i /y /d");
exec( "xcopy ..\\..\\mimurl\\lib\\mimurl.dev.js scripts\\ /i /y /d");
exec( "xcopy ..\\..\\mimbl\\lib\\mimbl.js       scripts\\ /i /y /d");
exec( "xcopy ..\\..\\mimbl\\lib\\mimbl.dev.js   scripts\\ /i /y /d");
exec( "xcopy ..\\..\\mimcl\\lib\\mimcl.js       scripts\\ /i /y /d");
exec( "xcopy ..\\..\\mimcl\\lib\\mimcl.dev.js   scripts\\ /i /y /d");


console.log( "Copy mimurl-demo to " + p.join( ps.cwd(), "mimurl"));
exec( "xcopy ..\\..\\mimurl-demo\\lib\\mimurl-demo.js        mimurl\\ /i /y /d");
// exec( "xcopy ..\\..\\mimurl-demo\\lib\\mimurl-demo.dev.js    mimurl\\ /i /y /d");

console.log( "Copy mimcss-demo to " + p.join( ps.cwd(), "mimcss/demo"));
exec( "xcopy ..\\..\\mimcss-demo\\lib\\*.ttf                        mimcss\\demo\\ /i /y /d");
exec( "xcopy ..\\..\\mimcss-demo\\lib\\editor.worker.js             mimcss\\demo\\ /i /y /d");
exec( "xcopy ..\\..\\mimcss-demo\\lib\\ts.worker.js                 mimcss\\demo\\ /i /y /d");
exec( "xcopy ..\\..\\mimcss-demo\\lib\\mimcss.js                    mimcss\\demo\\ /i /y /d");
exec( "xcopy ..\\..\\mimcss-demo\\lib\\mimbl.js                     mimcss\\demo\\ /i /y /d");
exec( "xcopy ..\\..\\mimcss-demo\\lib\\mimurl.js                    mimcss\\demo\\ /i /y /d");
exec( "xcopy ..\\..\\mimcss-demo\\lib\\mimcl.js                     mimcss\\demo\\ /i /y /d");
exec( "xcopy ..\\..\\mimcss-demo\\lib\\mimcss-demo.js               mimcss\\demo\\ /i /y /d");
exec( "xcopy ..\\..\\mimcss-demo\\lib\\require.js                   mimcss\\demo\\ /i /y /d");
exec( "xcopy ..\\..\\mimcss-demo\\lib\\MimcssDemoHtmlTemplate.html  mimcss\\demo\\ /i /y /d");
exec( "xcopy ..\\..\\mimcss-demo\\lib\\extra-lib-list.json          mimcss\\demo\\ /i /y /d");
exec( "xcopy ..\\..\\mimcss-demo\\lib\\mimcss\\*                    mimcss\\demo\\mimcss\\ /s /i /y /d");
exec( "xcopy ..\\..\\mimcss-demo\\lib\\mimbl\\*                     mimcss\\demo\\mimbl\\ /s /i /y /d");
exec( "xcopy ..\\..\\mimcss-demo\\lib\\mimurl\\*                    mimcss\\demo\\mimurl\\ /s /i /y /d");
exec( "xcopy ..\\..\\mimcss-demo\\lib\\mimcl\\*                     mimcss\\demo\\mimcl\\ /s /i /y /d");
exec( "xcopy ..\\..\\mimcss-demo\\lib\\examples\\*                  mimcss\\demo\\examples\\ /s /i /y /d");

console.log( "copyLibs.js script has finished");



function exec( cmd, logErrorMessage)
{
	try { cps.execSync( cmd); } catch(err) { if (logErrorMessage) console.log( err.message); }
}