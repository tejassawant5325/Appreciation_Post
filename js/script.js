// ==============================
// PERSONALIZE THIS SECTION
// Change names, photos, memories, gifts, and the letter only here.
// ==============================
const CONFIG={
    herName:"Purva",
    myName:"Tejas",
    music:"assets/music/Tum Ho Toh Saiyaara 128 Kbps.mp3",
    
    notice:[
        {title:"Your Effort",text:"You don't always have everything you want to give me. But somehow, you always find a way to make me feel special."},
        {title:"The Little Things",text:"The messages, the surprises, the things you remember, the things you do without being asked."},
        {title:"Your Thoughtfulness",text:"Honestly, it was never about how big something was. It was the thought behind it that stayed with me."},
        {title:"The Way You Care",text:"You make an effort even when nobody asks you to. And I hope you know that I see it."}
    ],
    
    realize:[
        "How many times you've made my bad days better.",
        "How many little things you've done that I've remembered.",
        "How many times you've made me feel special without even realizing it.",
        "How many times I've looked at something you've given me and thought..."
    ],
    
    gifts:[
        "This wasn't just a gift.<br><br>It was you thinking about me.",
        "You didn't have to.<br><br>But you wanted to.",
        "Maybe it wasn't something expensive.<br><br>But it meant something expensive to me.",
        "You gave what you could.<br><br>And somehow... it always felt like more than enough."
    ],
    
    memories:[
        {id:1,image:"assets/images/img1.jpg",caption:"First Date",whyItMatters:"We had our first date at a beach"},
        {id:2,image:"assets/images/img3.jpg",caption:"College Days",whyItMatters:"Spending whole day together"},
        {id:3,image:"assets/images/img2.jpg",caption:"Day we clebrated our first job",whyItMatters:"Celebrating our first job after hard work"},
        {id:4,image:"assets/images/img4.jpg",caption:"Almost Married",whyItMatters:"Almost married"},
        {id:5,image:"assets/images/img5.jpg",caption:"First Anniversary",whyItMatters:"First anniversary"},
        {id:6,image:"assets/images/img6.jpg",caption:"Us",whyItMatters:"Us"}
    ],
    
    reasons:[
        {id:1,text:"You remember the little things I casually mention."},
        {id:2,text:"You always try to make me feel special."},
        {id:3,text:"You care about things even when nobody asks you to."},
        {id:4,text:"You give what you can, and somehow it always means more than you realize."},
        {id:5,text:"You remember things that I sometimes forget I even told you."},
        {id:6,text:"You somehow know when I need a little extra care."},
        {id:7,text:"You make ordinary moments feel a little more special."},
        {id:8,text:"You put thought into things."},
        {id:9,text:"You never make your effort feel like a burden."},
        {id:10,text:"You make me smile without even trying sometimes."},
        {id:11,text:"You notice the little things about me."},
        {id:12,text:"You make me feel remembered."},
        {id:13,text:"You always try."},
        {id:14,text:"You give more than you probably realize."},
        {id:15,text:"You make me feel lucky in the smallest moments."},
        {id:16,text:"You care in ways that aren't always easy to explain."},
        {id:17,text:"You make an effort even when you don't have much to give."},
        {id:18,text:"You think of me."},
        {id:19,text:"You stayed."},
        {id:20,text:"You chose me."}
    ],
    
    thingsToRemember:[
        {title:"The time you...",text:"Stayed with me when i was at low, and helped me get back on track."},
        {title:"When we...",text:"Went to our first camping on our first anniversary and had the best time."},
        {title:"I'll never forget...",text:"The time we stayed up all night talking and laughing during our college days."}
    ],
    
    lines:[
        "I wish I could find the right words.",
        "I wish I could make you understand.",
        "I wish I could show you exactly what's in my heart.",
        "But maybe...",
        "Maybe the right words don't exist.",
        "Maybe the only way to truly say it...",
        "Is to simply say:",
        "I love you."
    ],
    
    humanMoment:[
        "And yes...",
        "I know I can be difficult sometimes.",
        "You don't need me to remind you of that. 😂",
        "But somehow...",
        "you still chose me."
    ],
    
    letter:"Dear ${herName},\n\nI'm not very good at putting my feelings into words. But I wanted to create something for you — something that shows you how much you mean to me.\n\nThank you for being you. Thank you for staying. Thank you for choosing me, every single day.\n\nWith all my heart,\n\n${myName}"
};

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],reduced=matchMedia('(prefers-reduced-motion: reduce)').matches,esc=s=>s.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c]));

document.title=`A little corner, just for ${CONFIG.herName}`;
$$('[data-her-name]').forEach(e=>e.textContent=CONFIG.herName);
$$('[data-my-name]').forEach(e=>e.textContent=CONFIG.myName);

