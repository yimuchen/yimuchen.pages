import{s as Te,a as xe,n as $}from"./CywiF0zC.js";import{S as Me,i as Ce,e as l,s as o,c as n,g as r,a as s,h as Ie,f as t,b as c,d as a}from"./Csr7VRhO.js";function Le(ye){let h,ee='<ol class="toc-level toc-level-1"><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#moving-away-from-latex-beamer">Moving away from Latex Beamer</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#what-i-was-looking-for">What I was looking for</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#what-i-found">What I found</a><ol class="toc-level toc-level-2"><li class="toc-item toc-item-h3"><a class="toc-link toc-link-h3" href="#alternative-for-tikzpictures">Alternative for TIKZPICTURES</a></li><li class="toc-item toc-item-h3"><a class="toc-link toc-link-h3" href="#conclusion">Conclusion</a></li></ol></li></ol>',P,w,te=`New presentation making platform! Nice but changeable aesthetics and easy
editing! Hopefully this would work out for me!`,j,v,ie="Here is a quick sample that I made!",W,g,ae,G,d,le='<a aria-hidden="true" tabindex="-1" href="#moving-away-from-latex-beamer"><span class="icon icon-link"></span></a>Moving away from Latex Beamer',q,k,ne=`Previously, I have been attempting to find a replacement for <a href="https://en.wikibooks.org/wiki/LaTeX/Presentations" rel="nofollow">Latex
Beamer</a> for making
presentation slides. Latex is a very… unpleasant markup language to work with
when typing the small section of text used in slides, the over-head is just too
high, and default settings for various slide elements is either non-existent or
hard to find proper documentations. I thought it was maybe time to try and
find an alternative to use.`,E,m,oe='<a aria-hidden="true" tabindex="-1" href="#what-i-was-looking-for"><span class="icon icon-link"></span></a>What I was looking for',B,b,se=`There are still quite a lot of aspects of Latex beamer that I wish I could keep
in the new platform that I am looking for.`,U,x,re=`<li><p><strong>Cut between template design in content design:</strong> This is the part I find
very annoying with most GUI based document makers, for most of the slides,
I would like to keep a uniformed look, and for some reason I had always
thought the way GUI based presentation makers handled templates is a bit
hard to work with and difficult to pass between machines.</p></li> <li><p><strong>Minimal Overhead in document:</strong> The main problem with making slides in
latex is that often the documents is cluttered up with the latex commands
rather than the content.
<a href="https://guides.github.com/features/mastering-markdown/" rel="nofollow">Markdown</a> is one
of the most lightweight yet comprehensive markup languages, and what it
lacks in advanced formatting features, it makes up for by allowing embed
HTML! Here apparently HTML/CSS web based tools would be a good idea to
proceed. I have always shied away at the idea since I didn’t like the
aesthetics of HTML tags in documents too much. But is everything could be
packed into CSS, this might be a good alternative to work with!</p></li> <li><p><strong>Minimal use of external tools:</strong> I would rather that I don’t have to
constantly switch between application to make a document. Right now,
everything other document related tasks are performed using
<a href="https://atom.io/" rel="nofollow">atom</a> as my primary editor, so I would prefer
text-based applications, but I would mind a whole new platform if it meant
there is a good all-in-one package where I can complete all of my editing
works.</p></li> <li><p><strong>(Optional) WYSIWYG editing:</strong> Many things in slide creation are
case-by-case: adding description beside a diagram, tweaking template
parameters. I must say that text based is precise, but very slow to make
graphical changes.</p></li> <li><p><strong>Local editing:</strong> I’m not a bit fan of cloud editing.</p></li>`,z,f,he='<a aria-hidden="true" tabindex="-1" href="#what-i-found"><span class="icon icon-link"></span></a>What I found',R,I,de=`When searching for a solution that uses
<a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" rel="nofollow">Markdown</a>
for the primary text format, I was introduced to various web-based presentation
solution, the one that stood out for me was
<a href="https://github.com/hakimel/reveal.js/#" rel="nofollow">reveal.js</a>`,Y,y,me,A,T,fe=`<li><p>Off the shelf, it looks fresh and appealing, and being HTML+CSS, everything
is essentially tweak-able. To that is the problem template problem sorted
out (with a big plus of having a good starting point for making new
templates).</p></li> <li><p>I could mix and match markdown and HTML, meaning that I could have a very
simple work flow if I’m going for a simple slide look, by at the same time,
I won’t be limited by Markdown if I want to make something fancier. It also
means I could embed it into other websites if I so desire.</p></li> <li><p>Text based. Talk about no other tools.</p></li> <li><p>WYSIWYG Editing. This is where is fall flat. There is the <a href="https://slides.com/" rel="nofollow">official
graphical editor</a>, but the HTML it generates is not
designed to be human editable. But given the tools I could have, there
might be alternatives.</p></li>`,N,M,pe=`<a href="https://github.com/hakimel/reveal.js/#pdf-export" rel="nofollow">Exporting to PDF</a> (something
I consider essential for presentation in groups) is rather more troublesome
that I had thought. But I guess since atom is essentially a heavily modded
browser, I should be able to get the preview within atom, and only export to
DPF when everything is done. (If I cared to look hard enough, I guess there
will be JavaScript libraries to export with atom, but that is getting ahead of
myself)`,F,O,Z,C,ue=`Given all of its merits, there is one big thing I miss about beamer that I still
haven’t found and alternative to:`,D,p,ce='<a aria-hidden="true" tabindex="-1" href="#alternative-for-tikzpictures"><span class="icon icon-link"></span></a>Alternative for <a href="http://www.texample.net/tikz/" rel="nofollow">TIKZ</a>PICTURES',J,L,we=`Easily the most powerful diagram making package I have encountered. It could
easily make your diagrams look precise and could do a surprisingly complex
diagrams easily. HTML Canvases just isn’t as powerful (Unless I find a very
powerful JavaScript library).`,K,H,ve=`Looking at if I could export single TeX files into a PNG/SVG file however, I
have found that I have been using the whole <code>\\input</code>, <code>\\include</code> work flow of
latex completely wrong! So I guess diagrams could be made using single <code>.tex</code>
files! Image files are supposed to be independent of the content after all :)`,V,_,ge="Now, if there is only a WYSIWYG editor for <code>tikz</code>…",X,u,ke='<a aria-hidden="true" tabindex="-1" href="#conclusion"><span class="icon icon-link"></span></a>Conclusion',Q,S,be=`There is still a lot of work needed for making the slides: writing the CSS
themes, defining snippets that work with the themes in atom, writing scripts
that make deploying more simple. But I think this has quite a lot of potential
to be my platform of choice for a long time to come!`;return{c(){h=l("nav"),h.innerHTML=ee,P=o(),w=l("p"),w.textContent=te,j=o(),v=l("p"),v.textContent=ie,W=o(),g=l("iframe"),G=o(),d=l("h2"),d.innerHTML=le,q=o(),k=l("p"),k.innerHTML=ne,E=o(),m=l("h2"),m.innerHTML=oe,B=o(),b=l("p"),b.textContent=se,U=o(),x=l("ul"),x.innerHTML=re,z=o(),f=l("h2"),f.innerHTML=he,R=o(),I=l("p"),I.innerHTML=de,Y=o(),y=l("iframe"),A=o(),T=l("ul"),T.innerHTML=fe,N=o(),M=l("p"),M.innerHTML=pe,F=o(),O=l("hr"),Z=o(),C=l("p"),C.textContent=ue,D=o(),p=l("h3"),p.innerHTML=ce,J=o(),L=l("p"),L.textContent=we,K=o(),H=l("p"),H.innerHTML=ve,V=o(),_=l("p"),_.innerHTML=ge,X=o(),u=l("h3"),u.innerHTML=ke,Q=o(),S=l("p"),S.textContent=be,this.h()},l(e){h=n(e,"NAV",{class:!0,"data-svelte-h":!0}),r(h)!=="svelte-145rok9"&&(h.innerHTML=ee),P=s(e),w=n(e,"P",{"data-svelte-h":!0}),r(w)!=="svelte-1xl0nii"&&(w.textContent=te),j=s(e),v=n(e,"P",{"data-svelte-h":!0}),r(v)!=="svelte-ef5jpe"&&(v.textContent=ie),W=s(e),g=n(e,"IFRAME",{src:!0}),Ie(g).forEach(t),G=s(e),d=n(e,"H2",{id:!0,"data-svelte-h":!0}),r(d)!=="svelte-1nysv0i"&&(d.innerHTML=le),q=s(e),k=n(e,"P",{"data-svelte-h":!0}),r(k)!=="svelte-13s93kb"&&(k.innerHTML=ne),E=s(e),m=n(e,"H2",{id:!0,"data-svelte-h":!0}),r(m)!=="svelte-9gem1q"&&(m.innerHTML=oe),B=s(e),b=n(e,"P",{"data-svelte-h":!0}),r(b)!=="svelte-1buv5l2"&&(b.textContent=se),U=s(e),x=n(e,"UL",{"data-svelte-h":!0}),r(x)!=="svelte-aoi6f9"&&(x.innerHTML=re),z=s(e),f=n(e,"H2",{id:!0,"data-svelte-h":!0}),r(f)!=="svelte-19huut9"&&(f.innerHTML=he),R=s(e),I=n(e,"P",{"data-svelte-h":!0}),r(I)!=="svelte-ki320p"&&(I.innerHTML=de),Y=s(e),y=n(e,"IFRAME",{src:!0}),Ie(y).forEach(t),A=s(e),T=n(e,"UL",{"data-svelte-h":!0}),r(T)!=="svelte-3c7861"&&(T.innerHTML=fe),N=s(e),M=n(e,"P",{"data-svelte-h":!0}),r(M)!=="svelte-qpb515"&&(M.innerHTML=pe),F=s(e),O=n(e,"HR",{}),Z=s(e),C=n(e,"P",{"data-svelte-h":!0}),r(C)!=="svelte-xbh13l"&&(C.textContent=ue),D=s(e),p=n(e,"H3",{id:!0,"data-svelte-h":!0}),r(p)!=="svelte-w7fgts"&&(p.innerHTML=ce),J=s(e),L=n(e,"P",{"data-svelte-h":!0}),r(L)!=="svelte-fd0v5k"&&(L.textContent=we),K=s(e),H=n(e,"P",{"data-svelte-h":!0}),r(H)!=="svelte-nqii2a"&&(H.innerHTML=ve),V=s(e),_=n(e,"P",{"data-svelte-h":!0}),r(_)!=="svelte-z868ac"&&(_.innerHTML=ge),X=s(e),u=n(e,"H3",{id:!0,"data-svelte-h":!0}),r(u)!=="svelte-1jd8e63"&&(u.innerHTML=ke),Q=s(e),S=n(e,"P",{"data-svelte-h":!0}),r(S)!=="svelte-xqna99"&&(S.textContent=be),this.h()},h(){c(h,"class","toc"),xe(g.src,ae="http://yimuchen.github.io/slides/slides/GeneralPhysicsII_midterm/#/")||c(g,"src",ae),c(d,"id","moving-away-from-latex-beamer"),c(m,"id","what-i-was-looking-for"),c(f,"id","what-i-found"),xe(y.src,me="http://lab.hakim.se/reveal-js/#/")||c(y,"src",me),c(p,"id","alternative-for-tikzpictures"),c(u,"id","conclusion")},m(e,i){a(e,h,i),a(e,P,i),a(e,w,i),a(e,j,i),a(e,v,i),a(e,W,i),a(e,g,i),a(e,G,i),a(e,d,i),a(e,q,i),a(e,k,i),a(e,E,i),a(e,m,i),a(e,B,i),a(e,b,i),a(e,U,i),a(e,x,i),a(e,z,i),a(e,f,i),a(e,R,i),a(e,I,i),a(e,Y,i),a(e,y,i),a(e,A,i),a(e,T,i),a(e,N,i),a(e,M,i),a(e,F,i),a(e,O,i),a(e,Z,i),a(e,C,i),a(e,D,i),a(e,p,i),a(e,J,i),a(e,L,i),a(e,K,i),a(e,H,i),a(e,V,i),a(e,_,i),a(e,X,i),a(e,u,i),a(e,Q,i),a(e,S,i)},p:$,i:$,o:$,d(e){e&&(t(h),t(P),t(w),t(j),t(v),t(W),t(g),t(G),t(d),t(q),t(k),t(E),t(m),t(B),t(b),t(U),t(x),t(z),t(f),t(R),t(I),t(Y),t(y),t(A),t(T),t(N),t(M),t(F),t(O),t(Z),t(C),t(D),t(p),t(J),t(L),t(K),t(H),t(V),t(_),t(X),t(u),t(Q),t(S))}}}const Se={title:"Getting started with reveal.js",description:"Migrating to a new presentation platform",tags:["revealjs","presentation","computing"],modified:"2016-04-12T00:00:00.000Z",banner:"thoughts.jpg"};class Pe extends Me{constructor(h){super(),Ce(this,h,null,Le,Te,{})}}export{Pe as default,Se as metadata};
