import { css } from '@microsoft/fast-element';
import { forcedColorsStylesheetBehavior } from '../utils/behaviors/match-media-stylesheet-behavior.js';
import {
  badgeBaseStyles,
  badgeFilledStyles,
  badgeGhostStyles,
  badgeOutlineStyles,
  badgeSizeStyles,
  badgeTintStyles,
} from '../styles/partials/badge.partials.js';
import { borderRadiusMedium, borderRadiusNone, borderRadiusSmall } from '../theme/design-tokens.js';
import { extraSmallState, roundedState, smallState, squareState, tinyState } from '../styles/states/index.js';
// why is the border not showing up?
/** Badge styles
 * @public
 */
export const styles = css`
  :host(${squareState}) {
    border-radius: ${borderRadiusNone};
  }

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
  ${badgeOutlineStyles}
  ${badgeTintStyles}
  ${badgeBaseStyles}
`.withBehaviors(
  forcedColorsStylesheetBehavior(css`
    :host,
    :host([appearance='outline']),
    :host([appearance='tint']) {
      border-color: CanvasText;
    }
  `),
);
