import{s as $,n as S}from"./scheduler.D8jTWijz.js";import{S as ee,i as te,e as n,s as i,c as a,g as l,a as c,b as x,d as o,f as s}from"./index.MdRYwpiI.js";function oe(Z){let r,W='<ol class="toc-level toc-level-1"><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#simple-vim-solution-edit-via-scp">Simple VIM solution: edit via scp</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#atom-package---remote-sync">Atom package - remote-sync</a></li></ol>',C,m,O=`Working on files on a remote server will never be as straight forwards as
working with local folders. The most straight forward way would be of course to
start a remote session on the server and start up a text editing software
there. This will lead to many complications if you, have grown accustom to
multiple text-editing plugins that enhances certain editing experiences. For
example, <a href="https://www.scientificlinux.org/" rel="nofollow">Scientific Linux</a> version 6, which
is still a common distribution on research machines, only ships with
<a href="http://ftp.scientificlinux.org/linux/scientific/6.9/x86_64/os/Packages/" rel="nofollow"><code>python2.6</code></a>
by default, with many of the more fancy plugins for vim requiring at least
<code>python2.7</code>, sometimes even <code>python3</code>. In this case, one way to patch this
would be to compile you own version of the packages required for your favorite
text editing environment on your remote machines. But not only is this
time-consuming, additional problems may also occur if your remote machine has
floating environment settings, such as loading a new <code>glibc/python</code> path when
loading specific packages, which may or may not conflict with your private
compiled libraries. My opinion is that your editing experience should be
something that could be set up one your own local machine once, and be shared
among all the projects you are working on, remote or otherwise. While the
solution provided isn’t the silver bullet for solving every use case, it did
help me in most of my problems when working on remote projects with my editor
of preference: <a href="https://atom.io/" rel="nofollow">atom</a>.`,q,y,V=`Before starting any flame wars, I must say that I am only providing a vim
solution and not an Emacs one simply because I have no experience with Emacs.
While I do not doubt that Emacs has a perfectly splendid solution to the issue
I have stated above, I simply cannot recommend something I have no experience
with.`,_,p,R='<a aria-hidden="true" tabindex="-1" href="#simple-vim-solution-edit-via-scp"><span class="icon icon-link"></span></a>Simple VIM solution: edit via <code>scp</code>',M,f,U=`As of version 6.0, vim can actually edit remote files
<a href="http://vim.wikia.com/wiki/Editing_remote_files_via_scp_in_vim" rel="nofollow">out-of-the-box</a>
via the command:`,L,h,z='<div class="code-block code-copyable"><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span>:edit scp://&lt;remoteuser&gt;@&lt;server.url&gt;//absolute/path/to/file</span></span></code></pre></div>',T,F,B=`If you are already familiar with <code>ssh/scp</code> commands, the layout of this command
shouldn’t be difficult to understand. One cool feature about this method is
that it uses the settings stored in <code>~/.ssh/config</code>. So if you already have
aliases setup for machines that might be tedious to get to (long URL, multiple
machine tunneling… etc.), you have full access to what ever you have set up.`,H,v,N=`While this method might be easy to perform small edits, if you have a project
in development on a remote machine, this method is still rather tedious when
you might need to edit multiple files in one editing session. Also, tab
auto-complete for the remote path doesn’t work out-of-the-box, so navigating
through a project tree might be a bit irritating.`,E,u,X='<a aria-hidden="true" tabindex="-1" href="#atom-package---remote-sync"><span class="icon icon-link"></span></a>Atom package - <a href="https://atom.io/packages/remote-sync" rel="nofollow">remote-sync</a>',I,g,Y=`One method would be to create a local copy of the remote directory onto your
local machine, and attempt to sync whenever a file is changed. While are
multiple tools for achieving this via UNIX command lines (<code>rsync</code>, <code>sshfs</code>…
etc.), in Atom the package <a href="https://atom.io/packages/remote-sync" rel="nofollow">remote-sync</a>
encapsulates all of this in an easy-to-edit, easy-to-read configuration files to
set up. In you local directory, write a <code>.remote-sync.json</code> file like:`,j,d,G=`<div class="code-block-header"><span class="code-block-lang">[json]</span></div> <div class="code-block code-copyable"><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#F8F8F2">{</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic">  &quot;transport&quot;</span><span style="color:#F8F8F2">: </span><span style="color:#CFCFC2">&quot;scp&quot;</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic">  &quot;username&quot;</span><span style="color:#F8F8F2">: </span><span style="color:#CFCFC2">&quot;user&quot;</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic">  &quot;hostname&quot;</span><span style="color:#F8F8F2">: </span><span style="color:#CFCFC2">&quot;server.url&quot;</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic">  &quot;port&quot;</span><span style="color:#F8F8F2">: </span><span style="color:#CFCFC2">&quot;22&quot;</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic">  &quot;target&quot;</span><span style="color:#F8F8F2">: </span><span style="color:#CFCFC2">&quot;/absolute/remote/path/&quot;</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic">  &quot;ignore&quot;</span><span style="color:#F8F8F2">: [</span></span>
<span class="line"><span style="color:#CFCFC2">    &quot;*.txt&quot;</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#CFCFC2">    &quot;*.pyc&quot;</span></span>
<span class="line"><span style="color:#F8F8F2">  ],</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic">  &quot;uploadOnSave&quot;</span><span style="color:#F8F8F2">: </span><span style="color:#AE81FF">true</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic">  &quot;deleteLocal&quot;</span><span style="color:#F8F8F2">: </span><span style="color:#AE81FF">false</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic">  &quot;useAtomicWrites&quot;</span><span style="color:#F8F8F2">: </span><span style="color:#AE81FF">false</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic">  &quot;keyfile&quot;</span><span style="color:#F8F8F2">: </span><span style="color:#CFCFC2">&quot;/your/.ssh/id_rsa_keyfile&quot;</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic">  &quot;watch&quot;</span><span style="color:#F8F8F2">: []</span></span>
<span class="line"><span style="color:#F8F8F2">}</span></span></code></pre></div>`,A,w,J=`Which tell atom to attempt to sync the contents in
<code>user@server.url:/absolute/remote/path</code> with the contents where
<code>.remote-sync.json</code> is situated on your local machine. You can call the command
to initiate a first sync via <code>Remote Sync: Upload folder</code> or <code>Remote Sync: Download folder</code>, depending on the direction of the first sync. Then you can
enjoy the snappiness of local editing while the <code>uploadOnSave</code> option
automatically save your files remotely as well! For a full documentation of the
<code>json</code> file options, see the <a href="https://atom.io/packages/remote-sync" rel="nofollow">official
documentation</a>.`,D,b,K=`One downside of this package is that it currently does not use the common <code>ssh</code>
settings found in the <code>~/.ssh</code> directory. Meaning that one cannot edit on
machines hidden behind another gateway machine. Another issue is that if you
remote locations does not support key-file logins, you will have to leave your
password in plain text in the configuration file, something I find incredibly
hairy.`,P,k,Q=`All in all, I would say that given the remote machines settings, you may or may
not enjoy using this package. For me at least, I was still miles better than
running either a sluggish vim that constantly interrupts the editing flow or a
vim I feel doesn’t deliver what it could.`;return{c(){r=n("nav"),r.innerHTML=W,C=i(),m=n("p"),m.innerHTML=O,q=i(),y=n("p"),y.textContent=V,_=i(),p=n("h2"),p.innerHTML=R,M=i(),f=n("p"),f.innerHTML=U,L=i(),h=n("div"),h.innerHTML=z,T=i(),F=n("p"),F.innerHTML=B,H=i(),v=n("p"),v.textContent=N,E=i(),u=n("h2"),u.innerHTML=X,I=i(),g=n("p"),g.innerHTML=Y,j=i(),d=n("div"),d.innerHTML=G,A=i(),w=n("p"),w.innerHTML=J,D=i(),b=n("p"),b.innerHTML=K,P=i(),k=n("p"),k.textContent=Q,this.h()},l(e){r=a(e,"NAV",{class:!0,"data-svelte-h":!0}),l(r)!=="svelte-1tnmlhf"&&(r.innerHTML=W),C=c(e),m=a(e,"P",{"data-svelte-h":!0}),l(m)!=="svelte-vrj542"&&(m.innerHTML=O),q=c(e),y=a(e,"P",{"data-svelte-h":!0}),l(y)!=="svelte-l3sy"&&(y.textContent=V),_=c(e),p=a(e,"H2",{id:!0,"data-svelte-h":!0}),l(p)!=="svelte-15awzkw"&&(p.innerHTML=R),M=c(e),f=a(e,"P",{"data-svelte-h":!0}),l(f)!=="svelte-7xz7qu"&&(f.innerHTML=U),L=c(e),h=a(e,"DIV",{class:!0,"data-svelte-h":!0}),l(h)!=="svelte-1kgvqow"&&(h.innerHTML=z),T=c(e),F=a(e,"P",{"data-svelte-h":!0}),l(F)!=="svelte-1g8jst4"&&(F.innerHTML=B),H=c(e),v=a(e,"P",{"data-svelte-h":!0}),l(v)!=="svelte-osggv1"&&(v.textContent=N),E=c(e),u=a(e,"H2",{id:!0,"data-svelte-h":!0}),l(u)!=="svelte-ak7f44"&&(u.innerHTML=X),I=c(e),g=a(e,"P",{"data-svelte-h":!0}),l(g)!=="svelte-1vlobg6"&&(g.innerHTML=Y),j=c(e),d=a(e,"DIV",{class:!0,"data-svelte-h":!0}),l(d)!=="svelte-p980n8"&&(d.innerHTML=G),A=c(e),w=a(e,"P",{"data-svelte-h":!0}),l(w)!=="svelte-arhjcn"&&(w.innerHTML=J),D=c(e),b=a(e,"P",{"data-svelte-h":!0}),l(b)!=="svelte-1oc8409"&&(b.innerHTML=K),P=c(e),k=a(e,"P",{"data-svelte-h":!0}),l(k)!=="svelte-1r1xaf8"&&(k.textContent=Q),this.h()},h(){x(r,"class","toc"),x(p,"id","simple-vim-solution-edit-via-scp"),x(h,"class","code-block-container"),x(u,"id","atom-package---remote-sync"),x(d,"class","code-block-container")},m(e,t){o(e,r,t),o(e,C,t),o(e,m,t),o(e,q,t),o(e,y,t),o(e,_,t),o(e,p,t),o(e,M,t),o(e,f,t),o(e,L,t),o(e,h,t),o(e,T,t),o(e,F,t),o(e,H,t),o(e,v,t),o(e,E,t),o(e,u,t),o(e,I,t),o(e,g,t),o(e,j,t),o(e,d,t),o(e,A,t),o(e,w,t),o(e,D,t),o(e,b,t),o(e,P,t),o(e,k,t)},p:S,i:S,o:S,d(e){e&&(s(r),s(C),s(m),s(q),s(y),s(_),s(p),s(M),s(f),s(L),s(h),s(T),s(F),s(H),s(v),s(E),s(u),s(I),s(g),s(j),s(d),s(A),s(w),s(D),s(b),s(P),s(k))}}}const ae={title:"Editing remote projects with Atom",description:"Edit files locally and automatically syncing changes to a remote projects",tags:["editor","coding"],banner:"thoughts.jpg"};class le extends ee{constructor(r){super(),te(this,r,null,oe,$,{})}}export{le as default,ae as metadata};