$('#noticeGrid').innerHTML=CONFIG.notice.map((x,i)=>`<article class="notice-card reveal-on-scroll"><span class="card-number">0${i+1}</span><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></article>`).join('');
$('#realizeLines').innerHTML=CONFIG.realize.map(x=>`<p class="reveal-on-scroll">${esc(x)}</p>`).join('');
$('#giftGrid').innerHTML=CONFIG.gifts.map((x,i)=>`<button class="gift" aria-expanded="false" aria-label="Open gift ${i+1}"><span class="gift-lid"></span><span class="bow">♥</span><span class="gift-icon">🎁</span><span class="gift-message">${x}</span></button>`).join('');

// Six-photo timeline with proper ordering
const memoryTimeline=$('#memoryTimeline');
if(memoryTimeline){
    memoryTimeline.innerHTML=CONFIG.memories.map((x,i)=>`
        <div class="memory-item memory-${i+1} reveal-on-scroll" data-memory="${i}">
            <button class="memory-photo" aria-label="Open memory: ${esc(x.caption)}">
                <img src="${x.image}" alt="${esc(x.whyItMatters)}" loading="lazy" onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23f7eee7%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23c98280%22 font-family=%22Caveat%22 font-size=%2224%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%3EMemory 0${i+1}%3C/text%3E%3C/svg%3E'">
                <span class="memory-caption">${esc(x.caption)}</span>
            </button>
            ${i<CONFIG.memories.length-1?'<div class="timeline-connector"><span class="timeline-heart">♥</span></div>':''}
        </div>
    `).join('');
    
    // Add final message for last photo
    const finalMemoryMessage=$('#finalMemoryMessage');
    if(finalMemoryMessage){
        finalMemoryMessage.innerHTML=`<p class="final-memory-text reveal-on-scroll">And somehow...</p><p class="final-memory-text reveal-on-scroll delay-1">Here we are.</p>`;
    }
}

$('#rememberList').innerHTML=CONFIG.thingsToRemember.map((x,i)=>`<button class="remember-card" aria-expanded="false"><span>0${i+1}</span><strong>${esc(x.title)}</strong><small>tap to remember →</small><p>${esc(x.text)}</p></button>`).join('');
$('#wordLines').innerHTML=CONFIG.lines.map((x,i)=>`<p class="word-line ${i===CONFIG.lines.length-1?'last-line':''}">${esc(x)}</p>`).join('');
$('#humanMoment').innerHTML=CONFIG.humanMoment.map((x,i)=>`<p class="human-line human-${i}">${esc(x)}</p>`).join('');
$('#letterBody').innerHTML=CONFIG.letter.replace('${herName}',CONFIG.herName).replace('${myName}',CONFIG.myName).split('\n\n').map(x=>`<p>${esc(x)}</p>`).join('');
$('#finalPhoto').style.backgroundImage=`url("${CONFIG.memories[0].image}")`;

// Reason box functionality
const reasonBox=$('#reasonBox');
const reasonNote=$('#reasonNote');
const reasonText=$('#reasonText');
const reasonButton=$('#reasonButton');
const specialReasonMessage=$('#specialReasonMessage');
const finalReasonMessage=$('#finalReasonMessage');
let availableReasons=[...CONFIG.reasons];
let currentReasonIndex=null;

if(reasonButton){
    reasonButton.onclick=()=>{
        if(availableReasons.length===0){
            reasonText.innerHTML='You\'ve found them all. ♥<br><span class="reason-sub">But I could probably keep going.</span>';
            reasonButton.textContent='Start again';
            reasonButton.onclick=()=>{
                availableReasons=[...CONFIG.reasons];
                reasonButton.textContent='Pick one for me ♥';
                reasonButton.onclick=arguments.callee;
            };
            return;
        }
        
        reasonButton.disabled=true;
        const randomIndex=Math.floor(Math.random()*availableReasons.length);
        const selectedReason=availableReasons[randomIndex];
        currentReasonIndex=CONFIG.reasons.findIndex(r=>r.id===selectedReason.id);
        availableReasons.splice(randomIndex,1);
        
        reasonNote.classList.add('emerging');
        setTimeout(()=>{
            reasonText.textContent=selectedReason.text;
            reasonNote.classList.remove('emerging');
            reasonNote.classList.add('revealed');
            
            // Special handling for "You stayed."
            if(selectedReason.text==="You stayed."){
                if(specialReasonMessage){
                    specialReasonMessage.classList.add('shown');
                }
            }
            
            // Special handling for "You chose me."
            if(selectedReason.text==="You chose me."){
                if(finalReasonMessage){
                    setTimeout(()=>finalReasonMessage.classList.add('shown'),800);
                }
            }
            
            reasonButton.disabled=false;
        },reduced?100:600);
    };
}

