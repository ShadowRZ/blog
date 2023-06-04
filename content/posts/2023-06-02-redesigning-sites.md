---
title: "Redesigning sites, 2023"
date: 2023-06-02
description: "Tailwind CSS is fun :P"
---

So here we go.

The original personal site was rebuilt in 2022. (Before I have many iterations of the site.) The last time I redesigned, I used the template [Paradigm Shift](https://html5up.net/paradigm-shift). But I don't think it represented myself well. So I'm going to roll my own.

## Into [Tailwind CSS](https://tailwindcss.com)

I already knew this utility-first CSS framework before. But the first time I used Tailwind CSS was [on Minoko Doucments](https://github.com/ShadowRZ/minoko-documents/commit/07b5f5a2c03cda615634303522393f0d6ccf3329). It's actually much fun to write components in this way. You can also visit [Tailwind CSS's Utility-First Fundamentals](https://tailwindcss.com/docs/utility-first) to know about it.

(IMO, Tailwind CSS allows quicker prototyping 'cause you always style elements _directly_.)

[A blog post of Tailwind CSS creator](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/) also described the benefits of utility-first way of designing.

## Colors

<div style="display: flex; width: 100%; min-height: 6em; border-radius: 1rem;">
    <div style="flex-grow: 1; background-color: #fbcfe8"></div>
    <div style="flex-grow: 1; background-color: #9d174d"></div>
</div>

This is the colors. On the left is the background color, on the right is text color.

I'm into pink color and will use these colors from [Tailwind CSS presets](https://tailwindcss.com/docs/customizing-colors).

On dark mode it's somewhat different:

<div style="display: flex; width: 100%; min-height: 6em; border-radius: 1rem;">
    <div style="flex-grow: 1; background-color: #500724"></div>
    <div style="flex-grow: 1; background-color: #fbcfe8"></div>
</div>

## Toolings

Using frontend toolings will allow me to better intergrate Tailwind CSS into my tools.

[Minoko Novel](https://shadowrz.gitlab.io/minoko-novel) will use [VitePress](https://vitepress.dev) while the [homepage](https://shadowrz.github.io) will use [Astro](https://astro.build).

The redesign will make my own page of Minoko Novel looks more like the one on Readonly.

## Will you redesign the blog?

_Probably not._

I still like the Hugo framework, and I don't think I can design a good-looking blog.

(Side note: It's possible to intergrate Tailwind CSS into Hugo [using PostCSS](https://tailwindcss.com/docs/installation/using-postcss), as [Hugo has PostCSS support](https://gohugo.io/hugo-pipes/postcss/))

That's it!