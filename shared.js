const $=i=>document.getElementById(i);
const norm=s=>s.normalize('NFD').replace(/[̀-ͯ]/g,'').toUpperCase().replace(/[^A-Z]/g,'').replace(/J/g,'I');
class PF{
constructor(k){this.key=norm(k);if(!this.key)throw new Error('Kunci harus berisi minimal satu huruf.');
const L=[...new Set(this.key)];for(let i=65;i<91;i++){const c=String.fromCharCode(i);if(c!=='J'&&!L.includes(c))L.push(c)}
this.m=[];this.p={};for(let r=0;r<5;r++){this.m[r]=[];for(let c=0;c<5;c++){const h=L[r*5+c];this.m[r][c]=h;this.p[h]={r,c}}}}
prepare(t){t=norm(t);let o='';for(let i=0;i<t.length;i++){o+=t[i];if(i+1<t.length){if(t[i]===t[i+1])o+=(t[i]==='X'?'Q':'X');else{o+=t[i+1];i++}}}if(o.length%2)o+=(o[o.length-1]==='X'?'Q':'X');return o}
tr(t,d){let o='';for(let i=0;i<t.length;i+=2){const a=this.p[t[i]],b=this.p[t[i+1]],m=this.m;
if(a.r===b.r){o+=m[a.r][(a.c+d+5)%5]+m[b.r][(b.c+d+5)%5]}
else if(a.c===b.c){o+=m[(a.r+d+5)%5][a.c]+m[(b.r+d+5)%5][b.c]}
else o+=m[a.r][b.c]+m[b.r][a.c]}return o}
encrypt(t){const p=this.prepare(t);if(!p)throw new Error('Pesan harus berisi minimal satu huruf.');return this.tr(p,1)}
decrypt(t){const c=norm(t);if(!c)throw new Error('Ciphertext kosong.');if(c.length%2)throw new Error('Ciphertext tidak valid: jumlah huruf harus genap.');
for(let i=0;i<c.length;i+=2)if(c[i]===c[i+1])throw new Error('Ciphertext tidak valid: ada pasangan huruf kembar ('+c[i]+c[i+1]+').');
return this.tr(c,-1)}}
const clean=s=>{let o='';for(let i=0;i<s.length;i++){
const fillerX=s[i]==='X'&&i>0&&i<s.length-1&&s[i-1]===s[i+1];
const fillerQ=s[i]==='Q'&&i>0&&i<s.length-1&&s[i-1]==='X'&&s[i+1]==='X';
if(!fillerX&&!fillerQ)o+=s[i]}
if(o.endsWith('X'))o=o.slice(0,-1);else if(o.endsWith('Q')&&o[o.length-2]==='X')o=o.slice(0,-1);return o};
function mx(id,pf){const e=$(id);e.innerHTML='';if(!pf)return;pf.m.forEach(r=>r.forEach(h=>{const s=document.createElement('span');s.textContent=h;e.appendChild(s)}))}
function copy(t,btn){const done=()=>{const o=btn.textContent;btn.textContent='Tersalin';setTimeout(()=>btn.textContent=o,1200)};
if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(t).then(done,()=>fb(t,done));else fb(t,done)}
function fb(t,done){const a=document.createElement('textarea');a.value=t;document.body.appendChild(a);a.select();try{document.execCommand('copy');done()}catch(e){}a.remove()}
