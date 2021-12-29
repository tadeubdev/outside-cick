# Outside cick

![Logo](https://github.com/tadeubdev/outside-cick/blob/master/images/logo.png?raw=true)

A simple package to help identifying a outside click of an element

### Examples

Dispatch an alert when user clicks outside of an element with the id `click-me`:

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
	<script src="https://raw.githubusercontent.com/tadeubdev/outside-cick/master/dist/outside-click.js"></script>
    <script defer>
        OutsideClick.create('#example').trigger(() => {
            document.querySelector('#example').style.background = 'red';
        });
    </script>
</body>
</html>
```

