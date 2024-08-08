export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  getCode() {
    return this._code;
  }

  setCode(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = newCode;
  }

  getName() {
    return this._name;
  }

  setName(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
