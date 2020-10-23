export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f92438a45e648455094adc4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6s9m76p3',
                  apiId: '9c9a2f55-bfa4-4f8e-b6b4-5927e3576fbf'
                },
                {
                  buildHookId: '5f92438a76a516427ae83510',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kw4ozo9h',
                  apiId: 'e7b548cc-3e98-4218-b2c7-1dc51a5f2354'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/YuxLiu/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kw4ozo9h.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
