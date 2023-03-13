import { spaceRocketGlossary } from './data/space-rocket-data';

const randomTermFromSpaceRocketGlossary = spaceRocketGlossary[Math.floor(Math.random() * spaceRocketGlossary.length)];

export { spaceRocketGlossary, randomTermFromSpaceRocketGlossary };
