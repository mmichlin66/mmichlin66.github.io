let p = require( "path");
let ps = require( "process");
let cps = require( "child_process");

ps.chdir( p.join( __dirname, ".."));
console.log( "Current directory: " + ps.cwd());

console.log( "Copy scripts to " + p.join( ps.cwd(), "scripts"));
exec( "xcopy ..\\mimcss\\lib\\mimcss.js     scripts\\ /i /y /d");
exec( "xcopy ..\\mimcss\\lib\\mimcss.dev.js scripts\\ /i /y /d");
exec( "xcopy ..\\mimurl\\lib\\mimurl.js     scripts\\ /i /y /d");
exec( "xcopy ..\\mimurl\\lib\\mimurl.dev.js scripts\\ /i /y /d");
exec( "xcopy ..\\mimbl\\lib\\mimbl.js       scripts\\ /i /y /d");
exec( "xcopy ..\\mimbl\\lib\\mimbl.dev.js   scripts\\ /i /y /d");
exec( "xcopy ..\\mimcl\\lib\\mimcl.js       scripts\\ /i /y /d");
exec( "xcopy ..\\mimcl\\lib\\mimcl.dev.js   scripts\\ /i /y /d");


console.log( "Copy mimurl-demo to " + p.join( ps.cwd(), "mimurl"));
exec( "xcopy ..\\mimurl-demo\\lib\\mimurl-demo.js        mimurl\\ /i /y /d");
// exec( "xcopy ..\\mimurl-demo\\lib\\mimurl-demo.dev.js    mimurl\\ /i /y /d");

console.log( "Copy mim-tsplay to " + p.join( ps.cwd(), "mimcss/demo"));
exec( "xcopy ..\\mim-tsplay\\lib\\*.ttf                 mimcss\\demo\\ /i /y /d");
exec( "xcopy ..\\mim-tsplay\\lib\\editor.worker.js      mimcss\\demo\\ /i /y /d");
exec( "xcopy ..\\mim-tsplay\\lib\\ts.worker.js          mimcss\\demo\\ /i /y /d");
exec( "xcopy ..\\mim-tsplay\\lib\\mim-tsplay.js         mimcss\\demo\\ /i /y /d");
exec( "xcopy ..\\mimcss\\lib\\mimcss.js                 mimcss\\demo\\ /i /y /d");
exec( "xcopy ..\\mimbl\\lib\\mimbl.js                   mimcss\\demo\\ /i /y /d");

console.log( "Copy mimcss types to " + p.join( ps.cwd(), "mimcss/demo"));
exec( "xcopy ..\\mimcss\\lib\\index.d.ts                mimcss\\demo\\mimcss\\ /i /y /d");
exec( "xcopy ..\\mimcss\\lib\\styles\\*Types.d.ts       mimcss\\demo\\mimcss\\styles\\ /i /y /d");
exec( "xcopy ..\\mimcss\\lib\\rules\\RuleTypes.d.ts     mimcss\\demo\\mimcss\\rules\\ /i /y /d");
exec( "xcopy ..\\mimcss\\lib\\api\\*.d.ts               mimcss\\demo\\mimcss\\api\\ /i /y /d");

console.log( "Copy mimbl types to " + p.join( ps.cwd(), "mimcss/demo"));
exec( "xcopy ..\\mimbl\\lib\\index.d.ts                 mimcss\\demo\\mimbl\\ /i /y /d");
exec( "xcopy ..\\mimbl\\lib\\utils\\EventSlot.d.ts      mimcss\\demo\\mimbl\\utils\\ /i /y /d");
exec( "xcopy ..\\mimbl\\lib\\utils\\TriggerWatcher.d.ts mimcss\\demo\\mimbl\\utils\\ /i /y /d");
exec( "xcopy ..\\mimbl\\lib\\api\\*.d.ts                mimcss\\demo\\mimbl\\api\\ /i /y /d");
exec( "xcopy ..\\mimbl\\lib\\comp\\Popups.d.ts          mimcss\\demo\\mimbl\\comp\\ /i /y /d");

console.log( "copyLibs.js script has finished");



function exec( cmd, logErrorMessage)
{
	try { cps.execSync( cmd); } catch(err) { if (logErrorMessage) console.log( err.message); }
}