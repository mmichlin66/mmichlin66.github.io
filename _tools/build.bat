rem @echo off

rem scripts
xcopy c:\work\MiM\TS\mimurl\dist\mimurl.js ..\scripts\ /i /y /d >nul
xcopy c:\work\MiM\TS\mimurl\dist\mimurl.dev.js ..\scripts\ /i /y /d >nul
xcopy c:\work\MiM\TS\mimbl\dist\mimbl.js ..\scripts\ /i /y /d >nul
xcopy c:\work\MiM\TS\mimbl\dist\mimbl.dev.js ..\scripts\ /i /y /d >nul
xcopy c:\work\MiM\TS\mimcl\dist\mimcl.js ..\scripts\ /i /y /d >nul
xcopy c:\work\MiM\TS\mimcl\dist\mimcl.dev.js ..\scripts\ /i /y /d >nul


rem mimurl-demo
xcopy c:\work\MiM\TS\mimurl\README.md .\ /i /y /d >nul

xcopy c:\work\MiM\TS\mimurl-demo\dist\mimurl-demo.js ..\mimurl\demo\ /i /y /d >nul
xcopy c:\work\MiM\TS\mimurl-demo\dist\mimurl-demo.css ..\mimurl\demo\ /i /y /d >nul
xcopy c:\work\MiM\TS\mimurl-demo\dist\mimurl-demo.dev.js ..\mimurl\demo\ /i /y /d >nul
xcopy c:\work\MiM\TS\mimurl-demo\dist\mimurl-demo.dev.css ..\mimurl\demo\ /i /y /d >nul

xcopy c:\work\MiM\TS\mimurl\dist\reference\*.* .\reference\ /i /y /d /s >nul

