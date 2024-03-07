export default class Building {
  constructor(sqft) {
    if (this.constructor.evacuationWarningMessage) {
      this._sqft = sqft;
    } else {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  evacuationWarningMessage() {} // eslint-disable-line
}
