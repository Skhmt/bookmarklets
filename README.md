# Bookmarklets for Chrome

## Manual install

1. Find a bookmarklet
1. Copy it - don't worry about formatting, Chrome will automatically put it into a single line
1. Right click your bookmark bar
1. Select `Add Page`
1. Paste the bookmarklet into the `URL:` field
1. Choose a name and put it into the `Name:` field
1. Hit `Save`

## Tips on making your own bookmarklets

* Semi-colons are _not_ optional 
* Don't use single line comments (`//`) - multi-line comments (`/* ... */`) are fine 
* You do not need to wrap it in an IIFE like: `javascript: (function(){ /*code here*/ })();`
   * It is a good practice, however, to wrap your code in curly braces like: `javascript: { /*code here*/ }`
