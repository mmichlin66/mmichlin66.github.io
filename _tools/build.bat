rem @echo off

rem scripts
xcopy c:\work\MiM\TS\mimurl\dist\mimurl.js ..\scripts\ /i /y /d
xcopy c:\work\MiM\TS\mimurl\dist\mimurl.dev.js ..\scripts\ /i /y /d
xcopy c:\work\MiM\TS\mimbl\dist\mimbl.js ..\scripts\ /i /y /d
xcopy c:\work\MiM\TS\mimbl\dist\mimbl.dev.js ..\scripts\ /i /y /d
xcopy c:\work\MiM\TS\mimcl\dist\mimcl.js ..\scripts\ /i /y /d
xcopy c:\work\MiM\TS\mimcl\dist\mimcl.dev.js ..\scripts\ /i /y /d


rem mimurl-demo
xcopy c:\work\MiM\TS\mimurl-demo\dist\mimurl-demo.js ..\mimurl\ /i /y /d
xcopy c:\work\MiM\TS\mimurl-demo\dist\mimurl-demo.css ..\mimurl\ /i /y /d
xcopy c:\work\MiM\TS\mimurl-demo\dist\mimurl-demo.dev.js ..\mimurl\ /i /y /d
xcopy c:\work\MiM\TS\mimurl-demo\dist\mimurl-demo.dev.css ..\mimurl\ /i /y /d

rem mimurl reference
rem rmdir /S /Q ..\mimurl\reference
xcopy c:\work\MiM\TS\mimurl\dist\reference\*.* ..\mimurl\reference\*.* /i /y /d /s

rem mimbl reference
rem rmdir /S /Q ..\mimbll\reference
xcopy c:\work\MiM\TS\mimbl\dist\reference\*.* ..\mimbl\reference\*.* /i /y /d /s

pause

