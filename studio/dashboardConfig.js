export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60c55bca61cb7c8f1e5254c0',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-qfbcruii',
                  apiId: 'a21fd757-bea6-4d10-83af-421bcfe4e2e5'
                },
                {
                  buildHookId: '60c55bcaad233d97c80a0238',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-psz9agpe',
                  apiId: '2715d79f-4188-43be-8a2a-f15b62ff1d5c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/freshyill/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-psz9agpe.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
