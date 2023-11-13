export {};

const user = {
  id: 123,
  admin: false,
  becomeAdmin() {
    this.admin = true;
  },
};

// <button onClick="myClickHandler">Click on me!</button>

function myClickHandler(
  this: HTMLButtonElement,
  e: Event,
) {
  this.disabled = true;
}
