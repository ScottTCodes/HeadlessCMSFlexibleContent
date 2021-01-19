// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document Types
import route from "./documents/route";
import page from "./documents/page";

// Object types
import blockContent from "./objects/blockContent";
import figure from "./objects/figure";
import internalLink from "./objects/internalLink";
import link from "./objects/link";
import portableText from "./objects/portableText";
import simplePortableText from "./objects/simplePortableText";

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Document Types
    page,
    route,

    // Object Types
    link,
    internalLink,
    figure,
    blockContent,
    portableText,
    simplePortableText,
  ]),
})
