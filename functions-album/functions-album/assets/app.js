(function(){
  var A = window.ALBUM; if(!A) return;
  var $ = function(s,r){return (r||document).querySelector(s)};
  var esc = function(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};

  // LaTeX → HTML (falls back to plain text if KaTeX didn't load)
  function tex(s,block){
    if(!s) return '';
    try{ if(window.katex) return katex.renderToString(s,{throwOnError:false,displayMode:!!block}); }catch(e){}
    return '<code>'+esc(s)+'</code>';
  }
  var todo = function(msg){return '<div class="todo">'+esc(msg)+'</div>'};

  $('#course').textContent = A.course;
  $('#loc').textContent = A.location;
  if(A.members && A.members.length) $('#team').textContent = 'By ' + A.members.join(' · ');
  else $('#team').remove();

  var nav = $('#nav'), album = $('#album');

  A.functions.forEach(function(f,i){
    var n = String(i+1).padStart(2,'0');
    var a = document.createElement('a');
    a.href = '#'+f.id; a.textContent = f.name.replace(/ \(.*\)/,'').replace('Trig with Asymptotes','Trig');
    nav.appendChild(a);

    var pf = f.parentFacts || {};
    var hasPts = f.points && f.points.length;
    var derivation = (f.derivation && f.derivation.length)
      ? '<ol>'+f.derivation.map(function(l){return '<li>'+tex(l)+'</li>'}).join('')+'</ol>'
      : todo('Show the algebra: substitute your two photo points and solve for a, k, d, c.');

    var s = document.createElement('section');
    s.className = 'fn '+(f.band||'cream'); s.id = f.id;
    s.innerHTML =
      '<div class="wrap">'+
        '<div class="fn-head"><span class="num">'+n+' / '+String(A.functions.length).padStart(2,'0')+'</span><h2>'+esc(f.name)+'</h2></div>'+
        (f.spot?'<p class="spot">'+esc(f.spot)+'</p>':'')+
        '<div class="grid">'+
          shot(f,'photo','Photo')+shot(f,'graph','Desmos overlay')+
        '</div>'+
        '<div class="info">'+
          '<div class="card dark"><h3>Our equation</h3><div class="eq">'+(f.equation?tex(f.equation,true):todo('Add your exact fitted equation in data/functions.js'))+'</div></div>'+
          '<div class="card"><h3>Parent function</h3><div class="parent-eq">'+tex(f.parent,true)+'</div>'+
            '<dl class="facts"><dt>Domain</dt><dd>'+tex(pf.domain)+'</dd><dt>Range</dt><dd>'+tex(pf.range)+'</dd><dt>Asymptotes</dt><dd>'+(pf.asymptotes&&/[\\=]/.test(pf.asymptotes)?tex(pf.asymptotes):esc(pf.asymptotes||'—'))+'</dd></dl>'+
            (pf.note?'<p class="note">'+esc(pf.note)+'</p>':'')+'</div>'+
          '<div class="card derive wide"><h3>Algebraic derivation</h3>'+
            (hasPts?'<p class="pts">Points used: '+f.points.map(function(p){return tex(p)}).join(' &nbsp;and&nbsp; ')+'</p>':'')+derivation+'</div>'+
          '<div class="card"><h3>Transformation mapping</h3>'+(f.paragraph1?'<p>'+esc(f.paragraph1)+'</p>':todo('Paragraph 1: explain how each parameter (a, k, d, c) transforms the parent function and why.'))+'</div>'+
          '<div class="card"><h3>Domain, range &amp; breakdown</h3>'+
            '<div class="bounds">'+(f.domain?'<span class="chip">Domain: '+tex(f.domain)+'</span>':'')+(f.range?'<span class="chip light">Range: '+tex(f.range)+'</span>':'')+'</div>'+
            '<p style="margin-top:12px">'+(f.paragraph2?esc(f.paragraph2):'')+'</p>'+
            (!f.paragraph2?todo('Paragraph 2: state the physical domain/range bounds and where the real object stops following the model.'):'')+
            (f.video?'<a class="vid" href="'+esc(f.video)+'" target="_blank" rel="noopener">▶ Watch the Desmos process log</a>':'')+
          '</div>'+
        '</div>'+
      '</div>';
    album.appendChild(s);
  });

  function shot(f,kind,label){
    var src='assets/img/'+f.id+'-'+kind+'.jpg';
    return '<figure class="shot '+kind+'"><button type="button" data-src="'+src+'" data-cap="'+esc(f.name+' — '+label)+'" aria-label="Enlarge '+esc(label)+' for '+esc(f.name)+'">'+
      '<img loading="lazy" src="'+src+'" alt="'+esc(label+' for the '+f.name.toLowerCase()+' function')+'"></button><figcaption>'+label+'</figcaption></figure>';
  }

  // lightbox
  var lb = $('#lightbox'), lbImg = $('img',lb), lbCap = $('p',lb);
  document.addEventListener('click',function(e){
    var b = e.target.closest('.shot button');
    if(b){ lbImg.src=b.dataset.src; lbImg.alt=b.dataset.cap; lbCap.textContent=b.dataset.cap; lb.showModal(); return; }
    if(e.target===lb || e.target.closest('#lightbox .close')) lb.close();
  });

  // checklist
  var phases = [
    {t:'Phase 1 · Photo capture',k:'p1',i:['Capture 9 original photos in Sunway / Malaysia with group members','Cover all 9 function types','Student faces / identity visible']},
    {t:'Phase 2 · Desmos modelling & algebra',k:'p2',i:['Import photos; set origin, axis titles and scale units','Pick 2 photo points and solve for a, k, d, c by hand','Refine in Desmos and set exact physical domain / range','Record a 1–2 minute Desmos screen log']},
    {t:'Phase 3 · Album website & commentary',k:'p3',i:['Show photo, Desmos overlay, exact equation and derivation','Paragraph 1: transformation mapping and parameter meaning','Paragraph 2: domain / range bounds and breakdown points']},
    {t:'Phase 4 · Oral defence & turn-in',k:'p4',i:['Submit website link, algebra work sheet and screen recordings','Complete the individual 3–5 minute oral defence','Complete the group peer evaluation form']}
  ];
  var store = {}; try{ store = JSON.parse(localStorage.getItem('album-checks')||'{}') }catch(e){}
  var box = $('#checks');
  box.innerHTML = phases.map(function(p){
    return '<div class="phase"><h3>'+esc(p.t)+'</h3>'+p.i.map(function(t,j){
      var id=p.k+'-'+j; return '<label><input type="checkbox" data-id="'+id+'"'+(store[id]?' checked':'')+'><span>'+esc(t)+'</span></label>';
    }).join('')+'</div>';
  }).join('');
  box.addEventListener('change',function(e){
    var c=e.target; if(!c.dataset.id) return; store[c.dataset.id]=c.checked;
    try{ localStorage.setItem('album-checks',JSON.stringify(store)) }catch(e){}
  });
})();