const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');
observer.unobserve(e.target)}}),{threshold:.16});
$$('.reveal-on-scroll,.word-line').forEach(e=>observer.observe(e));
let opened=0;
$$('.gift').forEach(g=>g.addEventListener('click',()=>{if(g.classList.contains('opened')){g.classList.remove('opened');
g.setAttribute('aria-expanded','false');
opened--}else{g.classList.add('opened');
g.setAttribute('aria-expanded','true');
if(++opened===CONFIG.gifts.length)$('#giftComplete').classList.add('shown')}}));
$$('.remember-card').forEach(c=>c.addEventListener('click',()=>{let o=c.classList.toggle('open');
c.setAttribute('aria-expanded',o)}));

// Enhanced photo modal with counter and whyItMatters
const modal=$('#photoModal'),closeModal=()=>{modal.classList.remove('shown');
modal.setAttribute('aria-hidden','true');
document.body.style.overflow=''};
let currentMemoryIndex=0;

$$('.memory-photo').forEach(p=>p.addEventListener('click',function(){
    const memoryIndex=parseInt(this.closest('.memory-item').dataset.memory);
    currentMemoryIndex=memoryIndex;
    const m=CONFIG.memories[memoryIndex];
    $('#modalImage').src=m.image;
    $('#modalImage').alt=m.whyItMatters;
    $('#modalCaption').textContent=m.caption;
    $('#modalWhy').textContent=m.whyItMatters;
    $('#modalCounter').textContent=`0${memoryIndex+1} / 06`;
    modal.classList.add('shown');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
    $('#modalClose').focus();
}));

// Modal navigation
const modalPrev=$('#modalPrev');
const modalNext=$('#modalNext');
if(modalPrev&&modalNext){
    modalPrev.onclick=()=>{
        if(currentMemoryIndex>0){
            currentMemoryIndex--;
            updateModalContent();
        }
    };
    modalNext.onclick=()=>{
        if(currentMemoryIndex<CONFIG.memories.length-1){
            currentMemoryIndex++;
            updateModalContent();
        }
    };
}

function updateModalContent(){
    const m=CONFIG.memories[currentMemoryIndex];
    $('#modalImage').src=m.image;
    $('#modalImage').alt=m.whyItMatters;
    $('#modalCaption').textContent=m.caption;
    $('#modalWhy').textContent=m.whyItMatters;
    $('#modalCounter').textContent=`0${currentMemoryIndex+1} / 06`;
}

$('#modalClose').onclick=closeModal;
modal.onclick=e=>{if(e.target===modal)closeModal()};
$('#letterButton').onclick=()=>{const wrap=$('#envelopeWrap'),button=$('#letterButton'),open=wrap.classList.toggle('open');
button.textContent=open?'Close letter ♥':'Open it ♥';
button.setAttribute('aria-expanded',String(open));
if(open)setTimeout(()=>$('#letterPaper').scrollIntoView({behavior:reduced?'auto':'smooth',block:'center'}),500)};

const song=$('#ourSong'),music=$('#musicToggle');
music.onclick=async()=>{try{if(song.paused){await song.play();
music.innerHTML='<span>♫</span> Our song';
music.setAttribute('aria-pressed','true')}else{song.pause();
music.innerHTML='<span>♪</span> Play our song';
music.setAttribute('aria-pressed','false')}}catch{music.hidden=true}};
song.onerror=()=>music.hidden=true;
$('#enterButton').onclick=()=>{$('#intro').classList.add('leaving');
$('#page').inert=false;
setTimeout(()=>$('#intro').remove(),reduced?1:650)};

// Enhanced Easter egg with timing
const closeEgg=()=>{$('#easterOverlay').classList.remove('shown');
document.body.style.overflow='';
$$('.easter-overlay p').forEach(p=>{p.style.opacity='0';p.style.transform='translateY(15px)'});
};
$('#easterEgg').onclick=()=>{
    $('#easterOverlay').classList.add('shown');
    document.body.style.overflow='hidden';
    $('#closeEaster').focus();
    
    const eggTexts=$$('.easter-overlay p');
    const delays=reduced?[0,0,0,0,0]:[0,700,2200,3200,4000];
    
    eggTexts.forEach((p,i)=>{
        setTimeout(()=>{
            p.style.opacity='1';
            p.style.transform='translateY(0)';
        },delays[i]);
    });
};
$('#closeEaster').onclick=closeEgg;
document.onkeydown=e=>{if(e.key==='Escape'){closeModal();
closeEgg()}};
addEventListener('scroll',()=>{let m=document.documentElement.scrollHeight-innerHeight;
$('.story-progress').style.setProperty('--story',m?scrollY/m:0)},{passive:true});