(function(){
  const mount = document.getElementById("kbMount");
  const search = document.getElementById("kbSearch");
  const catSel = document.getElementById("kbCategory");
  const count = document.getElementById("kbCount");

  // Only run on homepage where KB_INDEX is defined
  if(!mount || !Array.isArray(window.KB_INDEX)) return;

  const data = window.KB_INDEX.slice();
  let q = "";
  let cat = "";

  function normalize(s){ return String(s||"").toLowerCase(); }

  function filtered(){
    const nq = normalize(q).trim();
    const nc = normalize(cat).trim();
    return data.filter(it => {
      if(nc && normalize(it.categoryKey) !== nc) return false;
      if(!nq) return true;
      const blob = [it.title, it.description, it.categoryTitle, it.categoryKey].map(normalize).join(" ");
      return blob.includes(nq);
    });
  }

  function escapeHtml(str){
    return String(str || "")
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#039;");
  }

  function setCount(n, total){
    if(!count) return;
    if(n === total) count.textContent = `${n} article${n===1?"":"s"}`;
    else count.textContent = `${n} of ${total} articles`;
  }

  function render(){
    const items = filtered().sort((a,b)=> a.title.localeCompare(b.title));
    setCount(items.length, data.length);

    mount.innerHTML = items.map(it => `
      <a class="kb-card" href="${it.url}">
        <div class="kb-card-top">
          <div class="kb-card-title">${escapeHtml(it.title)}</div>
          <span class="pill">${escapeHtml(it.categoryTitle)}</span>
        </div>
        <div class="kb-card-desc">${escapeHtml(it.description)}</div>
        <div class="kb-card-meta">Last reviewed: ${escapeHtml(it.lastReviewed)}</div>
      </a>
    `).join("") || `<div class="muted">No articles match your search.</div>`;
  }

  if(search){
    search.addEventListener("input", (e)=>{ q = e.target.value || ""; render(); });
  }
  if(catSel){
    catSel.addEventListener("change", (e)=>{ cat = e.target.value || ""; render(); });
  }

  render();
})();