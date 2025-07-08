export default class Operation {
  constructor(operation, className) {
    this.operation = document.querySelector(operation);
    this.className = className;
  }
  dataOperation() {
    this.weekdays = this.operation.dataset.semana.split(",").map(Number);
    this.weekhour = this.operation.dataset.horario.split(",").map(Number);
  }
  dateNow() {
    this.now = new Date();

    this.today = this.now.getDay();
    this.atm = this.now.getUTCHours() - 3;
  }

  isOpen() {
    this.openWeekday = this.weekdays.indexOf(this.today) !== -1;
    this.openingHours =
      this.atm >= this.weekhour[0] && this.atm < this.weekhour[1];
    return this.openWeekday && this.openingHours;
  }
  onActiveOpen() {
    if (this.isOpen()) {
      this.operation.classList.add(this.className);
    }
  }

  init() {
    if (this.operation) {
      this.dataOperation();
      this.dateNow();
      this.onActiveOpen();
    }
    return this;
  }
}
