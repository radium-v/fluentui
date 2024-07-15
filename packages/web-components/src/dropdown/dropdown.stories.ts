import { html } from '@microsoft/fast-element';
import type { Meta, Story, StoryArgs } from '../helpers.stories.js';
import { renderComponent } from '../helpers.stories.js';
import type { Dropdown as FluentDropdown } from './dropdown.js';

const storyTemplate = html<StoryArgs<FluentDropdown>>`
  <fluent-dropdown>
    <fluent-option value="1">Option 1</fluent-option>
    <fluent-option value="2">Option 2</fluent-option>
    <fluent-option value="3">Option 3</fluent-option>
  </fluent-dropdown>
`;

export default {
  title: 'Components/Dropdown',
} as Meta<FluentDropdown>;

export const Dropdown: Story<FluentDropdown> = renderComponent(storyTemplate);
