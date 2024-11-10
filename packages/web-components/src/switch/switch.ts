import type { StaticallyComposableHTML } from '../utils/template-helpers.js';
import { BaseCheckbox } from '../checkbox/checkbox.js';

export type SwitchOptions = {
  switch?: StaticallyComposableHTML<Switch>;
};

export class Switch extends BaseCheckbox {
  constructor() {
    super();
    this.elementInternals.role = 'switch';
  }
}
