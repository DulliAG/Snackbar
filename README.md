<h1 align="center">Snackbar</h1>

> Simple & reliable snackbar used by dulliag.de

---

## :bulb: How to use

1. Import CSS-Stylesheet using `<link rel="stylesheet" href="./snackbar.css" />`
2. Import JavaScript-File using `<script src="./snackbar"></script>`
3. How to run an snackbar

```js
// Run success-snackbar
new Snackbar("This is some dummy text", 3000).success();

// Run info-snackbar
new Snackbar("This is some dummy text", 3000).info();

// Run error-snackbar
new Snackbar("This is some dummy text", 3000).error();
```

4. You can edit some settings in the constructor of the class

```js
constructor(text, duration = 5000/* This is the default time in milliseconds the snackbar is visivle*/) {
  this.text = text;
  this.duration = duration;
  this.closeText = "Ok"; // Change the dismiss-button text
}
```

5. The [CSS-Stylesheet](./snackbar.css) uses variables for colors & other snackbar-settings

```css
:root {
  --maxWidth: 350px !important;
  --width: 350px !important;
  --backgroundColor: #333 !important;
  --success: #28a745 !important;
  --info: #007bff !important;
  --error: #dc3545 !important;
  --borderRadius: 8px !important;
  --text: rgba(255, 255, 255, 0.8) !important;
  --buttonHover: rgba(255, 255, 255, 0.15) !important;
}
```

---

## :link: Ressourcen

[FontAwesome](https://fontawesome.com/)
