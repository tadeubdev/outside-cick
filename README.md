# Outside cick

![Logo](https://github.com/tadeubdev/outside-cick/blob/master/images/logo.png?raw=true)

A simple package to help identifying a outside click of an element

### Examples

Dispatch an alert when user clicks outside of an element with the id `click-me`:

```js
outsideClick.add('#click-me', () => {
    alert('Outside click!');
});
```

Dispatch an alert when user clicks outside and when the user clicks inside of an element with the id `click-me`

```js
outsideClick.add('#click-me', () => {
    alert('Outside click!');
}, () => {
    alert('Inside click!');
});
```
