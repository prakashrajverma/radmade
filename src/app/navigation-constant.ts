import { NavigationGroup } from './shell/core/navigation-group';
export const navigation: NavigationGroup[] = [
  {
    'id': '680C586B-787B-43AD-AB35-8EE68EFED5B7',
    'name': null,
    'navigations': [
      {
        'id': 'DDEFDFC3-8CDA-4223-AB94-1B74D1A4DED8',
        'name': 'dashboard',
        'icon': 'fas fa-tachometer-alt',
        'active': false,
        'children': null,
        'metadata': {
          'title': 'dashboard',
          'url': 'https://www.google.com/webhp?igu=1'
        }
      }
    ]
  },
  {
    'id': 'F316D608-6134-404B-AD40-3E6EE15602C2',
    'name': 'inventory',
    'navigations': [
      {
        'id': '1B2E3F0A-2D05-4C30-98AF-C757F4B8CE06',
        'name': 'purchase',
        'icon': 'far fa-file-alt',
        'active': false,
        'children': null,
        'metadata': {
          'title': 'purchase',
          'url': 'http://hourly-app.com/'
        }
      },
      {
        'id': 'F816787A-1C2C-4808-B2F8-094D4847FF3B',
        'name': 'sales',
        'icon': 'far fa-file-alt',
        'active': false,
        'children': [
          {
            'id': '43BDAC86-FA59-4B0C-BAD4-33A572F17984',
            'name': 'wholesalers',
            'icon': null,
            'active': false,
            'children': null,
            'metadata': {
              'title': 'sales',
              'url': 'https://getdooapp.com/'
            }
          },
          {
            'id': '29325342-4B7A-4676-B854-D59CC145C562',
            'name': 'customer cr/dr',
            'icon': null,
            'active': false,
            'children': null,
            'metadata': {
              'title': 'customer',
              'url': 'http://disruptionmag.com/'
            }
          },
          {
            'id': '4E3BEB92-6D75-4D8A-AE20-EF3B31F68A8D',
            'name': 'sales return',
            'icon': null,
            'active': false,
            'children': null,
            'metadata': {
              'title': 'sales return',
              'url': 'https://koto.studio/'
            }
          }
        ],
        'metadata': null
      },
      {
        'id': '1C692CCF-AA8D-48F4-9A2A-7A9DC0471B85',
        'name': 'Master',
        'icon': 'far fa-file-alt',
        'active': false,
        'children': null,
        'metadata': {
          'title': 'master',
          'url': 'http://www.buildinamsterdam.com/'
        }
      },
      {
        'id': '35F4FB14-4136-4670-8E54-1FB2E8887CD6',
        'name': 'reports',
        'icon': 'far fa-file-alt',
        'active': false,
        'children': [
          {
            'id': 'B03C180D-F9A9-4AF5-A319-DFA9256BFC0B',
            'name': 'invoice report',
            'icon': null,
            'active': false,
            'children': null,
            'metadata': {
              'title': 'invoice report',
              'url': 'https://paystack.com/'
            }
          },
          {
            'id': '9AD5650D-4448-4466-B580-1FD3C720C18B',
            'name': 'stock report',
            'icon': null,
            'active': false,
            'children': null,
            'metadata': {
              'title': 'stock report',
              'url': 'https://in-vision.at/'
            }
          },
          {
            'id': '6F3A371E-AA8F-495C-8293-BA21CC2EC542',
            'name': 'purchase',
            'icon': null,
            'active': false,
            'children': [
              {
                'id': '9818788A-0FAB-4A5E-A4EE-B795C6FC25B9',
                'name': 'purchase item report',
                'icon': null,
                'active': false,
                'children': null,
                'metadata': {
                  'title': 'purchase item report',
                  'url': 'https://mort-modern.losttype.com/'
                }
              },
              {
                'id': 'BD7B5F42-BE3E-4194-9B0B-F1902D62FD15',
                'name': 'purchase return report',
                'icon': null,
                'active': false,
                'children': null,
                'metadata': {
                  'title': 'purchase return report',
                  'url': 'https://montluc.com/#'
                }
              },
              {
                'id': 'A44E98DF-AE89-497A-BEAB-9041368A6A87',
                'name': 'supplier receipt report',
                'icon': null,
                'active': false,
                'children': null,
                'metadata': {
                  'title': 'supplier receipt report',
                  'url': 'https://identityserver4.readthedocs.io/en/dev/quickstarts/2_resource_owner_passwords.html'
                }
              }
            ],
            'metadata': null
          },
          {
            'id': '6470EBEE-CBB1-41FF-894F-A36DEA9BF65B',
            'name': 'sale',
            'icon': null,
            'active': false,
            'children': null,
            'metadata': {
              'title': 'sale',
              'url': 'https://unterfreiemhimmel.net/en'
            }
          },
          {
            'id': 'B93821B9-5EC5-4665-A13E-85E6AA8D8B7B',
            'name': 'ledger',
            'icon': null,
            'active': false,
            'children': null,
            'metadata': {
              'title': 'ledger',
              'url': 'https://www.telerik.com/kendo-angular-ui/getting-started/#toc-project-setup'
            }
          },
          {
            'id': '48B02992-034C-4E8B-82EF-D82051C2EC9B',
            'name': 'rack report',
            'icon': null,
            'active': false,
            'children': null,
            'metadata': {
              'title': 'rack report',
              'url': 'https://sourcemaking.com/design_patterns/'
            }
          }
        ],
        'metadata': null
      }
    ]
  }
];
