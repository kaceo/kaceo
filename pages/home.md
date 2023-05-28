---
permalink: "/home/"
layout: page

numberOfLatestPosts: 50
---

# KaceO HOME
This is where the inner pages start in PUG

__PagedPosts__ : ({{ collections.pagedPosts | length }})

__PagedPostsByTag__ : ({{ collections.pagedPostsByTag | length }})

__Posts__ : ({{ collections.allPosts | length}})
<a href="/posts/">All posts</a>

__Tags__ : ({{ collections.allTags | length }})
<a href="/tags/">All tags</a>

---

__All__ : {{ collections.all | length }}

<ol>
{% for p in collections.all %}
<li><a href="{{ p.url }}">{{ p.url }}</a></li>
{% endfor %}
</ol>

