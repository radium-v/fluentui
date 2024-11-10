import { css } from '@microsoft/fast-element';
import {
  badgeBaseStyles,
  badgeFilledStyles,
  badgeGhostStyles,
  badgeSizeStyles,
} from '../styles/partials/badge.partials.js';
import { dotState, extraSmallState, roundedState, smallState, tinyState } from '../styles/states/index.js';
import { borderRadiusMedium, borderRadiusSmall } from '../theme/design-tokens.js';

/** Badge styles
 * @public
 */
export const styles = css`
  :host(${roundedState}) {
    border-radius: ${borderRadiusMedium};
  }

  :host(${roundedState}${tinyState}),
  :host(${roundedState}${extraSmallState}),
  :host(${roundedState}${smallState}) {
    border-radius: ${borderRadiusSmall};
  }

  ${badgeSizeStyles}
  ${badgeFilledStyles}
  ${badgeGhostStyles}
  ${badgeBaseStyles}

  :host(${dotState}),
  :host(${dotState}[appearance][size]) {
    min-width: auto;
    width: 6px;
    height: 6px;
    padding: 0;
  }
`;
