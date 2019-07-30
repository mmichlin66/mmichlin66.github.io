@echo off

rem readme
xcopy c:\work\MiM\TS\mimurl\README.md .\ /i /y /d >nul

rem demo
xcopy c:\work\MiM\TS\mimurl-demo\dist\mimurl-demo.js .\demo\ /i /y /d >nul
xcopy c:\work\MiM\TS\mimurl-demo\src\main.css .\demo\ /i /y /d >nul
xcopy c:\work\MiM\TS\mimurl-demo\dist\mimurl-demo.styles.css .\demo\ /i /y /d >nul

rem reference
xcopy c:\work\MiM\TS\mimurl\dist\reference\*.* .\reference\ /i /y /d /s >nul

