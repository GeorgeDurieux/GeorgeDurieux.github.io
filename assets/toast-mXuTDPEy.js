let t=[],e=0;const r=s=>{const o={id:e++,message:s};t.forEach(a=>a(o))},c=s=>(t.push(s),()=>{t=t.filter(o=>o!==s)});export{c as a,r as s};
