import { boot } from 'quasar/wrappers';

/*
  export default boot(async ({  app, router, store }) => {})
*/

// eslint-disable-next-line @typescript-eslint/require-await
export default boot(async ({  app }) => {
  console.log('app ------>', app)
})
