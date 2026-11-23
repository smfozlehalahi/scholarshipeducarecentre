(function(){
  const PAGES=[['index.html','হোম'],['about.html','আমাদের সম্পর্কে'],['services.html','সেবাসমূহ'],['scholarships.html','স্কলারশিপ'],['destinations.html','গন্তব্য দেশ'],['faq.html','প্রশ্নোত্তর'],['contact.html','যোগাযোগ']];
  const cur=location.pathname.split('/').pop()||'index.html';
  const WA='https://wa.me/8801322301754', FB='https://www.facebook.com/share/1CM7x76vGe/', MAIL='mailto:sec.bd2024@gmail.com', TEL='tel:+8801322301754';
  const ICON={
    wa:'<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>',
    fb:'<svg viewBox="0 0 24 24"><path d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4.3V11H7v4h3v7h4v-7h3l.5-4H14V8.5c0-.4.2-.5.5-.5z"/></svg>',
    mail:'<svg viewBox="0 0 24 24"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1 2v.5l8 5 8-5V7H4zm16 2.7-7.4 4.6a1 1 0 0 1-1.2 0L4 9.7V17h16V9.7z"/></svg>',
    tel:'<svg viewBox="0 0 24 24"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.5.6 3.6a1 1 0 0 1-.2 1z"/></svg>'
  };
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const social=()=>`<div class="socials">`+[
    ['wa','WhatsApp',WA],['fb','ফেসবুক',FB],['mail','জিমেইল',MAIL],['tel','ফোন: 01322-301754',TEL]
  ].map(([k,l,h])=>`<a class="sbtn" href="${h}" ${k==='fb'||k==='wa'?'target="_blank" rel="noopener"':''} aria-label="${l}">${ICON[k]}<span>${l}</span></a>`).join('')+`</div>`;

  const header=`<header class="site"><div class="wrap hd">
    <a class="brand" href="index.html"><img src="logo-web.jpg" alt="স্কলারশিপ এডুকেয়ার সেন্টার লোগো">স্কলারশিপ এডুকেয়ার সেন্টার</a>
    <button class="menu-btn" id="menuBtn" aria-label="মেনু খুলুন">☰</button>
    <nav id="mainNav"><ul>${PAGES.map(([h,l])=>`<li><a href="${h}" class="${h===cur?'active':''}">${l}</a></li>`).join('')}<li><span class="soon">স্টুডেন্ট পোর্টাল (শীঘ্রই)</span></li></ul></nav>
    <a class="btn btn-gold cta" href="contact.html">এখনই আবেদন করুন</a>
  </div></header>
  <div class="wrap ticker-wrap"><div class="ticker"><span class="tk-label">চলমান স্কলারশিপ সমূহ:</span><div class="tk-wrap"><div class="tk-track" id="tk"></div></div></div></div>`;

  const footer=`<footer class="site"><div class="wrap fgrid">
    <div><h4>স্কলারশিপ এডুকেয়ার সেন্টার</h4><p>কওমী, আলিয়া ও সাধারণ শিক্ষার্থীদের জন্য আন্তর্জাতিক উচ্চশিক্ষা পরামর্শ।<br>কিশোরগঞ্জ, ঢাকা, বাংলাদেশ</p><div data-social></div></div>
    <div><h4>দ্রুত লিংক</h4><p><a href="services.html">সেবাসমূহ</a><br><a href="scholarships.html">স্কলারশিপ</a><br><a href="destinations.html">গন্তব্য দেশ</a><br><a href="faq.html">প্রশ্নোত্তর</a><br><a href="contact.html">যোগাযোগ</a></p></div>
    <div><h4>যোগাযোগ</h4><p>ফোন / WhatsApp: <a href="${TEL}">01322-301754</a><br>ইমেইল: <a href="mailto:sec.bd2024@gmail.com">sec.bd2024@gmail.com</a></p></div>
  </div><div class="wrap copy">© ${new Date().getFullYear()} স্কলারশিপ এডুকেয়ার সেন্টার। সব অধিকার সংরক্ষিত।</div></footer>`;

  document.body.insertAdjacentHTML('afterbegin',header);
  document.body.insertAdjacentHTML('beforeend',footer);
  document.querySelectorAll('[data-social]').forEach(el=>el.innerHTML=social());

  const menuBtn=document.getElementById('menuBtn'), nav=document.getElementById('mainNav');
  menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));

  const NOTICES=fetch('notices.json',{cache:'no-store'}).then(r=>r.json()).catch(()=>[]);
  NOTICES.then(list=>{
    // ticker: continuous loop, never empties
    const tk=document.getElementById('tk');
    if(tk){
      const items=list.length
        ? list.map(n=>`<a href="notice.html?id=${encodeURIComponent(n.id)}">${esc(n.title)}</a>`).join('')
        : '<a href="scholarships.html">নতুন স্কলারশিপ নোটিশ শীঘ্রই আসছে</a>';
      const set=items.repeat(4);
      tk.innerHTML=set+set;
    }
    // notice cards
    const box=document.getElementById('noticeList');
    if(box){
      const lim=+box.dataset.limit||list.length;
      box.innerHTML=list.length
        ? list.slice(0,lim).map(n=>`<a class="card gold" href="notice.html?id=${encodeURIComponent(n.id)}"><span class="tag">${esc(n.date)}</span><h3>${esc(n.title)}</h3><p>${esc(n.university)}${n.country?' · '+esc(n.country):''}</p>${n.deadline?`<p><b>শেষ তারিখ:</b> ${esc(n.deadline)}</p>`:''}<span class="more">বিস্তারিত →</span></a>`).join('')
        : '<p class="lead">এখনো কোনো নোটিশ যুক্ত হয়নি।</p>';
    }
    // notice detail page
    const nbox=document.getElementById('nbox');
    if(nbox){
      const id=new URLSearchParams(location.search).get('id');
      const n=list.find(x=>x.id===id);
      nbox.innerHTML='';
      if(!n){ nbox.innerHTML='<p>এই নোটিশটি পাওয়া যায়নি।</p>'; return; }
      document.getElementById('nt').textContent=n.title;
      document.title=n.title+' | স্কলারশিপ এডুকেয়ার সেন্টার';
      const h=document.createElement('h2'); h.textContent=n.title; nbox.appendChild(h);
      const dl=document.createElement('dl'); dl.className='dl';
      [['তারিখ',n.date],['বিশ্ববিদ্যালয়',n.university],['দেশ',n.country],['শেষ তারিখ',n.deadline]].forEach(([k,v])=>{
        if(!v) return; const dt=document.createElement('dt'); dt.textContent=k; const dd=document.createElement('dd'); dd.textContent=v; dl.append(dt,dd);
      });
      nbox.appendChild(dl);
      if(n.summary){ const s=document.createElement('div'); s.className='summary'; s.textContent=n.summary; nbox.appendChild(s); }
      if(n.pdf){
        const row=document.createElement('div'); row.className='btns';
        const v=document.createElement('a'); v.className='btn btn-line'; v.href=n.pdf; v.target='_blank'; v.rel='noopener'; v.textContent='PDF দেখুন';
        const d=document.createElement('a'); d.className='btn btn-gold'; d.href=n.pdf; d.setAttribute('download',''); d.textContent='PDF ডাউনলোড করুন';
        row.append(v,d); nbox.appendChild(row);
      }
      const p=document.createElement('p'); p.className='note'; p.textContent='সর্বশেষ ও সঠিক তথ্যের জন্য সংশ্লিষ্ট বিশ্ববিদ্যালয়ের অফিসিয়াল ঘোষণা যাচাই করুন।'; nbox.appendChild(p);
    }
  });

  // app install
  let deferred=null;
  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferred=e;});
  const ib=document.getElementById('installBtn');
  if(ib) ib.addEventListener('click',async()=>{
    if(deferred){ deferred.prompt(); await deferred.userChoice; deferred=null; return; }
    alert('অ্যান্ড্রয়েড: ব্রাউজারের মেনু (⋮) থেকে "Install app" বা "Add to Home screen" চাপুন।\nআইফোন: Safari-তে শেয়ার বাটন থেকে "Add to Home Screen" চাপুন।');
  });
  if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
})();
