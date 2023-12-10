# 07-实现 effect 返回 runner 

## effect.spec.ts
```js
  it("should return runner when call effect", () => {
    // 1. effect(fn) -> function (runner) -> fn -> return
    let foo = 10
    const runner = effect(() => {
      foo++
      return "foo"
    })

    expect(foo).toBe(11)
    const r = runner()
    expect(foo).toBe(12)
    expect(r).toBe("foo")
  })
```

## effect.ts
```js
class ReactiveEffect {
  private _fn: any;

  constructor(fn) {
    this._fn = fn;
  }

  run() {
    activeEffect = this;
    return this._fn();
  }
}

export function effect(fn) {
  const _effect = new ReactiveEffect(fn);
  _effect.run();
  return _effect.run.bind(_effect);
}
```