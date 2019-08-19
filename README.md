# nuxt-mobile-detect
`nuxt-mobile-detect` is a wrapper around [mobile-detect.js](https://github.com/hgoebl/mobile-detect.js) for nuxtjs. It can be used client side and server side.

Note: [`@nuxtjs/device`](https://github.com/hgoebl/mobile-detect.js) is another nuxt package for mobile device detection. `nuxt-mobile-detect` adds ~27.5kb of overhead and `@nuxtjs/device` only adds ~4.5kb, many projects won't need the full capabilities of mobile-detect.js and `@nuxtjs/device` would satisfy their use case.

## Setup
- Add `nuxt-mobile-detect` dependency using npm or yarn
```
npm i nuxt-mobile
```
```
yarn add nuxt-mobile
```
- Add `nuxt-mobile-detect` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    'nuxt-mobile'
 ]
}
```

## Usage

`asyncData (server-side)`
```js
asyncData({app}) {
  let mobile = app.$mobileDetect.mobile()
}
```

`methods/created/mounted/etc (client-side)`
```js
method() {
  let mobile = this.$mobileDetect.mobile()
}
```

## Available Methods

For more information please refer to the [mobile-detect.js](https://github.com/hgoebl/mobile-detect.js) github page.

`Example User Agent`
```
'Mozilla/5.0 (Linux; U; Android 4.0.3; en-in; SonyEricssonMT11i' +
    ' Build/4.1.A.0.562) AppleWebKit/534.30 (KHTML, like Gecko)' +
    ' Version/4.0 Mobile Safari/534.30'
```

```js
console.log( this.$mobileDetect.mobile() );          // 'Sony'
console.log( this.$mobileDetect.phone() );           // 'Sony'
console.log( this.$mobileDetect.tablet() );          // null
console.log( this.$mobileDetect.userAgent() );       // 'Safari'
console.log( this.$mobileDetect.os() );              // 'AndroidOS'
console.log( this.$mobileDetect.is('iPhone') );      // false
console.log( this.$mobileDetect.is('bot') );         // false
console.log( this.$mobileDetect.version('Webkit') );         // 534.3
console.log( this.$mobileDetect.versionStr('Build') );       // '4.1.A.0.562'
console.log( this.$mobileDetect.match('playstation|xbox') ); // false

```
