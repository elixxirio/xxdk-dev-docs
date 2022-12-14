const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  doc: [
    'overview',
    'getting-started',
    {
      type: 'link',
      label: 'API Quick Reference',
      href: 'https://pkg.go.dev/gitlab.com/elixxir/client/xxdk',
    },
    {
      type: 'category',
      label: 'Building for Mobile',
      link: {
        type: 'generated-index',
      },
      items: [
        'mobile docs/ios-sdk',
      ],
    },
    {
      type: 'category',
      label: 'Reference Guides',
      link: {
        type: 'generated-index',
      },
      items: [
        'guides/cmix-client-keystore',
        'guides/ndf-retrieval',
      ],
    },
    'technical-glossary',
  ],
};

module.exports = sidebars;
