import{s as de,n as V}from"./CywiF0zC.js";import{S as he,i as ue,e as s,s as o,c as l,g as a,a as r,b as H,d as n,f as i}from"./Csr7VRhO.js";function fe(ce){let p,Y='<ol class="toc-level toc-level-1"><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#disclaimer">Disclaimer</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#contents">Contents</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#prerequisites">Prerequisites</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#why-i-am-writing-this">Why I am writing this</a></li></ol>',T,c,K='<a aria-hidden="true" tabindex="-1" href="#disclaimer"><span class="icon icon-link"></span></a>Disclaimer',L,v,Q=`I do not own any of the contents of <a href="https://github.com/cms-sw/cmssw" rel="nofollow">CMSSW</a>,
nor indeed participated in any significant <a href="http://cms-sw.github.io/tutorial-collaborating-with-peers.html" rel="nofollow">development of
CMSSW</a>. I am
just trying to share my experience in developing my analysis code using the
tool provided. If any developer does not wish the contents of these pages to be
hosted here, notify me and I will take them down immediately!`,F,d,X='<a aria-hidden="true" tabindex="-1" href="#contents"><span class="icon icon-link"></span></a>Contents',I,y,G='<li><a href="../2016-08-14-ItoCMSSW01HelloWorld">The compiling environment and <code>Hello world</code>!</a></li> <li><a href="../2016-08-15-ItoCMSSW02EDMFirstLook">Meeting the Event Data Model(EDM) file format</a></li> <li><a href="../2016-08-29-ItoCMSSW03MainFWFirstLook">First look at full CMSSW</a></li> <li>Altering the contents of EDM files</li> <li>Saving your own C++ formats</li>',W,h,J='<a aria-hidden="true" tabindex="-1" href="#prerequisites"><span class="icon icon-link"></span></a>Prerequisites',E,w,Z="In these pages, I am assuming that you are already familiar with:",q,b,$=`<li>Navigating a UNIX system with the command line</li> <li>Have access to a working CMSSW environment</li> <li>Familiar with C++ development:
<ul><li>Has rudimentary knowledge of writing multi-file C++ projects.</li> <li>Shared object files.</li> <li>Include path, link path, paths in general.</li></ul></li> <li>Understand basic python syntax
<ul><li>Even if you don’t, python syntax is very easy to pick up if you know other
programming languages.</li> <li>You do not need to know the python feature, just basic control flow and
object declaration.</li></ul></li>`,D,k,ee=`First, lets unify the software version we will be using throughout this
tutorial by setting up the CMSSW environment`,P,u,te=`<div class="code-block-header"><span class="code-block-lang">[bash]</span></div> <div class="code-block code-copyable"><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#F92672">export</span><span style="color:#F8F8F2"> SCRAM_ARCH</span><span style="color:#F92672">=</span><span style="color:#F8F8F2">slc6_amd64_gcc530</span></span>
<span class="line"><span style="color:#A6E22E">cmsrel</span><span style="color:#E6DB74"> CMSSW_8_0_16</span></span>
<span class="line"><span style="color:#66D9EF">cd</span><span style="color:#E6DB74"> CMSSW_8_0_16/src</span></span>
<span class="line"><span style="color:#A6E22E">cmsenv</span></span></code></pre></div>`,A,g,ne="This should give you a directory as that looks something like:",j,f,ie=`<div class="code-block code-copyable"><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span>└── CMSSW_8_0_16</span></span>
<span class="line"><span>    ├── biglib</span></span>
<span class="line"><span>    ├── bin</span></span>
<span class="line"><span>    ├── cfipython</span></span>
<span class="line"><span>    ├── config</span></span>
<span class="line"><span>    ├── doc</span></span>
<span class="line"><span>    ├── external</span></span>
<span class="line"><span>    ├── include</span></span>
<span class="line"><span>    ├── lib</span></span>
<span class="line"><span>    ├── logs</span></span>
<span class="line"><span>    ├── objs</span></span>
<span class="line"><span>    ├── python</span></span>
<span class="line"><span>    ├── src</span></span>
<span class="line"><span>    ├── test</span></span>
<span class="line"><span>    └── tmp</span></span></code></pre></div>`,U,C,se=`We will be working mainly in the <code>CMSSW_8_0_16/src</code> directory, where all of
your source code goes, looking a bit at the other directories when it is
needed. Also note that the majority of the tutorial would be version
independent, and version dependent snippets will (hopefully) be spelled out
explicitly.`,z,m,le='<a aria-hidden="true" tabindex="-1" href="#why-i-am-writing-this"><span class="icon icon-link"></span></a>Why I am writing this',B,M,ae="<blockquote><p>工欲善其事，必先利其器 - 《論語·魏靈公》</p></blockquote>",N,x,oe=`There are two equally important aspects of writing code: writing such that
computers could understand what you want; and writing such that humans could
understand what you are trying to do. Unfortunately, when there is a demand for
immediate results, the writing of analysis code typically begins slipping into
the unfortunate mindset of “write once, run once, read never”. This practice I
believe is damaging for the analysis in the long run, with advances in analysis
techniques and commonly used subroutines constantly being lost in heaps of
unreadable code, and excessive man power being wasted on reinventing wheels
that have been used multiple times already.`,O,_,re=`The CMS Software frameworks actually provide a very nice structure for
organizing code, as well as a powerful specialized library for event based data
storage; both aspects of which is highly under-appreciated by the majority of
people performing analysis work. Yes, the learning curve might be steep, but as
the scale required for analysis grows larger, I think it is worth it to learn
C++ development tools to allow for your works to grow independently of who is
still working on a project. CMSSW already provides a simplified and
easily-readable version so that one does not have to learn the even-harder
<a href="https://www.gnu.org/software/make/manual/make.html" rel="nofollow"><code>make</code></a> or
<a href="https://cmake.org/" rel="nofollow"><code>cmake</code></a> workflows.`,R,S,pe=`A part of why the learning curve is so steep for a supposedly simplified system
lays with the documentation, which, though being detailed, is spread-out
through many disconnected pages in the <a href="https://twiki.cern.ch/twiki/bin/view/CMSPublic/WorkBookAnalysisOverviewIntroduction" rel="nofollow">CERN
wiki</a>,
and fails to give a comfortable starting point for a beginner to start reading
and learning. This is what I intend to provide here: if you are familiar
enough with C++, hopefully you would find these pages helpful!`;return{c(){p=s("nav"),p.innerHTML=Y,T=o(),c=s("h2"),c.innerHTML=K,L=o(),v=s("p"),v.innerHTML=Q,F=o(),d=s("h2"),d.innerHTML=X,I=o(),y=s("ol"),y.innerHTML=G,W=o(),h=s("h2"),h.innerHTML=J,E=o(),w=s("p"),w.textContent=Z,q=o(),b=s("ul"),b.innerHTML=$,D=o(),k=s("p"),k.textContent=ee,P=o(),u=s("div"),u.innerHTML=te,A=o(),g=s("p"),g.textContent=ne,j=o(),f=s("div"),f.innerHTML=ie,U=o(),C=s("p"),C.innerHTML=se,z=o(),m=s("h2"),m.innerHTML=le,B=o(),M=s("blockquote"),M.innerHTML=ae,N=o(),x=s("p"),x.textContent=oe,O=o(),_=s("p"),_.innerHTML=re,R=o(),S=s("p"),S.innerHTML=pe,this.h()},l(e){p=l(e,"NAV",{class:!0,"data-svelte-h":!0}),a(p)!=="svelte-4eemx9"&&(p.innerHTML=Y),T=r(e),c=l(e,"H2",{id:!0,"data-svelte-h":!0}),a(c)!=="svelte-11n030f"&&(c.innerHTML=K),L=r(e),v=l(e,"P",{"data-svelte-h":!0}),a(v)!=="svelte-1bmfsdc"&&(v.innerHTML=Q),F=r(e),d=l(e,"H2",{id:!0,"data-svelte-h":!0}),a(d)!=="svelte-1xdtk8i"&&(d.innerHTML=X),I=r(e),y=l(e,"OL",{"data-svelte-h":!0}),a(y)!=="svelte-uchuk1"&&(y.innerHTML=G),W=r(e),h=l(e,"H2",{id:!0,"data-svelte-h":!0}),a(h)!=="svelte-187d8ol"&&(h.innerHTML=J),E=r(e),w=l(e,"P",{"data-svelte-h":!0}),a(w)!=="svelte-1dht09d"&&(w.textContent=Z),q=r(e),b=l(e,"UL",{"data-svelte-h":!0}),a(b)!=="svelte-l0dway"&&(b.innerHTML=$),D=r(e),k=l(e,"P",{"data-svelte-h":!0}),a(k)!=="svelte-1vpnxie"&&(k.textContent=ee),P=r(e),u=l(e,"DIV",{class:!0,"data-svelte-h":!0}),a(u)!=="svelte-18pur49"&&(u.innerHTML=te),A=r(e),g=l(e,"P",{"data-svelte-h":!0}),a(g)!=="svelte-5cvnxb"&&(g.textContent=ne),j=r(e),f=l(e,"DIV",{class:!0,"data-svelte-h":!0}),a(f)!=="svelte-zbocw2"&&(f.innerHTML=ie),U=r(e),C=l(e,"P",{"data-svelte-h":!0}),a(C)!=="svelte-4ignec"&&(C.innerHTML=se),z=r(e),m=l(e,"H2",{id:!0,"data-svelte-h":!0}),a(m)!=="svelte-1yuxh19"&&(m.innerHTML=le),B=r(e),M=l(e,"BLOCKQUOTE",{"data-svelte-h":!0}),a(M)!=="svelte-1pf3b4m"&&(M.innerHTML=ae),N=r(e),x=l(e,"P",{"data-svelte-h":!0}),a(x)!=="svelte-1vbxk6x"&&(x.textContent=oe),O=r(e),_=l(e,"P",{"data-svelte-h":!0}),a(_)!=="svelte-17vmafz"&&(_.innerHTML=re),R=r(e),S=l(e,"P",{"data-svelte-h":!0}),a(S)!=="svelte-1sowiu3"&&(S.innerHTML=pe),this.h()},h(){H(p,"class","toc"),H(c,"id","disclaimer"),H(d,"id","contents"),H(h,"id","prerequisites"),H(u,"class","code-block-container"),H(f,"class","code-block-container"),H(m,"id","why-i-am-writing-this")},m(e,t){n(e,p,t),n(e,T,t),n(e,c,t),n(e,L,t),n(e,v,t),n(e,F,t),n(e,d,t),n(e,I,t),n(e,y,t),n(e,W,t),n(e,h,t),n(e,E,t),n(e,w,t),n(e,q,t),n(e,b,t),n(e,D,t),n(e,k,t),n(e,P,t),n(e,u,t),n(e,A,t),n(e,g,t),n(e,j,t),n(e,f,t),n(e,U,t),n(e,C,t),n(e,z,t),n(e,m,t),n(e,B,t),n(e,M,t),n(e,N,t),n(e,x,t),n(e,O,t),n(e,_,t),n(e,R,t),n(e,S,t)},p:V,i:V,o:V,d(e){e&&(i(p),i(T),i(c),i(L),i(v),i(F),i(d),i(I),i(y),i(W),i(h),i(E),i(w),i(q),i(b),i(D),i(k),i(P),i(u),i(A),i(g),i(j),i(f),i(U),i(C),i(z),i(m),i(B),i(M),i(N),i(x),i(O),i(_),i(R),i(S))}}}const ye={title:"Introduction to CMS Software",description:"A step-by-step introduction to writing analysis coding the CMSSW",tags:["c++","python","cmssw"],banner:"code_head_1.png"};class we extends he{constructor(p){super(),ue(this,p,null,fe,de,{})}}export{we as default,ye as metadata};
