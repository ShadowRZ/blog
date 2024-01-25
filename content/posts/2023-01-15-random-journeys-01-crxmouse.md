---
title: "Random Journeys #01: CLEAN crxMouse Gestures"
date: 2023-01-15
description: "About the downloads management permission in CLEAN crxMouse Gestures"
tags: [Chrome]
categories: ["Random Journeys"]
---

Users of [CLEAN crxMouse Gestures](https://chrome.google.com/webstore/detail/clean-crxmouse-gestures/mjidkpedjlfnanainpdfnedkdlacidla) are probably confused when an update brings this:

![CLEAN crxMouse Gestures requires managing your downloads ???](/assets/images/crxmouse-permission-changes.jpg)

I'll give you an idea of why it demands this permission and my thoughts.

## Investigate

The first thing I need is the published source code of this extension. For "source code" I mean the source code inside the CRX file. That's because CRX is a zip file and contains all the code to power the extension, along with the extension manifest that describes the extension.

You can get the code of an extension by doing either of these:

* [Locate the unpacked extension code](https://stackoverflow.com/a/21482465)
* [Fetch from the Chrome update server](https://stackoverflow.com/questions/7184793/how-to-download-a-crx-file-from-the-chrome-web-store-for-a-given-id)

## Look inside

From a developer's perspective, to manage downloads you need to invoke [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/downloads/) API, that narrows the area I need to search for.

So I did a search:

```console
$ rg chrome.downloads
js/background.js
1022:        chrome.downloads.download({
1028:        chrome.downloads.download({
```

Appearently it only calls [`chrome.downloads.download()`](https://developer.chrome.com/docs/extensions/reference/downloads/#method-download) for something, but for what?

Further reading code shows that this is used to implment a feature allowing a gesture to save an image, instand of doing something else.

## Case solved, and then ?

Well, it seems weird that you can only invoke a new download without opening a browser tab by giving some sort of download management API, which confuses users.

But on the other side, I think the developer does a bad job on communicating about why it demands this permission. Users are confused a gesture extension would demand managing downloads.

![Some user couldn't understand what's happening, and it's bad for both developer and users.](/assets/images/crxmouse-reviews.jpg)

From [Chrome Developer docs](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#understanding-permissions):

> Permission warnings exist to describe the capabilities granted by an API to extension users, but some of these warnings may not be obvious at first. For instance, adding the `"tabs"` permission results in a seemingly unrelated warning: the extension can Read your browsing activity. Although the [Tabs API](https://developer.chrome.com/docs/extensions/reference/tabs/) might be used to only open new tabs, it can also be used to see the URL that is associated with every newly opened tab by using their `tabs.Tab` objects.
>
> When possible, implement optional permissions or a less powerful API to avoid alarming warnings.

In this case, at it's core, a gesture extension don't need download management, but it required this permission in order to allow downloading images as a type of convenice. Personally I think it should be turned into an optional feature and explain what the required permission is used for.

## Thanks

Thanks [@Sherlock Holo](https://t.me/Sherlock_Holo) for providing the article's idea and images.
