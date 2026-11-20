const templates = [
 {id:"establish",name:"Project Establishment Approval",ru:"Утверждение о старте проекта",category:"Project Document",group:"projects",desc:"Official approval to establish and commence a project.",sections:["OFFICIAL APPROVAL","PROJECT AUTHORIZATION"]},
 {id:"completion",name:"Project Completion Certificate",ru:"Сертификат завершения проекта",category:"Project Document",group:"projects",desc:"Confirmation that a project has been completed.",sections:["COMPLETION CONFIRMATION","FINAL STATUS"]},
 {id:"ownership",name:"Project Ownership Declaration",ru:"Декларация о принадлежности проекта",category:"Project Document",group:"projects",desc:"Declaration of project ownership and responsibility.",sections:["OWNERSHIP DECLARATION","RESPONSIBILITY"]},
 {id:"appointment",name:"Employee Appointment Order",ru:"Приказ о назначении сотрудника",category:"HR Document",group:"hr",desc:"Formal internal appointment to a role or position.",sections:["APPOINTMENT","DUTIES AND RESPONSIBILITIES"]},
 {id:"status",name:"Project Status Change Approval",ru:"Утверждение изменения статуса проекта",category:"Project Document",group:"projects",desc:"Approval to change the official project status.",sections:["STATUS CHANGE","REASON AND AUTHORIZATION"]},
 {id:"suspension",name:"Official Project Suspension Notice",ru:"Уведомление о приостановке проекта",category:"Official Notice",group:"notices",desc:"Official notice documenting a project suspension.",sections:["SUSPENSION NOTICE","RESUMPTION CONDITIONS"]},
 {id:"authorization",name:"Internal Authorization Certificate",ru:"Сертификат внутренних полномочий",category:"Authorization",group:"authorizations",desc:"Defines an employee’s approved internal authority.",sections:["GRANT OF AUTHORITY","SCOPE AND LIMITATIONS"]},
 {id:"partnership",name:"Official Partnership Approval",ru:"Утверждение сотрудничества",category:"Partnership",group:"partnerships",desc:"Internal approval of a partnership or cooperation.",sections:["PARTNERSHIP APPROVAL","SCOPE OF COOPERATION"]},
 {id:"project-proposal",name:"Project Proposal",ru:"Предложение нового проекта",category:"Project Document",group:"projects",desc:"Submit a new project idea for internal review.",sections:["PROJECT PROPOSAL","REVIEW AND NEXT STEPS"]},
 {id:"project-charter",name:"Project Charter",ru:"Устав проекта",category:"Project Document",group:"projects",desc:"Define project goals, scope, ownership and governance.",sections:["PROJECT PURPOSE AND SCOPE","GOVERNANCE"]},
 {id:"project-plan",name:"Project Management Plan",ru:"План управления проектом",category:"Project Document",group:"projects",desc:"Record milestones, responsibilities and delivery approach.",sections:["PROJECT PLAN","MILESTONES AND RESPONSIBILITIES"]},
 {id:"project-budget",name:"Project Budget Approval",ru:"Утверждение бюджета проекта",category:"Project Document",group:"projects",desc:"Document a proposed project budget and its approval.",sections:["BUDGET DETAILS","FINANCIAL AUTHORIZATION"]},
 {id:"project-change",name:"Project Change Request",ru:"Запрос на изменение проекта",category:"Project Document",group:"projects",desc:"Request a change to scope, schedule or resources.",sections:["REQUESTED CHANGE","IMPACT ASSESSMENT"]},
 {id:"project-risk",name:"Project Risk Assessment",ru:"Оценка рисков проекта",category:"Project Document",group:"projects",desc:"Record project risks, impact and mitigation actions.",sections:["RISK IDENTIFICATION","MITIGATION PLAN"]},
 {id:"project-handover",name:"Project Handover Certificate",ru:"Акт передачи проекта",category:"Project Document",group:"projects",desc:"Record the formal transfer of project ownership or operations.",sections:["HANDOVER DETAILS","ACCEPTANCE"]},
 {id:"project-closure",name:"Project Closure Report",ru:"Отчёт о закрытии проекта",category:"Project Document",group:"projects",desc:"Summarize outcomes, deliverables and closure decisions.",sections:["CLOSURE SUMMARY","FINAL REVIEW"]},
 {id:"project-review",name:"Project Review Report",ru:"Отчёт о проверке проекта",category:"Project Document",group:"projects",desc:"Capture a periodic project review and recommendations.",sections:["REVIEW SUMMARY","FINDINGS AND ACTIONS"]},
 {id:"project-resource",name:"Resource Allocation Approval",ru:"Утверждение выделения ресурсов",category:"Project Document",group:"projects",desc:"Record allocation of staff, tools or other resources.",sections:["RESOURCE REQUEST","ALLOCATION DECISION"]},
 {id:"project-dependency",name:"Project Dependency Record",ru:"Реестр зависимостей проекта",category:"Project Document",group:"projects",desc:"Document dependencies between teams, systems or projects.",sections:["DEPENDENCIES","OWNERS AND FOLLOW-UP"]},
 {id:"employee-contract",name:"Internal Employment Agreement",ru:"Внутреннее соглашение о работе",category:"HR Document",group:"hr",desc:"Record internal role expectations and working arrangements.",sections:["PARTIES AND ROLE","TERMS AND RESPONSIBILITIES"]},
 {id:"employee-promotion",name:"Employee Promotion Order",ru:"Приказ о повышении сотрудника",category:"HR Document",group:"hr",desc:"Formal record of an internal promotion.",sections:["PROMOTION DECISION","NEW POSITION"]},
 {id:"employee-transfer",name:"Employee Transfer Order",ru:"Приказ о переводе сотрудника",category:"HR Document",group:"hr",desc:"Record a transfer between departments or roles.",sections:["TRANSFER DECISION","NEW ASSIGNMENT"]},
 {id:"employee-leave",name:"Leave Approval Notice",ru:"Уведомление об одобрении отпуска",category:"HR Document",group:"hr",desc:"Record an approved leave request and dates.",sections:["LEAVE APPROVAL","DATES AND CONDITIONS"]},
 {id:"employee-warning",name:"Employee Notice / Warning",ru:"Служебное уведомление сотруднику",category:"HR Document",group:"hr",desc:"Document a formal internal notice and required action.",sections:["NOTICE DETAILS","REQUIRED ACTION"]},
 {id:"employee-resignation",name:"Resignation Acknowledgement",ru:"Подтверждение получения заявления об увольнении",category:"HR Document",group:"hr",desc:"Acknowledge receipt of an employee resignation notice.",sections:["ACKNOWLEDGEMENT","TRANSITION ARRANGEMENTS"]},
 {id:"employee-offboarding",name:"Employee Offboarding Checklist",ru:"Контрольный лист увольнения",category:"HR Document",group:"hr",desc:"Track return of access, assets and handover tasks.",sections:["OFFBOARDING ITEMS","FINAL CONFIRMATION"]},
 {id:"employee-confidentiality",name:"Confidentiality Acknowledgement",ru:"Подтверждение обязательств о конфиденциальности",category:"HR Document",group:"hr",desc:"Record acknowledgement of internal confidentiality rules.",sections:["CONFIDENTIALITY","ACKNOWLEDGEMENT"]},
 {id:"role-change",name:"Role and Access Change Request",ru:"Запрос на изменение роли и доступа",category:"Authorization",group:"authorizations",desc:"Request a change to internal role or system access.",sections:["REQUESTED ACCESS CHANGE","REVIEW AND DECISION"]},
 {id:"delegation",name:"Delegation of Authority",ru:"Делегирование полномочий",category:"Authorization",group:"authorizations",desc:"Record temporary or limited delegation of authority.",sections:["DELEGATED AUTHORITY","SCOPE AND DURATION"]},
 {id:"access-revocation",name:"Access Revocation Notice",ru:"Уведомление об отзыве доступа",category:"Authorization",group:"authorizations",desc:"Record removal or suspension of internal access.",sections:["REVOCATION DETAILS","EFFECTIVE DATE"]},
 {id:"policy",name:"Internal Policy Document",ru:"Внутренний корпоративный регламент",category:"Internal Governance",group:"notices",desc:"Publish an internal rule, standard or procedure.",sections:["POLICY STATEMENT","SCOPE AND COMPLIANCE"]},
 {id:"meeting-minutes",name:"Meeting Minutes",ru:"Протокол совещания",category:"Internal Governance",group:"notices",desc:"Record attendees, discussion points and decisions.",sections:["MEETING DETAILS","DECISIONS AND ACTIONS"]},
 {id:"internal-memo",name:"Internal Memorandum",ru:"Внутренняя служебная записка",category:"Internal Governance",group:"notices",desc:"Share a formal internal message or decision.",sections:["MEMORANDUM","REQUIRED FOLLOW-UP"]},
 {id:"incident-report",name:"Incident Report",ru:"Отчёт о происшествии",category:"Official Notice",group:"notices",desc:"Record an operational, security or project incident.",sections:["INCIDENT DETAILS","RESPONSE AND PREVENTION"]},
 {id:"dispute-record",name:"Internal Dispute Record",ru:"Запись о внутреннем споре",category:"Internal Governance",group:"notices",desc:"Document an internal disagreement and resolution steps.",sections:["MATTER UNDER REVIEW","RESOLUTION"]},
 {id:"vendor-approval",name:"Vendor / Contractor Approval",ru:"Утверждение подрядчика",category:"Partnership",group:"partnerships",desc:"Record internal approval to engage a vendor or contractor.",sections:["SUPPLIER DETAILS","APPROVAL CONDITIONS"]},
 {id:"partnership-mou",name:"Memorandum of Understanding",ru:"Меморандум о взаимопонимании",category:"Partnership",group:"partnerships",desc:"Outline proposed cooperation principles and intentions.",sections:["PURPOSE OF UNDERSTANDING","COOPERATION PRINCIPLES"]},
 {id:"partnership-review",name:"Partnership Review",ru:"Оценка сотрудничества",category:"Partnership",group:"partnerships",desc:"Review an existing partner relationship and outcomes.",sections:["PARTNERSHIP REVIEW","RECOMMENDATION"]},
 {id:"asset-assignment",name:"Company Asset Assignment",ru:"Акт выдачи имущества компании",category:"Internal Governance",group:"notices",desc:"Record assignment of company equipment or assets.",sections:["ASSET DETAILS","CUSTODY AND RETURN"]},
 {id:"asset-return",name:"Company Asset Return",ru:"Акт возврата имущества компании",category:"Internal Governance",group:"notices",desc:"Record the return and condition of company assets.",sections:["RETURNED ASSETS","CONDITION AND ACCEPTANCE"]},
 {id:"decision-record",name:"Corporate Decision Record",ru:"Протокол корпоративного решения",category:"Internal Governance",group:"notices",desc:"Register an official internal management decision.",sections:["DECISION","IMPLEMENTATION"]},
 {id:"exception-request",name:"Policy Exception Request",ru:"Запрос на исключение из правил",category:"Internal Governance",group:"notices",desc:"Request a documented exception to an internal policy.",sections:["EXCEPTION REQUEST","RISK AND APPROVAL"]}
];
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
let docs = JSON.parse(localStorage.getItem("tfe_docs_v1")||"[]");
let activeTemplate = null;
let activeView = "dashboard";
let currentProfile = JSON.parse(localStorage.getItem("tfe_profile_v1")||'{"name":"Administrator","role":"Administrator of TFE"}');
function save(){localStorage.setItem("tfe_docs_v1",JSON.stringify(docs));}
function dateNow(){return new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"});}
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2300);}
function thumb(){return '<div class="doc-thumb"><b>TFE</b><i></i><i></i><i></i><small>OFFICIAL</small></div>'}
function renderTemplates(list=templates.slice(0,5)){
 $("#templateGrid").innerHTML=list.map((t,i)=>`<article class="template-card"><div class="template-top">${thumb()}<div><div class="template-number">${String(templates.indexOf(t)+1).padStart(2,"0")}</div><h3>${esc(t.name)}</h3><p>${esc(t.ru)}</p></div></div><button class="outline-btn" data-open="${t.id}">OPEN FULL VIEW →</button></article>`).join("");
 $$("[data-open]").forEach(b=>b.addEventListener("click",()=>openTemplate(b.dataset.open)));
}
function statusClass(s){return s==="Approved"?"approved":s==="Pending Approval"?"pending":"draft"}
function renderRows(list=docs.slice().reverse().slice(0,6)){
 $("#recentRows").innerHTML=list.map(d=>`<tr><td>${esc(d.title)}</td><td>${esc(d.category)}</td><td><span class="status ${statusClass(d.status)}">${esc(d.status.toUpperCase())}</span></td><td>${esc(d.updated)}</td><td>${esc(d.author)}</td></tr>`).join("");
 $("#recentEmpty").style.display=list.length?"none":"block";
 $("#notificationCount").textContent=docs.filter(d=>d.status==="Pending Approval").length;
}
function openModal(title,html){$("#modalTitle").textContent=title;$("#modalBody").innerHTML=html;$("#modalBackdrop").hidden=false;document.body.style.overflow="hidden";}
function closeModal(){$("#modalBackdrop").hidden=true;document.body.style.overflow="";}
function openTemplate(id){
 activeTemplate=templates.find(t=>t.id===id); if(!activeTemplate)return;
 const sample={company:"The FLOX Entertainment",project:"Project Example",projectId:"TFE-PRJ-0001",manager:currentProfile.name,approvalDate:dateNow(),startDate:"",endDate:"",employee:"",position:"",department:"",role:"",currentStatus:"In Development",newStatus:"Completed",reason:"",partner:"",scope:"",effectiveDate:dateNow(),responsibilities:"",limitations:"",expiry:"",conditions:""};
 const fields=fieldsFor(id,sample);
 openModal("Open full document",`<div class="notice">Preview mode. Complete the fields below to prepare a document. This static site stores documents only in this browser.</div><form id="docForm"><div class="form-layout">${fields}</div><div class="modal-actions"><button type="button" class="secondary-btn" id="previewBtn">PREVIEW DOCUMENT</button><button type="submit" class="solid-btn">SAVE DOCUMENT</button></div></form><div id="previewArea"></div>`);
 $("#docForm").addEventListener("submit",e=>{e.preventDefault();const data=readForm();const d={id:"TFE-DOC-"+Date.now(),templateId:id,title:activeTemplate.name,category:activeTemplate.category,status:data.documentStatus||"Draft",updated:dateNow(),author:currentProfile.name,approver:data.approver||"Not assigned",data};docs.push(d);save();renderRows();toast("Document saved in this browser");showSavedDoc(d);});
 $("#previewBtn").addEventListener("click",()=>{const data=readForm();$("#previewArea").innerHTML=paperHTML(activeTemplate,data,"PREVIEW");$("#previewArea").scrollIntoView({behavior:"smooth",block:"start"});});
}
function fieldsFor(id,s){
 const f=(label,key,val="",type="text",full=false)=>`<div class="field ${full?"full":""}"><label>${label.toUpperCase()}</label><input name="${key}" type="${type}" value="${esc(val)}" placeholder="Enter ${label.toLowerCase()}"></div>`;
 const ta=(label,key,val="")=>`<div class="field full"><label>${label.toUpperCase()}</label><textarea name="${key}" placeholder="Enter ${label.toLowerCase()}">${esc(val)}</textarea></div>`;
 let out=f("Owning company","company",s.company)+f("Document date","approvalDate",s.approvalDate,"text");
 if(["establish","completion","ownership","status","suspension"].includes(id))out+=f("Project name","project",s.project)+f("Project ID","projectId",s.projectId)+f("Project manager","manager",s.manager)+f("Start date","startDate",s.startDate)+f("End date","endDate",s.endDate);
 if(id==="appointment")out+=f("Employee full name","employee")+f("Position","position")+f("Department","department")+f("Role","role")+f("Appointment date","effectiveDate",s.effectiveDate)+ta("Duties and responsibilities","responsibilities");
 if(id==="ownership")out+=f("Owning department","department")+f("Effective date","effectiveDate",s.effectiveDate)+ta("Ownership details","responsibilities");
 if(id==="status")out+=f("Current status","currentStatus",s.currentStatus)+f("New status","newStatus",s.newStatus)+ta("Reason for status change","reason");
 if(id==="suspension")out+=f("Suspension date","effectiveDate",s.effectiveDate)+ta("Reason for suspension","reason")+ta("Conditions for resumption","conditions");
 if(id==="authorization")out+=f("Employee full name","employee")+f("Department","department")+f("Role","role")+f("Effective date","effectiveDate",s.effectiveDate)+f("Expiry date","expiry")+ta("Authorized actions","responsibilities")+ta("Limitations","limitations");
 if(id==="partnership")out+=f("Partner organization","partner")+f("TFE responsible person","manager",s.manager)+f("Effective date","effectiveDate",s.effectiveDate)+f("Duration / end date","endDate")+ta("Scope of cooperation","scope");
 if(id==="completion")out+=f("Final project status","newStatus","Completed")+ta("Completion summary","reason");
 if(id==="establish")out+=ta("Project purpose / summary","reason");
 const bespoke=["establish","completion","ownership","appointment","status","suspension","authorization","partnership"];
 if(!bespoke.includes(id))out+=f("Subject / entity name","project")+f("Reference ID","projectId")+f("Responsible person","manager",s.manager)+f("Department / team","department")+f("Effective date","effectiveDate",s.effectiveDate)+f("Review / end date","endDate")+ta("Purpose and background","reason")+ta("Details, terms or requested action","scope")+ta("Responsibilities / follow-up","responsibilities");
 out+=`<div class="field"><label>DOCUMENT STATUS</label><select name="documentStatus"><option>Draft</option><option>Pending Approval</option></select></div><div class="field"><label>PREPARED BY</label><input name="preparedBy" value="${esc(currentProfile.name)}"></div><div class="field"><label>APPROVING REPRESENTATIVE</label><select name="approver"><option>Owner of The FLOX Entertainment</option><option>Director of The FLOX Entertainment</option><option>Administrator of The FLOX Entertainment</option><option>Project Manager</option><option>Developer</option></select></div>`;
 return out;
}
function readForm(){const o={};new FormData($("#docForm")).forEach((v,k)=>o[k]=v);return o;}
function paperHTML(t,d,mark=""){
 const rows=[["Document ID",d.documentId||"Assigned after saving"],["Owning Company",d.company],["Project / Subject",d.project||d.employee||d.partner||"—"],["Reference ID",d.projectId||"—"],["Prepared By",d.preparedBy||currentProfile.name],["Document Date",d.approvalDate||d.effectiveDate||dateNow()]];
 const paragraphs={
 establish:"This document confirms the official approval of the establishment and commencement of the project identified above under the authority of The FLOX Entertainment.",
 completion:"This certificate confirms that the project identified above has reached its recorded completion state, subject to the final review and acceptance of the authorized representative.",
 ownership:"This declaration records the internal ownership and responsible management designation for the project identified above.",
 appointment:"The individual identified in this document is appointed to the stated position within the relevant organizational structure, subject to internal policies and assigned responsibilities.",
 status:"This document records the requested change to the official project status. The change takes effect only after review by an authorized representative.",
 suspension:"This notice records the suspension of the project identified above and the reason and conditions associated with that decision.",
 authorization:"This certificate records the scope of internal authority granted to the named individual. Such authority remains subject to applicable internal policies and may be amended or withdrawn.",
 partnership:"This document records internal approval to proceed with the described partnership discussions or cooperation, subject to any required separate agreements."
 };
 const genericParagraph = "This document records the matter described above for internal review, coordination and record-keeping within The FLOX Entertainment. Any action requiring formal authorization remains subject to approval by an appropriately authorized representative.";\n const details=[["Reason / Summary",d.reason],["Responsibilities / Scope",d.responsibilities||d.scope],["Conditions / Limitations",d.conditions||d.limitations],["Status",d.newStatus]];
 return `<article class="document-paper"><div class="paper-brand"><strong>THE FLOX ENTERTAINMENT</strong><small>OFFICIAL CORPORATE DOCUMENT</small></div><div class="paper-title">${esc(t.name.toUpperCase())}</div><div class="paper-subtitle">${esc(t.ru)}</div>${mark?`<div style="text-align:center;font:10px Arial;color:#876b2c;letter-spacing:2px">${mark}</div>`:""}<div class="paper-section">DOCUMENT INFORMATION</div><table class="paper-meta">${rows.filter(r=>r[1]).map(r=>`<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td></tr>`).join("")}</table><div class="paper-section">1. ${esc(t.sections[0])}</div><div class="paper-body"><p>${esc(paragraphs[t.id]||genericParagraph)}</p>${details.filter(x=>x[1]).map(x=>`<p><b>${esc(x[0])}:</b> ${esc(x[1])}</p>`).join("")}</div><div class="paper-section">2. ${esc(t.sections[1])}</div><div class="paper-body"><p>This document is an internal corporate record of The FLOX Entertainment. Its contents should be reviewed and approved by a representative with the appropriate authority before being treated as final.</p></div><div class="paper-sign"><b>AUTHORIZED BY</b><p>${esc(d.approver||"Authorized representative")}</p><p>Digital verification: not available in this offline version</p><p>Prepared by: ${esc(d.preparedBy||currentProfile.name)}</p></div><div class="paper-footer">THE FLOX ENTERTAINMENT • INTERNAL CORPORATE DOCUMENT</div></article>`;
}
function showSavedDoc(d){const t=templates.find(x=>x.id===d.templateId);openModal("Document saved",`<div class="notice">Saved locally as a draft. This browser-only version does not transmit or authenticate approvals.</div>${paperHTML(t,{...d.data,documentId:d.id,approver:d.approver}, "DRAFT")}<div class="modal-actions"><button class="secondary-btn" id="closeSaved">CLOSE</button><button class="solid-btn" id="printDoc">PRINT / SAVE PDF</button></div>`);$("#closeSaved").onclick=closeModal;$("#printDoc").onclick=()=>window.print();}
function setView(view){
 activeView=view;$$(".nav-link").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
 const names={dashboard:"Dashboard",all:"All Documents",projects:"Project Documents",hr:"HR Documents",partnerships:"Partnerships",authorizations:"Internal Authorizations",notices:"Official Notices",mine:"My Documents",pending:"Pending Approvals",approved:"Approved Documents",templates:"Templates Library"};
 if(view==="dashboard"){location.hash="";$("#templateSection").style.display="block";$(".lower-grid").style.display="grid";renderTemplates();renderRows();return;}
 location.hash=view;$("#templateSection").style.display="block";$(".lower-grid").style.display="none";
 if(view==="templates"){renderTemplates(templates);$(".section-head h2").textContent="ALL DOCUMENT TEMPLATES";return;}
 const filtered=docs.filter(d=>view==="all"||(view==="mine"&&d.author===currentProfile.name)||(view==="pending"&&d.status==="Pending Approval")||(view==="approved"&&d.status==="Approved")||d.templateId&&templates.find(t=>t.id===d.templateId)?.group===view);
 $("#templateGrid").innerHTML=`<div class="panel" style="grid-column:1/-1"><div class="section-head"><h2>${names[view].toUpperCase()}</h2><button class="text-btn" id="newFromView">＋ CREATE DOCUMENT</button></div><div class="doc-list" id="viewDocs">${filtered.length?filtered.slice().reverse().map(d=>`<div class="doc-row"><div class="doc-thumb"><b>TFE</b><i></i><i></i><small>DOC</small></div><div class="doc-row-main"><b>${esc(d.title)}</b><small>${esc(d.id)} · ${esc(d.updated)} · ${esc(d.author)}</small></div><span class="status ${statusClass(d.status)}">${esc(d.status)}</span><button class="secondary-btn" data-viewdoc="${esc(d.id)}">OPEN</button></div>`).join(""):'<div class="empty-state" style="display:block">No documents found in this section.</div>'}</div></div>`;
 $("#newFromView").onclick=()=>chooseTemplate();
 $$("[data-viewdoc]").forEach(b=>b.onclick=()=>{const d=docs.find(x=>x.id===b.dataset.viewdoc);showSavedDoc(d);});
 $(".section-head h2").textContent=names[view].toUpperCase();
}
function chooseTemplate(){openModal("Choose a document template",`<div class="doc-list">${templates.map(t=>`<button class="quick-action" data-pick="${t.id}">${thumb()}<span><b>${esc(t.name)}</b><small>${esc(t.desc)}</small></span><i>›</i></button>`).join("")}</div>`);$$("[data-pick]").forEach(b=>b.onclick=()=>openTemplate(b.dataset.pick));}
$$(".nav-link").forEach(b=>b.addEventListener("click",()=>{setView(b.dataset.view);$("#sidebar").classList.remove("open");}));
$$("[data-goto]").forEach(b=>b.addEventListener("click",()=>setView(b.dataset.goto)));
$("#createTop").onclick=$("#quickCreate").onclick=chooseTemplate;
$("#closeModal").onclick=closeModal;$("#modalBackdrop").addEventListener("click",e=>{if(e.target.id==="modalBackdrop")closeModal();});
$("#menuBtn").onclick=()=>$("#sidebar").classList.toggle("open");
$("#profileBtn").onclick=()=>{const name=prompt("Display name for documents:",currentProfile.name);if(name===null)return;const role=prompt("Role label:",currentProfile.role);if(role===null)return;currentProfile={name:name.trim()||"Staff Member",role:role.trim()||"Staff"};localStorage.setItem("tfe_profile_v1",JSON.stringify(currentProfile));$("#profileName").textContent=currentProfile.name;$("#profileRole").textContent=currentProfile.role;toast("Local profile updated");};
$("#globalSearch").addEventListener("input",e=>{const q=e.target.value.toLowerCase().trim();if(!q){if(activeView==="dashboard")renderTemplates();return;}const found=templates.filter(t=>(t.name+" "+t.ru+" "+t.desc).toLowerCase().includes(q));renderTemplates(found);if(!found.length)$("#templateGrid").innerHTML='<div class="empty-state" style="display:block">No matching templates.</div>';});
$("#themeHint").onclick=()=>toast("TFE dark interface is the selected theme");
$("#profileName").textContent=currentProfile.name;$("#profileRole").textContent=currentProfile.role;
renderTemplates();renderRows();
