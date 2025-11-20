import { HM3 } from './config.js';

export class HM3ActiveEffectConfig extends foundry.applications.sheets.ActiveEffectConfig {

    /** @override */
    static PARTS = {
        ...super.PARTS,
        changes: {
            template: "systems/hm3/templates/effect/active-effect-config.html",
            scrollable: ["ol[data-changes]"]
        }
    };

    /** @override */
    async _prepareContext(options) {
        const context = await super._prepareContext(options);
        context.keyChoices = HM3.activeEffectKey;
        return context;
    }
}
