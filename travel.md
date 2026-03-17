---
title: Travel
description: Travel knowledge covering pricing, safety, mobility, accommodation, planning, and solo travel systems.
hero_title: Travel
hero_subtitle: Structured travel knowledge focused on how systems work and how travelers can interpret them more clearly.
permalink: /travel/
---

<div class="section-head">
  <h2 class="section-title">Travel domain</h2>
  <p class="section-subtitle">This domain contains the current knowledge base library. Use the search and category filter below to explore the articles, or browse a category directly.</p>
</div>

<div class="grid-2 section-spacer">
  <div class="card">
    <h3>Browse by travel topic</h3>
    <ul class="tight">
      {% for c in site.data.categories %}
      <li><a href="{{ '/category/' | append: c.key | append: '/' | relative_url }}">{{ c.title }}</a></li>
      {% endfor %}
    </ul>
  </div>
  <div class="card">
    <h3>Travel domain notes</h3>
    <p class="muted">The travel domain currently contains all existing knowledge base articles. Future domains can grow independently while keeping one consistent reference platform at kb.himpfen.com.</p>
  </div>
</div>

<div class="library-controls section-spacer">
  <div class="library-controls-left">
    <label class="sr-only" for="kbSearch">Search articles</label>
    <input id="kbSearch" class="library-search" type="search" placeholder="Search travel articles by title, category, or keyword..." autocomplete="off" />
    <div class="library-count" id="kbCount" aria-live="polite"></div>
  </div>

  <div class="library-controls-right">
    <label class="sr-only" for="kbCategory">Filter by category</label>
    <select id="kbCategory" class="select">
      <option value="">All travel categories</option>
      {% for c in site.data.categories %}
        <option value="{{ c.key }}">{{ c.title }}</option>
      {% endfor %}
    </select>
  </div>
</div>

<div id="kbMount" class="kb-grid"></div>

<script>
  window.KB_INDEX = [
    {% assign travel_posts = site.kb | where: "domain", "travel" %}
    {% for post in travel_posts %}
      {% assign cat = site.data.categories | where: "key", post.category | first %}
      {
        title: {{ post.title | jsonify }},
        description: {{ post.description | jsonify }},
        url: {{ post.url | relative_url | jsonify }},
        categoryKey: {{ post.category | jsonify }},
        categoryTitle: {{ cat.title | default: post.category | jsonify }},
        lastReviewed: {{ post.last_reviewed | default: "—" | jsonify }}
      }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];
</script>
