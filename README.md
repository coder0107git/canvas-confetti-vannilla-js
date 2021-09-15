Canvas Confetti Vanilla JavaScript
======

This is a Vanilla Javascript verion of the canvas confetti found at github.com/instructure/canvas-lms/ui/shared/confetti/

Usage
======

Import it using `import * as renderConfetti from "/confetti/react/index.js";` and you can use like the following where `#confetti-container` is the css slector for your div that will contain the confetti and document is `window.document`.
```JavaScript
renderConfetti(document, '#confetti-container');
```
