/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async function({actions, graphql}) {
  const result = await graphql(`
    query AllFallenList {
      datakam {
        fallen:querydocument(
          query:
          {
            Name: "com.kamestery.devdata:##:fallen"
          })
        {Title Body Slug DocumentID Media {MediaID FileUrl Tags}}
      }
    }
  `);
  result.data.datakam.fallen.forEach(document => {
    const slug = document.Slug;
    // console.log(`DOCUMENT:::: ${slug}`);
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/article.js`),
      context: {document: document},
    });
  });
};
// `
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `
