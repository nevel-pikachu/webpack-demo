import{q as p,s as h,a as C,b as d,e as o,v as f,x as k,t as s,F as u,r as x,o as l}from"./entry.9d23fcfb.js";const P=[{name:"Product 1",price:12},{name:"Product 2",price:19},{name:"Product 3",price:4},{name:"Product 4",price:9}],g=p("ProductStore",{state:()=>({products:P}),getters:{getAllProducts(){return this.products},searchProduct(r){return this.products.filter(e=>e.name.toLowerCase().indexOf(r.toLowerCase())>0)}},actions:{addNewProduct(r){this.products.push(r)}}}),_={async setup(){const r=g(),e=h("first"),c=await fetch("https://api.nuxtjs.dev/mountains").then(a=>{debugger;return a.json()});return{productsStore:r,handleClick:()=>{const a=r.products.length+1;r.addNewProduct({name:"Product "+a,price:Math.floor(Math.random()*10)})},handleClearData:()=>{r.$patch({products:[]})},name:e,mountains:c}},methods:{handleBackHome(){this.$router.replace("/")}}};function b(r,e,c,t,i,a){return l(),d(u,null,[o("button",{onClick:e[0]||(e[0]=(...n)=>a.handleBackHome&&a.handleBackHome(...n))},"Home"),o("button",{class:"bg-blue",onClick:e[1]||(e[1]=(...n)=>t.handleClick&&t.handleClick(...n))},"Add new"),o("button",{onClick:e[2]||(e[2]=(...n)=>t.handleClearData&&t.handleClearData(...n))},"Clear all"),f(o("input",{"onUpdate:modelValue":e[3]||(e[3]=n=>t.name=n)},null,512),[[k,t.name]]),o("div",null,s(t.name),1),(l(!0),d(u,null,x(t.productsStore.products,(n,m)=>(l(),d("h1",{class:"text-blue-500",key:m},s(n.name)+" : "+s(n.price),1))),128)),o("h2",null,s(t.mountains),1)],64)}const w=C(_,[["render",b]]);export{w as default};
