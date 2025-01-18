import{s as oe,n as N}from"./scheduler.D0k7T8uo.js";import{S as pe,i as ie,e as l,s as o,c as t,g as i,a as p,b as x,d as n,f as a}from"./index.DKPK4hvO.js";function ce(te){let c,V='<ol class="toc-level toc-level-1"></ol>',_,h,Z=`Have you ever ran into a case where the certain commands always require some
prefix/setup before it can be properly executed? One of the most outstanding is
to do anything with <a href="https://cms-sw.github.io/" rel="nofollow">CMSSW</a>, will need to load in the environment first,
event if it is a small task such as looking at the contents of a single file.
Other common annoyance include the python <a href="https://docs.python.org/3/library/venv.html" rel="nofollow">virtual environments</a>, where
you forgot to switch into the environment before initiating the <a href="https://pip.pypa.io/en/stable/" rel="nofollow"><code>pip</code></a>
command, and now you have to redo all the install commands again, plus clean up
the dangling libraries that now live somewhere in your global python instance.
Is there a way of catching commands that you type into the prompt, check for
common “errors” again your use-case logics, and modify the commands accordingly
before executing?`,B,m,j=`The common solution for “modifying commands” is <a href="https://ss64.com/bash/alias.html" rel="nofollow">aliases</a>, but this is
solution in basically simple string substitution of the command that you type
in. While you can technically include bash logic into these aliases, you
effectively need all logic to be contained in a fancy on-liner bash statement
which quickly becomes unreadable. Is there a more intuitive way doing this?`,D,f,O=`If you are using <a href="https://www.zsh.org/" rel="nofollow"><code>zsh</code></a> instead of the more vanilla <a href="https://www.gnu.org/software/bash/" rel="nofollow"><code>bash</code></a> shell,
there is actually a very simple solution!`,M,r,X=`<div class="code-block-header"><span class="code-block-lang">[bash]</span></div> <div class="code-block code-copyable"><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic">function</span><span style="color:#A6E22E"> modify-accept-line</span><span style="color:#F8F8F2">() {</span></span>
<span class="line"><span style="color:#F8F8F2">  BUFFER</span><span style="color:#F92672">=</span><span style="color:#E6DB74">&quot;echo </span><span style="color:#F8F8F2">$BUFFER</span><span style="color:#E6DB74"> ; </span><span style="color:#F8F8F2">$BUFFER</span><span style="color:#E6DB74">&quot;</span></span>
<span class="line"><span style="color:#A6E22E">  zle</span><span style="color:#E6DB74"> .accept-line</span></span>
<span class="line"><span style="color:#F8F8F2">}</span></span>
<span class="line"><span style="color:#A6E22E">zle</span><span style="color:#AE81FF"> -N</span><span style="color:#E6DB74"> accept-line</span><span style="color:#E6DB74"> modify-accept-line</span></span></code></pre></div>`,T,u,Y=`If you include this snippet in your <code>.zshrc</code> file, and source this file. Next time
you type a command you will see that after you hit enter, what you enter into
the prompt will be modified!`,H,y,G=`<div class="code-block-header"><span class="code-block-lang">[text]</span></div> <div class="code-block "><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span>&gt; hello&lt;Enter&gt;</span></span>
<span class="line"><span>&gt; echo hello ; hello</span></span>
<span class="line"><span>hello</span></span>
<span class="line"><span>hello: command not found</span></span></code></pre></div>`,L,v,J=`The understanding this snippet itself is pretty straightforwards: the <code>$BUFFER</code>
variable is whatever is in the prompt at the time you hit enter, and you can
modify this variable via this new function before the <code>zle .accept-line</code> is
called, which tell the <code>zsh</code> interactive shell to actually execute the command.
In general such operations are part of the ”<a href="https://zsh.sourceforge.io/Doc/Release/Zsh-Line-Editor.html" rel="nofollow">zsh line editor</a> <a href="https://zsh.sourceforge.io/Doc/Release/Zsh-Line-Editor.html#Zle-Widgets" rel="nofollow">widgets</a>”, which allow for editing of the buffer string
programmatically. You probably have actually interacted with this system
before, as it is effectively how tab completion works in <code>zsh</code>! For our case,
we are only interested in the <code>.accept-line</code> widget, which trigger only when
the full buffer has been typed out.`,A,C,q,b,K=`So what can we use this for? Referring back to my example with <code>CMSSW</code>, we can
now say that if this is our input buffer looks like CMSSW command, and we
detect that the <code>CMSSW</code> environment is <em>not</em> set, then attempt to load in the
<code>cmsenv</code> command directly, so we can supply the <code>modify-accept-line</code> with
something like:`,$,F,Q=`<div class="code-block-header"><span class="code-block-lang">[bash]</span></div> <div class="code-block code-copyable"><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic">function</span><span style="color:#A6E22E"> modify-accept-line</span><span style="color:#F8F8F2">() {</span></span>
<span class="line"><span style="color:#88846F">  # If the input buffer starts with the cms-sw like command prefix</span></span>
<span class="line"><span style="color:#F92672">  if</span><span style="color:#F8F8F2"> [[ $BUFFER </span><span style="color:#F92672">==</span><span style="color:#F8F8F2"> cmsRun</span><span style="color:#F92672">*</span><span style="color:#F8F8F2"> ]] </span><span style="color:#F92672">||</span><span style="color:#F8F8F2"> [[ $BUFFER </span><span style="color:#F92672">==</span><span style="color:#F8F8F2"> edm</span><span style="color:#F92672">*</span><span style="color:#F8F8F2"> ]] </span><span style="color:#F92672">||</span><span style="color:#F8F8F2"> [[ $BUFFER </span><span style="color:#F92672">==</span><span style="color:#F8F8F2"> scram</span><span style="color:#F92672">*</span><span style="color:#F8F8F2"> ]]; </span><span style="color:#F92672">then</span></span>
<span class="line"><span style="color:#88846F">    #If the $CMSSW_BASE variable is not set</span></span>
<span class="line"><span style="color:#F92672">    if</span><span style="color:#F8F8F2"> [[ </span><span style="color:#F92672">-z</span><span style="color:#F8F8F2"> $CMSSW_BASE ]]; </span><span style="color:#F92672">then</span></span>
<span class="line"><span style="color:#88846F">      # Prefix the command with \`cmsenv\` command</span></span>
<span class="line"><span style="color:#F8F8F2">      BUFFER</span><span style="color:#F92672">=</span><span style="color:#E6DB74">&quot;cmsenv ; </span><span style="color:#F8F8F2">$BUFFER</span><span style="color:#E6DB74">&quot;</span></span>
<span class="line"><span style="color:#F92672">    fi</span></span>
<span class="line"><span style="color:#F92672">  fi</span></span>
<span class="line"><span style="color:#A6E22E">  zle</span><span style="color:#E6DB74"> .accept-line</span></span>
<span class="line"><span style="color:#F8F8F2">}</span></span>
<span class="line"><span style="color:#A6E22E">zle</span><span style="color:#AE81FF"> -N</span><span style="color:#E6DB74"> accept-line</span><span style="color:#E6DB74"> modify-accept-line</span></span></code></pre></div>`,R,E,ee=`Or for a more involved example, where the <code>modify-accept-line</code> can run any
function visible to the <code>zsh</code> session, you can have it so that if you run a
<code>python</code> command, it recursively searches the parent directory for a
<code>environment.yaml</code> file to see if you are expected to be running a <code>conda</code>
environment. If yes, and the <code>conda</code> environment defined in the <code>environment</code>
is not active, switch to it before executing the python command:`,z,d,se=`<div class="code-block-header"><span class="code-block-lang">[bash]</span></div> <div class="code-block code-copyable"><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic">function</span><span style="color:#A6E22E"> _add_conda_prefix</span><span style="color:#F8F8F2">() {</span></span>
<span class="line"><span style="color:#88846F">  # Finding directory containing pattern https://unix.stackexchange.com/a/22215</span></span>
<span class="line"><span style="color:#F8F8F2">  env_dir</span><span style="color:#F92672">=</span><span style="color:#F8F8F2">$PWD</span></span>
<span class="line"><span style="color:#F92672">  while</span><span style="color:#F8F8F2"> [[ </span><span style="color:#E6DB74">&quot;</span><span style="color:#F8F8F2">$env_dir</span><span style="color:#E6DB74">&quot;</span><span style="color:#F92672"> !=</span><span style="color:#E6DB74"> &quot;&quot;</span><span style="color:#F92672"> &amp;&amp;</span><span style="color:#F92672"> !</span><span style="color:#F92672"> -e</span><span style="color:#E6DB74"> &quot;</span><span style="color:#F8F8F2">$env_dir</span><span style="color:#E6DB74">/environment.yaml&quot;</span><span style="color:#F8F8F2"> ]]; </span><span style="color:#F92672">do</span></span>
<span class="line"><span style="color:#F8F8F2">    env_dir</span><span style="color:#F92672">=</span><span style="color:#F8F8F2">\${env_dir</span><span style="color:#F92672">%/*</span><span style="color:#F8F8F2">}</span></span>
<span class="line"><span style="color:#F92672">  done</span></span>
<span class="line"><span style="color:#F92672">  if</span><span style="color:#F8F8F2"> [[ $env_dir </span><span style="color:#F92672">==</span><span style="color:#E6DB74"> &quot;&quot;</span><span style="color:#F8F8F2"> ]]; </span><span style="color:#F92672">then</span></span>
<span class="line"><span style="color:#F92672">    return</span></span>
<span class="line"><span style="color:#F92672">  fi</span></span>
<span class="line"><span style="color:#88846F">  # Checking the name of environment. Ideally you should use yq for yaml</span></span>
<span class="line"><span style="color:#88846F">  # parsing, not this is no generically available on your system</span></span>
<span class="line"><span style="color:#F8F8F2">  env_name</span><span style="color:#F92672">=</span><span style="color:#F8F8F2">$(</span><span style="color:#A6E22E">head</span><span style="color:#AE81FF"> -n</span><span style="color:#AE81FF"> 1</span><span style="color:#E6DB74"> &quot;\${</span><span style="color:#F8F8F2">env_dir</span><span style="color:#E6DB74">}/environment.yaml&quot;</span><span style="color:#F92672"> |</span><span style="color:#A6E22E"> awk</span><span style="color:#E6DB74"> &#39;{print $2}&#39;</span><span style="color:#F8F8F2">)</span></span>
<span class="line"><span style="color:#88846F">  # Check if prefix match, if not add a conda_command prefix</span></span>
<span class="line"><span style="color:#F92672">  if</span><span style="color:#F8F8F2"> [[ $(</span><span style="color:#A6E22E">basename</span><span style="color:#E6DB74"> CONDA_PREFIX</span><span style="color:#F8F8F2">) </span><span style="color:#F92672">!=</span><span style="color:#F8F8F2"> \${env_name} ]]; </span><span style="color:#F92672">then</span></span>
<span class="line"><span style="color:#66D9EF">    echo</span><span style="color:#E6DB74"> &quot;conda activate \${</span><span style="color:#F8F8F2">env_name</span><span style="color:#E6DB74">} ; &quot;</span></span>
<span class="line"><span style="color:#F92672">  fi</span></span>
<span class="line"><span style="color:#F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic">function</span><span style="color:#A6E22E"> modify-accept-line</span><span style="color:#F8F8F2">() {</span></span>
<span class="line"><span style="color:#88846F">  # If the input buffer starts with the cms-sw like command prefix</span></span>
<span class="line"><span style="color:#F92672">  if</span><span style="color:#F8F8F2"> [[ $BUFFER </span><span style="color:#F92672">==</span><span style="color:#F8F8F2"> python</span><span style="color:#F92672">*</span><span style="color:#F8F8F2"> ]] </span><span style="color:#F92672">||</span><span style="color:#F8F8F2"> [[ $BUFFER </span><span style="color:#F92672">==</span><span style="color:#F8F8F2"> pip</span><span style="color:#F92672">*</span><span style="color:#F8F8F2"> ]]; </span><span style="color:#F92672">then</span></span>
<span class="line"><span style="color:#88846F">      # Prefix the command with \`cmsenv\` command</span></span>
<span class="line"><span style="color:#F8F8F2">      BUFFER</span><span style="color:#F92672">=</span><span style="color:#E6DB74">&quot;$(</span><span style="color:#A6E22E">_add_conda_prefix</span><span style="color:#E6DB74">) </span><span style="color:#F8F8F2">$BUFFER</span><span style="color:#E6DB74">&quot;</span></span>
<span class="line"><span style="color:#F92672">    fi</span></span>
<span class="line"><span style="color:#F92672">  fi</span></span>
<span class="line"><span style="color:#A6E22E">  zle</span><span style="color:#E6DB74"> .accept-line</span></span>
<span class="line"><span style="color:#F8F8F2">}</span></span>
<span class="line"><span style="color:#A6E22E">zle</span><span style="color:#AE81FF"> -N</span><span style="color:#E6DB74"> accept-line</span><span style="color:#E6DB74"> modify-accept-line</span></span></code></pre></div>`,S,w,ne=`At this point, the program-ability of the shell environment, the sky is the
limit, and this can be used to engineer away the little annoyances in your
daily shell life. Always beware of the <a href="https://xkcd.com/1319/" rel="nofollow">pitfall of automation</a> though.`,I,U,P,g,ae="Some things that you might want to note:",W,k,le=`<li>The <code>.accept-line</code> widget will only be triggered for interactive prompts.
This means that the same logic will not be reflected in scripts, so you still
need to keep track of your execution logic.</li> <li>The modifications to the buffer line <em>will</em> be reflected in the command
history, so you can still use that to trace your execution logic with the
modified command if you somehow forget if a command modification was
performed or not.</li> <li>The <code>$BUFFER</code> variable is the <em>entire</em> input buffer, meaning that the way we
have set up commands in the examples above, it will only detect the <code>python</code>
command if your entire buffer starts with the <code>&quot;python&quot;</code> string; in other
that solution will <em>not</em> modify python commands that are nested in inline
<code>if</code>/<code>for</code> statements. As this page aims to be a quick example to solve
little annoyances, I will not go into details of how to perform shell script
parsing in with shell script itself to have all instances of python be
modified.</li>`;return{c(){c=l("nav"),c.innerHTML=V,_=o(),h=l("p"),h.innerHTML=Z,B=o(),m=l("p"),m.innerHTML=j,D=o(),f=l("p"),f.innerHTML=O,M=o(),r=l("div"),r.innerHTML=X,T=o(),u=l("p"),u.innerHTML=Y,H=o(),y=l("div"),y.innerHTML=G,L=o(),v=l("p"),v.innerHTML=J,A=o(),C=l("hr"),q=o(),b=l("p"),b.innerHTML=K,$=o(),F=l("div"),F.innerHTML=Q,R=o(),E=l("p"),E.innerHTML=ee,z=o(),d=l("div"),d.innerHTML=se,S=o(),w=l("p"),w.innerHTML=ne,I=o(),U=l("hr"),P=o(),g=l("p"),g.textContent=ae,W=o(),k=l("ul"),k.innerHTML=le,this.h()},l(e){c=t(e,"NAV",{class:!0,"data-svelte-h":!0}),i(c)!=="svelte-11ukb7v"&&(c.innerHTML=V),_=p(e),h=t(e,"P",{"data-svelte-h":!0}),i(h)!=="svelte-bnjz42"&&(h.innerHTML=Z),B=p(e),m=t(e,"P",{"data-svelte-h":!0}),i(m)!=="svelte-1f9xoq6"&&(m.innerHTML=j),D=p(e),f=t(e,"P",{"data-svelte-h":!0}),i(f)!=="svelte-ey2vu7"&&(f.innerHTML=O),M=p(e),r=t(e,"DIV",{class:!0,"data-svelte-h":!0}),i(r)!=="svelte-b3do2b"&&(r.innerHTML=X),T=p(e),u=t(e,"P",{"data-svelte-h":!0}),i(u)!=="svelte-1di2339"&&(u.innerHTML=Y),H=p(e),y=t(e,"DIV",{class:!0,"data-svelte-h":!0}),i(y)!=="svelte-kd0niz"&&(y.innerHTML=G),L=p(e),v=t(e,"P",{"data-svelte-h":!0}),i(v)!=="svelte-198gmyz"&&(v.innerHTML=J),A=p(e),C=t(e,"HR",{}),q=p(e),b=t(e,"P",{"data-svelte-h":!0}),i(b)!=="svelte-1emiumj"&&(b.innerHTML=K),$=p(e),F=t(e,"DIV",{class:!0,"data-svelte-h":!0}),i(F)!=="svelte-ls53sp"&&(F.innerHTML=Q),R=p(e),E=t(e,"P",{"data-svelte-h":!0}),i(E)!=="svelte-4w96ai"&&(E.innerHTML=ee),z=p(e),d=t(e,"DIV",{class:!0,"data-svelte-h":!0}),i(d)!=="svelte-ehycsj"&&(d.innerHTML=se),S=p(e),w=t(e,"P",{"data-svelte-h":!0}),i(w)!=="svelte-a00muf"&&(w.innerHTML=ne),I=p(e),U=t(e,"HR",{}),P=p(e),g=t(e,"P",{"data-svelte-h":!0}),i(g)!=="svelte-188i9k9"&&(g.textContent=ae),W=p(e),k=t(e,"UL",{"data-svelte-h":!0}),i(k)!=="svelte-f0c9ed"&&(k.innerHTML=le),this.h()},h(){x(c,"class","toc"),x(r,"class","code-block-container"),x(y,"class","code-block-container"),x(F,"class","code-block-container"),x(d,"class","code-block-container")},m(e,s){n(e,c,s),n(e,_,s),n(e,h,s),n(e,B,s),n(e,m,s),n(e,D,s),n(e,f,s),n(e,M,s),n(e,r,s),n(e,T,s),n(e,u,s),n(e,H,s),n(e,y,s),n(e,L,s),n(e,v,s),n(e,A,s),n(e,C,s),n(e,q,s),n(e,b,s),n(e,$,s),n(e,F,s),n(e,R,s),n(e,E,s),n(e,z,s),n(e,d,s),n(e,S,s),n(e,w,s),n(e,I,s),n(e,U,s),n(e,P,s),n(e,g,s),n(e,W,s),n(e,k,s)},p:N,i:N,o:N,d(e){e&&(a(c),a(_),a(h),a(B),a(m),a(D),a(f),a(M),a(r),a(T),a(u),a(H),a(y),a(L),a(v),a(A),a(C),a(q),a(b),a($),a(F),a(R),a(E),a(z),a(d),a(S),a(w),a(I),a(U),a(P),a(g),a(W),a(k))}}}const Fe={title:"ZLE - a glimpse of advanced command augmentation",description:"A first glimpse into advance interative shell augmentation",tags:["computing","tips"],banner:"thoughts.jpg"};class de extends pe{constructor(c){super(),ie(this,c,null,ce,oe,{})}}export{de as default,Fe as metadata};
