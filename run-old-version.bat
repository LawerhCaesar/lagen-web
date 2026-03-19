@echo off
echo Starting Lagen Shop - Pre-Mobile Optimization Version...
echo.
echo This will run the old version from commit a0be051 (before mobile responsiveness).
echo The old version has:
echo - Original navigation structure with different menu items
echo - PathName restrictions on sub-menus (hidden when on same page)
echo - Desktop-only navigation without mobile dropdowns
echo - Different styling and layout
echo.
echo Starting development server in old folder...
echo.

cd old
npm run dev