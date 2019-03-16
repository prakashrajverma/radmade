export const constants = {
  navGroup: [
    {groupId: 'g0', groupName: null, listItems: [
    {id: 'g0-l1', active: false, name: 'dashboard', route: null, icon: 'fas fa-tachometer-alt', children: null},
    ]},
    {groupId: 'g1', groupName: 'inventory', listItems: [
    {id: 'g1-l1', active: false, name: 'purchase', route: null, icon: 'far fa-file-alt', children: null},
    {id: 'g1-l2', active: false, name: 'sales', route: null, icon: 'far fa-file-alt', children:
    [{id: 'g1-l2-c1', name: 'wholesalers', icon: null, route: null, children: null},
    {id: 'g1-l2-c2', name: 'customer cr/dr', icon: null, route: null, children: null},
    {id: 'g1-l2-c3', name: 'sales return', icon: null, route: null, children: null}]},
    {id: 'g1-l3', active: false, name: 'reports', route: null, icon: 'far fa-file-alt', children:
    [{id: 'g1-l3-c1', name: 'invoice report', icon: null, route: null, children: null},
    {id: 'g1-l3-c2', name: 'stock report', icon: null, route: null, children: null},
    {id: 'g1-l3-c3', name: 'purchase', icon: null, route: null, children:
    [{id: 'g1-l3-c3-g1', name: 'purchase item report', icon: null, route: null, children: null},
    {id: 'g1-l3-c3-g2', name: 'supplier receipt report', icon: null, route: null, children: null},
    {id: 'g1-l3-c3-g3', name: 'purchase return report', icon: null, route: null, children: null},
    ]},
    {id: 'g1-l3-c4', name: 'sale', icon: null, route: null, children: null},
    {id: 'g1-l3-c5', name: 'ledger', icon: null, route: null, children: null},
    {id: 'g1-l3-c6', name: 'rack report', icon: null, route: null, children: null},
  ]},
    {id: 'nvg0-nvl4', name: 'Master', route: null, icon: 'far fa-file-alt', children: null},
  ]},
    {groupId: 'nvg1', groupName: 'others', listItems: [
      {id: 'nvg0-nvl4', name: 'Role', route: null, icon: 'far fa-file-alt', children: null},
    {id: 'nvg0-nvl5', name: 'E-Commerce', route: null, icon: 'far fa-file-alt', children: null},
    ]}]
  };
