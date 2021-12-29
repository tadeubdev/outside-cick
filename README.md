# Outside cick

![Logo](https://github.com/tadeubdev/outside-cick/blob/master/images/logo.png?raw=true)

A simple package to help identifying a outside click of an element


## Example

The example above ([you can see in jsfiddle](https://jsfiddle.net/kurcshj9/3/)) executes the method passed on `trigger` when any element except the textarea with id `example` has been clicked:

```html
<!DOCTYPE html>
<html lang="en">
<body>
    <main role="main">
        <textarea
            name="example"
            id="example"
            placeholder="Click on another element on the page"
        ></textarea>
    </main>
	<script src="https://gitcdn.link/cdn/tadeubdev/outside-cick/master/dist/outside-click.js"></script>
    <script defer>
        OutsideClick.create('#example').trigger(() => {
            document.querySelector('#example').style.background = 'red';
        });
    </script>
</body>
</html>
```
