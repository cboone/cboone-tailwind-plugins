import plugin from "tailwindcss/plugin";

/**
 * Child Selectors Plugin
 *
 * Provides custom variants for targeting child and descendant elements.
 *
 * Direct children (>):
 *   >*        - & > *
 *   >a        - & > a
 *   >button   - & > button
 *   >div      - & > div
 *   >h2       - & > h2
 *   >p        - & > p (also matches .p class)
 *
 * With pseudo-classes:
 *   >div:first              - & > div:first-child
 *   >h2:first-of-type       - & > h2:first-of-type
 *   >h2:not:first-of-type   - & > h2:not(:first-of-type)
 *   >p:last                 - & > p:last-child (also matches .p)
 *
 * Adjacent siblings:
 *   >section+h2  - & > section + h2
 *   >p+h2        - & > p + h2
 *
 * Descendants (~>):
 *   ~>a       - & a
 *   ~>iframe  - & iframe
 *   ~>img     - & img
 *   ~>p       - & p (also matches .p)
 *   ~>ol      - & ol
 *   ~>ul      - & ul
 *
 * Nested descendants:
 *   ~>p>a     - & p > a (also matches .p)
 *   ~>p_a     - & p a (space, also matches .p)
 *   ~>ol_a    - & ol a
 *   ~>ul_a    - & ul a
 *   ~>ol+h2   - & ol + h2
 *   ~>ol+p    - & ol + p
 *   ~>ul+h2   - & ul + h2
 *   ~>ul+p    - & ul + p
 *   >p>a      - & > p > a (also matches .p)
 *   >p>a_span - & > p > a span (also matches .p)
 */
export default plugin(({ addVariant }) => {
  // Direct child selectors
  addVariant(">*", "& > *");
  addVariant(">a", "& > a");
  addVariant(">button", "& > button");
  addVariant(">div", "& > div");
  addVariant(">div:first", "& > div:first-child");
  addVariant(">h2", "& > h2");
  addVariant(">h2:first-of-type", "& > h2:first-of-type");
  addVariant(">h2:not:first-of-type", "& > h2:not(:first-of-type)");
  addVariant(">section+h2", "& > section + h2");
  addVariant(">p+h2", "& > p + h2");

  // Direct child with .p class fallback (for styled paragraph divs)
  addVariant(">p", ["& > p", "& > .p"]);
  addVariant(">p:last", ["& > p:last-child", "& > .p:last-child"]);
  addVariant(">p>a", ["& > p > a", "& > .p > a"]);
  addVariant(">p>a_span", ["& > p > a span", "& > .p > a span"]);

  // Descendant selectors
  addVariant("~>a", "& a");
  addVariant("~>iframe", "& iframe");
  addVariant("~>img", "& img");
  addVariant("~>ol", "& ol");
  addVariant("~>ul", "& ul");

  // Descendant with .p class fallback
  addVariant("~>p", ["& p", "& .p"]);
  addVariant("~>p>a", ["& p > a", "& .p > a"]);
  addVariant("~>p_a", ["& p a", "& .p a"]);

  // List descendant combinations
  addVariant("~>ol_a", "& ol a");
  addVariant("~>ul_a", "& ul a");
  addVariant("~>ol+h2", "& ol + h2");
  addVariant("~>ol+p", "& ol + p");
  addVariant("~>ul+h2", "& ul + h2");
  addVariant("~>ul+p", "& ul + p");
});
