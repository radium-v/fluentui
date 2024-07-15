import { html } from '@microsoft/fast-element';
import type { ElementViewTemplate } from '@microsoft/fast-element';
import type { Dropdown } from './dropdown.js';
import type { DropdownOptions } from './dropdown.options.js';

/**
 * Generates a template for the {@link (Dropdown:class)} component.
 *
 * @param options - The {@link (DropdownOptions:interface)} to use for generating the template.
 * @returns The template object.
 * @public
 */
export function dropdownTemplate<T extends Dropdown>(options: DropdownOptions = {}): ElementViewTemplate<T> {
  return html<T>`<template></template>`;
}

/**
 * Template for the Dropdown component.
 * @public
 */
export const template: ElementViewTemplate<Dropdown> = dropdownTemplate();
