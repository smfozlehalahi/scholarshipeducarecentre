(function(){
const IDX={bn:0,en:1,ar:2};
const LS=localStorage.getItem('sec_lang');
const LANG=IDX[LS]!==undefined?LS:'bn';
const I=IDX[LANG];
const T={
m_title:['আন্তর্জাতিক স্কলারশিপ ডেটাবেস','International Scholarship Database','قاعدة بيانات المنح الدولية'],
m_tagline:['আপনার স্কলারশিপ খুঁজুন, ভবিষ্যৎ গড়ুন।','Find Your Scholarship, Build Your Future.','اعثر على منحتك، وابنِ مستقبلك.'],
m_search:['কীওয়ার্ড লিখুন...','Type a keyword...','اكتب كلمة مفتاحية...'],
m_all:['সব','All','الكل'],
m_country:['দেশ','Country','الدولة'],
m_degree:['ডিগ্রি','Degree level','المستوى الدراسي'],
m_funding:['অর্থায়নের ধরন','Funding type','نوع التمويل'],
m_ielts:['IELTS / IELTS ছাড়া','IELTS / Without IELTS','IELTS / بدون IELTS'],
m_age:['আমার বয়স','My age','عمري'],
m_status:['স্ট্যাটাস','Status','الحالة'],
m_deadline:['শেষ তারিখ','Deadline','آخر موعد'],
m_deadline_any:['যেকোনো','Any','أي'],
m_deadline_30:['৩০ দিনের মধ্যে','Within 30 days','خلال 30 يوماً'],
m_deadline_90:['৯০ দিনের মধ্যে','Within 90 days','خلال 90 يوماً'],
m_countries:['দেশভিত্তিক পেজ','Browse by Country','تصفح حسب الدولة'],
m_countries_hint:['একটি দেশে ক্লিক করলে নিচের তালিকা ফিল্টার হবে।','Click a country to filter the list below.','اضغط على دولة لتصفية القائمة أدناه.'],
m_results:['স্কলারশিপ সমূহ','Scholarships','المنح'],
m_no_results:['এখনো কোনো যাচাইকৃত স্কলারশিপ যোগ হয়নি, অথবা ফিল্টারে মিলছে না।','No verified scholarships yet, or none match these filters.','لا توجد منح موثقة حتى الآن، أو لا توجد نتائج مطابقة لهذه التصفية.'],
m_directory:['বিশ্ববিদ্যালয় ডিরেক্টরি','University Directory','دليل الجامعات'],
m_dir_note:['এটি প্রাথমিক তালিকা মাত্র। এখানে নাম থাকার মানে এই নয় যে সেখানে বাংলাদেশি শিক্ষার্থীদের জন্য স্কলারশিপ চালু আছে।','This is an initial list only. Being listed does not mean the university currently offers scholarships to Bangladeshi students.','هذه قائمة أولية فقط. وجود الجامعة في القائمة لا يعني أن بها منحاً متاحة حالياً للطلاب البنغلاديشيين.'],
m_no_db:['ডাটাবেস সংযোগ এখনো সেট করা হয়নি। config.js-এ Supabase তথ্য দিন।','The database is not connected yet. Add your Supabase details in config.js.','لم يتم ربط قاعدة البيانات بعد. أضف بيانات Supabase في ملف config.js.'],
m_days_left:['দিন বাকি','days left','يوماً متبقياً'],
m_verified_on:['সর্বশেষ যাচাই','Last verified','آخر تحقق'],
m_details:['বিস্তারিত দেখুন','View details','عرض التفاصيل'],
m_apply:['এখনই আবেদন','Apply now','قدّم الآن'],
m_apply_closed:['আবেদন বন্ধ / অপেক্ষমাণ','Closed / awaiting update','مغلق / بانتظار التحديث'],
m_tbd:['জানানো হয়নি','Not announced','لم يُعلن'],
m_back:['← সব স্কলারশিপে ফিরে যান','← Back to all scholarships','عودة إلى جميع المنح →'],
m_not_found:['এই স্কলারশিপটি পাওয়া যায়নি, অথবা এখনো যাচাই হয়নি।','This scholarship was not found or is not yet verified.','لم يتم العثور على هذه المنحة، أو لم تُوثَّق بعد.'],
m_disclaimer:['তথ্য শেষ যাচাইয়ের তারিখ অনুযায়ী সঠিক। সর্বশেষ তথ্যের জন্য অফিসিয়াল উৎস দেখুন।','Information is accurate as of the last verification date. Check the official source for the latest details.','المعلومات دقيقة حتى تاريخ آخر تحقق. راجع المصدر الرسمي لأحدث التفاصيل.'],
m_faq:['প্রশ্নোত্তর','FAQ','الأسئلة الشائعة'],
deg_bachelor:['স্নাতক','Bachelor','بكالوريوس'],deg_master:['স্নাতকোত্তর','Master','ماجستير'],deg_phd:['পিএইচডি','PhD','دكتوراه'],deg_other:['অন্যান্য','Other','أخرى'],
fund_full:['সম্পূর্ণ অর্থায়ন','Fully funded','تمويل كامل'],fund_partial:['আংশিক','Partial','تمويل جزئي'],fund_tuition_waiver:['টিউশন মওকুফ','Tuition waiver','إعفاء من الرسوم'],fund_research:['গবেষণা অনুদান','Research funding','تمويل بحثي'],fund_other:['অন্যান্য','Other','أخرى'],
v_required:['লাগবে','Required','مطلوب'],v_not_required:['লাগবে না','Not required','غير مطلوب'],v_unknown:['যাচাই প্রয়োজন','Verify','يحتاج تحققاً'],v_waiver:['IELTS ছাড়া সুযোগ আছে','Without IELTS available','متاح بدون IELTS'],v_not_available:['নেই','Not available','غير متاح'],
s_open_now:['এখন খোলা','Open now','مفتوح الآن'],s_upcoming:['আসছে','Upcoming','قادم'],s_closing_soon:['শীঘ্রই বন্ধ','Closing soon','يُغلق قريباً'],s_closed:['বন্ধ','Closed','مغلق'],s_awaiting_announcement:['ঘোষণার অপেক্ষায়','Awaiting announcement','بانتظار الإعلان'],s_verification_required:['যাচাই প্রয়োজন','Verification required','يتطلب التحقق'],
yes:['হ্যাঁ','Yes','نعم'],no:['না','No','لا'],unknown:['যাচাই প্রয়োজন','Verify','يحتاج تحققاً'],
d_overview:['বিশ্ববিদ্যালয় পরিচিতি','University overview','نبذة عن الجامعة'],d_description:['স্কলারশিপ বিবরণ','Scholarship description','وصف المنحة'],d_courses:['কোর্স ও বিষয়','Courses & subject','البرامج والتخصص'],d_eligibility:['যোগ্যতা','Eligibility','الأهلية'],d_age:['বয়সসীমা','Age limit','الحد الأقصى للعمر'],d_ielts:['ভাষা যোগ্যতা','Language requirements','متطلبات اللغة'],d_funding:['সুবিধাসমূহ','Funding benefits','المزايا المالية'],d_timeline:['আবেদনের সময়সূচি','Application timeline','الجدول الزمني للتقديم'],d_documents:['প্রয়োজনীয় নথি','Required documents','المستندات المطلوبة'],d_steps:['ধাপে ধাপে আবেদন','Step-by-step application','خطوات التقديم'],d_links:['অফিসিয়াল লিংক','Official links','الروابط الرسمية'],
d_source:['তথ্যের উৎস','Information source','مصدر المعلومات'],d_apply_link:['অফিসিয়াল আবেদন লিংক','Official application link','رابط التقديم الرسمي'],d_info_link:['অফিসিয়াল স্কলারশিপ তথ্য','Official scholarship information','معلومات المنحة الرسمية'],d_univ_site:['বিশ্ববিদ্যালয়ের ওয়েবসাইট','University website','الموقع الرسمي للجامعة'],
d_open:['আবেদন শুরু','Applications open','بدء التقديم'],d_deadline:['শেষ তারিখ','Deadline','آخر موعد'],d_next:['পরবর্তী আবেদনের সম্ভাব্য সময়','Expected next period','الفترة المتوقعة التالية'],
d_tuition:['টিউশন ফি','Tuition fee coverage','تغطية الرسوم الدراسية'],d_stipend:['মাসিক ভাতা','Monthly stipend','المخصص الشهري'],d_accommodation:['আবাসন','Accommodation','السكن'],d_insurance:['মেডিকেল বিমা','Medical insurance','التأمين الطبي'],d_air:['বিমান টিকিট','Air ticket','تذكرة الطيران'],d_other:['অন্যান্য সুবিধা','Other benefits','مزايا أخرى'],
d_min:['ন্যূনতম ফলাফল','Minimum academic results','الحد الأدنى للنتائج'],d_subject_req:['বিষয়ভিত্তিক শর্ত','Subject-specific requirements','متطلبات التخصص'],d_medium:['শিক্ষার মাধ্যম গ্রহণযোগ্যতা','Medium of instruction accepted','لغة التدريس المقبولة'],d_bd:['বাংলাদেশি শিক্ষার্থীর যোগ্যতা','Eligibility for Bangladeshi students','أهلية الطلاب البنغلاديشيين'],
faq_q1:['IELTS ছাড়া আবেদন করা যাবে?','Can I apply without IELTS?','هل يمكنني التقديم بدون IELTS؟'],faq_a1:['এটি প্রতিটি স্কলারশিপের নিজস্ব শর্তের ওপর নির্ভর করে। অফিসিয়াল ঘোষণা দেখুন।','It depends on each scholarship. Check the official announcement.','يعتمد ذلك على شروط كل منحة. راجع الإعلان الرسمي.'],
faq_q2:['আবেদনের চূড়ান্ত সিদ্ধান্ত কে দেয়?','Who makes the final decision?','من يصدر القرار النهائي؟'],faq_a2:['ভর্তি ও স্কলারশিপের চূড়ান্ত সিদ্ধান্ত সংশ্লিষ্ট বিশ্ববিদ্যালয় বা প্রতিষ্ঠানের।','The university or institution makes the final admission and scholarship decision.','القرار النهائي للقبول والمنح تتخذه الجامعة أو المؤسسة المعنية.'],
faq_q3:['সঠিক তথ্য কোথায় পাব?','Where can I find accurate information?','أين أجد المعلومات الدقيقة؟'],faq_a3:['সবসময় অফিসিয়াল ওয়েবসাইট ও শেষ যাচাইয়ের তারিখ দেখুন। আমাদের টিম সহায়তা করতে পারে।','Always check the official website and the last-verified date. Our team can help.','راجع دائماً الموقع الرسمي وتاريخ آخر تحقق. يمكن لفريقنا المساعدة.'],
step1:['অফিসিয়াল পেজে গিয়ে যোগ্যতা যাচাই করুন।','Check eligibility on the official page.','تحقق من الأهلية في الصفحة الرسمية.'],step2:['প্রয়োজনীয় নথি প্রস্তুত করুন।','Prepare the required documents.','جهّز المستندات المطلوبة.'],step3:['অনলাইন ফর্ম পূরণ করুন।','Fill in the online form.','املأ النموذج الإلكتروني.'],step4:['ফর্ম জমা দিয়ে নিশ্চিতকরণ রাখুন।','Submit and keep the confirmation.','أرسل النموذج واحتفظ بتأكيد الاستلام.'],step5:['ফলাফলের জন্য অফিসিয়াল ঘোষণা অনুসরণ করুন।','Follow the official announcements for results.','تابع الإعلانات الرسمية للنتائج.'],
a_title:['অ্যাডমিন ড্যাশবোর্ড','Admin Dashboard','لوحة الإدارة'],a_email:['ইমেইল','Email','البريد الإلكتروني'],a_password:['পাসওয়ার্ড','Password','كلمة المرور'],a_login:['লগইন','Log in','تسجيل الدخول'],a_logout:['লগআউট','Log out','تسجيل الخروج'],a_not_admin:['এই অ্যাকাউন্টের অ্যাডমিন অনুমতি নেই।','This account is not an administrator.','هذا الحساب ليس مشرفاً.'],
a_saved:['সংরক্ষিত হয়েছে।','Saved.','تم الحفظ.'],a_deleted:['মুছে ফেলা হয়েছে।','Deleted.','تم الحذف.'],a_confirm:['এটি মুছে ফেলবেন?','Delete this entry?','هل تريد حذف هذا الإدخال؟'],
a_form:['স্কলারশিপ যোগ / সম্পাদনা','Add / Edit Scholarship','إضافة / تعديل منحة'],a_list:['স্কলারশিপ তালিকা','Scholarship list','قائمة المنح'],a_edit:['সম্পাদনা','Edit','تعديل'],a_delete:['মুছুন','Delete','حذف'],a_verify:['যাচাই করুন','Verify','تحقق'],a_unverify:['যাচাই বাতিল','Unverify','إلغاء التحقق'],a_publish:['প্রকাশ করুন','Publish','نشر'],a_unpublish:['প্রকাশ বন্ধ','Unpublish','إلغاء النشر'],a_new:['নতুন ফর্ম','New entry','إدخال جديد'],a_save:['সংরক্ষণ করুন','Save','حفظ'],
a_export:['CSV এক্সপোর্ট','Export CSV','تصدير CSV'],a_import:['বাল্ক ইমপোর্ট (CSV)','Bulk import (CSV)','استيراد جماعي (CSV)'],a_import_btn:['ইমপোর্ট করুন (খসড়া হিসেবে)','Import (as drafts)','استيراد (كمسودات)'],a_import_done:['টি এন্ট্রি খসড়া হিসেবে যোগ হয়েছে।','entries added as drafts.','إدخال أُضيف كمسودة.'],a_csv_hint:['প্রথম লাইনে কলামের নাম থাকবে। info_json কলামে JSON লিখুন।','The first line must contain column names. Put JSON in the info_json column.','يجب أن يحتوي السطر الأول على أسماء الأعمدة. ضع JSON في عمود info_json.'],
a_countries:['দেশ ব্যবস্থাপনা','Manage countries','إدارة الدول'],a_unis:['বিশ্ববিদ্যালয় ব্যবস্থাপনা','Manage universities','إدارة الجامعات'],a_add:['যোগ করুন','Add','إضافة'],a_flag:['পতাকা (ইমোজি)','Flag (emoji)','العلم (رمز)'],a_code:['কোড (যেমন: sa)','Code (e.g. sa)','الرمز (مثل sa)'],a_name_en:['নাম (English)','Name (English)','الاسم (English)'],a_name_bn:['নাম (বাংলা)','Name (Bangla)','الاسم (বাংলা)'],a_name_ar:['নাম (العربية)','Name (Arabic)','الاسم (العربية)'],a_website:['ওয়েবসাইট','Website','الموقع'],a_logo:['লোগো URL','Logo URL','رابط الشعار'],
a_info_json:['বিস্তারিত তথ্য (JSON)','Details (JSON)','التفاصيل (JSON)'],a_json_help:['প্রতিটি লেখা {"bn":"…","en":"…","ar":"…"} আকারে লিখুন। খালি ভাষায় অন্য ভাষার লেখা দেখানো হবে।','Write each text as {"bn":"…","en":"…","ar":"…"}. Empty languages fall back to another language.','اكتب كل نص بالشكل {"bn":"…","en":"…","ar":"…"}. اللغة الفارغة تعرض لغة بديلة.'],
a_need_verify:['প্রকাশ করার আগে যাচাই করুন।','Verify the entry before publishing.','تحقق من الإدخال قبل النشر.'],a_error:['ত্রুটি','Error','خطأ'],a_status_col:['স্ট্যাটাস','Status','الحالة'],a_pub_col:['প্রকাশ','Published','منشور'],a_actions:['কাজ','Actions','الإجراءات'],
f_slug:['স্লাগ (URL নাম)','Slug (URL name)','الاسم في الرابط'],f_country:['দেশ','Country','الدولة'],f_university:['বিশ্ববিদ্যালয়','University','الجامعة'],f_degree:['ডিগ্রি','Degree','الدرجة'],f_subject:['বিষয়','Subject','التخصص'],f_funding:['অর্থায়ন','Funding','التمويل'],f_age:['সর্বোচ্চ বয়স','Age limit','الحد الأقصى للعمر'],f_ielts:['IELTS','IELTS','IELTS'],f_toefl:['TOEFL','TOEFL','TOEFL'],f_without:['IELTS ছাড়া','Without IELTS','بدون IELTS'],f_open:['আবেদন শুরু','Open date','تاريخ البدء'],f_deadline:['শেষ তারিখ','Deadline','آخر موعد'],f_next:['পরবর্তী আবেদনের সময়','Next period','الفترة التالية'],f_status:['স্ট্যাটাস (ম্যানুয়াল)','Status (manual)','الحالة (يدوي)'],f_bd:['বাংলাদেশি যোগ্যতা','Bangladesh eligibility','أهلية البنغلاديشيين'],f_source:['তথ্যের উৎস URL','Source URL','رابط المصدر'],f_info_url:['অফিসিয়াল তথ্য URL','Official info URL','رابط المعلومات الرسمي'],f_apply_url:['অফিসিয়াল আবেদন URL','Official apply URL','رابط التقديم الرسمي'],f_notes:['অ্যাডমিন নোট (গোপন)','Admin notes (private)','ملاحظات المشرف (خاصة)'],f_verified:['যাচাইকৃত','Verified','موثّق'],f_published:['প্রকাশিত','Published','منشور']
};
const t=k=>{const v=T[k];return v?v[I]:k;};
const ml=o=>{ if(!o) return ''; if(typeof o==='string') return o; return o[LANG]||o.en||o.bn||o.ar||''; };
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const today=()=>new Date().toISOString().slice(0,10);
const daysTo=d=>Math.ceil((new Date(d)-new Date(today()))/86400000);
const CFG=window.SEC_CONFIG||{};
const ready=!!(window.supabase&&CFG.url&&CFG.anonKey&&!/YOUR-/.test(CFG.url+CFG.anonKey));
const sb=ready?window.supabase.createClient(CFG.url,CFG.anonKey):null;
const app=document.getElementById('app');
const page=document.body.dataset.page;
const STATUSES=['open_now','upcoming','closing_soon','closed','awaiting_announcement','verification_required'];
const DEGREES=['bachelor','master','phd','other'];
const FUNDING=['full','partial','tuition_waiver','research','other'];

function computeStatus(s){
  if(!s.verified||!s.source_url) return 'verification_required';
  const tday=today();
  if(s.deadline){
    if(s.deadline<tday) return 'closed';
    if(s.open_date&&s.open_date>tday) return 'upcoming';
    return daysTo(s.deadline)<=30?'closing_soon':'open_now';
  }
  if(s.open_date&&s.open_date>tday) return 'upcoming';
  return s.status==='closed'?'closed':'awaiting_announcement';
}
const badge=st=>`<span class="badge b-${st}">${t('s_'+st)}</span>`;
const fail=e=>{ app.innerHTML=`<div class="wrap"><div class="note">${esc(e.message||e)}</div></div>`; };
const noDb=()=>{ app.innerHTML=`<div class="wrap"><div class="note">${t('m_no_db')}</div></div>`; };

async function fetchPublic(){
  const [c,u,s]=await Promise.all([
    sb.from('countries').select('*').eq('active',true).order('sort_order'),
    sb.from('universities').select('*').eq('active',true),
    sb.from('scholarships').select('*, universities(name,website,logo_url)').eq('published',true).eq('verified',true)
  ]);
  [c,u,s].forEach(r=>{ if(r.error) throw r.error; });
  return {countries:c.data||[],unis:u.data||[],schs:s.data||[]};
}

async function pageIntl(){
  if(!sb) return noDb();
  let d; try{ d=await fetchPublic(); }catch(e){ return fail(e); }
  const cmap=Object.fromEntries(d.countries.map(c=>[c.code,c]));
  const optList=(arr,pre)=>`<option value="">${t('m_all')}</option>`+arr.map(v=>`<option value="${v}">${t(pre+v)}</option>`).join('');
  const countryOpts=`<option value="">${t('m_all')}</option>`+d.countries.map(c=>`<option value="${c.code}">${esc(c.flag||'')} ${esc(ml(c.name))}</option>`).join('');
  app.innerHTML=`
  <div class="page-hd"><div class="wrap"><p class="eyebrow" style="color:#D4B36A">${t('m_title')}</p><h1>${t('m_title')}</h1><p>${t('m_tagline')}</p></div></div>
  <section class="block"><div class="wrap">
    <h2>${t('m_countries')}</h2><p class="lead">${t('m_countries_hint')}</p>
    <div class="grid" id="countryCards"></div>
  </div></section>
  <section class="block alt"><div class="wrap">
    <h2>${t('m_results')}</h2>
    <form class="filters" id="filters" onsubmit="return false">
      <label class="wide"><span>${t('m_search')}</span><input id="q" type="search" placeholder="${t('m_search')}"></label>
      <label>${t('m_country')}<select id="fCountry">${countryOpts}</select></label>
      <label>${t('m_degree')}<select id="fDeg">${optList(DEGREES,'deg_')}</select></label>
      <label>${t('m_funding')}<select id="fFund">${optList(FUNDING,'fund_')}</select></label>
      <label>${t('m_ielts')}<select id="fIelts"><option value="">${t('m_all')}</option><option value="not_required">${t('v_not_required')}</option><option value="waiver">${t('v_waiver')}</option></select></label>
      <label>${t('m_age')}<input id="fAge" type="number" min="10" max="80"></label>
      <label>${t('m_status')}<select id="fStatus"><option value="">${t('m_all')}</option>${STATUSES.map(v=>`<option value="${v}">${t('s_'+v)}</option>`).join('')}</select></label>
      <label>${t('m_deadline')}<select id="fDl"><option value="">${t('m_deadline_any')}</option><option value="30">${t('m_deadline_30')}</option><option value="90">${t('m_deadline_90')}</option></select></label>
    </form>
    <div class="grid" id="results"></div>
  </div></section>
  <section class="block"><div class="wrap">
    <h2>${t('m_directory')}</h2><p class="note">${t('m_dir_note')}</p>
    <div id="directory" style="margin-top:20px"></div>
  </div></section>`;

  document.getElementById('countryCards').innerHTML=d.countries.map(c=>{
    const n=d.schs.filter(s=>s.country_code===c.code).length;
    return `<button class="card country-card" data-c="${esc(c.code)}"><span class="flag">${esc(c.flag||'')}</span><h3>${esc(ml(c.name))}</h3><p>${n} ${t('m_results')}</p></button>`;
  }).join('');
  document.getElementById('countryCards').addEventListener('click',e=>{
    const b=e.target.closest('[data-c]'); if(!b) return;
    document.getElementById('fCountry').value=b.dataset.c; renderResults();
    document.getElementById('results').scrollIntoView({behavior:'smooth'});
  });
  document.getElementById('directory').innerHTML=d.countries.map(c=>{
    const us=d.unis.filter(u=>u.country_code===c.code); if(!us.length) return '';
    return `<div class="dir-block"><h3>${esc(c.flag||'')} ${esc(ml(c.name))}</h3><ul class="dir-list">${us.map(u=>`<li>${u.website?`<a href="${esc(u.website)}" target="_blank" rel="noopener">${esc(ml(u.name))}</a>`:esc(ml(u.name))}</li>`).join('')}</ul></div>`;
  }).join('');

  const card=s=>{
    const c=cmap[s.country_code]||{}; const st=s._st;
    const canApply=(st==='open_now'||st==='closing_soon')&&s.apply_url;
    const dd=s.deadline?`${s.deadline}${st==='closing_soon'?` · ${daysTo(s.deadline)} ${t('m_days_left')}`:''}`:t('m_tbd');
    return `<article class="card sch-card">
      <div class="sc-top"><span class="flag">${esc(c.flag||'')}</span><span class="ctry">${esc(ml(c.name))}</span>${badge(st)}</div>
      <h3>${esc(ml(s.info&&s.info.title)||s.slug)}</h3>
      <p class="uni">${esc(ml(s.universities&&s.universities.name))}</p>
      <div class="chips">
        ${s.funding_type?`<span class="chip">${t('fund_'+s.funding_type)}</span>`:''}
        ${s.degree_level?`<span class="chip">${t('deg_'+s.degree_level)}</span>`:''}
        ${s.ielts&&s.ielts!=='unknown'?`<span class="chip">IELTS: ${t('v_'+s.ielts)}</span>`:''}
        ${s.without_ielts==='available'?`<span class="chip gold">${t('v_waiver')}</span>`:''}
      </div>
      <p class="meta"><b>${t('m_deadline')}:</b> ${dd}</p>
      <p class="meta small">${t('m_verified_on')}: ${esc(s.verified_at||'-')}</p>
      <div class="btns"><a class="btn btn-line" href="scholarship.html?s=${encodeURIComponent(s.slug)}">${t('m_details')}</a>
      ${canApply?`<a class="btn btn-gold" target="_blank" rel="noopener" href="${esc(s.apply_url)}">${t('m_apply')}</a>`:`<span class="chip">${t('m_apply_closed')}</span>`}</div>
    </article>`;
  };
  function renderResults(){
    const v=id=>document.getElementById(id).value;
    const q=v('q').trim().toLowerCase(), age=parseInt(v('fAge'),10), dl=v('fDl'), ie=v('fIelts');
    const list=d.schs.map(s=>({...s,_st:computeStatus(s)})).filter(s=>{
      if(v('fCountry')&&s.country_code!==v('fCountry')) return false;
      if(v('fDeg')&&s.degree_level!==v('fDeg')) return false;
      if(v('fFund')&&s.funding_type!==v('fFund')) return false;
      if(ie==='not_required'&&s.ielts!=='not_required') return false;
      if(ie==='waiver'&&s.without_ielts!=='available') return false;
      if(!isNaN(age)&&s.age_limit!=null&&age>s.age_limit) return false;
      if(v('fStatus')&&s._st!==v('fStatus')) return false;
      if(dl&&(!s.deadline||daysTo(s.deadline)<0||daysTo(s.deadline)>+dl)) return false;
      if(q&&!JSON.stringify([s.info,s.subject,s.slug,s.universities&&s.universities.name]).toLowerCase().includes(q)) return false;
      return true;
    });
    document.getElementById('results').innerHTML=list.length?list.map(card).join(''):`<p class="lead">${t('m_no_results')}</p>`;
  }
  document.getElementById('filters').addEventListener('input',renderResults);
  document.getElementById('filters').addEventListener('change',renderResults);
  renderResults();
}

async function pageDetail(){
  if(!sb) return noDb();
  const slug=new URLSearchParams(location.search).get('s')||'';
  const {data:s,error}=await sb.from('scholarships').select('*, universities(name,website,logo_url)').eq('slug',slug).eq('published',true).eq('verified',true).maybeSingle();
  if(error) return fail(error);
  if(!s) return app.innerHTML=`<div class="wrap"><div class="note">${t('m_not_found')}</div></div>`;
  const {data:c}=await sb.from('countries').select('*').eq('code',s.country_code).maybeSingle();
  const info=s.info||{}, u=s.universities||{}, st=computeStatus(s);
  const row=(k,v)=>v?`<div class="dl-row"><dt>${t(k)}</dt><dd>${esc(v)}</dd></div>`:'';
  const block=(title,body)=>body?`<h3>${title}</h3>${body}`:'';
  const txt=x=>{ const v=ml(x); return v?`<p>${esc(v)}</p>`:''; };
  const sec=(k,v)=>`<div class="dl-row"><dt>${t(k)}</dt><dd>${esc(v)}</dd></div>`;
  const ieltsText=s.ielts&&s.ielts!=='unknown'?t('v_'+s.ielts):t('unknown');
  const app_links=[
    s.apply_url&&`<a class="btn btn-gold" target="_blank" rel="noopener" href="${esc(s.apply_url)}">${t('d_apply_link')}</a>`,
    s.info_url&&`<a class="btn btn-line" target="_blank" rel="noopener" href="${esc(s.info_url)}">${t('d_info_link')}</a>`,
    u.website&&`<a class="btn btn-line" target="_blank" rel="noopener" href="${esc(u.website)}">${t('d_univ_site')}</a>`
  ].filter(Boolean).join('');
  app.innerHTML=`
  <div class="page-hd"><div class="wrap"><p class="eyebrow" style="color:#D4B36A">${esc(c&&c.flag||'')} ${esc(ml(c&&c.name))}</p><h1>${esc(ml(info.title)||s.slug)}</h1><p>${esc(ml(u.name))}</p></div></div>
  <main class="content"><div class="wrap detail" style="max-width:920px">
    <a class="more" href="intl.html">${t('m_back')}</a>
    <div class="card gold" style="margin-top:18px">
      <div class="sc-top">${badge(st)}${s.funding_type?`<span class="chip">${t('fund_'+s.funding_type)}</span>`:''}${s.degree_level?`<span class="chip">${t('deg_'+s.degree_level)}</span>`:''}</div>
      <div class="dl-row"><dt>${t('m_verified_on')}</dt><dd>${esc(s.verified_at||'-')}</dd></div>
      <div class="dl-row"><dt>${t('d_deadline')}</dt><dd>${esc(s.deadline||t('m_tbd'))}</dd></div>
      <div class="btns">${app_links}</div>
    </div>
    ${block(t('d_overview'), txt(info.university_overview)||`<p>${esc(ml(u.name))}</p>`)}
    ${block(t('d_description'), txt(info.description))}
    ${block(t('d_courses'), `<div class="dl-rows">${sec('deg_'+(s.degree_level||'other'),s.subject||'')}</div>`+txt(info.courses))}
    ${block(t('d_eligibility'), `<div class="dl-rows">${row('d_min',ml(info.min_results))}${row('d_subject_req',ml(info.subject_requirements))}${row('d_medium',ml(info.medium))}${row('d_bd',t(s.bd_eligible==='yes'?'yes':s.bd_eligible==='no'?'no':'unknown'))}</div>`+txt(info.eligibility))}
    ${block(t('d_age'), `<p>${s.age_limit?esc(s.age_limit):t('m_tbd')}</p>`)}
    ${block(t('d_ielts'), `<div class="dl-rows">${row('f_ielts',ieltsText)}${row('f_toefl',s.toefl&&s.toefl!=='unknown'?t('v_'+s.toefl):t('unknown'))}${row('f_without',s.without_ielts==='available'?t('v_waiver'):t('unknown'))}</div>`)}
    ${block(t('d_funding'), `<div class="dl-rows">${row('d_tuition',ml(info.tuition))}${row('d_stipend',ml(info.stipend))}${row('d_accommodation',ml(info.accommodation))}${row('d_insurance',ml(info.insurance))}${row('d_air',ml(info.air_ticket))}${row('d_other',ml(info.other_benefits))}</div>`)}
    ${block(t('d_timeline'), `<div class="dl-rows">${row('d_open',s.open_date)}${row('d_deadline',s.deadline)}${row('d_next',s.next_period)}</div>`)}
    ${block(t('d_documents'), txt(info.documents))}
    ${block(t('d_steps'), `<ol>${[1,2,3,4,5].map(i=>`<li>${t('step'+i)}</li>`).join('')}</ol>`)}
    ${block(t('d_links'), `<div class="btns">${app_links}</div>`)}
    ${block(t('m_faq'), [1,2,3].map(i=>`<details><summary>${t('faq_q'+i)}</summary><p>${t('faq_a'+i)}</p></details>`).join(''))}
    <p class="note">${t('m_disclaimer')} · ${t('m_verified_on')}: ${esc(s.verified_at||'-')}</p>
  </div></main>`;
  document.title=(ml(info.title)||s.slug)+' | '+t('m_title');
}

function parseCSV(text){
  const rows=[]; let row=[],cur='',q=false;
  for(let i=0;i<text.length;i++){
    const ch=text[i];
    if(q){ if(ch==='"'){ if(text[i+1]==='"'){cur+='"';i++;} else q=false; } else cur+=ch; }
    else if(ch==='"') q=true;
    else if(ch===','){ row.push(cur); cur=''; }
    else if(ch==='\n'){ row.push(cur); rows.push(row); row=[]; cur=''; }
    else if(ch!=='\r') cur+=ch;
  }
  if(cur||row.length){ row.push(cur); rows.push(row); }
  return rows.filter(r=>r.some(x=>x.trim()));
}

const SLUG=s=>String(s||'').toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const opt=(list,cur)=>list.map(([v,l])=>`<option value="${esc(v)}" ${String(v)===String(cur??'')?'selected':''}>${esc(l)}</option>`).join('');
const fld=(label,html)=>`<label class="field">${label}${html}</label>`;

async function pageAdmin(){
  if(!sb) return noDb();
  const {data:{session}}=await sb.auth.getSession();
  if(!session) return loginView();
  const {data:adm}=await sb.from('admins').select('user_id').eq('user_id',session.user.id).maybeSingle();
  if(!adm){ await sb.auth.signOut(); return loginView(t('a_not_admin')); }
  dashboard();
}

function loginView(msg){
  app.innerHTML=`<div class="page-hd"><div class="wrap"><h1>${t('a_title')}</h1></div></div>
  <section class="content"><div class="wrap" style="max-width:460px">
    <form class="f" id="loginForm">
      ${fld(t('a_email'),'<input type="email" name="email" required>')}
      ${fld(t('a_password'),'<input type="password" name="password" required>')}
      <button class="btn btn-gold" type="submit">${t('a_login')}</button>
      <p class="note" id="lmsg">${esc(msg||'')}</p>
    </form></div></section>`;
  document.getElementById('loginForm').addEventListener('submit',async e=>{
    e.preventDefault(); const f=e.target;
    const {error}=await sb.auth.signInWithPassword({email:f.email.value,password:f.password.value});
    if(error){ document.getElementById('lmsg').textContent=error.message; return; }
    pageAdmin();
  });
}

let S=[],C=[],U=[];
async function dashboard(editId){
  const [a,b,c]=await Promise.all([
    sb.from('scholarships').select('*, universities(name)').order('created_at',{ascending:false}),
    sb.from('countries').select('*').order('sort_order'),
    sb.from('universities').select('*').order('created_at')
  ]);
  [a,b,c].forEach(r=>{ if(r.error) throw r.error; });
  S=a.data; C=b.data; U=c.data;
  render(editId?S.find(x=>x.id===editId):null);
}

function scholarshipForm(s){
  s=s||{}; const v=k=>esc(s[k]??'');
  const countryOpts=C.map(c=>[c.code,`${c.flag||''} ${ml(c.name)}`]);
  const uniOpts=[['','—'],...U.map(u=>[u.id,`${ml(u.name)} (${u.country_code})`])];
  const none=[['','—']];
  return `<form class="f" id="sForm">
    <input type="hidden" name="id" value="${v('id')}">
    <div class="fgrid2">
      ${fld(t('f_slug'),`<input name="slug" value="${v('slug')}" placeholder="auto">`)}
      ${fld(t('f_country'),`<select name="country" required>${opt(countryOpts,s.country_code)}</select>`)}
      ${fld(t('f_university'),`<select name="university">${opt(uniOpts,s.university_id)}</select>`)}
      ${fld(t('f_degree'),`<select name="degree">${opt(none.concat(DEGREES.map(x=>[x,t('deg_'+x)])),s.degree_level)}</select>`)}
      ${fld(t('f_subject'),`<input name="subject" value="${v('subject')}">`)}
      ${fld(t('f_funding'),`<select name="funding">${opt(none.concat(FUNDING.map(x=>[x,t('fund_'+x)])),s.funding_type)}</select>`)}
      ${fld(t('f_age'),`<input name="age" type="number" value="${v('age_limit')}">`)}
      ${fld(t('f_ielts'),`<select name="ielts">${opt([['required',t('v_required')],['not_required',t('v_not_required')],['unknown',t('v_unknown')]],s.ielts||'unknown')}</select>`)}
      ${fld(t('f_toefl'),`<select name="toefl">${opt([['required',t('v_required')],['not_required',t('v_not_required')],['unknown',t('v_unknown')]],s.toefl||'unknown')}</select>`)}
      ${fld(t('f_without'),`<select name="without">${opt([['available',t('v_waiver')],['not_available',t('v_not_available')],['unknown',t('v_unknown')]],s.without_ielts||'unknown')}</select>`)}
      ${fld(t('f_open'),`<input name="open" type="date" value="${v('open_date')}">`)}
      ${fld(t('f_deadline'),`<input name="deadline" type="date" value="${v('deadline')}">`)}
      ${fld(t('f_next'),`<input name="next" value="${v('next_period')}">`)}
      ${fld(t('f_status'),`<select name="status">${opt(STATUSES.map(x=>[x,t('s_'+x)]),s.status||'verification_required')}</select>`)}
      ${fld(t('f_bd'),`<select name="bd">${opt([['yes',t('yes')],['no',t('no')],['unknown',t('unknown')]],s.bd_eligible||'unknown')}</select>`)}
    </div>
    <div class="fgrid2" style="margin-top:12px">
      ${fld(t('f_source'),`<input name="source" type="url" value="${v('source_url')}">`)}
      ${fld(t('f_info_url'),`<input name="info_url" type="url" value="${v('info_url')}">`)}
      ${fld(t('f_apply_url'),`<input name="apply_url" type="url" value="${v('apply_url')}">`)}
    </div>
    ${fld(t('a_info_json'),`<textarea name="info" rows="10" placeholder='{"title":{"bn":"","en":"","ar":""},"description":{"bn":"","en":"","ar":""}}'>${esc(s.info?JSON.stringify(s.info,null,2):'')}</textarea>`)}
    <p class="lead" style="font-size:.85rem">${t('a_json_help')}</p>
    ${fld(t('f_notes'),`<textarea name="notes" rows="2">${v('admin_notes')}</textarea>`)}
    <div class="btns">
      <label class="check"><input type="checkbox" name="verified" ${s.verified?'checked':''}> ${t('f_verified')}</label>
      <label class="check"><input type="checkbox" name="published" ${s.published?'checked':''}> ${t('f_published')}</label>
    </div>
    <div class="btns"><button class="btn btn-gold" type="submit">${t('a_save')}</button><button class="btn btn-line" type="button" id="sNew">${t('a_new')}</button></div>
  </form>`;
}

function render(editing){
  const rows=S.map(s=>{
    const st=computeStatus(s), title=ml(s.info&&s.info.title)||s.slug;
    return `<tr>
      <td>${esc(title)}<br><small>${esc(s.slug)}</small></td>
      <td>${esc(s.country_code)}</td>
      <td>${esc(s.universities&&s.universities.name?ml(s.universities.name):'')}</td>
      <td>${esc(s.deadline||'-')}</td>
      <td>${badge(st)}</td>
      <td>${s.verified?'✔':'✘'} / ${s.published?'✔':'✘'}</td>
      <td>
        <button class="adm-btn" data-act="edit" data-id="${s.id}">${t('a_edit')}</button>
        <button class="adm-btn" data-act="verify" data-id="${s.id}" data-val="${!s.verified}">${s.verified?t('a_unverify'):t('a_verify')}</button>
        <button class="adm-btn" data-act="publish" data-id="${s.id}" data-val="${!s.published}">${s.published?t('a_unpublish'):t('a_publish')}</button>
        <button class="adm-btn" data-act="delete" data-id="${s.id}">${t('a_delete')}</button>
      </td></tr>`;
  }).join('');
  const countryForm=`<form class="f" id="cForm">
    ${fld(t('a_code'),'<input name="code" required>')}
    ${fld(t('a_flag'),'<input name="flag">')}
    ${fld(t('a_name_en'),'<input name="en" required>')}
    ${fld(t('a_name_bn'),'<input name="bn">')}
    ${fld(t('a_name_ar'),'<input name="ar">')}
    <button class="btn btn-gold" type="submit">${t('a_add')}</button></form>`;
  const uniForm=`<form class="f" id="uForm">
    ${fld(t('f_country'),`<select name="country">${opt(C.map(c=>[c.code,ml(c.name)]))}</select>`)}
    ${fld(t('a_name_en'),'<input name="en" required>')}
    ${fld(t('a_name_bn'),'<input name="bn">')}
    ${fld(t('a_name_ar'),'<input name="ar">')}
    ${fld(t('a_website'),'<input name="website" type="url">')}
    ${fld(t('a_logo'),'<input name="logo" type="url">')}
    <button class="btn btn-gold" type="submit">${t('a_add')}</button></form>`;

  app.innerHTML=`
  <div class="page-hd"><div class="wrap"><h1>${t('a_title')}</h1></div></div>
  <section class="content"><div class="wrap">
    <div class="btns"><button class="adm-btn" id="logout">${t('a_logout')}</button></div>
    <div class="card gold" style="margin:18px 0"><h2>${t('a_form')}</h2>${scholarshipForm(editing)}</div>
    <div class="card" style="margin:18px 0;overflow:auto"><h2>${t('a_list')}</h2>
      <table class="adm"><thead><tr><th>${t('f_slug')}</th><th>${t('f_country')}</th><th>${t('f_university')}</th><th>${t('f_deadline')}</th><th>${t('a_status_col')}</th><th>${t('f_verified')} / ${t('f_published')}</th><th>${t('a_actions')}</th></tr></thead><tbody>${rows}</tbody></table>
    </div>
    <div class="adm-grid">
      <div class="card"><h2>${t('a_countries')}</h2>${countryForm}</div>
      <div class="card"><h2>${t('a_unis')}</h2>${uniForm}</div>
    </div>
    <div class="card" style="margin-top:18px"><h2>${t('a_export')} · ${t('a_import')}</h2>
      <div class="btns"><button class="btn btn-line" id="exportBtn">${t('a_export')}</button></div>
      <p class="lead" style="font-size:.88rem">${t('a_csv_hint')}</p>
      <textarea id="csvIn" rows="6" style="width:100%"></textarea>
      <div class="btns"><button class="btn btn-gold" id="importBtn">${t('a_import_btn')}</button></div>
    </div>
  </div></section>`;
  bind();
}

function bind(){
  document.getElementById('logout').onclick=async()=>{ await sb.auth.signOut(); loginView(); };
  document.getElementById('sNew').onclick=()=>dashboard();
  document.getElementById('sForm').addEventListener('submit',async e=>{
    e.preventDefault(); const f=e.target; const g=n=>f.elements[n].value.trim();
    let info={}; try{ info=g('info')?JSON.parse(g('info')):{}; }catch(err){ return alert(t('a_error')+': '+err.message); }
    const verified=f.elements.verified.checked, published=f.elements.published.checked;
    if(published&&!verified) return alert(t('a_need_verify'));
    const slug=g('slug')||SLUG((info.title&&(info.title.en||info.title.bn))||'scholarship')+'-'+Date.now().toString(36).slice(-4);
    const payload={slug,country_code:g('country'),university_id:g('university')||null,degree_level:g('degree')||null,subject:g('subject')||null,funding_type:g('funding')||null,age_limit:g('age')?parseInt(g('age'),10):null,ielts:g('ielts')||'unknown',toefl:g('toefl')||'unknown',without_ielts:g('without')||'unknown',open_date:g('open')||null,deadline:g('deadline')||null,next_period:g('next')||null,status:g('status')||'verification_required',bd_eligible:g('bd')||'unknown',source_url:g('source')||null,info_url:g('info_url')||null,apply_url:g('apply_url')||null,admin_notes:g('notes')||null,info,verified,verified_at:verified?today():null,published};
    const id=g('id');
    const res=id?await sb.from('scholarships').update(payload).eq('id',id):await sb.from('scholarships').insert(payload);
    if(res.error) return alert(res.error.message);
    alert(t('a_saved')); dashboard();
  });
  document.getElementById('cForm').addEventListener('submit',async e=>{
    e.preventDefault(); const f=e.target;
    const name={}; ['en','bn','ar'].forEach(k=>{ if(f.elements[k].value.trim()) name[k]=f.elements[k].value.trim(); });
    const code=f.elements.code.value.trim().toLowerCase();
    const {error}=await sb.from('countries').insert({code,flag:f.elements.flag.value.trim()||null,name,sort_order:C.length+1,active:true});
    if(error) return alert(error.message); alert(t('a_saved')); dashboard();
  });
  document.getElementById('uForm').addEventListener('submit',async e=>{
    e.preventDefault(); const f=e.target;
    const name={}; ['en','bn','ar'].forEach(k=>{ if(f.elements[k].value.trim()) name[k]=f.elements[k].value.trim(); });
    const {error}=await sb.from('universities').insert({country_code:f.elements.country.value,name,website:f.elements.website.value.trim()||null,logo_url:f.elements.logo.value.trim()||null,active:true});
    if(error) return alert(error.message); alert(t('a_saved')); dashboard();
  });
  document.getElementById('exportBtn').onclick=()=>{
    const cols=['slug','country_code','university_name','degree_level','subject','funding_type','age_limit','ielts','toefl','without_ielts','open_date','deadline','next_period','bd_eligible','source_url','info_url','apply_url','admin_notes','info_json','verified','published','status'];
    const q=s=>{const x=s==null?'':String(s); return /[",\n]/.test(x)?'"'+x.replace(/"/g,'""')+'"':x;};
    const lines=[cols.join(',')].concat(S.map(r=>cols.map(c=>q({...r,university_name:r.universities&&r.universities.name?r.universities.name.en||'':'',info_json:JSON.stringify(r.info||{})}[c])).join(',')));
    const blob=new Blob(['\ufeff'+lines.join('\n')],{type:'text/csv;charset=utf-8'});
    const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='scholarships.csv'; a.click();
  };
  document.getElementById('importBtn').onclick=async()=>{
    const rows=parseCSV(document.getElementById('csvIn').value);
    if(rows.length<2) return;
    const head=rows[0].map(h=>h.trim());
    const items=rows.slice(1).map(r=>Object.fromEntries(head.map((h,i)=>[h,(r[i]||'').trim()])));
    const uniByName=new Map(U.map(u=>[(u.name.en||'').toLowerCase(),u.id]));
    const recs=items.map(o=>{
      let info={}; try{ info=o.info_json?JSON.parse(o.info_json):{title:{en:o.slug}}; }catch(e){ info={title:{en:o.slug}}; }
      return {slug:o.slug||SLUG(o.slug_title||'scholarship')+'-'+Date.now().toString(36).slice(-4),country_code:o.country_code,university_id:uniByName.get((o.university_name||'').toLowerCase())||null,degree_level:o.degree_level||null,subject:o.subject||null,funding_type:o.funding_type||null,age_limit:o.age_limit?parseInt(o.age_limit,10):null,ielts:o.ielts||'unknown',toefl:o.toefl||'unknown',without_ielts:o.without_ielts||'unknown',open_date:o.open_date||null,deadline:o.deadline||null,next_period:o.next_period||null,bd_eligible:o.bd_eligible||'unknown',source_url:o.source_url||null,info_url:o.info_url||null,apply_url:o.apply_url||null,admin_notes:o.admin_notes||null,info,verified:false,published:false,status:'verification_required'};
    });
    let ok=0; for(let i=0;i<recs.length;i+=50){ const {error}=await sb.from('scholarships').insert(recs.slice(i,i+50)); if(error) return alert(error.message); ok+=Math.min(50,recs.length-i); }
    alert(ok+' '+t('a_import_done')); dashboard();
  };
}

(async function(){
  try{
    if(page==='intl') await pageIntl();
    else if(page==='detail') await pageDetail();
    else if(page==='admin') await pageAdmin();
  }catch(e){ fail(e); }
})();
})();
