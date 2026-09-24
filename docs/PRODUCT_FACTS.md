# Ferrite public product facts

This file is the website's claim source. The sibling `ferrite-client` repository is read-only reference material; public copy must be checked against its `FEATURE_PARITY.md`, `README.md`, verification log and security documentation before release.

## SUPPORTED / VERIFIED

- Native Windows-first desktop launcher built with C#, .NET 10 and Avalonia.
- Isolated instances with independent Minecraft versions, loaders, mods, configuration, worlds, Java selection and launch settings.
- Instance clone, import, export, archive, search and backup-preserving destructive operations.
- Vanilla installation, version metadata, artifact verification and repair.
- Fabric, Quilt, Forge, NeoForge and OptiFine workflows.
- Java discovery, compatibility evaluation and runtime provisioning.
- Modrinth, CurseForge and FTB content browsing and installation paths.
- Mods, modpacks, resource packs, shader packs, datapacks, screenshots and world management.
- Crash/log parsing, operation history, verification, repair and redacted support-bundle export.
- Polish and English launcher UI, theme variants, storage relocation and signed-update plumbing.

## IN DEVELOPMENT / RELEASE QUALIFIED

- Ferrite is an active-development product; this website must not imply a stable public release.
- Current packages are unsigned and may trigger Windows SmartScreen.
- A public update feed requires publisher-owned hosting and signing keys.

## EXTERNALLY BLOCKED

- Live Minecraft Services account/profile flow depends on provider approval for Ferrite's public client registration.
- Quick-play's in-game completion still needs a human-observed session.
- Remote LAN play requires a relay service that Ferrite does not operate.

## NOT SUPPORTED / OUT OF SCOPE

- Bedrock Edition installation and management through the Java launcher pipeline.
- Official affiliation or endorsement by Mojang Studios, Microsoft, Modrinth or CurseForge.

## Privacy facts

- Launcher data is stored locally under its configurable data root.
- Windows token storage uses DPAPI; non-Windows environments are explicitly degraded.
- OAuth never receives or stores a Microsoft password.
- Logs and support bundles redact access tokens and the bundled provider credential.
- The initial website is static and has no analytics or marketing cookies.
