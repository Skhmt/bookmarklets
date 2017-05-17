# Bookmarklets

### Manual install

1. Find a bookmarklet
1. Copy it - don't worry about formatting, Chrome will automatically put it into a single line
1. Right click your bookmark bar
1. Select `Add Page`
1. Paste the bookmarklet into the `URL:` field
1. Choose a name and put it into the `Name:` field
1. Hit `Save`

### Tips on making your own bookmarklets

* Semi-colons _are not optional_
* Don't use single line comments (`//`) - multi-line comments (`/* ... */`) are fine but must appear at any point _after_ `javascript:`
* You do _not_ need to wrap it in an IIFE like this: `javascript: (function(){ /*code here*/ })();`
   * It is a good practice, however strictly unnecessary, to wrap your code in curly braces like this: `javascript: { /*code here*/ }`
* If you share your bookmarklets, putting them into a link makes it easy for users to save, but you have to be careful about your use of `'` or `"`
* If you share your bookmarklets on a place with markdown, you might have to be careful on your use of ES6 string template literals
* While you _can_ use Closure Compiler, I'd really recommend leaving your code at least somewhat legible so the user has the chance to verify your code isn't malicious
