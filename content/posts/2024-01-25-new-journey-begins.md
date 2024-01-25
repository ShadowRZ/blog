---
title: New Journey Begins
date: 2024-01-25
tags: [日常, English]
categories: [部落格]
description: "The new journey in 2024, with a new style for main sites."
---

2024, new year, new future.

It's probably also a great year to update my entire sites (?).
So I did a remake (yes, again), but this time with a streamlined design.

## Toolchain

[Nuxt](https://nuxt.com), as you may have already know in the footer.
Incidentally, the web Mastodon client I use, [Elk](https://github.com/elk-zone/elk), also uses Nuxt, so does [Docus](https://docus.dev)[^1].

[^1]: Elk uses Docus to build [Elk's docs site](https://docs.elk.zone), and Docus is also based on Nuxt.

At one time I thought about using [VitePress](https://vitepress.dev) but to this day VitePress haven't got their first stable release. I can say VitePress is production-ready though, so just consider this my opinionated choice.

BTW, VitePress still puts its configuration file inside `.vitepress/config.ts`, I hope one day it can be put inside `vitepress.config.*`.

## Designing

I decided to just use `bg-pink-50` color consistently, this gives a much calmer visual appearence.

For icons, the main icons are now [Phosphor Icons](https://phosphoricons.com) instead of previous [Solar](https://solariconset.com). It's not really hard for me to swap icon sets though, as [Iconify](https://iconify.design) unified all the icon sets into a consistent framework, and icons can be used in a much more broader ways, such as [into pure CSS](https://antfu.me/posts/icons-in-pure-css).

With this redesign, I decided to create a consistent layout across main content sites
 (if it's not for a documentation-like site). In fact you're just watching the current iteration
of my canonical layout, along with a tri-state color picker[^2] (at the top of the page).

[^2]: Reference: [使用 Next.js + Hexo 重构我的博客 # 新的深色模式 UX](https://blog.skk.moe/post/use-nextjs-and-hexo-to-rebuild-my-blog/#Xin-De-Shen-Se-Mo-Shi-UX) by @SuukaW

## Future

There are still some things that I might implment:

* Categories and Tags page, along with related links
* RSS / Atom / JSONFeed (TODO) with a helpful instruction with canonical layout applied (it's lost in the refactor)
* Projects listing
* If possible, make the canonical layout and shared components a shared npm package, along with optional [Storybook](https://storybook.js.org) preview.

I'd like to also try something new. I don't what it would be, but I'd like to experiment.

That's for this post.
