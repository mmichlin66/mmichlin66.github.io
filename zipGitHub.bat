"C:\Program Files (x86)\7-Zip\7z" a -tzip GitHub.zip .\*.* -r -x!dist -x!.vs -x!node_modules -x!package-lock.json -x!.git* -x!_site -x!.sass-cache
pause
