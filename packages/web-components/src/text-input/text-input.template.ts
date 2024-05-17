import { ElementViewTemplate, html, ref } from '@microsoft/fast-element';
import { endSlotTemplate, startSlotTemplate } from '../patterns/index.js';
import type { TextInput } from './text-input.js';
import type { TextInputOptions } from './text-input.options.js';

/**
 * Generates a template for the TextInput component.
 *
 * @public
 */
export function textInputTemplate<T extends TextInput>(options: TextInputOptions = {}): ElementViewTemplate<T> {
  return html<T>`
    ${startSlotTemplate(options)}
    <span
      contenteditable="${x => (x.disabled || x.readonly ? 'false' : 'true')}"
      role="presentation"
      class="control"
      part="control"
      @beforeinput="${(x, c) => x.beforeInputHandler(c.event as InputEvent)}"
      @change="${(x, c) => x.changeHandler(c.event as InputEvent)}"
      @input="${(x, c) => x.inputHandler(c.event as InputEvent)}"
      @keypress="${(x, c) => x.keypressHandler(c.event as KeyboardEvent)}"
      @paste="${(x, c) => x.pasteHandler(c.event as ClipboardEvent)}"
      ${ref('control')}
    ></span>
    <span class="placeholder" part="placeholder" aria-hidden="true">${x => x.placeholder}</span>
    ${endSlotTemplate(options)}
  `;
}

/**
 * @internal
 */
export const template: ElementViewTemplate<TextInput> = textInputTemplate();
