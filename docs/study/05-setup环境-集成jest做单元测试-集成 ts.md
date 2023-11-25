# 05-setup环境-集成jest做单元测试-集成 ts

使用 monorepo 管理项目

`pnpm init`

`pnpm add jest @types/jest typescript -D -w`

`pnpm tsc --init`

[jest文档](https://jestjs.io/docs/getting-started)

`pnpm add -D -w babel-jest @babel/core @babel/preset-env`

`pnpm add -D -w @babel/preset-typescript`

## babel.config.js
```js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};
```

## index.spec.ts
```js
import { add } from '../src/hello';

describe('hello world', () => {
  it('hello', () => {
    expect(true).toBe(true);
  });

  it('add', () => {
    expect(add(1, 2)).toBe(3);
  });
});
```

## hello.ts
```js
export function add(a, b) {
  return a + b;
}
```

## package.json
```json
{
  "scripts": {
    "test": "jest"
  },
}
```

`pnpm run test`

![hello.test](/mini-vue3/hello.test.png)

