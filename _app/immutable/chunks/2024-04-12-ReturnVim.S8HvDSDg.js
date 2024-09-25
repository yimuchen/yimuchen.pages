import{s as et,n as be}from"./scheduler.D0k7T8uo.js";import{S as tt,i as it,e as n,s as l,c as a,g as r,a as s,b as v,d as i,f as o}from"./index.DKPK4hvO.js";function ot($e){let h,xe='<ol class="toc-level toc-level-1"><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#the-cases-i-made-for-an-alternate-editor">The cases I made for an alternate editor</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#the-great-features-of-neovim">The great features of neovim</a><ol class="toc-level toc-level-2"><li class="toc-item toc-item-h3"><a class="toc-link toc-link-h3" href="#language-server-protocol">Language server protocol</a></li><li class="toc-item toc-item-h3"><a class="toc-link toc-link-h3" href="#fuzzy-finder">Fuzzy finder</a></li></ol></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#some-functionalities-that-i-still-havent-found-the-solutions-for">Some functionalities that I still haven’t found the solutions for</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#some-new-functionalities-that-i-should-continue-learning">Some new functionalities that I should continue learning</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#links-to-resources">Links to resources</a></li></ol>',G,w,Le=`<a href="http://yimuchen.github.io/Migrating-to-Atom/" rel="nofollow">Eight years ago</a>, I moved away from vim to using a graphical editor
<a href="https://en.wikipedia.org/wiki/Atom_(text_editor)" rel="nofollow">Atom</a> (and later <a href="https://code.visualstudio.com/" rel="nofollow">VS Code</a>); four months ago, I started
reconfiguring the many dot files to once again make the
(<a href="https://neovim.io/" rel="nofollow">neo</a>)<a href="https://www.vim.org/" rel="nofollow">vim</a> my main editor. After close to cleaning up my first
round of ricing (yes, it took 4 months), I’ve decided to revisit some of the
issues I had when with vim at the time, and see what has changed my influence
to change yet again.`,V,u,Te='<a aria-hidden="true" tabindex="-1" href="#the-cases-i-made-for-an-alternate-editor"><span class="icon icon-link"></span></a>The cases I made for an alternate editor',B,y,He=`My old writing contained quite a bit of unrelated rambling, so to condense it
down the following points:`,O,k,Ie=`<li><p><strong>Graphical feedback</strong>: from the smaller things like icons for indications of
file type when navigating file systems; odd items like a mini map for
indicating the overall file layout; preview to graphical output elements,
like plots and latex formulas.</p> <p>While some of these items are partially solved with newer technologies (such
as the first item with <a href="https://www.nerdfonts.com/" rel="nofollow">nerd fonts</a>; <a href="https://saitoha.github.io/libsixel/" rel="nofollow"><code>sixel</code></a> for graphical
results display), the requirement for constant feed-back actually points to a
different issue in editing that I did not properly identify: can my editor
help me make less mistakes, and indicate when I might be doing something
wrong? The tools that have been developed since then also means that new
editing tools make a lot of the concerns that I have be a moot point.</p></li> <li><p><strong>Obtuse-ness</strong>: At the time, I was complaining that keystrokes in vim was
“too different” from other programs. What I realized over time is that
problem with keystrokes is less to do with how obtuse the keystrokes are, but
rather how easy it is to look up keystrokes that you might have forgotten,
either because you are still learning the system, or it is a functionality
that you did not use for some time. An alternate workflow for graphical
editors for example:, while the keystrokes required to insert a “π” character
in LibreOffice is also rather obtuse (<code>&lt;Alt&gt;i&lt;Alt&gt;ppi&lt;Cr&gt;&lt;Esc&gt;</code>), because of
the graphical feedback, on holding down <code>Alt</code>, you can immediately see what
keystrokes are needed to navigate the toolbar to reach what you need. So
effectively, when trying to learn a new function, the only keystroke that I
need to keep track of is effectively just <code>Alt</code>. At the time, I did not know
whether there is an easy way to discover the mapping of additional vim
motions other than <a href="https://en.wikipedia.org/wiki/RTFM" rel="nofollow">RTFM</a>. While reading the manual should be the best
path to learn, having to constantly hop in-and-out of the editor just to
learn the editor add rather heavily to the already steep learning curve.</p> <p>Another aspect of obtuseness that I did not explicitly say, was also that
configuring vim via <a href="https://learnvimscriptthehardway.stevelosh.com/" rel="nofollow"><code>vimscript</code></a> did (at least at the time), feel
a lot less intuitive than writing a JSON file that feels easier to organize
and track for configuration. This is one of the reasons that I opted to use
<a href="https://neovim.io/" rel="nofollow">neovim</a> rather than <a href="https://www.vim.org/" rel="nofollow">vim</a>, with understanding how to do
configurations with a general purpose language (<a href="https://www.lua.org/" rel="nofollow"><code>lua</code></a>) makes
everything simpler to learn.</p></li>`,N,b,Me=`How that I have re-discussed the pain points that pushed me away from vim eight
years ago, lets discussion the new points that pulled me back to vim after all
these years.`,Y,f,Ce='<a aria-hidden="true" tabindex="-1" href="#the-great-features-of-neovim"><span class="icon icon-link"></span></a>The great features of neovim',D,x,_e=`The pain points that I discussed previously actually applies to many of the
general workflow: how can my editor assist in text editing, pointing out when I
make hard mistakes, and giving hints about items that I need refreshing in? The
maturity of the two following tools are basically the killer apps that got me
back into wanting to use neovim.`,J,c,je='<a aria-hidden="true" tabindex="-1" href="#language-server-protocol"><span class="icon icon-link"></span></a>Language server protocol',K,L,ze=`<a href="https://microsoft.github.io/language-server-protocol/" rel="nofollow">Language server protocols (LSP)</a> is what is need for you editor to
understand the context of the code that you are editing. This includes the
ability to make give in-time syntax error warning, context aware autocomplete,
function signature lookup and hinting, and project-wide navigation and editing.
Here we have a look at some of the functionality that can be brought to the
editor if your editor has full integration with the language that you are
working with. Because LSPs are a program separate from the actual editor, this
means that it will not slow down you keystrokes on large files/project (one on
the reasons why I gave up on an autocomplete plugin when I was using vanilla vim
8 years ago), just that the suggestions might take a bit longer to show up.`,Q,T,Pe="<li>Syntax error indicator and warnings</li> <li>Context-aware autocomplete</li> <li>Function signature look up</li> <li>Code navigation - go to definition</li> <li>Code navigation - go to call instances</li> <li>Code navigation - go to next issue/list all issues in directory</li> <li>Project wide renaming</li>",X,H,qe=`<img src="../../image/posts/20240412/lsp_opt.GIF"/> <figcaption>A quick demonstraction of the functionalities of LSP in code editing
   workflow</figcaption>`,Z,I,Se=`Strangely enough, while LSP was originally developed for VS Code, it never
quite worked properly for me, with the functions look up function never quite
working unless I had the file containing the function in question opened in
another tab. While <a href="https://github.com/VonHeikemen/lsp-zero.nvim" rel="nofollow">configuring LSPs</a> for neovim is not trivial, I did
find it cohesive, and there are already complete resources out there for
settings this. (Shout out to <a href="https://www.youtube.com/watch?v=w7i4amO_zaE&amp;t=47s" rel="nofollow">this</a> ThePrimeagen video that convinced
me to jump back into the vim world).`,$,m,Ae='<a aria-hidden="true" tabindex="-1" href="#fuzzy-finder"><span class="icon icon-link"></span></a>Fuzzy finder',ee,M,Fe=`The secondary function is related to navigation: how do I look for a some code
snippet, a particular file, some editor functionality from within the editor?
What if I only remember some part of what I wanted to look up? Fuzzy finding is
by no means a “new” idea, but the maturity of a fuzzy finding plugin such as
<a href="https://github.com/nvim-telescope/telescope.nvim" rel="nofollow">telescope</a>, and its integration with neovim itself and its plugin
functionalities means that there is now just a few sets of keystrokes that you
need to set up to generically find items when code editing. You have actually
seen telescope in action in the demonstration of the LSP functionalities. But
here are some additional niceties that was not demonstrated:`,te,C,Ue="<li>Find file by name (regardless of nested directory)</li> <li>Find file by grep pattern</li> <li>Find neovim lua API</li> <li>Find in current key maps</li>",ie,_,Ee='<img src="../../image/posts/20240412/fzf_opt.GIF"/> <figcaption>Some common search navigations one can achieve with a good fuzzy finder.</figcaption>',oe,j,Re=`The maturity of such plugins arguably changed my workflow just as much as LSPs,
as jumping between what needs to be edited was something that disrupted my
though process quite a bit. While fuzzy searches exist for the graphical
editors, each item typically needs to open up something additional start the
lookup process. Here the simplicity of a text-based interact actually works in
favor of such functionalities, with any search being able to fired up
immediately with a similar interface. Using this, my old requirements of
keeping a file tree open at all times, having a file layout minimap, and having
to have a separate “project manager” functionality in the editor now looks like
and strange solution to a problematic workflow.`,ne,ae,le,z,We=`Of course, being an open source project, there are of course many ways to add
plenty of custom workflow improvements (and plenty of eye candy :))`,se,P,Ge=`<li><p><a href="https://github.com/nvim-lualine/lualine.nvim" rel="nofollow"><code>statuslines</code></a>/<a href="https://github.com/utilyre/barbecue.nvim?tab=readme-ov-file" rel="nofollow"><code>breadcrumbs</code></a>. The addition of these 2 were
actually utility inspired, when I had to stop talking during a screen share
sessions, as to the collaborator having to constantly ask “which
file/function are we on?” during the jumping around we can now do with LSP
navigation. You can see these items in action in all the demonstration images
above.</p></li> <li><p><a href="https://github.com/stevearc/oil.nvim/" rel="nofollow"><code>oil</code></a>: Creating/renaming/removing text files as if it were a text
buffer. Since telescope mainly works with existing files, oils was a nice
addition for directory tree navigation and manipulation.</p></li>`,re,q,Ve='<img src="../../image/posts/20240412/oil_opt.GIF"/> <figcaption>Editing directory structure like a text buffer is kinda cool!</figcaption>',he,S,Be='<li><a href="https://github.com/startup-nvim/startup.nvim/tree/master" rel="nofollow"><code>startup</code></a>: To tell people “I use vim BTW”</li>',ue,A,Oe='<img src="../../image/posts/20240412/IusevimBTW.png"/> <figcaption>Did I remember to say &quot;I use vim&quot; BTW?</figcaption>',fe,ce,me,F,Ne=`With neovim working with lua, adding custom functionality is rather fun to
learn once you get over the funny amalgamation of list and maps that is <a href="https://www.lua.org/pil/2.5.html" rel="nofollow">lua
tables</a> and the very funny <a href="https://www.lua.org/pil/11.1.html" rel="nofollow">start-by-1 indexing</a> syntax. I
have already added 2 functionality (not quite to the quality of an actual plugin)`,de,U,Ye=`<li><p><a href="https://github.com/yimuchen/dotfiles/blob/master/nvim/after/plugin/rsync.lua" rel="nofollow"><code>rsync</code> on save</a>: when working with remote servers, I like making all
my edits locally, then passing newly edited files to the remote machine. This
ensures that I can have a consistent editing environment without having to
worry about what tools are available on the server. It also doubles as a
backup copy on my local machine in case there were network outages and
version management.</p></li> <li><p><a href="https://github.com/yimuchen/dotfiles/blob/master/nvim/after/plugin/startup.lua" rel="nofollow"><code>startup</code> with projects list</a>: not really a function that I use
a lot, but since I moved away from using project managers, it seems good to
have the start-up page list the 10 recent git repository edits (I very rarely
use <code>startup</code>, so as long as ensure directory crawling is only performed on a
<code>startup</code>, this has very minimal impact on neovim startup page).</p></li>`,pe,d,De='<a aria-hidden="true" tabindex="-1" href="#some-functionalities-that-i-still-havent-found-the-solutions-for"><span class="icon icon-link"></span></a>Some functionalities that I still haven’t found the solutions for',ge,E,Je=`As of writing there is just one (admitted rather large) chunk of the workflow
that I have not quite found solution to, and complicated enough that I cannot
write up a solution in the 4 months of ricing. That is <strong><a href="https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop" rel="nofollow">REPL</a>
integration</strong>. Working with data analysis, a lot of the work flow requires me
to write some code, checkout the partially processed data, then continue
writing the next piece of code based on what I see. The requirement to see the
output to write the next piece of code is the reason why the
<a href="https://jupyter.org/" rel="nofollow">notebook</a> workflow is so popular. While there are existing REPL
integration <a href="https://github.com/benlubas/molten-nvim" rel="nofollow">plugins</a> in neovim, there are still items that feel like
breaking the neovim flow, with it requiring external buffers to open the
window, and inline output displays not really looking very nice in a pure
text-based display. The plugin still looks very active, though, so such this
verdict may change soon in the future!`,ve,p,Ke='<a aria-hidden="true" tabindex="-1" href="#some-new-functionalities-that-i-should-continue-learning"><span class="icon icon-link"></span></a>Some new functionalities that I should continue learning',we,R,Qe=`<li><strong>Vim motions</strong>: despite all that I have said about vim, my ability to
properly use vim motions is terrible (If you noticed the lack of <code>hjkl</code>
strokes in the demos above). Luckily, vim being vim, there are
<a href="https://github.com/ThePrimeagen/vim-be-good" rel="nofollow">plugins</a> for that.</li> <li><strong>Git integration</strong>: I still mainly use git directly in the command line,
though I’m also terrible with git. Learning more about how to use git and
understanding how to use it in a vim <a href="https://github.com/tpope/vim-fugitive" rel="nofollow">workflow</a> would be nice.</li> <li><strong>Edit history</strong>: we how to effectively use the <a href="https://github.com/mbbill/undotree" rel="nofollow">edit histories</a> to
make partial editing less of a pain.</li>`,ye,g,Xe='<a aria-hidden="true" tabindex="-1" href="#links-to-resources"><span class="icon icon-link"></span></a>Links to resources',ke,W,Ze=`<li>A link to my neovim configuration:
<a href="https://github.com/yimuchen/dotfiles/tree/master/nvim" rel="nofollow">https://github.com/yimuchen/dotfiles/tree/master/nvim</a></li> <li>An up-to-date tutorial on neovim configurations from one of the core
maintainers of neovim. Serves well as a good introductory video for how to
understand neovim configurations:
<a href="https://www.youtube.com/watch?v=m8C0Cq9Uv9o" rel="nofollow">https://www.youtube.com/watch?v=m8C0Cq9Uv9o</a></li> <li>GitHub repository of the video above:
<a href="https://github.com/nvim-lua/kickstart.nvim" rel="nofollow">https://github.com/nvim-lua/kickstart.nvim</a></li>`;return{c(){h=n("nav"),h.innerHTML=xe,G=l(),w=n("p"),w.innerHTML=Le,V=l(),u=n("h2"),u.innerHTML=Te,B=l(),y=n("p"),y.textContent=He,O=l(),k=n("ul"),k.innerHTML=Ie,N=l(),b=n("p"),b.textContent=Me,Y=l(),f=n("h2"),f.innerHTML=Ce,D=l(),x=n("p"),x.textContent=_e,J=l(),c=n("h3"),c.innerHTML=je,K=l(),L=n("p"),L.innerHTML=ze,Q=l(),T=n("ul"),T.innerHTML=Pe,X=l(),H=n("figure"),H.innerHTML=qe,Z=l(),I=n("p"),I.innerHTML=Se,$=l(),m=n("h3"),m.innerHTML=Ae,ee=l(),M=n("p"),M.innerHTML=Fe,te=l(),C=n("ul"),C.innerHTML=Ue,ie=l(),_=n("figure"),_.innerHTML=Ee,oe=l(),j=n("p"),j.textContent=Re,ne=l(),ae=n("hr"),le=l(),z=n("p"),z.textContent=We,se=l(),P=n("ul"),P.innerHTML=Ge,re=l(),q=n("figure"),q.innerHTML=Ve,he=l(),S=n("ul"),S.innerHTML=Be,ue=l(),A=n("figure"),A.innerHTML=Oe,fe=l(),ce=n("hr"),me=l(),F=n("p"),F.innerHTML=Ne,de=l(),U=n("ul"),U.innerHTML=Ye,pe=l(),d=n("h2"),d.innerHTML=De,ge=l(),E=n("p"),E.innerHTML=Je,ve=l(),p=n("h2"),p.innerHTML=Ke,we=l(),R=n("ul"),R.innerHTML=Qe,ye=l(),g=n("h2"),g.innerHTML=Xe,ke=l(),W=n("ul"),W.innerHTML=Ze,this.h()},l(e){h=a(e,"NAV",{class:!0,"data-svelte-h":!0}),r(h)!=="svelte-11o2t8s"&&(h.innerHTML=xe),G=s(e),w=a(e,"P",{"data-svelte-h":!0}),r(w)!=="svelte-3n3zfi"&&(w.innerHTML=Le),V=s(e),u=a(e,"H2",{id:!0,"data-svelte-h":!0}),r(u)!=="svelte-teluj1"&&(u.innerHTML=Te),B=s(e),y=a(e,"P",{"data-svelte-h":!0}),r(y)!=="svelte-eksc8d"&&(y.textContent=He),O=s(e),k=a(e,"UL",{"data-svelte-h":!0}),r(k)!=="svelte-6rkxiy"&&(k.innerHTML=Ie),N=s(e),b=a(e,"P",{"data-svelte-h":!0}),r(b)!=="svelte-11ufsda"&&(b.textContent=Me),Y=s(e),f=a(e,"H2",{id:!0,"data-svelte-h":!0}),r(f)!=="svelte-1q59euo"&&(f.innerHTML=Ce),D=s(e),x=a(e,"P",{"data-svelte-h":!0}),r(x)!=="svelte-1ojkukz"&&(x.textContent=_e),J=s(e),c=a(e,"H3",{id:!0,"data-svelte-h":!0}),r(c)!=="svelte-1gop2e3"&&(c.innerHTML=je),K=s(e),L=a(e,"P",{"data-svelte-h":!0}),r(L)!=="svelte-umexr8"&&(L.innerHTML=ze),Q=s(e),T=a(e,"UL",{"data-svelte-h":!0}),r(T)!=="svelte-1s67978"&&(T.innerHTML=Pe),X=s(e),H=a(e,"FIGURE",{"data-svelte-h":!0}),r(H)!=="svelte-17rrq3l"&&(H.innerHTML=qe),Z=s(e),I=a(e,"P",{"data-svelte-h":!0}),r(I)!=="svelte-5kyhba"&&(I.innerHTML=Se),$=s(e),m=a(e,"H3",{id:!0,"data-svelte-h":!0}),r(m)!=="svelte-wbyvse"&&(m.innerHTML=Ae),ee=s(e),M=a(e,"P",{"data-svelte-h":!0}),r(M)!=="svelte-1tx4287"&&(M.innerHTML=Fe),te=s(e),C=a(e,"UL",{"data-svelte-h":!0}),r(C)!=="svelte-1sjzaah"&&(C.innerHTML=Ue),ie=s(e),_=a(e,"FIGURE",{"data-svelte-h":!0}),r(_)!=="svelte-16qdvfj"&&(_.innerHTML=Ee),oe=s(e),j=a(e,"P",{"data-svelte-h":!0}),r(j)!=="svelte-1ctcv1m"&&(j.textContent=Re),ne=s(e),ae=a(e,"HR",{}),le=s(e),z=a(e,"P",{"data-svelte-h":!0}),r(z)!=="svelte-1micujr"&&(z.textContent=We),se=s(e),P=a(e,"UL",{"data-svelte-h":!0}),r(P)!=="svelte-15jyh4e"&&(P.innerHTML=Ge),re=s(e),q=a(e,"FIGURE",{"data-svelte-h":!0}),r(q)!=="svelte-35rqpu"&&(q.innerHTML=Ve),he=s(e),S=a(e,"UL",{"data-svelte-h":!0}),r(S)!=="svelte-1fasoth"&&(S.innerHTML=Be),ue=s(e),A=a(e,"FIGURE",{"data-svelte-h":!0}),r(A)!=="svelte-ugzfv"&&(A.innerHTML=Oe),fe=s(e),ce=a(e,"HR",{}),me=s(e),F=a(e,"P",{"data-svelte-h":!0}),r(F)!=="svelte-jhs65y"&&(F.innerHTML=Ne),de=s(e),U=a(e,"UL",{"data-svelte-h":!0}),r(U)!=="svelte-10dnb6r"&&(U.innerHTML=Ye),pe=s(e),d=a(e,"H2",{id:!0,"data-svelte-h":!0}),r(d)!=="svelte-1e80vpm"&&(d.innerHTML=De),ge=s(e),E=a(e,"P",{"data-svelte-h":!0}),r(E)!=="svelte-l1n59u"&&(E.innerHTML=Je),ve=s(e),p=a(e,"H2",{id:!0,"data-svelte-h":!0}),r(p)!=="svelte-cjga9r"&&(p.innerHTML=Ke),we=s(e),R=a(e,"UL",{"data-svelte-h":!0}),r(R)!=="svelte-395f2b"&&(R.innerHTML=Qe),ye=s(e),g=a(e,"H2",{id:!0,"data-svelte-h":!0}),r(g)!=="svelte-s7mk5b"&&(g.innerHTML=Xe),ke=s(e),W=a(e,"UL",{"data-svelte-h":!0}),r(W)!=="svelte-ur31lp"&&(W.innerHTML=Ze),this.h()},h(){v(h,"class","toc"),v(u,"id","the-cases-i-made-for-an-alternate-editor"),v(f,"id","the-great-features-of-neovim"),v(c,"id","language-server-protocol"),v(m,"id","fuzzy-finder"),v(d,"id","some-functionalities-that-i-still-havent-found-the-solutions-for"),v(p,"id","some-new-functionalities-that-i-should-continue-learning"),v(g,"id","links-to-resources")},m(e,t){i(e,h,t),i(e,G,t),i(e,w,t),i(e,V,t),i(e,u,t),i(e,B,t),i(e,y,t),i(e,O,t),i(e,k,t),i(e,N,t),i(e,b,t),i(e,Y,t),i(e,f,t),i(e,D,t),i(e,x,t),i(e,J,t),i(e,c,t),i(e,K,t),i(e,L,t),i(e,Q,t),i(e,T,t),i(e,X,t),i(e,H,t),i(e,Z,t),i(e,I,t),i(e,$,t),i(e,m,t),i(e,ee,t),i(e,M,t),i(e,te,t),i(e,C,t),i(e,ie,t),i(e,_,t),i(e,oe,t),i(e,j,t),i(e,ne,t),i(e,ae,t),i(e,le,t),i(e,z,t),i(e,se,t),i(e,P,t),i(e,re,t),i(e,q,t),i(e,he,t),i(e,S,t),i(e,ue,t),i(e,A,t),i(e,fe,t),i(e,ce,t),i(e,me,t),i(e,F,t),i(e,de,t),i(e,U,t),i(e,pe,t),i(e,d,t),i(e,ge,t),i(e,E,t),i(e,ve,t),i(e,p,t),i(e,we,t),i(e,R,t),i(e,ye,t),i(e,g,t),i(e,ke,t),i(e,W,t)},p:be,i:be,o:be,d(e){e&&(o(h),o(G),o(w),o(V),o(u),o(B),o(y),o(O),o(k),o(N),o(b),o(Y),o(f),o(D),o(x),o(J),o(c),o(K),o(L),o(Q),o(T),o(X),o(H),o(Z),o(I),o($),o(m),o(ee),o(M),o(te),o(C),o(ie),o(_),o(oe),o(j),o(ne),o(ae),o(le),o(z),o(se),o(P),o(re),o(q),o(he),o(S),o(ue),o(A),o(fe),o(ce),o(me),o(F),o(de),o(U),o(pe),o(d),o(ge),o(E),o(ve),o(p),o(we),o(R),o(ye),o(g),o(ke),o(W))}}}const lt={title:"Returning to (Neo)Vim",description:"Why I am return to using vim as a primary text editor",tags:["vim","computing","tips"],banner:"thoughts.jpg"};class st extends tt{constructor(h){super(),it(this,h,null,ot,et,{})}}export{st as default,lt as metadata};
