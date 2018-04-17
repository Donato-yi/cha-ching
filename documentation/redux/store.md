# Redux State Tree

## Introduction

Though this document mostly uses JavaScript notation for objects, all JavaScript objects are
actually Immutable maps - including the state tree as a whole.

## Structure

```js
{
  
}
```

## Types

Most of these types are just Immutable maps of what the API returns.

### Loading

```js
type Loading = {
  loading: Boolean,
};
```
