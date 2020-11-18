---
---

# Welcome to the jungle

<ul class="posts">
  {% for post in site.posts %}
    <li>
      <span>{{ post.data | data_to_string }}</span>
      &raquo;
      <a href="{{ post.url }}>{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

<hr>

