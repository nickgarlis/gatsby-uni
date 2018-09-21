'use strict';

// Add custom field to MarkdownRemark nodes.
module.exports = exports.onCreateNode = ({
  boundActionCreators,
  getNode,
  node,
}) => {
  const {createNodeField} = boundActionCreators;

  if (node.internal.type === `MarkdownRemark`) {
    const parent = getNode(node.parent);

    if (parent.internal.type === 'File') {
      createNodeField({
        name: `collection`,
        node,
        value: parent.sourceInstanceName,
      });
    }
  }
};
