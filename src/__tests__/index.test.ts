import { spaceRocketGlossary, randomTermFromSpaceRocketGlossary } from '../index';

describe('Check SpaceRocketGlossary has data', () => {
  test('should return list of strings', () => {
    expect(spaceRocketGlossary.length).toBeGreaterThan(1);
    expect(typeof spaceRocketGlossary[0]).toBe('string');
  });
  test('should return a random item from glossary', () => {
    expect(typeof randomTermFromSpaceRocketGlossary).toBe('string');
  });
});
