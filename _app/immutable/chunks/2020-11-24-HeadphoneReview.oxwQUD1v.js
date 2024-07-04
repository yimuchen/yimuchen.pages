import{s as K,n as B}from"./scheduler.D0k7T8uo.js";import{S as Q,i as X,e as o,s as l,c as s,g as a,a as h,b as P,d as n,f as i}from"./index.B7LT_aZO.js";function Z(J){let r,A='<ol class="toc-level toc-level-1"><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#the-good">The Good</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#the-bad">The Bad</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#my-final-thought-for-this-year">My final thought for this year</a></li></ol>',k,p,F=`So I have daily driven the Sennheiser Momentum 3 for nearly 1 year now, do my
initial impressions hold up? Will I recommend this product? Here are some
additional thoughts that I have collected since I got this pair of headphones.`,I,u,G='<a aria-hidden="true" tabindex="-1" href="#the-good"><span class="icon icon-link"></span></a>The Good',C,f,W=`First up is, of course, how does the headphone sound. After 1 year, I can only
say that I have no complaints with audio quality of the Momentum 3. I’m in no
way and audio setup professional, but from my experience, audio quality is
something that slowly creeps up on you the longer you use a better setup. For a
short session, I was switching between the Sennheiser and my old headset when
debugging audio sharing issues between my two machines, and the difference
immediate, the amount of bass, the richness of the vocals, how open the audio
environment feels (I believe this is technically called “wideness of sound
stages”? But I may be wrong.) One of the biggest difference that would be
objectively beneficial is that I notice I no longer need to crank up the
headphone volume when listening to dialogs when watching movies, the audio
details are just presented much better by the Sennheiser. How good the
Sennheiser is at the price point of nearly $400 at the date of purchase, I
cannot comment on, but for the sake of enjoying music and other multimedia, I
would say the investment in these headphones is worthwhile.`,_,m,N=`Next up is active noise-cancelling function of the Sennheiser. My impression have
not changed from initial impressions since the beginning of this year: it’s not
stellar, but serviceable. If perfect external silence is what you are after, then
this is definitely not the product for you. What it has done for me is
suppressing most common home office noises to an easily ignorable level. You will
still immediately notice when the AC system turns on and when construction work
starts outside, but the noise level is low enough to the point that I don’t
immediate reach for the volume nob. This same story holds true for when I was on
an airplane at the beginning of the year, with only a small adjustment to the
overall volume required. For the sake of auditory hygiene, my original goal for
finding a nice set of noise-cancelling headphones, this product serves nicely.`,T,d,O='<a aria-hidden="true" tabindex="-1" href="#the-bad"><span class="icon icon-link"></span></a>The Bad',H,g,R=`The Sennheiser is not without problem. The long-standing problem of a strange
buzzing noise in the left ear was a long struggle to get rid of. It is usually
very faint, but is mainly exacerbated by the fact that the buzzing only occurs in
one ear (audio imbalance is an annoying thing). Though the cause is now known to me:
ground contamination, getting rid of this turned out to be such a difficult
endeavor that I feel has some fault with the design of the Momentum 3.`,M,y,U=`The immediate culprit is the power line networking equipment that I have for my
home network setup, which works by injecting high frequency network signals
into the copper used for power delivery and grounding. Testing was done simply
by artificially maxing out the network usage of devices in my room (either by
the <a href="https://www.speedtest.net/" rel="nofollow">speed-test</a> website or the <code>iperf</code> command). Since power lines
as not designed to carry high frequency signals, suppression of such noises can
be achieved relatively simply by moving the power line network unit to the
opposite end of my room.`,z,w,V=`But then the more sinister side of this issue began to show. I notice that the
buzz doesn’t entirely go away, even after these fixes. As soon as I start my
desktop, the buzzing appears, as long as my headphone has some sort of
electrical connection to any electrical outlet: either via the ground shield of
the 3.5 mm headphone jack, or by the USB power cable connected to a 5.0V power
adaptor. In particular, the existence of a humming with no audio connection,
seems to indicate that this isn’t a typical <a href="https://en.wikipedia.org/wiki/Ground_loop_(electricity)" rel="nofollow">ground loop</a> issue
that most high-end audio forums seems to suggest. So this is either an issue of
my desktop power supply having lack-luster back-propagation mitigation
circuits, or the left side of the headphone having inadequate power ripple
suppressing circuitry. Another hint as to one of these two being the issue is
that the humming doesn’t appear to occur at 60Hz, but at 120Hz, suggesting that
this noise is coming from some rectifier circuit, and not a simple ground
displacement.`,L,v,Y=`Of course, there is an obvious solution: use the headphone in wireless mode:
Bluetooth for passing audio signal, and disconnect the USB power cord when using
the headphone. I guess I’m more old-fashioned in this sense: I prefer my
connections to be wired to reduce the possibility of random disconnects and deep
discharge of the battery in case I forget to re-plug the power cord. If I insist
on wired operation, then I would need to either find a “better” power supply for
my desktop, or a power isolating power strip for the various components. But even
then, it wouldn’t guarantee that the issue will go away, or maybe introduce more
issues of their own. If ground loop was to occur, the use of an
<a href="https://en.wikipedia.org/wiki/Balanced_audio" rel="nofollow">unbalanced</a> 3.5 mm audio jack for the wired inputs means that
options for eliminating ground loops via ground lifting would be limited. There
are adaptors, of course, but that will take up even more desk space, something
that I am already lacking.`,S,b,$=`I’ve managed to arrange all the cables on my desk to make this issues as
negligible as possible. Right now, as long as something is playing in my left
ear, I would need to be actively looking out for the buzz to be able to hear it,
but it is not entirely solved.`,j,c,D='<a aria-hidden="true" tabindex="-1" href="#my-final-thought-for-this-year"><span class="icon icon-link"></span></a>My final thought for this year',q,x,E=`For all its faults, I greatly enjoyed daily driving the Momentum 3 over the past
year. What it does well, it does great, and event the annoying fault has been
largely resolved, even if not perfectly. Plus, it gave me a reason to read about
all sorts of fun audio engineering stuff. Hopefully I will be able to find a more
complete solution in the future.`;return{c(){r=o("nav"),r.innerHTML=A,k=l(),p=o("p"),p.textContent=F,I=l(),u=o("h2"),u.innerHTML=G,C=l(),f=o("p"),f.textContent=W,_=l(),m=o("p"),m.textContent=N,T=l(),d=o("h2"),d.innerHTML=O,H=l(),g=o("p"),g.textContent=R,M=l(),y=o("p"),y.innerHTML=U,z=l(),w=o("p"),w.innerHTML=V,L=l(),v=o("p"),v.innerHTML=Y,S=l(),b=o("p"),b.textContent=$,j=l(),c=o("h2"),c.innerHTML=D,q=l(),x=o("p"),x.textContent=E,this.h()},l(e){r=s(e,"NAV",{class:!0,"data-svelte-h":!0}),a(r)!=="svelte-1u4bh65"&&(r.innerHTML=A),k=h(e),p=s(e,"P",{"data-svelte-h":!0}),a(p)!=="svelte-1iee1f6"&&(p.textContent=F),I=h(e),u=s(e,"H2",{id:!0,"data-svelte-h":!0}),a(u)!=="svelte-1r5r29u"&&(u.innerHTML=G),C=h(e),f=s(e,"P",{"data-svelte-h":!0}),a(f)!=="svelte-o41ipb"&&(f.textContent=W),_=h(e),m=s(e,"P",{"data-svelte-h":!0}),a(m)!=="svelte-p9we5n"&&(m.textContent=N),T=h(e),d=s(e,"H2",{id:!0,"data-svelte-h":!0}),a(d)!=="svelte-w2ij6m"&&(d.innerHTML=O),H=h(e),g=s(e,"P",{"data-svelte-h":!0}),a(g)!=="svelte-1nec41h"&&(g.textContent=R),M=h(e),y=s(e,"P",{"data-svelte-h":!0}),a(y)!=="svelte-1cnqifq"&&(y.innerHTML=U),z=h(e),w=s(e,"P",{"data-svelte-h":!0}),a(w)!=="svelte-g9e5t3"&&(w.innerHTML=V),L=h(e),v=s(e,"P",{"data-svelte-h":!0}),a(v)!=="svelte-v2ayye"&&(v.innerHTML=Y),S=h(e),b=s(e,"P",{"data-svelte-h":!0}),a(b)!=="svelte-12znt0o"&&(b.textContent=$),j=h(e),c=s(e,"H2",{id:!0,"data-svelte-h":!0}),a(c)!=="svelte-hjs1cz"&&(c.innerHTML=D),q=h(e),x=s(e,"P",{"data-svelte-h":!0}),a(x)!=="svelte-eu8f0h"&&(x.textContent=E),this.h()},h(){P(r,"class","toc"),P(u,"id","the-good"),P(d,"id","the-bad"),P(c,"id","my-final-thought-for-this-year")},m(e,t){n(e,r,t),n(e,k,t),n(e,p,t),n(e,I,t),n(e,u,t),n(e,C,t),n(e,f,t),n(e,_,t),n(e,m,t),n(e,T,t),n(e,d,t),n(e,H,t),n(e,g,t),n(e,M,t),n(e,y,t),n(e,z,t),n(e,w,t),n(e,L,t),n(e,v,t),n(e,S,t),n(e,b,t),n(e,j,t),n(e,c,t),n(e,q,t),n(e,x,t)},p:B,i:B,o:B,d(e){e&&(i(r),i(k),i(p),i(I),i(u),i(C),i(f),i(_),i(m),i(T),i(d),i(H),i(g),i(M),i(y),i(z),i(w),i(L),i(v),i(S),i(b),i(j),i(c),i(q),i(x))}}}const ne={layout:"post",title:"Sennheiser Momentum 3 - A one year reflection",description:"My thoughts on my new head phones after daily driving it for over 1 year",tags:["hardware","thoughts"]};class ie extends Q{constructor(r){super(),X(this,r,null,Z,K,{})}}export{ie as default,ne as metadata};
