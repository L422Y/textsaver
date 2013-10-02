## textsaver: an ansilove.js scrolling ansi screensaver kit

### How to use:

Install the <code>WebViewScreenSaver</code> screen saver, open up your Desktop and Screen Saver preferences, and add the local file URL path to the included <code>index.html</code>:

For example:

	file:///Users/lawrencealan/Downloads/textsaver/index.html


To update the artwork, put any artpacks in the <code>packs</code> folder, then open terminal and run <code>update_index.sh</code>

This will update / regenerate the ansi file list so JavaScript knows what files are available.



### This project uses <a href="https://github.com/andyherbert/ansilove.js">ansilove.js</a>
Ansilove.js is a partial rewrite of ansilove and AnsiLove-C in the Javascript programming language. Unlike the original projects, Ansilove.js enables artscene related file formats to be displayed directly on a webpage on the client-side, and supports ANSi (.ANS), PCBOARD (.PCB), BiNARY (.BIN), ADF (.ADF), iDF (.IDF), TUNDRA (.TND) and XBiN (.XB) formats.

Ansilove.js supports the majority of options found in the original set of tools.

ansilove™ is a trademark of Frederic Cambus.
AnsiLove-C™ is a trademark of Stefan Vogt, Brian Cassidy and Frederic Cambus.

Ansilove.js has been tested on Safari, Firefox, and Chrome. Results may vary widely on Internet Explorer browsers.



	