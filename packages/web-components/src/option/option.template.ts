import { html } from '@microsoft/fast-element';
import type { ElementViewTemplate } from '@microsoft/fast-element';
import type { Option } from './option.js';
import type { OptionOptions } from './option.options.js';

/**
 * Generates a template for the {@link (Option:class)} component.
 *
 * @param options - The {@link (OptionOptions:interface)} to use for generating the template.
 * @returns The template object.
 * @public
 */
export function optionTemplate<T extends Option>(options: OptionOptions = {}): ElementViewTemplate<T> {
  return html<T>`<slot></slot>`;
}

/**
 * Template for the Option component.
 * @public
 */
export const template: ElementViewTemplate<Option> = optionTemplate();
