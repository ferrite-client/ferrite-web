export type ReleaseState = 'development' | 'preview' | 'stable';

export const releaseState: ReleaseState = 'development';

export const releaseCopy: Record<ReleaseState, { label: string; title: string; description: string; cta: string }> = {
  development: {
    label: 'Active development',
    title: 'Ferrite is being built in the open.',
    description: 'The launcher is exercised against real Minecraft workflows, but public builds are not available yet.',
    cta: 'See development status',
  },
  preview: {
    label: 'Preview build',
    title: 'A preview build is available.',
    description: 'Preview releases are for players who want to help shape Ferrite before a stable release.',
    cta: 'View preview build',
  },
  stable: {
    label: 'Stable release',
    title: 'Ferrite is ready to install.',
    description: 'Download the current signed Windows build and keep your instances in one place.',
    cta: 'Download Ferrite',
  },
};

export const currentReleaseCopy = releaseCopy[releaseState];
