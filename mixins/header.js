export default {
  data () {
    return {
      menuList: [{
        name: 'Roadmap',
        url: '#roadmap'
      }, {
        name: 'Backers',
        url: '#partners'
      }, {
        name: 'Documents',
        url: '#',
        childMenu: [{
          name: '',
          url: ''
        }, {
          name: 'White Paper',
          url: '#'
        }, {
          name: 'Token Metrics',
          url: '#'
        }, {
          name: 'Game Lore',
          url: '#'
        }, {
          name: 'Pitch Deck',
          url: '#'
        }, {
          name: 'All about Mainnet',
          url: '#'
        }]
      }, {
        name: 'Tokens',
        url: '#'
      }, {
        name: 'MARKETPLACE',
        url: '#'
      }, {
        name: 'NFTS',
        url: '#'
      }]
    }
  }
}
