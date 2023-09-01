export const environment = {
  production: true,
  backend: 'https://watec-backend-production.up.railway.app',
  url: {
    login: '/auth/signin',
    register: '/auth/signup',
    logout: '/auth/logout',
    customers: '/customers',
    trinkwasseruntersuchungen: '/trinkwasseruntersuchung',
    auftrag: '/auftrag',
    autraggeber: '/auftraggeber',
    ista: {
      url: '/ista',
      received: '/ista/received',
      customerOrder: '/ista/customerOrder',
    }
  }
};
