# React Demo

This demonstration uses Facebook's [React][react].
With React as a view layer, we are able to re-use the exact same view code in
the browser and in node which is great for SEO, consistency, and fewer bugs.

## Install

In your terminal...

```bash
git clone git@github.com:DallasNode/react-demo
cd react-demo
npm install
# npm install -g bower (if it's not installed)
bower install
make
```

Now open up <http://localhost:8000> in your browser.

[cogs][cogs] will be running a watcher in the
background and recompile your changes on the fly. So feel free to poke around
and refresh the page to see you updates.
[watchy][watchy] keeps an eye on the server files
so that when they change, the server is restarted accordingly.

[react]: https://github.com/facebook/react
[cogs]: https://github.com/caseywebdev/cogs
[watchy]: https://github.com/caseywebdev/watchy
