const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const rate = document.querySelectorAll(".ratings");

class UserRatings {
  _color = "hsl(25, 97%, 53%)";

  render() {
    rate.forEach((arr, index) => {
      arr.addEventListener("click", () => {
        const value = arr.dataset.value;

        this.displayThanks(value);
        this.deactivate();
        this.active(arr);
      });
    });
  }

  displayThanks(rate) {
    const html = `
  <div class="img">
          <img src="/images/illustration-thank-you.svg" alt="" />
        </div>
        <div class="rate">
          <p class="rate-text">You Selected ${rate} out of 5</p>
        </div>
        <div class="message">
          <p class="thank">Thank you</p>
          <p class="thank-msg">
            we appreciate you taking the time to give a rating.If you ever
            need more support ,don't hesitate to get in touch!
          </p>
  </div>
  `;
    btn.addEventListener("click", () => {
      container.innerHTML = "";
      container.insertAdjacentHTML("afterbegin", html);
    });
  }

  active(ele) {
    ele.style.backgroundColor = this._color;
  }

  deactivate(ele) {
    rate.forEach((e) => {
      e.style.backgroundColor = "hsla(217, 12%, 63%, 0.303)";
    });
  }
}

const user = new UserRatings();
user.render();

console.log("all are welcome");
