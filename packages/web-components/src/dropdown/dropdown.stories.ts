import { html } from '@microsoft/fast-element';
import type { Meta, Story, StoryArgs } from '../helpers.stories.js';
import { renderComponent } from '../helpers.stories.js';
import type { Dropdown as FluentDropdown } from './dropdown.js';

const storyTemplate = html<StoryArgs<FluentDropdown>>`<fluent-dropdown></fluent-dropdown>`;

export default {
  title: 'Components/Dropdown',
} as Meta<FluentDropdown>;

export const Dropdown: Story<FluentDropdown> = renderComponent(storyTemplate);
