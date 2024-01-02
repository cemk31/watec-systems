// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  backend: 'http://localhost:3000',
  url: {
    login: '/auth/signin',
    register: '/auth/signup',
    emailConfirm: '/auth/verify-email/:confirmationToken',
    logout: '/auth/logout',
    customers: '/customers',
    trinkwasseruntersuchungen: '/trinkwasseruntersuchung',
    auftrag: '/auftrag',
    autraggeber: '/auftraggeber',
    ista: {
      url: '/ista',
      received: '/ista/received',
      customerOrder: '/ista/customerOrder',
      order: '/ista/order',
      planned: '/ista/planned',
      cancelled: '/ista/cancelled',
      postponed: '/ista/postponed',
    },
    resetPassword: '/auth/reset-password',
    forgotPassword: '/auth/forgot-password',
    submitAccessToken: '/auth/submitAccessToken',
    verifyEmail: '/auth/verify-email/',
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */

