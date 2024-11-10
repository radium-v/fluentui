import type { ValuesOf } from '../utils/typings.js';

/**
 * Dialog modal type
 * @public
 */
export const DialogType = {
  modal: 'modal',
  nonModal: 'non-modal',
  alert: 'alert',
} as const;

export type DialogType = ValuesOf<typeof DialogType>;
