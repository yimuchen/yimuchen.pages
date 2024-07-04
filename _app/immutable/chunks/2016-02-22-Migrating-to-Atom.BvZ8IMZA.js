import{s as Fe,n as fe}from"./scheduler.D0k7T8uo.js";import{S as Ne,i as Ve,e as n,s,c as l,g as a,a as r,b as S,d as o,f as i}from"./index.B7LT_aZO.js";function Ke(Ee){let h,pe='<ol class="toc-level toc-level-1"><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#the-ideal-black-box-model">The Ideal Black Box Model</a><ol class="toc-level toc-level-2"><li class="toc-item toc-item-h3"><a class="toc-link toc-link-h3" href="#designing-for-the-user">Designing for the user</a></li><li class="toc-item toc-item-h3"><a class="toc-link toc-link-h3" href="#opening-the-black-box">Opening the black box</a></li></ol></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#the-appeal-of-atom">The appeal of Atom</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#difficulties-and-closing-words">Difficulties and closing words</a></li></ol>',U,c,de=`Recently I stumbled across the editor <a href="https://atom.io/" rel="nofollow">Atom</a>, and it was
amazing! I am often accused of being a “command-line guy”, and I disagree, I
love the graphical interface, using the mouse for certain tasks, and yet enjoy
using <a href="http://www.vim.org/" rel="nofollow">vim</a> and the command line interface all the same.
So here here is the reasons why I’m now deciding to leave the command line
editor vim in favour of a graphical editor.`,z,m,ue='<a aria-hidden="true" tabindex="-1" href="#the-ideal-black-box-model"><span class="icon icon-link"></span></a>The Ideal Black Box Model',E,v,ce=`I have slowly over the years formed a Ideology of what the a tool or a set of
tools should be like. Though neraly everyone in the modern era has embraced the
idea of the “abstaction as a black box”, but I think there should be more to
the black box model than simply hiding stuff from view. There should be some
thing that people should go the extra mile of designing to try and get most out
of the box they spent so much time on, to be able to make the tools we have
evolve as we find or require more stuff.`,F,f,ve='<a aria-hidden="true" tabindex="-1" href="#designing-for-the-user"><span class="icon icon-link"></span></a>Designing for the user',N,w,we=`The interface should be clear, intuitive and and well documented, so it should
have the properties that:`,V,b,be=`<li><strong>Definite behaviour</strong>: For some a difinitive input, there should be a
definitive and fixed output</li> <li><strong>Ease of access</strong>: Anyone should to be able to get their hands on it
without direct aid from the developers, or opening the black box.</li> <li><strong>Black boxes don’t cast shadows</strong>: All flow in and out of the box should
be transparent.</li>`,K,y,ye=`For software design, the first point this is typically achieved in all every
well-known software (as to the so-called “interface” design in physics
analysis, that a completely different rant all together…). But there should
be more to the second point then some people think: to “anyone” means that the
tool should be adaptable to suit the perculiarities of the audience using your
tool, both for habits of the user in question, and for the various task they
wish to perform.`,Q,g,ge=`Of course, you don’t have to design for anyone, and your program will forever
have such a limit user base. Then, there is the “apple-style” approach, work
very hard to find a good pre-set that works well for a lot of people. But then
as your audience grows, and develops new habits, and demand more out of their
tool, it is completely up to the deveoplers to keep one step ahead of their
users, and this approach is requires the foresight that not development team
could have (even giants in this philosophy like Apple flops very badly with
some of their products).`,Y,x,xe=`I’m more of a fan of the appraoch that the developers grant the freedom to the
user to modify the the tool to some extent. Since the tool’s design should be
for the user, it makes sense that we should allow the tool to be tune for their
needs, and to learn from what they tune to further imporve the experience
of users. <a href="https://www.mozilla.org/en-US/firefox/new/" rel="nofollow">Firefox</a>’s <a href="http://www.pcworld.com/article/221150/Firefox.html" rel="nofollow">smooth
scroll</a>,
<a href="https://atom.io/" rel="nofollow">Atom</a>’s <a href="https://atom.io/packages/snippets" rel="nofollow">snippet
package</a>, <a href="https://kerbalspaceprogram.com/en/" rel="nofollow">Kerbal space
program</a>’s improved aerodynamics system
are all great examples of this. Interaction between the developers and the
user is what pushes the tool to evolve in the direction that is benefical
as a whole, removing the blind spots that the devs might have when fixated
on performance and raw numbers alone.`,G,p,ke='<a aria-hidden="true" tabindex="-1" href="#opening-the-black-box"><span class="icon icon-link"></span></a>Opening the black box',R,k,Ce=`If we accept this model for making the program, the why don’t we go the extra
step? Instead of just letting the user added stuff via a predefined interface,
we should allow the user to enter the box itself and allow the to modify the
black box itself, to further blur the boundary between the developers and
users. This is the final point that I found so appealing about the open-source
movements, that tools are truely being design for the user, that the user are
empowered by the tools they want for themselves.`,W,C,Te=`Of course to allow this to work, even more documentation and maintenance is
required, to keep everything clean and clean for people that are new to you
project to understand (as for physics analysis… that would be yet another
longer rant…). But all of what I said is not limited to command line tools.
But is might be still valid that I am commonly mistaken for a command line guy:
tools that fit the criteria above are so much more common in command line
interfaces. Whether this is due to the longer history or the hassel of having
to design for the graphical interfaces, I don’t know, but the tools in command
line tools are seems much more complete and mature and powerful and general.
But then, alas, tools will always have their limitations. And I think I have
found the missing elements I have crave for so long in vim to appear in the
editor atom.`,J,d,Me='<a aria-hidden="true" tabindex="-1" href="#the-appeal-of-atom"><span class="icon icon-link"></span></a>The appeal of Atom',X,T,Ie=`Let’s start with the annoying little annoying things about using vim. The first
is that vim’s display is all character based (this is true even for gvim). So
try as I might, there are just some things that don’t look as nice in vim.`,Z,M,_e='<img src="https://drive.google.com/thumbnail?id=0Bw8_U9a0g9nHTG9CT3VkcnJBd1k"/> <figcaption>My vim layout at the time of writing</figcaption>',$,I,Le=`Little things, like icons for file type indicators, minimap of the file you are
editing, latex formula previews, markdown document previews just isn’t
impossible in vim. Does this make vim any less of an text editor? Not really,
but it’s just things that I wish where possible to make my workflow easier.`,ee,_,He=`Then there is the <a href="http://tvtropes.org/pmwiki/pmwiki.php/Main/DamnYouMuscleMemory" rel="nofollow">Damn You Muscle
Memory</a> moments
when moving from application to application. Vim’s keystrokes for executing
commands is… unique. Not doubt it is efficient for those very familiar with
it, but when your work requires you to move from application to application, it
can get very infuriating getting your fingers to perform different motions in
diffent application. I’m not that a big fan of the the hyper efficient
keystrokes, but still wish to retain that precise motions you can perfom in vim
by exiting the edit mode and using commands/hotkeys.`,te,L,qe=`Is vim a bad editor? No! It’s <a href="http://vimawesome.com/" rel="nofollow">awesome</a>! There are just
some aspects of it that doesn’t sit right with the workflow I wish I could
have.`,oe,H,Pe="Then I was introduced to atom:",ie,q,je=`<p>Atom is a text editor that’s modern, approachable, yet hackable to the core —
a tool you can customize to do anything but also use productively without
ever touching a config file.</p>`,ne,P,Be=`It was like the editor that works so well with what I want to do! Simple typing
for simple, text based task, yet having the precision of a command line editor
when I need such functionalities. All open-source and really hackable to
the core, with tonnes of stuff that I could add to truly make the
experience my own!`,le,u,Ae='<a aria-hidden="true" tabindex="-1" href="#difficulties-and-closing-words"><span class="icon icon-link"></span></a>Difficulties and closing words',ae,j,Oe=`Not all is fine about atom though. I still miss it’s direct and straight
forwards interface with the file system a lot better. I never quite got why
someone would want to open files based on anything other than a working
directory. I’m still in the <a href="http://tvtropes.org/pmwiki/pmwiki.php/Main/DamnYouMuscleMemory" rel="nofollow">damn you muscle
memory</a> phase
when editing text. Some plugins are nowhere near as powerful and mature as the
plugins found at vim awesome (main complaint I have is the non-programable
snippet system). The majority of people migrating to atom are web developers,
meaning that a lot of C/C++ related plugins are rather slowing in development.
But for all of that, I think it is time to move to this new environment!`,se,B,De="<p>Would vim be gone?</p>",re,A,Se=`On my system, I will still be using it to system related stuff since it works
so much better when moving around the file systems, but now atom would be my
primary editor to the larger projects I work on. As my brother said:`,he,O,Ue=`<p>Vim is no longer just a program, it is a standard people set when comparing
what a text editor should be able to do.</p>`,me,D,ze=`Like what unix did to operating systems, TeX for typesetting systems, vim(and
emacs) is doing the same for text editing.`;return{c(){h=n("nav"),h.innerHTML=pe,U=s(),c=n("p"),c.innerHTML=de,z=s(),m=n("h2"),m.innerHTML=ue,E=s(),v=n("p"),v.textContent=ce,F=s(),f=n("h3"),f.innerHTML=ve,N=s(),w=n("p"),w.textContent=we,V=s(),b=n("ol"),b.innerHTML=be,K=s(),y=n("p"),y.textContent=ye,Q=s(),g=n("p"),g.textContent=ge,Y=s(),x=n("p"),x.innerHTML=xe,G=s(),p=n("h3"),p.innerHTML=ke,R=s(),k=n("p"),k.textContent=Ce,W=s(),C=n("p"),C.textContent=Te,J=s(),d=n("h2"),d.innerHTML=Me,X=s(),T=n("p"),T.textContent=Ie,Z=s(),M=n("figure"),M.innerHTML=_e,$=s(),I=n("p"),I.textContent=Le,ee=s(),_=n("p"),_.innerHTML=He,te=s(),L=n("p"),L.innerHTML=qe,oe=s(),H=n("p"),H.textContent=Pe,ie=s(),q=n("blockquote"),q.innerHTML=je,ne=s(),P=n("p"),P.textContent=Be,le=s(),u=n("h2"),u.innerHTML=Ae,ae=s(),j=n("p"),j.innerHTML=Oe,se=s(),B=n("blockquote"),B.innerHTML=De,re=s(),A=n("p"),A.textContent=Se,he=s(),O=n("blockquote"),O.innerHTML=Ue,me=s(),D=n("p"),D.textContent=ze,this.h()},l(e){h=l(e,"NAV",{class:!0,"data-svelte-h":!0}),a(h)!=="svelte-1lo23ch"&&(h.innerHTML=pe),U=r(e),c=l(e,"P",{"data-svelte-h":!0}),a(c)!=="svelte-1rdnbrb"&&(c.innerHTML=de),z=r(e),m=l(e,"H2",{id:!0,"data-svelte-h":!0}),a(m)!=="svelte-1o5p7m7"&&(m.innerHTML=ue),E=r(e),v=l(e,"P",{"data-svelte-h":!0}),a(v)!=="svelte-qdtio8"&&(v.textContent=ce),F=r(e),f=l(e,"H3",{id:!0,"data-svelte-h":!0}),a(f)!=="svelte-15x782v"&&(f.innerHTML=ve),N=r(e),w=l(e,"P",{"data-svelte-h":!0}),a(w)!=="svelte-1cnellf"&&(w.textContent=we),V=r(e),b=l(e,"OL",{"data-svelte-h":!0}),a(b)!=="svelte-12eq8ay"&&(b.innerHTML=be),K=r(e),y=l(e,"P",{"data-svelte-h":!0}),a(y)!=="svelte-4asfhx"&&(y.textContent=ye),Q=r(e),g=l(e,"P",{"data-svelte-h":!0}),a(g)!=="svelte-c39kgt"&&(g.textContent=ge),Y=r(e),x=l(e,"P",{"data-svelte-h":!0}),a(x)!=="svelte-1frxj6n"&&(x.innerHTML=xe),G=r(e),p=l(e,"H3",{id:!0,"data-svelte-h":!0}),a(p)!=="svelte-1gmnf65"&&(p.innerHTML=ke),R=r(e),k=l(e,"P",{"data-svelte-h":!0}),a(k)!=="svelte-l5j89a"&&(k.textContent=Ce),W=r(e),C=l(e,"P",{"data-svelte-h":!0}),a(C)!=="svelte-1eh75qd"&&(C.textContent=Te),J=r(e),d=l(e,"H2",{id:!0,"data-svelte-h":!0}),a(d)!=="svelte-pyhd3q"&&(d.innerHTML=Me),X=r(e),T=l(e,"P",{"data-svelte-h":!0}),a(T)!=="svelte-1nnxqii"&&(T.textContent=Ie),Z=r(e),M=l(e,"FIGURE",{"data-svelte-h":!0}),a(M)!=="svelte-wl38be"&&(M.innerHTML=_e),$=r(e),I=l(e,"P",{"data-svelte-h":!0}),a(I)!=="svelte-ttze4e"&&(I.textContent=Le),ee=r(e),_=l(e,"P",{"data-svelte-h":!0}),a(_)!=="svelte-13aaqyz"&&(_.innerHTML=He),te=r(e),L=l(e,"P",{"data-svelte-h":!0}),a(L)!=="svelte-p33fkp"&&(L.innerHTML=qe),oe=r(e),H=l(e,"P",{"data-svelte-h":!0}),a(H)!=="svelte-j8rkt4"&&(H.textContent=Pe),ie=r(e),q=l(e,"BLOCKQUOTE",{"data-svelte-h":!0}),a(q)!=="svelte-nrjx9p"&&(q.innerHTML=je),ne=r(e),P=l(e,"P",{"data-svelte-h":!0}),a(P)!=="svelte-1q256vg"&&(P.textContent=Be),le=r(e),u=l(e,"H2",{id:!0,"data-svelte-h":!0}),a(u)!=="svelte-wjr4s"&&(u.innerHTML=Ae),ae=r(e),j=l(e,"P",{"data-svelte-h":!0}),a(j)!=="svelte-doogp7"&&(j.innerHTML=Oe),se=r(e),B=l(e,"BLOCKQUOTE",{"data-svelte-h":!0}),a(B)!=="svelte-ah72vt"&&(B.innerHTML=De),re=r(e),A=l(e,"P",{"data-svelte-h":!0}),a(A)!=="svelte-17i2h8k"&&(A.textContent=Se),he=r(e),O=l(e,"BLOCKQUOTE",{"data-svelte-h":!0}),a(O)!=="svelte-4vpsy7"&&(O.innerHTML=Ue),me=r(e),D=l(e,"P",{"data-svelte-h":!0}),a(D)!=="svelte-nket59"&&(D.textContent=ze),this.h()},h(){S(h,"class","toc"),S(m,"id","the-ideal-black-box-model"),S(f,"id","designing-for-the-user"),S(p,"id","opening-the-black-box"),S(d,"id","the-appeal-of-atom"),S(u,"id","difficulties-and-closing-words")},m(e,t){o(e,h,t),o(e,U,t),o(e,c,t),o(e,z,t),o(e,m,t),o(e,E,t),o(e,v,t),o(e,F,t),o(e,f,t),o(e,N,t),o(e,w,t),o(e,V,t),o(e,b,t),o(e,K,t),o(e,y,t),o(e,Q,t),o(e,g,t),o(e,Y,t),o(e,x,t),o(e,G,t),o(e,p,t),o(e,R,t),o(e,k,t),o(e,W,t),o(e,C,t),o(e,J,t),o(e,d,t),o(e,X,t),o(e,T,t),o(e,Z,t),o(e,M,t),o(e,$,t),o(e,I,t),o(e,ee,t),o(e,_,t),o(e,te,t),o(e,L,t),o(e,oe,t),o(e,H,t),o(e,ie,t),o(e,q,t),o(e,ne,t),o(e,P,t),o(e,le,t),o(e,u,t),o(e,ae,t),o(e,j,t),o(e,se,t),o(e,B,t),o(e,re,t),o(e,A,t),o(e,he,t),o(e,O,t),o(e,me,t),o(e,D,t)},p:fe,i:fe,o:fe,d(e){e&&(i(h),i(U),i(c),i(z),i(m),i(E),i(v),i(F),i(f),i(N),i(w),i(V),i(b),i(K),i(y),i(Q),i(g),i(Y),i(x),i(G),i(p),i(R),i(k),i(W),i(C),i(J),i(d),i(X),i(T),i(Z),i(M),i($),i(I),i(ee),i(_),i(te),i(L),i(oe),i(H),i(ie),i(q),i(ne),i(P),i(le),i(u),i(ae),i(j),i(se),i(B),i(re),i(A),i(he),i(O),i(me),i(D))}}}const Ge={layout:"post",title:"Migrating to Atom",description:"The reason I left Vim for Atom",tags:["thoughts","atom","vim","computing"],modified:"2016-02-22T00:00:00.000Z",banner:"thoughts.jpg"};class Re extends Ne{constructor(h){super(),Ve(this,h,null,Ke,Fe,{})}}export{Re as default,Ge as metadata};
