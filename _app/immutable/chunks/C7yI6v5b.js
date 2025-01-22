import{s as ge,n as X}from"./CywiF0zC.js";import{S as be,i as ke,e as n,s as a,c as l,g as s,a as r,b as P,d as i,f as o}from"./Csr7VRhO.js";function Le(xe){let c,Y='<ol class="toc-level toc-level-1"><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#programming-tmux">Programming tmux</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#the-combined-result--the-tmux--neovim-repl-experience">The combined result — the tmux + neovim REPL experience</a></li></ol>',F,f,Z=`When developing and writing code for data analysis, I most of the time I cannot
get what I need exactly on the first try, and writing code via a <a href="https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop" rel="nofollow">REPL</a>
cycle commonly used. The most common method of running REPL development is
arguably the use of <a href="https://jupyter.org/" rel="nofollow">Jupyter</a> servers and writing code in <a href="https://jupyter.org/" rel="nofollow">Jupyter
notebooks</a>. While there are many advantages to writing code then
immediately executing it to see a graphical result immediately, I personally
feel that the Jupyter workflow comes with its own set of constrains that
sometime feel infuriating.`,q,w,ee=`<li>Code editing in a browser: to use Jupyter you will need to interact with your
code either through the Jupyter browser interface or <a href="https://code.visualstudio.com/" rel="nofollow">something
similar</a>. This means you are giving up, or you need great efforts to
duplicate the settings that you already have on existing browser. Depending
on the amount of tools you expect out of your editor (other than converting
keystrokes into character), this may or may not be a deal-breaker for you.
For me, the fully integrated LSP support (for some reason, vs-code LSP
support was always a bit patchy for me), as well as the binding for code
formatting tools. A secondary issue for this is browsers are surprisingly
compute intensive, and it always felt rather annoying to hear my laptops fans
ramp up when waiting from a graphical result to return.</li> <li>The Jupyter notebook file is effectively a JSON file with a bunch of
meta-data tracking information, as well as string representations of the
graphical elements. This makes proper version management of notebooks
excessively verbose to manage.</li>`,B,v,te=`Having moved my workflow to neovim, the question then becomes with what we
require out of jupyter notebook workflows, and see if one can replicate an
equivalent and potentially better experience using just command line tool:`,D,y,ie=`<li><p>Graphical results: with the better maturity of <a href="https://en.wikipedia.org/wiki/Sixel" rel="nofollow">sixel</a> <a href="https://www.arewesixelyet.com/" rel="nofollow">support</a>, we can technically create a simple alias dump plot
files to the terminal. Ideally this alias should result in a zero keystroke
overhead for displaying plots as with the standard Jupyter workflow (plots
are shown immediately after code execution).</p></li> <li><p>Executing code chunks: when developing a new function for a toolkit, we will
need the ability to redefine and execute a chunk of code over and over again
with:</p> <ul><li>Precision on where the chunk starts and ends</li> <li>Minimum keystrokes to define where the chunk starts and end.</li></ul> <p>With the help of LSPs, and other in-editor syntax parsing tools, this can
actually be done without the need for code cells! For example, the
<a href="https://github.com/echasnovski/mini.surround" rel="nofollow">mini-surround</a> plugin adds syntax aware scoping to vim
operations, so you can very simply define operations such as “yaF” (yank
around function) and “vaC” (visual select around class). So at this point,
remaining issue is how this can be passed to something that actually
executes the code.</p></li> <li><p>Persistent session: spawning and processing data is usually the step that
takes the most time, so if possible, we will need a persistent session that
keeps what we want in memory events after swapping files to edit (or even
exiting the editor). While there is the option of using the <a href="http://neovim.io/doc/user/terminal.html#terminal" rel="nofollow">in-built
terminal</a> in neovim, I feel like there is a better solution.</p></li>`,S,p,oe='<a aria-hidden="true" tabindex="-1" href="#programming-tmux"><span class="icon icon-link"></span></a>Programming tmux',A,x,ne=`The multiplexer tool <a href="https://github.com/tmux/tmux/wiki" rel="nofollow">tmux</a> allows for the creating terminal session that
can persist even after the terminal program used to spawn the session is
closed. An even more interesting aspect of <code>tmux</code> is that all controls of
<code>tmux</code> session can be handled by <strong>any</strong> program that can interact with the
user shell. For example, while we can create a new <code>tmux</code> window in a tmux
session with the keystrokes <code>&lt;Ctl-B&gt;5</code>, we can also call a shell command
outside the main tmux session:`,I,d,le='<div class="code-block-header"><span class="code-block-lang">[bash]</span></div> <div class="code-block code-copyable"><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#A6E22E">tmux</span><span style="color:#E6DB74"> new-window</span><span style="color:#AE81FF"> -t</span><span style="color:#F8F8F2"> ${name}</span><span style="color:#E6DB74">:5</span><span style="color:#AE81FF"> -n</span><span style="color:#E6DB74"> &quot;My window name&quot;</span></span></code></pre></div>',j,g,se=`Here the <code>-t</code> flag is followed by the “target” (window 5 of the “name” tmux
session), and <code>-n</code> is one of the eye candies of immediately adding a name to
the window instance.`,R,b,ae="Even more interesting, we can send directly send keystrokes to <strong>any</strong> pane!",J,h,re='<div class="code-block-header"><span class="code-block-lang">[bash]</span></div> <div class="code-block code-copyable"><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#A6E22E">tmux</span><span style="color:#E6DB74"> send-keys</span><span style="color:#AE81FF"> -t</span><span style="color:#E6DB74"> 3:0.0</span><span style="color:#E6DB74"> &quot;echo </span><span style="color:#AE81FF">\\&quot;</span><span style="color:#E6DB74">Hello world</span><span style="color:#AE81FF">\\&quot;</span><span style="color:#E6DB74">&quot;</span><span style="color:#E6DB74"> Enter</span></span></code></pre></div>',z,k,ce=`So this means that any execution can technically execute anything string, if
needed!`,W,L,pe=`The combination of this programmable interface with the maturity of sixel
support within <a href="https://github.com/tmux/tmux/commit/dfbc6b1888c110cf0ade66f20188c57757ee1298" rel="nofollow">tmux session</a>, means that all of our goals above
can potentially be solved! So what would a combined solution look and feel
like?`,V,m,de='<a aria-hidden="true" tabindex="-1" href="#the-combined-result--the-tmux--neovim-repl-experience"><span class="icon icon-link"></span></a>The combined result — the tmux + neovim REPL experience',O,T,he=`My full set of results can mainly be found in my <a href="https://github.com/yimuchen/dotfile" rel="nofollow"><code>dotfiles</code></a>
repository, with the key files being:`,N,H,me=`<li><a href="https://github.com/yimuchen/dotfiles/blob/master/nvim/after/plugin/tmux-repl.lua" rel="nofollow"><code>nvim/after/plugin/tmux-repl.lua</code></a>: for defining how neovim
keystrokes interact with tmux session.</li> <li>[<code>tmux/_tmux_custom.sh</code>]: A set of custom shell scripts for handling tmux
interactions.</li>`,G,M,ue="But basically the new workflow looks something like this:",U,_,fe=`<li><p>Start a fresh tmux session (the script automatically creates the session
name to match the directory)</p></li> <li><p>Within tmux, hit <code>&lt;prefix&gt;1</code> (in my case: <code>&lt;Ctl-B&gt;1</code>) to create an “editor”
window, this opens a neovim instance and this window will immediately close
when neovim is closed.</p></li> <li><p>Within <code>neovim</code>, hit <code>&lt;prefix&gt;tr</code> (in my case: <code>&lt;space&gt;tr</code>) to “t”oggle a
“r”epl terminal. Notice that this terminal is:</p> <ol><li>Handled by tmux, and is send to a background window when “closed” by
neovim (persistent session).</li> <li>Immediately spawn a <code>ipython</code> session, for me this behavior is defined by
placing a <code>.repl.sh</code> file in the working directory to let tmux know what
to execute when requesting a REPL terminal.</li></ol></li> <li><p>To execute code in neovim, highlight the required session in visual mode
(<code>ggVG</code> can be used to select the entire file, <code>vaF</code> can be used to select a
single function), then hit <code>&lt;prefix&gt;pr</code> when still in visual mode to ‘p’ass
selection to the ‘r’epl terminal!</p></li>`,$,C,we="Below is a simple demonstration for what can be done!",K,u,ve='<source src="../../image/posts/20240925/nvim-repl.mp4" type="video/mp4"/>',Q,E,ye=`The solution is still one step from being complete, as <code>matplotlib</code> does not
have a well-developed sixel backend that we directly display plots within the
repl session itself. While there are attempts to add such
<a href="https://pypi.org/project/matplotlib-backend-sixel/" rel="nofollow">backends</a>, my initial testings indicate that these
sometimes have problems either with tmux or singularity containers. But this I
hope is a demonstration that at least the dreams of fully leaving the jupyter
ecosystem to once again write pure text file when developing is now close to
fruition!`;return{c(){c=n("nav"),c.innerHTML=Y,F=a(),f=n("p"),f.innerHTML=Z,q=a(),w=n("ul"),w.innerHTML=ee,B=a(),v=n("p"),v.textContent=te,D=a(),y=n("ol"),y.innerHTML=ie,S=a(),p=n("h2"),p.innerHTML=oe,A=a(),x=n("p"),x.innerHTML=ne,I=a(),d=n("div"),d.innerHTML=le,j=a(),g=n("p"),g.innerHTML=se,R=a(),b=n("p"),b.innerHTML=ae,J=a(),h=n("div"),h.innerHTML=re,z=a(),k=n("p"),k.textContent=ce,W=a(),L=n("p"),L.innerHTML=pe,V=a(),m=n("h2"),m.innerHTML=de,O=a(),T=n("p"),T.innerHTML=he,N=a(),H=n("ul"),H.innerHTML=me,G=a(),M=n("p"),M.textContent=ue,U=a(),_=n("ol"),_.innerHTML=fe,$=a(),C=n("p"),C.textContent=we,K=a(),u=n("video"),u.innerHTML=ve,Q=a(),E=n("p"),E.innerHTML=ye,this.h()},l(e){c=l(e,"NAV",{class:!0,"data-svelte-h":!0}),s(c)!=="svelte-90wfzg"&&(c.innerHTML=Y),F=r(e),f=l(e,"P",{"data-svelte-h":!0}),s(f)!=="svelte-dyt13w"&&(f.innerHTML=Z),q=r(e),w=l(e,"UL",{"data-svelte-h":!0}),s(w)!=="svelte-1416dar"&&(w.innerHTML=ee),B=r(e),v=l(e,"P",{"data-svelte-h":!0}),s(v)!=="svelte-raktr4"&&(v.textContent=te),D=r(e),y=l(e,"OL",{"data-svelte-h":!0}),s(y)!=="svelte-ozdi85"&&(y.innerHTML=ie),S=r(e),p=l(e,"H2",{id:!0,"data-svelte-h":!0}),s(p)!=="svelte-jsvn6j"&&(p.innerHTML=oe),A=r(e),x=l(e,"P",{"data-svelte-h":!0}),s(x)!=="svelte-ovasoo"&&(x.innerHTML=ne),I=r(e),d=l(e,"DIV",{class:!0,"data-svelte-h":!0}),s(d)!=="svelte-1o1zc6h"&&(d.innerHTML=le),j=r(e),g=l(e,"P",{"data-svelte-h":!0}),s(g)!=="svelte-hq7gdt"&&(g.innerHTML=se),R=r(e),b=l(e,"P",{"data-svelte-h":!0}),s(b)!=="svelte-1c5nnfs"&&(b.innerHTML=ae),J=r(e),h=l(e,"DIV",{class:!0,"data-svelte-h":!0}),s(h)!=="svelte-160f85z"&&(h.innerHTML=re),z=r(e),k=l(e,"P",{"data-svelte-h":!0}),s(k)!=="svelte-13gpq4m"&&(k.textContent=ce),W=r(e),L=l(e,"P",{"data-svelte-h":!0}),s(L)!=="svelte-1ut0z0h"&&(L.innerHTML=pe),V=r(e),m=l(e,"H2",{id:!0,"data-svelte-h":!0}),s(m)!=="svelte-f55cwk"&&(m.innerHTML=de),O=r(e),T=l(e,"P",{"data-svelte-h":!0}),s(T)!=="svelte-18r07z6"&&(T.innerHTML=he),N=r(e),H=l(e,"UL",{"data-svelte-h":!0}),s(H)!=="svelte-15qdp1s"&&(H.innerHTML=me),G=r(e),M=l(e,"P",{"data-svelte-h":!0}),s(M)!=="svelte-1nd4noc"&&(M.textContent=ue),U=r(e),_=l(e,"OL",{"data-svelte-h":!0}),s(_)!=="svelte-1dg4cgj"&&(_.innerHTML=fe),$=r(e),C=l(e,"P",{"data-svelte-h":!0}),s(C)!=="svelte-ck277k"&&(C.textContent=we),K=r(e),u=l(e,"VIDEO",{"data-svelte-h":!0}),s(u)!=="svelte-ndosgk"&&(u.innerHTML=ve),Q=r(e),E=l(e,"P",{"data-svelte-h":!0}),s(E)!=="svelte-1ruxfcs"&&(E.innerHTML=ye),this.h()},h(){P(c,"class","toc"),P(p,"id","programming-tmux"),P(d,"class","code-block-container"),P(h,"class","code-block-container"),P(m,"id","the-combined-result--the-tmux--neovim-repl-experience"),u.controls=!0},m(e,t){i(e,c,t),i(e,F,t),i(e,f,t),i(e,q,t),i(e,w,t),i(e,B,t),i(e,v,t),i(e,D,t),i(e,y,t),i(e,S,t),i(e,p,t),i(e,A,t),i(e,x,t),i(e,I,t),i(e,d,t),i(e,j,t),i(e,g,t),i(e,R,t),i(e,b,t),i(e,J,t),i(e,h,t),i(e,z,t),i(e,k,t),i(e,W,t),i(e,L,t),i(e,V,t),i(e,m,t),i(e,O,t),i(e,T,t),i(e,N,t),i(e,H,t),i(e,G,t),i(e,M,t),i(e,U,t),i(e,_,t),i(e,$,t),i(e,C,t),i(e,K,t),i(e,u,t),i(e,Q,t),i(e,E,t)},p:X,i:X,o:X,d(e){e&&(o(c),o(F),o(f),o(q),o(w),o(B),o(v),o(D),o(y),o(S),o(p),o(A),o(x),o(I),o(d),o(j),o(g),o(R),o(b),o(J),o(h),o(z),o(k),o(W),o(L),o(V),o(m),o(O),o(T),o(N),o(H),o(G),o(M),o(U),o(_),o($),o(C),o(K),o(u),o(Q),o(E))}}}const Me={title:"REPL development experience in neovim and tmux",description:"Setting environments to enable a REPL development experience with neovim",tags:["vim","computing","tips"],banner:"thoughts.jpg"};class _e extends be{constructor(c){super(),ke(this,c,null,Le,ge,{})}}export{_e as default,Me as metadata};
