# Screenshot requirements

Screenshots are replaceable content assets, not layout dependencies. The current files were copied from the sibling launcher repository's `.uishots/final` directory as truthful temporary inputs. They must be refreshed after the launcher visual recovery pass.

## Current slots

| Slot | Current asset | Intended story | Replacement requirement |
| --- | --- | --- | --- |
| Hero library | `public/screenshots/library-grid.png` | Instance-first library | Use the strongest current Library frame with clear instance context and no empty-state ambiguity. |
| Instance detail | `public/screenshots/instance-detail.png` | Version/loader/settings boundary | Replace if the recovered instance hero changes materially. |
| Discover | `public/screenshots/page-discover.png` | Search/filter/install workflow | Prefer a current frame with legible provider facets and a real result. |
| Diagnostics | `public/screenshots/settings-diagnostics.png` | Repair and support bundle workflow | Prefer a current diagnostics frame with the recovered settings hierarchy. |

## Refresh gate

Near completion, re-read `D:\ferrite\ferrite-client`, inspect `.uishots/final`, compare available frames against these slots, and replace any outdated or weak asset. Never fabricate a Ferrite UI or use a mockup as a product screenshot.
