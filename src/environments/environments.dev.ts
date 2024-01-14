export const environment = {
    production: true,
    backend: 'https://watec-backend-development.up.railway.app/',
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
        create_received:  '/ista/create-received',
        customerOrder: '/ista/customerOrder',
        order: '/ista/order',
        planned: '/ista/planned',
        cancelled: '/ista/cancelled',
        postponed: '/ista/postponed',
      },
      resetPassword: '/auth/rese-password',
      forgotPassword: '/auth/forgot-password',
      submitAccessToken: '/auth/submitAccessToken',
      verifyEmail: '/auth/verify-email/:confirmationToken',
    }
  };  