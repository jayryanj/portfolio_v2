const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const projectTemplate = path.resolve('./src/templates/project.js')

    const projectResult = await graphql(`
        query {
            allContentfulProject {
                nodes {
                    name
                    slug
                }
            }
        }
  `)

    if (projectResult.errors) {
    reporter.panicOnBuild(
        `There was an error loading your Contentful posts`,
        result.errors
    )
        return
  }

    const projects = projectResult.data.allContentfulProject.nodes;

  
    if (projects.length > 0) {
        projects.forEach((project, index) => {
            createPage({
                path: `/projects/${project.slug}`,
                component: projectTemplate,
                context: {
                    slug: project.slug
                }
            });
            console.log(`Created page for ${project.slug}`)
        })
    }
}
