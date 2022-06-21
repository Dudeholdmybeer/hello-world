const CounterPlugin = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
} = {}) {
  // _value и  _step - приватные свойства
  this._rootSelector = rootSelector;
  this._value = initialValue;
  this._step = step;
  this._refs = this._getRefs(rootSelector);
  this._bindEvents();
  this.updateValueUI();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
  console.log(rootSelector);

  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector('[data-increment]');
  refs.decrementBtn = refs.container.querySelector('[data-decrement]');
  refs.value = refs.container.querySelector('[data-value]');

  console.log(refs.container);

  return refs;
};

CounterPlugin.prototype.increment = function () {
  this._value += this._step;
};

CounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};

CounterPlugin.prototype.updateValueUI = function () {
  this._refs.value.textContent = this._value;
};

CounterPlugin.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener('click', () => {
    console.log(this);
    this.increment();
    this.updateValueUI();
  });
  this._refs.decrementBtn.addEventListener('click', () => {
    console.log(this);
    this.decrement();
    this.updateValueUI();
  });
};

const counter1 = new CounterPlugin({ rootSelector: '#counter-1' });
console.log('~ counter1', counter1);
const counter2 = new CounterPlugin({ rootSelector: '#counter-2', step: 5 });
console.log('~ counter2', counter2);
const counter3 = new CounterPlugin({ rootSelector: '#counter-3', step: 10 });
console.log('~ counter3', counter3);
