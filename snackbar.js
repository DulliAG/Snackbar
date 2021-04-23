class Snackbar {
  /**
   *
   * @param {string} text
   * @param {number} duration
   */
  constructor(text, duration = 3000) {
    this.text = text;
    this.duration = duration;
    this.closeText = "Schließen";
  }

  init() {
    // <div class="snackbar bottom-right">
    //   <p class="text">${this.text}</p>
    //   <div class="button-container">
    //     <button class="dismiss">CLOSE</button>
    //   </div>
    // </div>

    // Check if there is already an snackbar which is shown
    if (document.querySelector(".snackbar") == null) {
      var container = document.createElement("div");
      container.classList.add("snackbar", "bottom-right");
      var text = document.createElement("p");
      text.classList.add("text");
      text.innerText = this.text;
      var btnContainer = document.createElement("div");
      btnContainer.classList.add("button-container");
      var dismissBtn = document.createElement("button");
      dismissBtn.classList.add("dismiss");
      dismissBtn.innerHTML = this.closeText.toUpperCase();

      btnContainer.appendChild(dismissBtn);
      container.appendChild(text);
      container.appendChild(btnContainer);
      document.body.appendChild(container);

      // Remove the snackbar after the delay
      var dismiss = setInterval(() => {
        document.querySelector(".snackbar").remove();
        clearInterval(dismiss);
      }, this.duration);

      document.querySelector(".snackbar .dismiss").addEventListener("click", function () {
        document.querySelector(".snackbar").remove();
        clearInterval(dismiss);
      });
    }
  }
}
