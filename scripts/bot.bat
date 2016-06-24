@echo off

set name="%1"
echo %1
md bot_temp

robocopy /MIR  bot_temp %name%

rd bot_temp
rd %name%
