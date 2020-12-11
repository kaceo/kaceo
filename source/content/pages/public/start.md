---
permalink: start/
layout: page

slayout: deff
title: SO wierd
special: "Today's special is Lamb!"


atitle: My Article Title
alink: "subdir/{{ atitle | slug }}/index.html"

---

# Welcome to the Website

Author is [{{ site.author }}]
I am at [{{ site.url }}]
Under [{{ site.baseUrl }}]

Filtered Sitemap is [{{ '/sitemap.xml' | url }}]

my {{ cloud[0] }}

my {{ cloud[1] }}


atitle= {{ atitle }}

alink= {{ alink }}

alink2= subdir/{{ atitle | slug }}/index.html

---

