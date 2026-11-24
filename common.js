(function(){
  const LANGS=['bn','en','ar'];
  let L=localStorage.getItem('sec_lang'); if(!LANGS.includes(L)) L='bn';
  document.documentElement.lang=L;
  document.documentElement.dir=L==='ar'?'rtl':'ltr';
  if(L==='ar'){ document.head.insertAdjacentHTML('beforeend','<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;600;700&family=Noto+Naskh+Arabic:wght@600;700&display=swap" rel="stylesheet">'); }

  const DICT={
  "আন্তর্জাতিক স্কলারশিপ খুঁজুন":["Find International Scholarships","ابحث عن المنح الدولية"],
  "দেশ, বিশ্ববিদ্যালয়, যোগ্যতা ও যাচাইকৃত স্কলারশিপ দেখুন।":["Browse countries, universities, eligibility and verified scholarships.","تصفح الدول والجامعات والشروط والمنح الموثقة."],
  "খুলুন →":["Open →","افتح ←"],
  "অ্যাডমিন লগইন":["Admin Login","تسجيل دخول المشرف"],
  "শুধু অনুমোদিত ব্যবস্থাপক এখানে লগইন করবেন।":["Authorised administrators only.","للمشرفين المعتمدين فقط."],
  "লগইন →":["Log in →","تسجيل الدخول ←"],
  "আন্তর্জাতিক স্কলারশিপ":["International Scholarships","المنح الدولية"],
  "হোম":["Home","الرئيسية"],"আমাদের সম্পর্কে":["About Us","من نحن"],"সেবাসমূহ":["Services","خدماتنا"],"স্কলারশিপ":["Scholarships","المنح الدراسية"],
  "গন্তব্য দেশ":["Destinations","وجهات الدراسة"],"প্রশ্নোত্তর":["FAQ","الأسئلة الشائعة"],"যোগাযোগ":["Contact","تواصل معنا"],
  "স্টুডেন্ট পোর্টাল (শীঘ্রই)":["Student Portal (Coming Soon)","بوابة الطالب (قريبا)"],"এখনই আবেদন করুন":["Apply Now","قدّم الآن"],
  "চলমান স্কলারশিপ সমূহ:":["Ongoing Scholarships:","المنح الجارية:"],"নতুন স্কলারশিপ নোটিশ শীঘ্রই আসছে":["New scholarship notices coming soon","إعلانات المنح الجديدة قريبا"],
  "এখনো কোনো নোটিশ যুক্ত হয়নি।":["No notices have been added yet.","لم تُضف إعلانات بعد."],"বিস্তারিত →":["View Details →","التفاصيل ←"],
  "শেষ তারিখ:":["Deadline:","آخر موعد:"],"তারিখ":["Date","التاريخ"],"বিশ্ববিদ্যালয়":["University","الجامعة"],"দেশ":["Country","الدولة"],
  "শেষ তারিখ":["Deadline","آخر موعد"],"PDF দেখুন":["View PDF","عرض PDF"],"PDF ডাউনলোড করুন":["Download PDF","تحميل PDF"],
  "সর্বশেষ ও সঠিক তথ্যের জন্য সংশ্লিষ্ট বিশ্ববিদ্যালয়ের অফিসিয়াল ঘোষণা যাচাই করুন।":["For the latest accurate information, check the university's official announcement.","للحصول على أحدث المعلومات الدقيقة، راجع الإعلان الرسمي للجامعة."],
  "এই নোটিশটি পাওয়া যায়নি।":["This notice was not found.","لم يتم العثور على هذا الإعلان."],
  "কওমী, আলিয়া ও সাধারণ শিক্ষার্থীদের জন্য আন্তর্জাতিক উচ্চশিক্ষা পরামর্শ।":["International higher education guidance for Qawmi, Alia and general students.","استشارات التعليم العالي الدولي لطلاب القومي والعالية والتعليم العام."],
  "কিশোরগঞ্জ, ঢাকা, বাংলাদেশ":["Kishoreganj, Dhaka, Bangladesh","كيشوركانج، دكا، بنغلاديش"],"দ্রুত লিংক":["Quick Links","روابط سريعة"],
  "ফোন / WhatsApp:":["Phone / WhatsApp:","الهاتف / واتساب:"],"ইমেইল:":["Email:","البريد الإلكتروني:"],
  "স্কলারশিপ এডুকেয়ার সেন্টার":["Scholarship Educare Centre","مركز سكولرشيب إديوكير"],
  "স্কলারশিপ এডুকেয়ার সেন্টার। সব অধিকার সংরক্ষিত।":["Scholarship Educare Centre. All rights reserved.","مركز سكولرشيب إديوكير. جميع الحقوق محفوظة."],
  "WhatsApp":["WhatsApp","واتساب"],"ফেসবুক":["Facebook","فيسبوك"],"জিমেইল":["Gmail","جيميل"],"ফোন: 01322-301754":["Phone: 01322-301754","الهاتف: 01322-301754"],
  "উচ্চশিক্ষার বিশ্বস্ত সহযাত্রী":["Trusted Partner in Higher Education","شريكك الموثوق في التعليم العالي"],
  "আন্তর্জাতিক উচ্চশিক্ষা পরামর্শ":["International Higher Education Consultancy","استشارات التعليم العالي الدولي"],
  "আপনার আন্তর্জাতিক শিক্ষাযাত্রা এখান থেকেই শুরু।":["Your global education journey starts here.","رحلتك التعليمية العالمية تبدأ من هنا."],
  "স্বপ্ন থেকে সাফল্যে, উচ্চশিক্ষার বিশ্বস্ত সহযাত্রী।":["From dream to success, your trusted partner in higher education.","من الحلم إلى النجاح، رفيقك الموثوق في التعليم العالي."],
  "স্কলারশিপ তথ্য, বিশ্ববিদ্যালয় নির্বাচন, আবেদন প্রস্তুতি এবং প্রয়োজনীয় ডকুমেন্টেশন সেবায় আমরা আপনার পাশে আছি।":["We support you with scholarship information, university selection, application preparation and essential documents.","نساندك بمعلومات المنح واختيار الجامعة والتحضير للتقديم والمستندات الضرورية."],
  "স্কলারশিপ দেখুন":["Explore Scholarships","استكشف المنح"],"আমাদের সেবাসমূহ":["Our Services","خدماتنا"],
  "📲 অ্যাপ ডাউনলোড করুন":["📲 Download the App","📲 حمّل التطبيق"],
  "চলমান স্কলারশিপ সমূহ":["Ongoing Scholarships","المنح الجارية"],
  "শিরোনামে ক্লিক করে বিস্তারিত নোটিশ ও PDF দেখুন।":["Click a title to see the full notice and PDF.","اضغط على العنوان لعرض الإعلان الكامل وملف PDF."],
  "সব স্কলারশিপ দেখুন":["View All Scholarships","عرض جميع المنح"],"আমাদের পরিচয়":["About Us","تعرّف علينا"],"সবকিছু এক জায়গায়":["Everything in one place","كل شيء في مكان واحد"],
  "১০টি মূল সেবার বিস্তারিত তথ্য।":["Details of our 10 core services.","تفاصيل خدماتنا الأساسية العشر."],
  "স্কলারশিপ নির্দেশনা":["Scholarship Guidance","إرشاد المنح"],"যোগ্যতা, শেষ তারিখ ও বিস্তারিত নোটিশ।":["Eligibility, deadlines and full notices.","الأهلية والمواعيد النهائية والإعلانات الكاملة."],
  "১৪টি দেশের উচ্চশিক্ষার তথ্য।":["Higher education information for 14 countries.","معلومات التعليم العالي عن 14 دولة."],
  "সাধারণ প্রশ্নের উত্তর।":["Answers to common questions.","إجابات الأسئلة الشائعة."],
  "ফোন, WhatsApp, ইমেইল বা আবেদন ফর্ম।":["Phone, WhatsApp, email or application form.","الهاتف أو واتساب أو البريد أو نموذج التقديم."],
  "সরাসরি কথা বলুন":["Talk to us directly","تحدث معنا مباشرة"],
  "ফোন, WhatsApp, অথবা ইমেইলে যেকোনো সময় যোগাযোগ করুন।":["Reach us any time by phone, WhatsApp or email.","تواصل معنا في أي وقت عبر الهاتف أو واتساب أو البريد."],
  "আপনার পরিকল্পনা, আমাদের নির্দেশনা":["Your plan, our guidance","خطتك، وإرشادنا"],
  "স্কলারশিপ এডুকেয়ার সেন্টার কিশোরগঞ্জ, ঢাকা থেকে কওমী মাদরাসা, আলিয়া মাদরাসা ও সাধারণ শিক্ষার্থীদের বিদেশে উচ্চশিক্ষার পথে নির্দেশনা দেয়। আমরা প্রতিটি শিক্ষার্থীর প্রোফাইল বুঝে সঠিক পরামর্শ দিই।":["Scholarship Educare Centre, based in Kishoreganj, Dhaka, guides Qawmi Madrasa, Alia Madrasa and general students toward higher education abroad. We advise each student according to their profile.","مركز سكولرشيب إديوكير، ومقره كيشوركانج بدكا، يرشد طلاب المدارس القومية والعالية والتعليم العام نحو التعليم العالي بالخارج. نقدم لكل طالب نصيحة تناسب ملفه."],
  "কারা আবেদন করতে পারেন":["Who Can Apply","من يمكنه التقديم"],"এইচএসসি উত্তীর্ণ":["HSC Graduates","خريجو HSC"],"আলিম উত্তীর্ণ":["Alim Graduates","خريجو الإلماء"],
  "ফাজিল উত্তীর্ণ":["Fazil Graduates","خريجو الفضيلة"],"অনার্স শিক্ষার্থী":["Honours Students","طلاب البكالوريوس"],"মাস্টার্স আবেদনকারী":["Master's Applicants","المتقدمون للماجستير"],
  "পিএইচডি আবেদনকারী":["PhD Applicants","المتقدمون للدكتوراه"],"কীভাবে কাজ করি":["How We Work","كيف نعمل"],
  "যোগাযোগ করুন":["Contact Us","تواصل معنا"],"প্রোফাইল মূল্যায়ন":["Profile Assessment","تقييم الملف"],"সেবা নির্বাচন":["Service Selection","اختيار الخدمة"],
  "ডকুমেন্ট প্রস্তুতি":["Document Preparation","تحضير المستندات"],"আবেদনে সহায়তা":["Application Support","دعم التقديم"],"ফলো-আপ সহায়তা":["Follow-up Support","المتابعة والدعم"],
  "আমরা নির্দেশনা ও প্রস্তুতি দিই। সরকারি সনদ, পাসপোর্ট, মেডিকেল সনদ বা ভর্তি ও স্কলারশিপের সিদ্ধান্ত আমরা নিজে প্রদান করি না।":["We provide guidance and preparation. We do not issue government certificates, passports, medical certificates, or admission and scholarship decisions.","نقدم الإرشاد والتحضير. لا نصدر شهادات حكومية أو جوازات سفر أو شهادات طبية، ولا قرارات القبول أو المنح."],
  "আমাদের ১০টি মূল সেবা":["Our 10 Core Services","خدماتنا الأساسية العشر"],
  "আমরা নির্দেশনা, প্রস্তুতি ও সংশ্লিষ্ট কর্তৃপক্ষ বা সেবাদাতার সঙ্গে সমন্বয় দিই। সরকারি সনদ, পাসপোর্ট, মেডিকেল সনদ বা ভর্তির সিদ্ধান্ত আমরা নিজে প্রদান করি না।":["We provide guidance, preparation and coordination with authorities or providers. We do not issue government certificates, passports, medical certificates or admission decisions.","نقدم الإرشاد والتحضير والتنسيق مع الجهات المختصة أو مزودي الخدمة. لا نصدر شهادات حكومية أو جوازات سفر أو شهادات طبية أو قرارات قبول."],
  "স্কলারশিপ খোঁজা, দেশভিত্তিক তথ্য, যোগ্যতা ও শেষ তারিখ সম্পর্কে নির্দেশনা।":["Scholarship search, country information, eligibility and deadline guidance.","البحث عن المنح ومعلومات الدول والأهلية والمواعيد النهائية."],
  "বিশ্ববিদ্যালয় ও প্রোগ্রাম নির্বাচন":["University & Program Selection","اختيار الجامعة والبرنامج"],
  "যোগ্যতা অনুযায়ী বিশ্ববিদ্যালয়, প্রোগ্রাম ও ভর্তির শর্ত।":["Universities, programs and admission requirements matched to your profile.","الجامعات والبرامج وشروط القبول المناسبة لملفك."],
  "ডকুমেন্ট অনুবাদ ও নোটারি":["Document Translation & Notary","ترجمة المستندات والتوثيق"],
  "আরবি, ইংরেজি ও বাংলা অনুবাদ এবং নোটারি সমন্বয়।":["Arabic, English and Bengali translation and notary coordination.","ترجمة بين العربية والإنجليزية والبنغالية وتنسيق التوثيق."],
  "সনদ প্রত্যয়ন ও ই-অ্যাপোস্টিল":["Certificate Attestation & E-Apostille","تصديق الشهادات والأبوستيل الإلكتروني"],
  "সনদ প্রত্যয়ন নির্দেশনা, মন্ত্রণালয় সমন্বয় ও যাচাই সহায়তা।":["Certificate attestation guidance, ministry coordination and verification support.","إرشاد تصديق الشهادات وتنسيق الوزارة ودعم التحقق."],
  "LOI / মোটিভেশন লেটার / SOP":["LOI / Motivation Letter / SOP","خطاب النية / خطاب الدافعية / SOP"],
  "Letter of Intent, Motivation Letter, Statement of Purpose ও Study Plan লেখায় সহায়তা।":["Help writing a Letter of Intent, Motivation Letter, Statement of Purpose and Study Plan.","المساعدة في كتابة خطاب النية وخطاب الدافعية وبيان الغرض وخطة الدراسة."],
  "স্কিল সার্টিফিকেট সহায়তা":["Skill Certificate Support","دعم شهادات المهارات"],"স্কিল সার্টিফিকেট সংগ্রহ ও প্রস্তুতিতে নির্দেশনা।":["Guidance on collecting and preparing skill certificates.","إرشاد لجمع شهادات المهارات وتحضيرها."],
  "মেডিকেল সার্টিফিকেট সহায়তা":["Medical Certificate Support","دعم الشهادة الطبية"],"মেডিকেল ডকুমেন্টেশন নির্দেশনা ও প্রস্তুতি সহায়তা।":["Medical documentation guidance and preparation support.","إرشاد التوثيق الطبي ودعم التحضير."],
  "ইন্টারভিউ প্রস্তুতি":["Interview Preparation","التحضير للمقابلات"],"স্কলারশিপ ও ভর্তি ইন্টারভিউয়ের প্রশ্ন ও মক ইন্টারভিউ।":["Scholarship and admission interview questions and mock interviews.","أسئلة مقابلات المنح والقبول ومقابلات تجريبية."],
  "পাসপোর্ট ও ডকুমেন্ট প্রস্তুতি":["Passport & Document Preparation","تحضير الجواز والمستندات"],"পাসপোর্ট আবেদন নির্দেশনা, চেকলিস্ট ও ফাইল গোছানো।":["Passport application guidance, checklists and file organisation.","إرشاد التقديم للجواز وقوائم المستندات وتنظيم الملف."],
  "অনলাইন আবেদন সহায়তা":["Online Application Support","دعم التقديم الإلكتروني"],"অনলাইন ফর্ম, ডকুমেন্ট আপলোড, রিভিউ ও জমা দেওয়ায় সহায়তা।":["Help with online forms, document upload, review and submission.","المساعدة في النماذج الإلكترونية ورفع المستندات والمراجعة والإرسال."],
  "উচ্চশিক্ষার গন্তব্যসমূহ":["Study Destinations","وجهات الدراسة العليا"],"প্রতিটি দেশের বিস্তারিত তথ্য পর্যায়ক্রমে যুক্ত হবে।":["Detailed information for each country will be added gradually.","ستُضاف تفاصيل كل دولة تدريجياً."],
  "সৌদি আরব":["Saudi Arabia","السعودية"],"কাতার":["Qatar","قطر"],"কুয়েত":["Kuwait","الكويت"],"সংযুক্ত আরব আমিরাত":["United Arab Emirates","الإمارات العربية المتحدة"],
  "বাহরাইন":["Bahrain","البحرين"],"তুরস্ক":["Turkey","تركيا"],"জার্মানি":["Germany","ألمانيا"],"ইতালি":["Italy","إيطاليا"],"হাঙ্গেরি":["Hungary","المجر"],
  "মালয়েশিয়া":["Malaysia","ماليزيا"],"ইন্দোনেশিয়া":["Indonesia","إندونيسيا"],"পাকিস্তান":["Pakistan","باكستان"],"জর্ডান":["Jordan","الأردن"],"মিশর":["Egypt","مصر"],
  "বিস্তারিত শীঘ্রই":["Details coming soon","التفاصيل قريبا"],
  "এখানের তথ্য সংশ্লিষ্ট বিশ্ববিদ্যালয়ের অফিসিয়াল ঘোষণা অনুযায়ী যাচাই করুন।":["Please verify the information against the university's official announcement.","يرجى التحقق من المعلومات عبر الإعلان الرسمي للجامعة."],
  "সাধারণ প্রশ্ন":["Frequently Asked Questions","الأسئلة الشائعة"],
  "আপনারা কি সরকারি সনদ দেন?":["Do you issue government certificates?","هل تصدرون شهادات حكومية؟"],
  "না। আমরা সনদ প্রস্তুতি, যাচাই নির্দেশনা ও সংশ্লিষ্ট কর্তৃপক্ষের সঙ্গে সমন্বয়ে সহায়তা করি।":["No. We help with preparation, verification guidance and coordination with the relevant authorities.","لا. نساعد في التحضير وإرشاد التحقق والتنسيق مع الجهات المختصة."],
  "ভর্তি বা স্কলারশিপ নিশ্চিত করতে পারবেন?":["Can you guarantee admission or a scholarship?","هل يمكنكم ضمان القبول أو المنحة؟"],
  "না। ভর্তি ও স্কলারশিপের সিদ্ধান্ত সংশ্লিষ্ট বিশ্ববিদ্যালয় বা প্রতিষ্ঠানের।":["No. Admission and scholarship decisions belong to the university or institution.","لا. قرارات القبول والمنح تعود للجامعة أو المؤسسة المعنية."],
  "কোন শিক্ষাগত যোগ্যতায় সেবা নেওয়া যায়?":["Who can use your services?","من يمكنه الاستفادة من خدماتكم؟"],
  "এইচএসসি, আলিম, ফাজিল, অনার্স, মাস্টার্স ও পিএইচডি সবার জন্য। যোগ্যতা প্রোফাইল দেখে জানানো হয়।":["HSC, Alim, Fazil, Honours, Master's and PhD applicants. Eligibility is confirmed after reviewing your profile.","خريجو HSC وAlim وFazil وHonours والماجستير والدكتوراه. تُحدد الأهلية بعد مراجعة ملفك."],
  "সেবার খরচ কত?":["What do your services cost?","كم تكلفة الخدمات؟"],
  "সেবার ধরন অনুযায়ী ভিন্ন। যোগাযোগ করে সঠিক তথ্য নিন।":["Fees depend on the service. Contact us for accurate information.","تختلف الرسوم حسب نوع الخدمة. تواصل معنا للحصول على معلومات دقيقة."],
  "সেবার জন্য আবেদন করুন":["Apply for a Service","قدّم طلب خدمة"],"ফর্ম পূরণ করে WhatsApp বা ইমেইলে পাঠান।":["Fill in the form and send it by WhatsApp or email.","املأ النموذج وأرسله عبر واتساب أو البريد."],
  "পূর্ণ নাম *":["Full Name *","الاسم الكامل *"],"ইমেইল *":["Email *","البريد الإلكتروني *"],"WhatsApp নম্বর *":["WhatsApp Number *","رقم واتساب *"],
  "বর্তমান দেশ *":["Current Country *","الدولة الحالية *"],"শিক্ষাগত যোগ্যতা *":["Education *","المؤهل الدراسي *"],"প্রয়োজনীয় সেবা *":["Required Service *","الخدمة المطلوبة *"],
  "বার্তা":["Message","الرسالة"],"নির্বাচন করুন":["Select","اختر"],"এইচএসসি":["HSC","HSC"],"আলিম":["Alim","Alim"],"ফাজিল":["Fazil","Fazil"],
  "অনার্স":["Honours","البكالوريوس"],"মাস্টার্স":["Master's","الماجستير"],"পিএইচডি":["PhD","الدكتوراه"],
  "সেবা-সংক্রান্ত যোগাযোগের জন্য আমার তথ্য ব্যবহারে সম্মতি দিচ্ছি।":["I agree that my details may be used to contact me about my service request.","أوافق على استخدام بياناتي للتواصل معي بشأن طلب الخدمة."],
  "WhatsApp-এ পাঠান":["Send via WhatsApp","أرسل عبر واتساب"],"ইমেইলে পাঠান":["Send by Email","أرسل بالبريد الإلكتروني"],
  "ফর্মের তথ্য সার্ভারে সংরক্ষিত হয় না। পাঠানোর পর বার্তাটি WhatsApp বা ইমেইলে যাবে।":["Form details are not stored on a server. After sending, the message goes to WhatsApp or email.","لا تُحفظ بيانات النموذج على الخادم. بعد الإرسال تذهب الرسالة إلى واتساب أو البريد."],
  "সরাসরি যোগাযোগ":["Direct Contact","تواصل مباشر"],"ঠিকানা:":["Address:","العنوان:"],
  "নোটিশ":["Notice","الإعلان"],"স্কলারশিপ নোটিশ":["Scholarship Notice","إعلان المنحة"],
  "← সব স্কলারশিপে ফিরে যান":["← Back to all scholarships","عودة إلى جميع المنح →"],
  "আমাদের সম্পর্কে ":["About Us","من نحن"]
  };

  const DIG_BN='০১২৩৪৫৬৭৮৯';
  const digits=s=>{ if(L==='bn') return s; const map=L==='ar'?'٠١٢٣٤٥٦٧٨٩':'0123456789'; return s.replace(/[০-৯]/g,d=>map[DIG_BN.indexOf(d)]); };
  const tr=s=>{ if(L==='bn') return s; const v=DICT[s]; return v?v[L==='en'?0:1]:s; };
  const pick=(n,f)=>(L!=='bn'&&n[f+'_'+L])||n[f]||'';
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const ALERT={bn:'অ্যান্ড্রয়েড: ব্রাউজারের মেনু (⋮) থেকে "Install app" বা "Add to Home screen" চাপুন।\nআইফোন: Safari-তে শেয়ার বাটন থেকে "Add to Home Screen" চাপুন।',
    en:'Android: tap the browser menu (⋮) and choose "Install app" or "Add to Home screen".\niPhone: in Safari, tap the Share button and choose "Add to Home Screen".',
    ar:'أندرويد: اضغط على قائمة المتصفح (⋮) واختر "Install app" أو "Add to Home screen".\nآيفون: في Safari اضغط زر المشاركة واختر "Add to Home Screen".'};

  const WA='https://wa.me/8801322301754', FB='https://www.facebook.com/share/1CM7x76vGe/', MAIL='mailto:sec.bd2024@gmail.com', TEL='tel:+8801322301754';
  const PAGES=[['index.html','হোম'],['about.html','আমাদের সম্পর্কে'],['services.html','সেবাসমূহ'],['scholarships.html','স্কলারশিপ'],['intl.html','আন্তর্জাতিক স্কলারশিপ'],['destinations.html','গন্তব্য দেশ'],['faq.html','প্রশ্নোত্তর'],['contact.html','যোগাযোগ'],['admin.html','অ্যাডমিন লগইন']];
  const cur=location.pathname.split('/').pop()||'index.html';
  const ICON={
    wa:'<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>',
    fb:'<svg viewBox="0 0 24 24"><path d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4.3V11H7v4h3v7h4v-7h3l.5-4H14V8.5c0-.4.2-.5.5-.5z"/></svg>',
    mail:'<svg viewBox="0 0 24 24"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1 2v.5l8 5 8-5V7H4zm16 2.7-7.4 4.6a1 1 0 0 1-1.2 0L4 9.7V17h16V9.7z"/></svg>',
    tel:'<svg viewBox="0 0 24 24"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.5.6 3.6a1 1 0 0 1-.2 1z"/></svg>'
  };
  const social=()=>`<div class="socials">`+[['wa','WhatsApp',WA],['fb','ফেসবুক',FB],['mail','জিমেইল',MAIL],['tel','ফোন: 01322-301754',TEL]]
    .map(([k,l,h])=>`<a class="sbtn" href="${h}" ${k==='fb'||k==='wa'?'target="_blank" rel="noopener"':''} aria-label="${l}">${ICON[k]}<span>${l}</span></a>`).join('')+`</div>`;

  const navLinks=PAGES.map(([h,l])=>`<li><a href="${h}" class="${h===cur?'active':''}">${l}</a></li>`).join('');
  const langOpts=[['bn','বাংলা'],['en','English'],['ar','العربية']].map(([v,t])=>`<option value="${v}" ${v===L?'selected':''}>${t}</option>`).join('');
  const header=`<header class="site"><div class="wrap hd">
    <a class="brand" href="index.html"><img src="logo-web.jpg" alt="লোগো"><span class="brand-name">স্কলারশিপ এডুকেয়ার সেন্টার</span></a>
    <nav id="mainNav"><ul>${navLinks}<li><span class="soon">স্টুডেন্ট পোর্টাল (শীঘ্রই)</span></li></ul></nav>
    <select class="lang" id="langSel" aria-label="Language">${langOpts}</select>
    <a class="btn btn-gold cta" href="contact.html">এখনই আবেদন করুন</a>
    <button class="menu-btn" id="menuBtn" aria-label="menu">☰</button>
  </div></header>
  <div class="wrap ticker-wrap"><div class="ticker"><span class="tk-label">চলমান স্কলারশিপ সমূহ:</span><div class="tk-wrap"><div class="tk-track" id="tk"></div></div></div></div>`;
  const year=new Date().getFullYear();
  const footer=`<footer class="site"><div class="wrap fgrid">
    <div><h4>স্কলারশিপ এডুকেয়ার সেন্টার</h4><p>কওমী, আলিয়া ও সাধারণ শিক্ষার্থীদের জন্য আন্তর্জাতিক উচ্চশিক্ষা পরামর্শ।<br>কিশোরগঞ্জ, ঢাকা, বাংলাদেশ</p><div data-social></div></div>
    <div><h4>দ্রুত লিংক</h4><p><a href="services.html">সেবাসমূহ</a><br><a href="scholarships.html">স্কলারশিপ</a><br><a href="destinations.html">গন্তব্য দেশ</a><br><a href="faq.html">প্রশ্নোত্তর</a><br><a href="contact.html">যোগাযোগ</a></p></div>
    <div><h4>যোগাযোগ</h4><p>ফোন / WhatsApp: <a href="${TEL}">01322-301754</a><br>ইমেইল: <a href="mailto:sec.bd2024@gmail.com">sec.bd2024@gmail.com</a></p></div>
  </div><div class="wrap copy">© ${year} স্কলারশিপ এডুকেয়ার সেন্টার। সব অধিকার সংরক্ষিত।</div></footer>`;

  document.body.insertAdjacentHTML('afterbegin',header);
  document.body.insertAdjacentHTML('beforeend',footer);
  document.querySelectorAll('[data-social]').forEach(el=>el.innerHTML=social());

  document.getElementById('menuBtn').addEventListener('click',()=>document.getElementById('mainNav').classList.toggle('open'));
  document.getElementById('langSel').addEventListener('change',e=>{ localStorage.setItem('sec_lang',e.target.value); location.reload(); });

  function translateTree(root){
    const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT); const nodes=[];
    while(w.nextNode()) nodes.push(w.currentNode);
    nodes.forEach(n=>{
      const p=n.parentNode; if(!p||p.nodeName==='SCRIPT'||p.nodeName==='STYLE') return;
      const raw=n.nodeValue, k=raw.trim(); if(!k) return;
      const t=digits(tr(k));
      if(t!==k){ const i=raw.indexOf(k); n.nodeValue=raw.slice(0,i)+t+raw.slice(i+k.length); }
    });
  }

  const NOTICES=fetch('notices.json',{cache:'no-store'}).then(r=>r.json()).catch(()=>[]);
  NOTICES.then(list=>{
    if(!Array.isArray(list)) list=[];
    const tk=document.getElementById('tk');
    if(tk){
      const items=list.length
        ? list.map(n=>`<a href="notice.html?id=${encodeURIComponent(n.id)}">${esc(pick(n,'title'))}</a>`).join('')
        : `<a href="scholarships.html">${tr('নতুন স্কলারশিপ নোটিশ শীঘ্রই আসছে')}</a>`;
      const set=items.repeat(4); tk.innerHTML=set+set;
    }
    const box=document.getElementById('noticeList');
    if(box){
      const lim=+box.dataset.limit||list.length;
      box.innerHTML=list.length
        ? list.slice(0,lim).map(n=>`<a class="card gold" href="notice.html?id=${encodeURIComponent(n.id)}"><span class="tag">${esc(n.date)}</span><h3>${esc(pick(n,'title'))}</h3><p>${esc(pick(n,'university'))}${n.country?' · '+esc(pick(n,'country')):''}</p>${n.deadline?`<p><b>${tr('শেষ তারিখ:')}</b> ${esc(pick(n,'deadline'))}</p>`:''}<span class="more">${tr('বিস্তারিত →')}</span></a>`).join('')
        : `<p class="lead">${tr('এখনো কোনো নোটিশ যুক্ত হয়নি।')}</p>`;
    }
    const nbox=document.getElementById('nbox');
    if(nbox){
      const id=new URLSearchParams(location.search).get('id');
      const n=list.find(x=>x.id===id);
      nbox.innerHTML='';
      if(!n){ nbox.innerHTML=`<p>${tr('এই নোটিশটি পাওয়া যায়নি।')}</p>`; }
      else{
        const title=pick(n,'title');
        document.getElementById('nt').textContent=title;
        const h=document.createElement('h2'); h.textContent=title; nbox.appendChild(h);
        const dl=document.createElement('dl'); dl.className='dl';
        [['তারিখ',n.date],['বিশ্ববিদ্যালয়',pick(n,'university')],['দেশ',pick(n,'country')],['শেষ তারিখ',pick(n,'deadline')]].forEach(([k,v])=>{
          if(!v) return; const dt=document.createElement('dt'); dt.textContent=tr(k); const dd=document.createElement('dd'); dd.textContent=v; dl.append(dt,dd);
        });
        nbox.appendChild(dl);
        const sum=pick(n,'summary');
        if(sum){ const s=document.createElement('div'); s.className='summary'; s.textContent=sum; nbox.appendChild(s); }
        if(n.pdf){
          const row=document.createElement('div'); row.className='btns';
          const v=document.createElement('a'); v.className='btn btn-line'; v.href=n.pdf; v.target='_blank'; v.rel='noopener'; v.textContent=tr('PDF দেখুন');
          const d=document.createElement('a'); d.className='btn btn-gold'; d.href=n.pdf; d.setAttribute('download',''); d.textContent=tr('PDF ডাউনলোড করুন');
          row.append(v,d); nbox.appendChild(row);
        }
        const p=document.createElement('p'); p.className='note'; p.textContent=tr('সর্বশেষ ও সঠিক তথ্যের জন্য সংশ্লিষ্ট বিশ্ববিদ্যালয়ের অফিসিয়াল ঘোষণা যাচাই করুন।'); nbox.appendChild(p);
        document.title=title+' | '+tr('স্কলারশিপ এডুকেয়ার সেন্টার');
      }
    }
    // translate all static + generated text
    translateTree(document.body);
    const sel=document.getElementById('langSel'); if(sel) sel.value=L;
    document.title=document.title.split(' | ').map(tr).join(' | ');
  });

  let deferred=null;
  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferred=e;});
  const ib=document.getElementById('installBtn');
  if(ib) ib.addEventListener('click',async()=>{
    if(deferred){ deferred.prompt(); await deferred.userChoice; deferred=null; return; }
    alert(ALERT[L]);
  });
  if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
})();
