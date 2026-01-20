const data = {
  agency:{
    left:[
      {title:"PixelPulse Agency",meta:"Barcelona, Spain",tag:"Digital Marketing, SEO"},
      {title:"NeonWave Digital",meta:"Berlin, Germany",tag:"Performance Marketing"}
    ],
    right:{
      title:"Agency Catalog",
      desc:"Secure a spot in our expert Agency Catalog and attract high-intent prospects.",
      btn:"Browse catalog"
    }
  },
  reporting:{
    left:[
      {title:"Automated Reporting",meta:"Real-time dashboards",tag:"White Label"},
      {title:"Client Insights",meta:"Custom metrics",tag:"Brand-ready"}
    ],
    right:{
      title:"White Label Reporting",
      desc:"Deliver branded, automated reports that impress your clients.",
      btn:"View reports"
    }
  },
  leads:{
    left:[
      {title:"Smart Lead Engine",meta:"AI-powered",tag:"High conversion"},
      {title:"Form Optimizer",meta:"Auto tracking",tag:"Higher ROI"}
    ],
    right:{
      title:"Lead Generator",
      desc:"Convert traffic into qualified leads using automation.",
      btn:"Generate leads"
    }
  },
  white:{
    left:[
      {title:"Your Brand",meta:"Powered by us",tag:"White Label"},
      {title:"Full Control",meta:"Pricing & access",tag:"Scalable"}
    ],
    right:{
      title:"White Label",
      desc:"Sell our platform under your brand while we manage the tech.",
      btn:"Explore white label"
    }
  },
  clients:{
    left:[
      {title:"Client Seats",meta:"Role-based access",tag:"Secure"},
      {title:"Multi-Account",meta:"Unlimited clients",tag:"Flexible"}
    ],
    right:{
      title:"Client Seats",
      desc:"Manage multiple clients efficiently with full access control.",
      btn:"Manage clients"
    }
  }
};

const tabs=document.querySelectorAll(".tab");
const left=document.getElementById("leftContent");
const right=document.getElementById("rightContent");

function render(key){
  left.innerHTML=data[key].left.map(i=>`
    <div class="card">
      <h3>${i.title}</h3>
      <p>${i.meta}</p>
      <span>${i.tag}</span>
    </div>
  `).join("");

  right.innerHTML=`
    <h2>${data[key].right.title}</h2>
    <p>${data[key].right.desc}</p>
    <button>${data[key].right.btn}</button>
  `;
}

tabs.forEach(tab=>{
  tab.addEventListener("click",()=>{
    tabs.forEach(t=>t.classList.remove("active"));
    tab.classList.add("active");
    render(tab.dataset.tab);
  });
});

render("agency");
