# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build System

This project uses Gulp for building CSS from SCSS source files.

**Development Commands:**
- `npm run build` or `gulp` - Build CSS from SCSS and watch for changes
- `npm run compile` or `gulp css` - Compile SCSS to CSS once
- `npm run watch` or `gulp` - Same as build (watch mode is default)

**SCSS Architecture:**
- Source files: `scss/` directory with components, global styles, and utilities
- Output: `css/hm3.css` (with sourcemaps)
- Main entry point: `scss/hm3.scss`

## FoundryVTT System Architecture

This is a HarnMaster 3 game system for FoundryVTT virtual tabletop. The system follows FoundryVTT module patterns:

**Core Entry Points:**
- `module/hm3.js` - Main system initialization and Foundry hooks
- `system.json` - System manifest and metadata
- `template.json` - Actor and Item data templates

**Actor Types:**
- `character` - Player characters with full stats, skills, combat, inventory
- `creature` - NPCs, monsters, animals with simplified sheets  
- `container` - Chests, shops, storage containers

**Item Types:**
- `skill` - Character skills with base/mastery levels and formulas
- `spell` - Magic spells organized by convocation
- `invocation` - Ritual magic organized by deity  
- `psionic` - Psychic talents and abilities
- `weapongear` - Melee weapons with attack/defense values
- `missilegear` - Ranged weapons and ammunition
- `armorgear` - Armor with location-based protection
- `miscgear` - General equipment and items
- `containergear` - Bags, packs with capacity
- `injury` - Wounds and injury tracking
- `armorlocation` - Hit location definitions
- `trait` - Character traits and features

**Key Modules:**
- `module/actor/` - Actor classes and character sheets
- `module/item/` - Item classes and item sheets  
- `module/config.js` - System constants, skill definitions, combat tables
- `module/dice-hm3.js` - Custom dice rolling mechanics
- `module/combat.js` - Combat automation and chat integration
- `module/effect.js` - Active effects management
- `module/migrations.js` - Data migration between system versions

## HarnMaster 3 Game Mechanics

**Skill System:**
- Skills have base values calculated from ability scores using formulas
- Mastery Level (ML) represents training/experience  
- Effective ML = ML - Universal Penalty - Physical Penalty
- Skill formulas support sunsign modifiers (e.g., "Angberelius:2")

**Combat System:**
- Initiative based on Initiative skill
- Attack/Defense rolls use weapon skills
- Complex damage system with armor locations and injury levels
- Support for melee, missile, and unarmed combat

**Magic & Religion:**
- Convocational magic (6 convocations + Neutral)
- Ritual magic tied to deities with piety tracking
- Psionics as separate system

**Character Advancement:**
- Physical/Universal penalties from injuries and encumbrance
- Endurance tracking with fatigue effects
- Active effects for temporary modifiers

## Templates & UI

**Handlebars Templates:**
- `templates/actor/` - Character sheets (character, creature, container)
- `templates/item/` - Item detail sheets for all item types
- `templates/dialog/` - Dialog boxes for rolls and interactions  
- `templates/chat/` - Chat message cards for rolls and results

**CSS/SCSS Structure:**
- `scss/components/` - UI component styles
- `scss/global/` - FoundryVTT integration styles  
- `scss/utils/` - Variables, mixins, utilities

## Data Files

**Compendium Packs:**
- `packs/character/` - Default skills and character options
- `packs/esoteric/` - Spells, invocations, psionics
- `packs/possessions/` - Equipment and gear
- `packs/system-help/` - Documentation and help content

## Testing & Quality

**No formal test framework** is currently configured. Manual testing through FoundryVTT is the primary validation method.

**Common Development Workflow:**
1. Modify SCSS in `scss/` directory
2. Run `npm run build` to compile CSS and watch for changes
3. Test changes in FoundryVTT development environment
4. Use browser dev tools for debugging JavaScript/CSS issues

## Important Conventions

**Icon System:**
- Icons are mapped by name in `config.js` (e.g., `HM3.weaponSkillIcons`)
- SVG icons in `images/icons/svg/`, PNG deity icons in `images/icons/png/`

**Data Structure:**
- All game data follows `template.json` structure
- Actor abilities use base values with calculated effective values  
- Items inherit from base templates for shared functionality

**Foundry Integration:**
- System registers custom Document classes for Actors/Items
- Custom Active Effects for temporary modifiers
- Integration with Foundry's core dice rolling and chat systems

## Core System Constants

Critical game data is defined in `module/config.js`:
- `HM3.stdSkills` - Standard skill definitions with formulas
- `HM3.injuryLocations` - Hit location data for combat
- `HM3.meleeCombatTable` - Combat resolution matrices  
- `HM3.defaultItemIcons` - Icon mappings for automatic icon selection