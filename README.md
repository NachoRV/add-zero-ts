# add-zero-ts

> Add a leading zero to a number.
## Install

Via [npm](http://npmjs.com):

```sh
$ npm install add-zero-ts --save
```

## Usage

```javascript
import { addZero }from 'add-zero';
addZero(5); // 05
addZero(10); // 10
addZero(-5); // -05
addZero(-10); // -10
```

### API

### `addZero(value)`

#### `value`

Type: `number` _(integer)_ or `string`  

Value in which a leading zero should be added to.

## License

MIT © [Ignacio Royo-Villanova](http://irvb.dev)