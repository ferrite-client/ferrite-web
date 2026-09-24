import { describe, expect, it } from 'vitest';
import { currentReleaseCopy, releaseState } from '../src/data/release';

describe('release state', () => {
  it('starts in development and exposes one consistent CTA', () => {
    expect(releaseState).toBe('development');
    expect(currentReleaseCopy.label).toBe('Active development');
    expect(currentReleaseCopy.cta).toBe('See development status');
  });
});
