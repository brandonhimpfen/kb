---
title: Travel Categories
description: Browse travel knowledge base articles by category.
hero_title: Travel Categories
hero_subtitle: Browse the current travel domain by category.
permalink: /categories/
---

<div class="cat-grid">
  {% for cat in site.data.categories %}
    {% assign count = site.kb | where: "category", cat.key | size %}
    <a class="cat-card" href="{{ '/category/' | append: cat.key | append: '/' | relative_url }}">
      <div class="cat-title">{{ cat.title }}</div>
      <div class="cat-desc">{{ cat.description }}</div>
      <div class="cat-meta">{{ count }} article{% if count != 1 %}s{% endif %}</div>
    </a>
  {% endfor %}
</div>
