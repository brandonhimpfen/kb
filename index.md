---
title: Home
description: Explore structured knowledge across travel, AI, crypto, programming, and digital nomadism.
hero_title: Knowledge Base
hero_subtitle: A structured reference layer for the main domains across Brandon Himpfen's work.
---

{% assign travel_posts = site.kb | where: "domain", "travel" %}
{% assign ai_posts = site.kb | where: "domain", "ai" %}
{% assign crypto_posts = site.kb | where: "domain", "crypto" %}
{% assign programming_posts = site.kb | where: "domain", "programming" %}
{% assign nomad_posts = site.kb | where: "domain", "digital-nomadism" %}

<div class="section-head domain-hero">
  <h2 class="section-title">Explore the knowledge base by domain</h2>
  <p class="section-subtitle">Each domain has its own hub page with space for reference articles, topic groupings, tools, projects, and future expansions.</p>
</div>

<div class="domain-grid">
  <a class="domain-card" href="{{ '/travel/' | relative_url }}">
    <div class="domain-title">Travel</div>
    <div class="domain-desc">Practical, system-focused travel knowledge covering pricing, safety, air travel, visas, accommodation, planning, and solo travel decision-making.</div>
    <div class="domain-meta">Current KB articles: {{ travel_posts | size }}</div>
    <span class="button-link">Open travel domain</span>
  </a>

  <a class="domain-card" href="{{ '/ai/' | relative_url }}">
    <div class="domain-title">Artificial Intelligence</div>
    <div class="domain-desc">Reference articles and explainers covering machine learning, large language models, AI ethics, automation, search, data analysis, and real-world AI systems.</div>
    <div class="domain-meta">Current KB articles: {{ ai_posts | size }}</div>
    <span class="button-link">Open AI domain</span>
  </a>

  <a class="domain-card" href="{{ '/crypto/' | relative_url }}">
    <div class="domain-title">Crypto</div>
    <div class="domain-desc">A home for cryptocurrency and digital asset explainers, reference pages, and future infrastructure-oriented knowledge resources.</div>
    <div class="domain-meta">Current KB articles: {{ crypto_posts | size }}</div>
    <span class="button-link">Open Crypto domain</span>
  </a>

  <a class="domain-card" href="{{ '/programming/' | relative_url }}">
    <div class="domain-title">Programming</div>
    <div class="domain-desc">A future programming reference hub for software, open source, language design, and developer-oriented knowledge pages.</div>
    <div class="domain-meta">{% if programming_posts | size > 0 %}Current KB articles: {{ programming_posts | size }}{% else %}Planned domain{% endif %}</div>
    <span class="button-link{% if programming_posts | size == 0 %} secondary{% endif %}">{% if programming_posts | size > 0 %}Open programming domain{% else %}View domain{% endif %}</span>
  </a>

  <a class="domain-card" href="{{ '/digital-nomadism/' | relative_url }}">
    <div class="domain-title">Digital Nomadism</div>
    <div class="domain-desc">A future domain for location-independent work, mobility systems, and practical knowledge for internet-enabled travel and living.</div>
    <div class="domain-meta">{% if nomad_posts | size > 0 %}Current KB articles: {{ nomad_posts | size }}{% else %}Planned domain{% endif %}</div>
    <span class="button-link{% if nomad_posts | size == 0 %} secondary{% endif %}">{% if nomad_posts | size > 0 %}Open digital nomadism domain{% else %}View domain{% endif %}</span>
  </a>
</div>
