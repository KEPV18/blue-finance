// ===== LANGUAGE =====
let LANG = localStorage.getItem('blue_lang') || 'ar';
const TX = {
  en: {
    loginSub: 'Secure access — your data is private',
    username: 'Username', password: 'Password', signIn: 'Sign In',
    loginErr: '✕ Invalid username or password',
    loading: 'Loading...', noPeriods: 'No periods found',
    finance: 'Finance', langBtn: '🇪🇬 العربية',
    tabs: ['Overview', 'Cards & Debt', 'Goals 🎯', 'Vezlo ⚡', 'Transport', 'Transactions', 'Compare 📊', 'Expense ➕'],
    summary: { opening: 'Opening', income: 'Income', expenses: 'Expenses', balance: 'Balance' },
    netCard: 'Net After Obligations',
    netCalc: 'Salary - Fixed - Installments',
    salary: 'Salary', fixed: 'Fixed', inst: 'Installments',
    cards: 'Cards', income: 'Income', fixedEx: 'Fixed Expenses',
    installments: 'Installments', debts: 'Debts', balances: 'Balances',
    noExpenses: 'No expenses yet — tell me what you spent 🐋',
    total: 'Total', paid: 'Paid', pending: 'Pending', allPaid: 'All ✅',
    perMonth: '/mo', left: 'left', months: 'mo',
    iOwe: 'I Owe', noDebts: '✅ No debts',
    paidEarly: 'Early paid',
    metro: { balance: 'Balance', trips: 'Trips', day: 'day', trip: 'trip',
             daily: 'Daily', monthly: 'Monthly', warn: '⚠️ Low balance! Top-up' },
    vezloCalc: 'Vezlo + Olama Calculator',
    hours: 'hours', calc: 'Calculate',
    result: 'Tell them:',
    vezloDetail: 'Your hours × 85 + Olama 1,059 EGP',
    goalStatus: 'priority',
    saved: 'Saved', target: 'Target', remaining: 'Left',
    periodSummary: 'Period Summary',
    netFlow: 'Net Flow', savings: 'Savings', daysToPay: 'Days to Payday',
    subscriptions: 'Subscriptions',
    compare: 'Compare Periods', compTitle: 'Period Comparison',
    compIncome: 'Income', compExpenses: 'Expenses', compFixed: 'Fixed', compInst: 'Install.', compNet: 'Net Flow',
    compBudget: 'Home Budget', compSpent: 'Spent', compRemain: 'Remaining',
    debtCalc: 'Debt Repayment Calculator', debtMonth: 'Monthly Payment',
    debtMonthLabel: 'How much per month?', debtCalcBtn: 'Calculate',
    debtSummary: 'Repayment Plan', debtFree: 'Debt-Free by', debtTotal: 'Total needed',
    debtNoPayment: 'Set a monthly amount to calculate',
    quickExpense: 'Quick Add Expense', qeItem: 'Item', qeAmount: 'Amount',
    qeCategory: 'Category', qeWho: 'Who', qeMethod: 'Payment',
    qeAdd: 'Add Expense', qeAdded: '✅ Added! Refresh to see it.',
    qeNote: 'Saves locally — tell me in chat for permanent record',
    vezloTrack: 'Vezlo Tracker', vezloHoursTotal: 'Total Hours',
    vezloEarned: 'Total Earned', vezloPerPeriod: 'Per Period',
    goalTimeline: 'Goal Timeline', projLabel: '(at current rate)',
    expPdf: '📄 Export PDF', pdfPrep: 'Preparing PDF...',
  },
  ar: {
    loginSub: 'دخول آمن — بياناتك خاصة',
    username: 'اسم المستخدم', password: 'كلمة المرور', signIn: 'دخول',
    loginErr: '✕ اسم المستخدم أو كلمة المرور غلط',
    loading: 'جاري التحميل...', noPeriods: 'مفيش فترات',
    finance: 'المالية', langBtn: '🇬🇧 English',
    tabs: ['الرئيسية', '💳 فيزتي', '🎯 أهدافي', '⚡ Vezlo', '🚇 مواصلاتي', '📋 المعاملات', '📊 مقارنة', '➕ مصروف'],
    summary: { opening: 'أول الفترة', income: 'الدخل', expenses: 'المصروفات', balance: 'الرصيد' },
    netCard: 'صافي الدخل بعد الالتزامات',
    netCalc: 'المرتب - الثابت - الأقساط',
    salary: 'المرتب', fixed: 'ثابت', inst: 'أقساط',
    cards: 'فيزتي', income: 'الدخل', fixedEx: 'مصاريف ثابتة',
    installments: 'أقساط', debts: 'ديوني', balances: 'أرصدتي',
    noExpenses: '📝 ابعتلي مصروفاتك عشان تظهر',
    total: 'المجموع', paid: 'مدفوع', pending: 'لسه', allPaid: 'مدفوع كله ✅',
    perMonth: '/ش', left: 'متبقي', months: 'ش',
    iOwe: 'عليا فلوس', noDebts: '✅ مفيش ديون',
    paidEarly: 'مدفوع مبكر',
    metro: { balance: 'الرصيد', trips: 'رحلات متبقية', day: 'يوم', trip: 'رحلة',
             daily: 'تكلفة اليوم', monthly: 'شهرياً', warn: '⚠️ الرصيد قليل! اشحن' },
    vezloCalc: 'حاسبة Vezlo + Olama',
    hours: 'ساعة', calc: 'احسب',
    result: 'قولهم:',
    vezloDetail: 'ساعاتك × 85 + Olama 1,059',
    goalStatus: 'الأولوية',
    saved: 'وفرت', target: 'مطلوب', remaining: 'متبقي',
    periodSummary: 'ملخص الفترة',
    netFlow: 'صافي التدفق', savings: 'الادخار', daysToPay: 'أيام للقبض',
    subscriptions: 'اشتراكات',
    compare: 'مقارنة الفترات', compTitle: 'مقارنة بين الفترات',
    compIncome: 'الدخل', compExpenses: 'المصروفات', compFixed: 'ثابت', compInst: 'أقساط', compNet: 'صافي التدفق',
    compBudget: 'ميزانية البيت', compSpent: 'صرف', compRemain: 'متبقي',
    debtCalc: 'حاسبة سداد الديون', debtMonth: 'القسط الشهري',
    debtMonthLabel: 'كام هتدفع في الشهر؟', debtCalcBtn: 'احسب',
    debtSummary: 'خطة السداد', debtFree: 'هتتخلص من الديون', debtTotal: 'المطلوب',
    debtNoPayment: 'حدد مبلغ شهري عشان نحسب',
    quickExpense: 'إضافة مصروف سريع', qeItem: 'البيان', qeAmount: 'المبلغ',
    qeCategory: 'التصنيف', qeWho: 'مين', qeMethod: 'طريقة الدفع',
    qeAdd: 'أضف المصروف', qeAdded: '✅ اتضاف! اعمل تحديث عشان تشوفه.',
    qeNote: 'بيتحفظ محلياً — قول لي في الشات عشان التسجيل الدائم',
    vezloTrack: 'تتبع Vezlo', vezloHoursTotal: 'إجمالي الساعات',
    vezloEarned: 'إجمالي المكسب', vezloPerPeriod: 'كل فترة',
    goalTimeline: 'خط زمني للأهداف', projLabel: '(بالمعدل الحالي)',
    expPdf: '📄 تصدير PDF', pdfPrep: 'يتم تحضير PDF...',
  },
};

// ===== CONSTANTS =====
const CC={'Food':'#ef4444','Transport':'#3b82f6','Coffee':'#f59e0b','Bills':'#ec4899','Shopping':'#8b5cf6','Entertainment':'#06b6d4','Healthcare':'#10b981','Clothes':'#6366f1','Electronics':'#14b8a6','Home':'#f97316','Debt':'#dc2626','Installment':'#ea580c','Income':'#10b981','Other':'#64748b','Housing':'#22c55e','Utilities':'#eab308','Family':'#d946ef'};
const WE={'Ahmed':'🧑','Wife':'👩','House':'🏠','Other':'❓'};
const WC={'Ahmed':'#3b82f6','Wife':'#ef4444','House':'#10b981','Other':'#64748b'};
const WN={'Ahmed':'Ahmed','Wife':'Wife','House':'House','Other':'Other'};
const WN_ar={'Ahmed':'أحمد','Wife':'مراتي','House':'البيت','Other':'غيره'};
const BN={'CIB Account':'🏦 CIB','Cash':'💵 Cash','Banque du Caire':'💳 Banque du Caire','Fawry Account':'📱 Fawry','Vodafone Cash':'📱 Vodafone Cash','QNB':'🏦 QNB'};
const BN_ar={'CIB Account':'🏦 CIB','Cash':'💵 كاش','Banque du Caire':'💳 بنك القاهرة','Fawry Account':'📱 فوري','Vodafone Cash':'📱 فودافون','QNB':'🏦 QNB'};

let AD = null, curP = null, chartInstance = null;

// ===== HELPERS =====
function fmt(n, showLabel = true) {
  if (n === undefined || n === null) return '—';
  return Number(n).toLocaleString('en-US', {minFrac: 2, maxFrac: 2}) + (showLabel ? ' EGP' : '');
}
function fmtDate(d) {
  if (!d || d.length < 10) return d;
  let p = d.split('-');
  return LANG === 'ar' ? p[2] + '/' + p[1] : p[1] + '/' + p[2];
}
function tr(key) { return TX[LANG][key] || key; }
function trs(prefix, key) { return TX[LANG][prefix] ? (TX[LANG][prefix][key] || key) : key; }

// ===== INFO POPUP =====
function toggleInfo(id) {
  let el = document.getElementById(id);
  if (!el) return;
  // Close all other popups
  document.querySelectorAll('.info-popup.show').forEach(p => {
    if (p.id !== id) p.classList.remove('show');
  });
  el.classList.toggle('show');
}

// ===== LANGUAGE TOGGLE =====
function toggleLang() {
  LANG = LANG === 'ar' ? 'en' : 'ar';
  localStorage.setItem('blue_lang', LANG);
  document.getElementById('htmlTag').lang = LANG === 'ar' ? 'ar' : 'en';
  document.getElementById('htmlTag').dir = LANG === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('langBtn').textContent = TX[LANG].langBtn;
  document.getElementById('hdSub').textContent = TX[LANG].finance;
  document.getElementById('loginSub').textContent = TX[LANG].loginSub;
  document.getElementById('loginUser').placeholder = TX[LANG].username;
  document.getElementById('loginPass').placeholder = TX[LANG].password;
  document.querySelector('.login-box button').textContent = TX[LANG].signIn;
  document.getElementById('loadText').textContent = TX[LANG].loading;
  // Update tabs
  document.querySelectorAll('.tab-btn').forEach((btn, i) => {
    btn.textContent = TX[LANG].tabs[i] || btn.textContent;
  });
  // Update panel titles
  document.getElementById('ovTitle1').textContent = '💰 ' + TX[LANG].income;
  document.getElementById('ovTitle2').textContent = '🏠 ' + TX[LANG].fixedEx;
  document.getElementById('ovTitle3').textContent = '💳 ' + TX[LANG].installments;
  document.getElementById('ovTitle4').textContent = '💸 ' + TX[LANG].debts;
  document.getElementById('ovTitle5').textContent = '💰 ' + TX[LANG].balances;
  document.getElementById('ovTitle6').textContent = '👤 ' + (LANG === 'ar' ? 'مين صرف؟' : 'Who Spent?');
  document.getElementById('ovTitle7').textContent = '📊 ' + (LANG === 'ar' ? 'التصنيفات' : 'Categories');
  document.getElementById('ovTitle8').textContent = '📅 ' + (LANG === 'ar' ? 'مصروفات يومية' : 'Daily Trend');
  document.getElementById('goalsTitle').textContent = '🎯 ' + (LANG === 'ar' ? 'أهدافي المالية' : 'Financial Goals');
  document.getElementById('trTitle1').textContent = '🚌 ' + (LANG === 'ar' ? 'المواصلات' : 'Transport');
  document.getElementById('trTitle2').textContent = '🚇 ' + (LANG === 'ar' ? 'كارت المترو' : 'Metro Card');
  document.getElementById('invTitle').textContent = '📈 ' + (LANG === 'ar' ? 'استثماراتي' : 'My Investments');
  if (AD && curP) renderPeriod(curP);
}

// ===== LOGIN =====
function login() {
  let u = document.getElementById('loginUser').value.trim().toLowerCase();
  let p = document.getElementById('loginPass').value.trim();
  if (u === 'ahmed' && p === 'ahmed@1500') {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('app').style.display = 'block';
    loadData();
  } else {
    let el = document.getElementById('loginErr');
    el.textContent = TX[LANG].loginErr;
    el.style.display = 'block';
    setTimeout(() => el.style.display = 'none', 3000);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('loginPass').addEventListener('keydown', e => { if (e.key === 'Enter') login(); });
  document.getElementById('loginUser').addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('loginPass').focus(); });
  document.getElementById('loginSub').textContent = TX[LANG].loginSub;
  // Apply initial lang
  document.getElementById('htmlTag').lang = LANG === 'ar' ? 'ar' : 'en';
  document.getElementById('htmlTag').dir = LANG === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('langBtn').textContent = TX[LANG].langBtn;
  document.getElementById('hdSub').textContent = TX[LANG].finance;
  document.querySelector('.tab-btn[data-tab="tab0"]').textContent = TX[LANG].tabs[0];
  document.querySelector('.tab-btn[data-tab="tab1"]').textContent = TX[LANG].tabs[1];
  document.querySelector('.tab-btn[data-tab="tab2"]').textContent = TX[LANG].tabs[2];
  document.querySelector('.tab-btn[data-tab="tab3"]').textContent = TX[LANG].tabs[3];
  document.querySelector('.tab-btn[data-tab="tab4"]').textContent = TX[LANG].tabs[4];
  document.querySelector('.tab-btn[data-tab="tab5"]').textContent = TX[LANG].tabs[5];
  document.querySelector('.tab-btn[data-tab="tab6"]').textContent = TX[LANG].tabs[6];
  document.querySelector('.tab-btn[data-tab="tab7"]').textContent = TX[LANG].tabs[7];
});

// ===== TABS =====
function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
  document.getElementById(tabId).classList.add('active');
  // Resize chart if on active tab
  if (chartInstance) chartInstance.resize();
}

// ===== LOAD DATA =====
async function loadData() {
  document.getElementById('loading').style.display = 'flex';
  document.getElementById('content').style.display = 'none';
  try {
    let r = await fetch('./data.json');
    if (!r.ok) throw new Error('HTTP ' + r.status);
    AD = await r.json();
    let pds = Object.keys(AD.periods || {});
    if (!pds.length) {
      document.getElementById('loading').innerHTML = '❌ ' + TX[LANG].noPeriods;
      return;
    }
    curP = AD.current_period || pds[pds.length - 1];
    renderPeriodNav(pds);
    renderPeriod(curP);
    document.getElementById('loading').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('clock').textContent = new Date().toLocaleString(LANG === 'ar' ? 'ar-EG' : 'en-US');
  } catch (e) {
    document.getElementById('loading').innerHTML = '❌ ' + e.message;
  }
}

// ===== PERIOD NAV =====
function renderPeriodNav(pds) {
  let h = '';
  pds.forEach((pk, i) => {
    let p = AD.periods[pk];
    let label = LANG === 'ar' ? p.label : 'Period ' + (i + 1);
    h += `<button class="period-btn ${pk === curP ? 'active' : ''}" data-pk="${pk}">${label}</button>`;
  });
  document.getElementById('periodNav').innerHTML = h;
  document.querySelectorAll('.period-btn').forEach(b => {
    b.onclick = () => {
      document.querySelectorAll('.period-btn').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      curP = b.dataset.pk;
      renderPeriod(curP);
    };
  });
}

// ===== RENDER PERIOD =====
function renderPeriod(pk) {
  if (!AD || !AD.periods || !AD.periods[pk]) return;
  const po = AD.periods[pk];
  const exp = po.expenses || {};
  const fix = po.fixed_expenses || {};
  const inst = po.installments || {};
  const debts = po.debts || {};
  const inc = po.income || {};
  const eI = inc.total_expected || 0;
  const dr = po.date_range || {};
  const si = po.salary_info || {};
  const sr = si.salary_month || po.salary_month || '';
  const sa = si.salary_amount || 0;
  const fpT = AD.fixed_expenses_profile ? AD.fixed_expenses_profile.total || 0 : 0;
  const instT = inst.total_monthly || 0;

  // ===== PERIOD INFO =====
  let monthLabel = LANG === 'ar' ? sr : sr.replace('إبريل','Apr').replace('مايو','May').replace('يونيو','Jun').replace('يوليو','Jul');
  document.getElementById('periodInfo').innerHTML =
    `<span class="p">${monthLabel}</span>
     <span class="d">${dr.start || '?'} → ${dr.end || '?'}</span>
     ${sa ? `<span class="d">💰 ${fmt(sa)}</span>` : ''}`;

  // ===== SUMMARY CARDS =====
  let s1 = trs('summary','opening'), s2 = trs('summary','income'), s3 = trs('summary','expenses'), s4 = trs('summary','balance');
  document.getElementById('summaryCards').innerHTML = `
    <div class="card green"><div class="label">${s1}</div><div class="value green">${fmt(po.opening_balance_total)}</div></div>
    <div class="card blue"><div class="label">${s2}</div><div class="value blue">${fmt(eI)}</div></div>
    <div class="card red"><div class="label">${s3}</div><div class="value red">${fmt(exp.total)}</div><div class="sub">${exp.count || 0} ${LANG === 'ar' ? 'معاملة' : 'txns'}</div></div>
    <div class="card ${po.current_balance_total > 0 ? 'green' : 'red'}">
      <div class="label">${s4}</div>
      <div class="value ${po.current_balance_total > 0 ? 'green' : 'red'}">${fmt(po.current_balance_total)}</div>
    </div>
    <!-- NET INCOME SPECIAL CARD -->
    <div class="card green net-card">
      <div>
        <div class="net-label"><strong>${tr('netCard')}</strong> <span style="font-size:9px;color:var(--text3)">${tr('netCalc')}</span></div>
        <div class="net-value">${fmt(sa - fpT - instT)}</div>
      </div>
      <div class="net-breakdown">
        <span>${tr('salary')}: <span>${fmt(sa, false)}</span></span>
        <span>- ${tr('fixed')}: <span>${fmt(fpT, false)}</span></span>
        <span>- ${tr('inst')}: <span>${fmt(instT, false)}</span></span>
      </div>
    </div>`;

  // ===== HOME BUDGET TRACKER =====
  const hb = po.home_budget || {};
  const hbTotal = hb.total_budget || 0;
  const hbSpent = hb.spent_so_far || 0;
  const hbRemaining = Math.max(hbTotal - hbSpent, 0);
  const hbPct = hbTotal > 0 ? Math.min((hbSpent / hbTotal) * 100, 100) : 0;
  const hbWarn = hbRemaining <= hbTotal * 0.25;

  document.getElementById('homeBudgetCard').innerHTML = `
    <div style="background:var(--bg2);border:1px solid ${hbWarn ? 'var(--red)' : 'var(--accent)'};border-radius:var(--radius);padding:14px;margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
        <span style="font-size:13px;font-weight:700">🏠 ${LANG === 'ar' ? 'ميزانية البيت' : 'Home Budget'}</span>
        <span style="font-size:11px;color:var(--text3)">${LANG === 'ar' ? 'أكل + شرب + مستلزمات' : 'Food + Drinks + Supplies'}</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
        <span style="font-size:10px;color:var(--text3)">${LANG === 'ar' ? 'صرفت' : 'Spent'}: <strong style="color:var(--red);font-size:12px">${fmt(hbSpent)}</strong></span>
        <span style="font-size:10px;color:var(--text3)">${LANG === 'ar' ? 'متبقي' : 'Left'}: <strong style="color:${hbWarn ? 'var(--red)' : 'var(--accent)'};font-size:14px">${fmt(hbRemaining)}</strong></span>
        <span style="font-size:10px;color:var(--text3)">${LANG === 'ar' ? 'الميزانية' : 'Budget'}: <strong>${fmt(hbTotal)}</strong></span>
      </div>
      <div style="height:8px;border-radius:4px;background:var(--bg4);overflow:hidden;margin-bottom:3px">
        <div style="height:100%;width:${hbPct}%;border-radius:4px;background:${hbWarn ? 'var(--red)' : hbPct > 70 ? 'var(--amber)' : 'var(--accent)'};transition:width 0.3s"></div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:9px;color:var(--text3)">
        <span>${hbPct.toFixed(0)}% ${LANG === 'ar' ? 'مستخدم' : 'used'}</span>
        ${hbWarn ? `<span style="color:var(--red);font-weight:600">⚠️ ${LANG === 'ar' ? 'الميزانية أكلت بقى!' : 'Budget running low!'}</span>` : ''}
      </div>
    </div>`;

  // ===== TAB 0 - OVERVIEW =====
  // Income
  let ih = '';
  (inc.sources || []).forEach(s => {
    let det = s.detail ? `<span style="font-size:9px;color:var(--text3)"> ${s.detail}</span>` : '';
    let ch = s.variable ? '⚡' : '';
    ih += `<div class="list-row"><span>${ch}${s.name} ${det}</span><span class="amt green">${fmt(s.amount)}</span></div>`;
  });
  ih += `<div class="list-row-total"><span>${tr('total')}</span><span class="amt">${fmt(eI)}</span></div>`;

  // Sister installment tracker below income
  const sisInst = AD.sister_installment || {};
  if (sisInst.remaining_months !== undefined) {
    let skipNote = '';
    let isSkip = (sisInst.skip_months || []).includes(curP);
    if (isSkip) {
      skipNote = `<div style="font-size:10px;color:var(--amber);margin-top:4px">⏸️ ${LANG === 'ar' ? 'هتسكت شهر 6 — مش هتدفع' : 'Skipping month 6'}</div>`;
    }
    let pctPaid = sisInst.original_total_months ? ((sisInst.months_paid_so_far || 0) / sisInst.original_total_months * 100).toFixed(0) : 0;
    let paidTotal = (sisInst.months_paid_so_far || 0) * (sisInst.monthly_amount || 0);
    let remainingTotal = (sisInst.remaining_months || 0) * (sisInst.monthly_amount || 0);
    let monthsLabel = LANG === 'ar' ? 'شهر' : 'mo';
    let leftLabel = LANG === 'ar' ? 'متبقي' : 'Left';
    let paidLabel = LANG === 'ar' ? 'مدفوع' : 'Paid';
    let totalMonths = LANG === 'ar' ? 'إجمالي 14 شهر' : 'Total 14 mo';
    ih += `<div style="margin-top:6px;padding:6px 8px;background:var(--bg3);border-radius:6px;border:1px solid var(--border)">
      <div style="display:flex;justify-content:space-between;font-size:10px">
        <span>👩 ${LANG === 'ar' ? 'قسط أختي' : "Sister's Installment"}: <strong>${fmt(sisInst.monthly_amount)}</strong></span>
        <span style="color:var(--text3)">${totalMonths}</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:9px;color:var(--text3);margin-top:2px">
        <span>${paidLabel}: ${sisInst.months_paid_so_far || 0}/${sisInst.original_total_months}</span>
        <span>${leftLabel}: <strong style="color:${sisInst.remaining_months <= 3 ? 'var(--amber)' : 'var(--accent)'}">${sisInst.remaining_months}</strong> ${monthsLabel}</span>
      </div>
      <div style="height:4px;border-radius:2px;background:var(--bg4);margin-top:3px;overflow:hidden">
        <div style="height:100%;width:${pctPaid}%;background:var(--accent2);border-radius:2px"></div>
      </div>
      ${skipNote}
      <div style="font-size:8px;color:var(--text3);margin-top:2px">${sisInst.notes || ''}</div>
    </div>`;
  }
  document.getElementById('overviewIncome').innerHTML = ih;

  // Fixed Expenses
  let feI = fix.items || [];
  let feh = '';
  feI.forEach(f => {
    let cls = f.paid ? 'paid' : 'unpaid';
    let clr = f.paid ? 'var(--accent)' : 'var(--amber)';
    feh += `<div class="fixed-item ${cls}"><span><span style="color:${clr};margin-left:5px">${f.paid ? '✅' : '◻️'}</span>${f.name}</span><span style="font-weight:700;color:${clr}">${fmt(f.amount)}</span></div>`;
  });
  let fP = fix.paid_total || fix.total || 0;
  let allP = fP >= fpT;
  feh += `<div class="list-row-total"><span>${tr('total')} <span class="bdg ${allP ? 'grn' : 'ylw'}">${allP ? tr('allPaid') : tr('pending')}</span></span><span class="amt">${fmt(fP)} / ${fmt(fpT)}</span></div>`;
  document.getElementById('overviewFixed').innerHTML = feh;

  // Installments
  let iI = inst.items || [];
  let iih = '';
  iI.forEach(i => {
    let rem = LANG === 'ar' ? `${i.remaining_months} ${tr('months')}` : `${i.remaining_months}mo`;
    iih += `<div class="inst-item-row"><span>${i.name}</span><span class="mo">${fmt(i.monthly)} <span style="color:var(--text3);font-weight:400;font-size:10px">· ${rem}</span></span></div>`;
  });
  let iP = inst.paid || false;
  let pE = AD.cards?.CIB_Visa_Purchases?.paid_early_total || 0;
  iih += `<div class="list-row-total"><span>${tr('total')} <span class="bdg ${iP ? 'grn' : 'red'}">${iP ? '✅ ' + tr('paid') : '⏳ ' + tr('pending')}</span></span><span class="amt" style="color:var(--blue)">${fmt(inst.total_monthly)}</span></div>`;
  if (pE > 0) iih += `<div style="font-size:10px;color:var(--accent);text-align:left;padding:5px 8px 0">${tr('paidEarly')}: ${fmt(pE)}</div>`;
  document.getElementById('overviewInstallments').innerHTML = iih;

  // Debts
  let dE = debts.entries || [];
  let dh = '';
  dE.forEach(d => {
    let pct = d.amount > 0 ? ((d.amount - d.remaining) / d.amount * 100).toFixed(0) : 0;
    let dc = d.direction === 'عليا' ? 'var(--red)' : 'var(--accent)';
    let dirText = LANG === 'ar' ? d.direction : (d.direction === 'عليا' ? 'I owe' : 'owed to me');
    dh += `<div class="debt-item">
      <div style="display:flex;justify-content:space-between"><span>${d.description}</span><span style="color:${dc};font-weight:600">${dirText}</span></div>
      <div class="row2"><span style="color:var(--text3)">${d.creditor_name || ''}</span><span><strong style="color:${dc}">${fmt(d.remaining)}</strong> <span style="color:var(--text3)">/ ${fmt(d.amount)}</span></span></div>
      <div class="progress-bar"><div class="fill" style="width:${pct}%;background:${dc}"></div></div>
    </div>`;
  });
  if (!dE.length) dh = `<div style="text-align:center;color:var(--text3);padding:12px;font-size:12px">${tr('noDebts')}</div>`;
  else dh += `<div class="list-row-total"><span>${tr('iOwe')}</span><span class="amt" style="color:var(--red)">${fmt(debts.total_i_owe)}</span></div>`;
  document.getElementById('overviewDebts').innerHTML = dh;

  // Balances (6 wallets only)
  let bh = ''; let balT = 0;
  const cb = po.current_balance || {};
  let bnk = LANG === 'ar' ? BN_ar : BN;
  Object.entries(cb).forEach(([k, v]) => {
    balT += v;
    let nm = bnk[k] || k.replace(/_/g, ' ');
    bh += `<div class="list-row"><span>${nm}</span><span class="amt green">${fmt(v)}</span></div>`;
  });
  bh += `<div class="list-row-total"><span>${tr('total')}</span><span class="amt">${fmt(balT)}</span></div>`;
  document.getElementById('overviewBalances').innerHTML = bh;

  // Fawry Investment panel - 4 funds
  const fawryFunds = AD.investments?.fawry_funds || {};
  if (fawryFunds.funds) {
    let invLabel = LANG === 'ar' ? '📈 فوري استثمار' : '📈 Fawry Investment';
    let funds = fawryFunds.funds || {};
    let totalBal = fawryFunds.total_balance || 0;
    let totalDep = fawryFunds.total_deposits || 0;
    let totalProfit = fawryFunds.total_profit || 0;
    
    // Build each fund card
    let fundCards = '';
    let fundColors = {'sharia':'var(--accent)','opportunities':'var(--blue)','gold':'var(--amber)','fawry_stable':'var(--accent2)'};
    let fundEmojis = {'sharia':'📜','opportunities':'🚀','gold':'🥇','fawry_stable':'💰'};
    let profitLabel = LANG === 'ar' ? 'الربح' : 'Profit';
    let afterFeesLabel = LANG === 'ar' ? 'بعد الرسوم' : 'After Fees';
    let depLabel = LANG === 'ar' ? 'إيداعات' : 'Deposits';
    let balLabel = LANG === 'ar' ? 'الرصيد' : 'Balance';
    let varLabel = LANG === 'ar' ? 'متغير' : 'Variable';
    let fixLabel = LANG === 'ar' ? 'ثابت' : 'Fixed';
    
    Object.entries(funds).forEach(([key, fund]) => {
      let clr = fundColors[key] || 'var(--text3)';
      let emj = fundEmojis[key] || '📊';
      let isProfitable = fund.status === 'profitable';
      let pct = fund.total_deposits > 0 ? ((fund.profit_after_fees / fund.total_deposits) * 100).toFixed(2) : 0;
      let typeLabel = fund.type === 'ثابت' ? fixLabel : varLabel;
      let statusIcon = isProfitable ? '✅' : '⚠️';
      let profitClr = fund.profit_after_fees >= 0 ? 'var(--accent)' : 'var(--red)';
      
      // Fund details
      let extraInfo = '';
      if (fund.year_established) {
        extraInfo += `<span style="color:var(--text3)">📅 ${LANG === 'ar' ? 'تأسس' : 'Est.'} ${fund.year_established}</span>`;
      }
      if (fund.withdrawal_fee_pct !== null && fund.withdrawal_fee_pct !== undefined) {
        extraInfo += ` <span style="color:var(--amber)">💸 ${fund.withdrawal_fee_pct}% ${LANG === 'ar' ? 'رسوم سحب' : 'withdrawal fee'}</span>`;
      }
      if (fund.withdrawal_days) {
        extraInfo += ` <span style="color:var(--text3)">📆 ${fund.withdrawal_days}</span>`;
      }
      
      // Daily return for Fawry stable
      let dailyInfo = '';
      if (key === 'fawry_stable' && fund.daily_return) {
        let dr = fund.daily_return;
        let annLabel = LANG === 'ar' ? 'سنوي' : 'Annual';
        let monLabel = LANG === 'ar' ? 'شهري' : 'Monthly';
        let dayLabel = LANG === 'ar' ? 'يومي' : 'Daily';
        dailyInfo = `<div style="margin-top:4px;background:var(--bg4);border-radius:6px;padding:6px;font-size:9px;display:grid;grid-template-columns:1fr 1fr 1fr;text-align:center">
          <span>📈 ${annLabel}<br><strong style="color:var(--accent);font-size:11px">${dr.annual_rate}%</strong></span>
          <span>📆 ${monLabel}<br><strong style="color:var(--blue);font-size:11px">${dr.monthly_rate}%</strong></span>
          <span>⚡ ${dayLabel}<br><strong style="color:var(--amber);font-size:11px">${dr.daily_rate}%</strong></span>
        </div>
        <div style="font-size:8px;color:var(--text3);margin-top:3px">${dr.notes || ''} · ${LANG === 'ar' ? 'أرباح يومية' : 'Daily payout'}</div>`;
      }
      
      fundCards += `<div style="background:var(--bg3);border-radius:8px;padding:10px;margin-bottom:6px;border-left:3px solid ${clr}">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span style="font-weight:700;font-size:12px">${emj} ${fund.name} ${statusIcon}</span>
          <span style="font-size:10px;color:var(--text3)">${typeLabel}</span>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;font-size:10px">
          <span>💰 ${balLabel}: <strong style="color:${clr}">${fmt(fund.current_balance)}</strong></span>
          <span>📥 ${depLabel}: ${fmt(fund.total_deposits)}</span>
          <span style="color:${profitClr}">📈 ${profitLabel}: ${fund.profit_after_fees >= 0 ? '+' : ''}${fmt(fund.profit_after_fees)}</span>
          <span>${pct >= 0 ? '📊 +' : '📊 '}${pct}%</span>
        </div>
        ${extraInfo ? `<div style="font-size:9px;margin-top:3px;display:flex;gap:8px">${extraInfo}</div>` : ''}
        ${dailyInfo}
      </div>`;
    });

    document.getElementById('fawryInvestment').innerHTML = `
      <div style="font-size:13px;font-weight:700;margin-bottom:6px">${invLabel}</div>
      <div class="list-row"><span>${LANG === 'ar' ? 'إجمالي الرصيد' : 'Total Balance'}</span><span class="amt" style="color:var(--accent2);font-weight:700">${fmt(totalBal)}</span></div>
      <div class="list-row"><span>${LANG === 'ar' ? 'إجمالي الإيداعات' : 'Total Deposits'}</span><span>${fmt(totalDep)}</span></div>
      <div class="list-row"><span>📊 ${LANG === 'ar' ? 'صافي الربح' : 'Net Profit'}</span><span class="amt ${totalProfit >= 0 ? 'green' : 'red'}">${totalProfit >= 0 ? '+' : ''}${fmt(totalProfit)}</span></div>
      <div style="margin-top:8px">${fundCards}</div>
    `;
  }

  // Who spent
  const who = exp.by_who || {};
  const wk = Object.keys(who);
  let whoH = '<div class="who-grid">';
  const wn = LANG === 'ar' ? WN_ar : WN;
  if (!wk.length) {
    whoH += `<div style="grid-column:span 3;text-align:center;color:var(--text3);padding:12px;font-size:11px">—</div>`;
  } else {
    Object.entries(who).forEach(([k, v]) => {
      let p = exp.total ? (v / exp.total * 100).toFixed(1) : 0;
      whoH += `<div class="who-card" style="border:1px solid ${WC[k] || 'var(--border)'}">
        <div class="who-emoji">${WE[k] || '❓'}</div>
        <div class="who-name">${wn[k] || k}</div>
        <div class="who-amount" style="color:${WC[k]}">${fmt(v)}</div>
        <div class="who-pct">${p}%</div>
      </div>`;
    });
  }
  whoH += '</div>';
  document.getElementById('overviewWho').innerHTML = whoH;

  // Categories chart
  const cats = exp.by_category || {};
  const cl = Object.keys(cats);
  const cv = Object.values(cats);
  const ctx = document.getElementById('catChart').getContext('2d');
  if (chartInstance) chartInstance.destroy();
  chartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: cl.length ? cl : ['—'],
      datasets: [{ data: cl.length ? cv : [1], backgroundColor: cl.length ? cl.map(l => CC[l] || '#64748b') : ['#1f2937'], borderColor: '#111827', borderWidth: 2 }]
    },
    options: { responsive: true, plugins: { legend: { position: 'bottom', labels: { color: '#e2e8f0', font: { size: 9 }, boxWidth: 10 } } } }
  });

  // Trend
  const trend = po.daily_trend || [];
  let trH = '<div class="trend-chart">';
  const maxT = Math.max(...trend.map(d => d.total), 1);
  if (trend.length) {
    trend.forEach(d => {
      let h = Math.max((d.total / maxT) * 100, 3);
      trH += `<div class="trend-col"><div class="trend-val">${d.total > 0 ? fmt(d.total, false) : ''}</div><div class="trend-bar" style="height:${h}%"></div><div class="trend-label">${fmtDate(d.date)}</div></div>`;
    });
  } else {
    trH += `<div style="text-align:center;color:var(--text3);font-size:11px;width:100%;padding-top:16px">${tr('noExpenses')}</div>`;
  }
  trH += '</div>';
  document.getElementById('overviewTrend').innerHTML = trH;

  // ===== PERIOD SUMMARY =====
  const now = new Date();
  const payDay = 27; // Ahmed's payday
  let daysToPay = payDay - now.getDate();
  if (daysToPay < 0) daysToPay += 30; // approximate
  let netFlow = eI - (exp.total || 0) - fpT - instT;
  let savingsPct = eI > 0 ? ((netFlow / eI) * 100).toFixed(1) : 0;
  let totalObligations = fpT + instT;
  
  // Generate unique IDs for info popups
  const uid = Math.random().toString(36).substr(2, 5);
  
  // Build fixed expense breakdown for salary popup
  let salaryBreakdown = '';
  (fix.items || []).forEach(f => {
    let status = f.paid ? (LANG === 'ar' ? 'مدفوع ✅' : 'Paid ✅') : (LANG === 'ar' ? '◻️ لسه' : '◻️ Pending');
    salaryBreakdown += `<div class="ip-row"><span class="ip-l">${f.name}</span><span class="ip-v">${fmt(f.amount)}</span></div>`;
  });
  // Build installment breakdown
  let instBreakdown = '';
  (inst.items || []).forEach(i => {
    instBreakdown += `<div class="ip-row"><span class="ip-l">${i.name}</span><span class="ip-v">${fmt(i.monthly)}</span></div>`;
  });
  
  let salaryLabel = LANG === 'ar' ? 'المرتب' : 'Salary';
  let fixedLabel = LANG === 'ar' ? 'ثابت' : 'Fixed';
  let instLabel2 = LANG === 'ar' ? 'أقساط' : 'Installments';
  let allPaidLabel = LANG === 'ar' ? 'مدفوع ✅' : 'All Paid ✅';
  
  document.getElementById('periodSummary').innerHTML = `
    <div class="ps-item">
      <div class="ps-label">💰 ${tr('salary')} <button class="btn-info" onclick="toggleInfo('sal${uid}')">🔍</button></div>
      <div class="ps-value green">${fmt(sa)}</div>
      <div class="info-popup" id="sal${uid}">
        <div class="ip-row"><span class="ip-l">${salaryLabel}</span><span class="ip-v">${fmt(sa)}</span></div>
        <div class="ip-total"><span class="ip-l">${LANG === 'ar' ? 'كل المرتب' : 'Total Salary'}</span><span class="ip-v">${fmt(sa)}</span></div>
      </div>
    </div>
    <div class="ps-divider"></div>
    <div class="ps-item">
      <div class="ps-label">💸 ${tr('fixed')} + ${tr('inst')} <button class="btn-info" onclick="toggleInfo('obl${uid}')">🔍</button></div>
      <div class="ps-value red">${fmt(totalObligations)}</div>
      <div class="info-popup" id="obl${uid}">
        <div class="ip-row" style="color:var(--accent);font-weight:700;border-bottom:1px solid var(--border);padding-bottom:4px;margin-bottom:4px"><span class="ip-l">${fixedLabel}</span><span class="ip-v">${fmt(fpT)}</span></div>
        ${salaryBreakdown}
        <div class="ip-row" style="color:var(--blue);font-weight:700;border-bottom:1px solid var(--border);padding-bottom:4px;margin:4px 0"><span class="ip-l">${instLabel2}</span><span class="ip-v">${fmt(instT)}</span></div>
        ${instBreakdown}
        <div class="ip-total"><span class="ip-l">${LANG === 'ar' ? 'المجموع' : 'Total'}</span><span class="ip-v">${fmt(totalObligations)}</span></div>
      </div>
    </div>
    <div class="ps-divider"></div>
    <div class="ps-item">
      <div class="ps-label">📊 ${tr('netFlow')} <button class="btn-info" onclick="toggleInfo('net${uid}')">🔍</button></div>
      <div class="ps-value ${netFlow >= 0 ? 'green' : 'red'}">${fmt(netFlow)}</div>
      <div class="info-popup" id="net${uid}">
        <div class="ip-row"><span class="ip-l">${salaryLabel}</span><span class="ip-v" style="color:var(--accent)">${fmt(sa)}</span></div>
        <div class="ip-row"><span class="ip-l">- ${fixedLabel}</span><span class="ip-v" style="color:var(--red)">-${fmt(fpT)}</span></div>
        <div class="ip-row"><span class="ip-l">- ${instLabel2}</span><span class="ip-v" style="color:var(--red)">-${fmt(instT)}</span></div>
        ${(exp.total || 0) > 0 ? `<div class="ip-row"><span class="ip-l">- ${LANG === 'ar' ? 'مصروفات' : 'Expenses'}</span><span class="ip-v" style="color:var(--red)">-${fmt(exp.total)}</span></div>` : ''}
        <div class="ip-total"><span class="ip-l">${LANG === 'ar' ? 'صافي التدفق' : 'Net Flow'}</span><span class="ip-v">${fmt(netFlow)}</span></div>
      </div>
    </div>
    <div class="ps-divider"></div>
    <div class="ps-item">
      <div class="ps-label">📈 ${tr('savings')} <button class="btn-info" onclick="toggleInfo('sav${uid}')">🔍</button></div>
      <div class="ps-value ${savingsPct >= 0 ? 'green' : 'red'}">${savingsPct}%</div>
      <div class="info-popup" id="sav${uid}">
        <div class="ip-row"><span class="ip-l">${LANG === 'ar' ? 'صافي التدفق' : 'Net Flow'}</span><span class="ip-v" style="color:${netFlow >= 0 ? 'var(--accent)' : 'var(--red)'}">${fmt(netFlow)}</span></div>
        <div class="ip-row"><span class="ip-l">${LANG === 'ar' ? 'المقسوم على' : 'Divided by'}</span><span class="ip-v">${fmt(sa)}</span></div>
        <div class="ip-total"><span class="ip-l">${LANG === 'ar' ? 'نسبة الادخار' : 'Savings Rate'}</span><span class="ip-v">${savingsPct}%</span></div>
        <div style="font-size:9px;color:var(--text3);margin-top:4px">${fmt(netFlow, false)} ÷ ${fmt(sa, false)} × 100 = ${savingsPct}%</div>
      </div>
    </div>
    <div class="ps-divider"></div>
    <div class="ps-item">
      <div class="ps-label">📆 ${tr('daysToPay')} <button class="btn-info" onclick="toggleInfo('day${uid}')">🔍</button></div>
      <div class="ps-value blue">${daysToPay} ${LANG === 'ar' ? 'يوم' : 'days'}</div>
      <div class="info-popup" id="day${uid}">
        <div class="ip-row"><span class="ip-l">${LANG === 'ar' ? 'يوم القبض' : 'Payday'}</span><span class="ip-v">${LANG === 'ar' ? '27 كل شهر' : '27th each month'}</span></div>
        <div class="ip-row"><span class="ip-l">${LANG === 'ar' ? 'النهاردة' : 'Today'}</span><span class="ip-v">${now.getDate()}/${now.getMonth()+1}</span></div>
        <div class="ip-total"><span class="ip-l">${LANG === 'ar' ? 'المتبقي' : 'Remaining'}</span><span class="ip-v" style="color:var(--blue)">${daysToPay} ${LANG === 'ar' ? 'يوم' : 'days'}</span></div>
      </div>
    </div>`;

  // Add click-outside listeners for info popups
  if (!window._infoListenerAdded) {
    window._infoListenerAdded = true;
    document.addEventListener('click', function(e) {
      if (!e.target.classList.contains('btn-info')) {
        document.querySelectorAll('.info-popup.show').forEach(p => p.classList.remove('show'));
      }
    });
  }

  // ===== TAB 1 - CARDS =====
  const cards = AD.cards || {};
  document.getElementById('cardCount').textContent = Object.keys(cards).length + ' ' + (LANG === 'ar' ? 'كارت' : 'cards');
  let ch2 = '';
  Object.entries(cards).forEach(([k, v]) => {
    let lim = v.limit ? fmt(v.limit, false) : '—';
    let av = v.available ? fmt(v.available, false) : '—';
    let used = v.used ? fmt(v.used, false) : '—';
    let insts = v.installments_details || {};
    let totalInst = v.total_monthly_installments || 0;
    let subs = v.subscriptions || [];
    let paidEarly = v.paid_early_total || 0;
    let hasInst = totalInst > 0 || subs.length > 0;
    let bankIcon = v.bank === 'CIB' ? '🏦' : '🏛️';

    ch2 += `<div class="card-item">
      <div class="row1"><span>${bankIcon} ${v.bank}</span><span style="color:${av !== '—' ? 'var(--accent)' : 'var(--amber)'};font-weight:700;font-size:11px">${LANG === 'ar' ? 'متبقي' : 'Avail'} ${av}</span></div>
      <div class="row2">${LANG === 'ar' ? 'الحد' : 'Limit'} ${lim} · ${LANG === 'ar' ? 'مستخدم' : 'Used'} ${used}</div>`;

    if (subs.length > 0) {
      ch2 += `<div class="details"><div class="sub-header">📡 ${tr('subscriptions')}</div>`;
      subs.forEach(s => {
        let dayS = LANG === 'ar' ? `يوم ${s.billing_day}` : `day ${s.billing_day}`;
        ch2 += `<div class="sub-item"><span class="key">${s.name}</span><span class="val">\$${s.amount_usd} ≈ ${fmt(s.amount_egp)} — ${dayS}</span></div>
        <div class="note">${s.notes || ''}</div>`;
      });
      ch2 += `</div>`;
    }

    // Last charge (credit card payment due)
    const lastCharge = v.last_charge || null;
    if (lastCharge && !lastCharge.paid) {
      let dueLabel = LANG === 'ar' ? '🚨 مستحق الدفع' : '🚨 Due for Payment';
      let dateLabel = LANG === 'ar' ? `اتخصم ${fmtDate(lastCharge.charged_date)}` : `Charged ${fmtDate(lastCharge.charged_date)}`;
      let dueDateLabel = LANG === 'ar' ? `آخر موعد: ${fmtDate(lastCharge.due_date)}` : `Due: ${fmtDate(lastCharge.due_date)}`;
      let daysLeft = Math.ceil((new Date(lastCharge.due_date) - new Date()) / (1000*60*60*24));
      let warnClr = daysLeft <= 5 ? 'var(--red)' : daysLeft <= 10 ? 'var(--amber)' : 'var(--accent)';
      let urgentLabel = LANG === 'ar' ? `متبقي ${daysLeft} يوم للدفع` : `${daysLeft} days to pay`;
      ch2 += `<div class="details" style="border:1px solid ${warnClr}33;background:${warnClr}11;padding:6px 8px;border-radius:6px;margin-top:6px">
        <div class="sub-header" style="color:${warnClr}">${dueLabel}</div>
        <div class="sub-item"><span class="key">${lastCharge.name}</span><span class="val" style="color:var(--amber)">\$${lastCharge.amount_usd} ≈ ${fmt(lastCharge.amount_egp)}</span></div>
        <div style="font-size:9px;color:var(--text3);padding:2px 0">${dateLabel} · ${dueDateLabel}</div>
        <div style="font-size:10px;font-weight:600;color:${warnClr};margin-top:3px">⚠️ ${urgentLabel}</div>
      </div>`;
    }

    if (hasInst) {
      ch2 += `<div class="details"><div class="sub-header">${LANG === 'ar' ? 'أقساط شهرية' : 'Monthly Installments'}: ${fmt(totalInst)} ${paidEarly > 0 ? '· ' + tr('paidEarly') + ': ' + fmt(paidEarly) : ''}</div>`;
      Object.entries(insts).forEach(([ik, iv]) => {
        let pe = iv.paid_early ? ` (${tr('paidEarly')})` : '';
        let clr = iv.remaining_months <= 3 ? 'var(--amber)' : iv.remaining_months <= 6 ? 'var(--blue)' : 'var(--text3)';
        let remText = LANG === 'ar' ? `${iv.remaining_months} ${tr('months')} ${tr('left')}` : `${iv.remaining_months}mo ${tr('left')}`;
        ch2 += `<div class="inst-item"><span class="key">${ik}</span><span class="val" style="color:${clr}">${fmt(iv.monthly)} · ${remText}${pe}</span></div>`;
      });
      ch2 += `</div>`;
    }
    ch2 += `</div>`;
  });
  document.getElementById('cardsSection').innerHTML = ch2;

  // ===== TAB 2 - GOALS =====
  const goals = AD.goals || [];
  let goalsH = '<div class="goals-grid">';
  if (!goals.length) {
    goalsH += `<div style="grid-column:span 2;text-align:center;color:var(--text3);padding:20px">${LANG === 'ar' ? 'مفيش أهداف' : 'No goals set'}</div>`;
  } else {
    goals.forEach(g => {
      let pct = g.target > 0 ? Math.min((g.saved / g.target) * 100, 100) : 0;
      let colors = ['#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899', '#10b981'];
      let clr = colors[g.priority - 1] || '#64748b';
      let prioText = LANG === 'ar' ? `${tr('goalStatus')} ${g.priority}` : `${tr('goalStatus')} ${g.priority}`;
      goalsH += `<div class="goal-card" style="border-left:3px solid ${clr}">
        <span class="goal-tag" style="background:${clr}22;color:${clr}">#${g.priority}</span>
        <div class="goal-title">${g.name}</div>
        <div class="goal-meta">${prioText}</div>
        <div class="goal-bar"><div class="goal-fill" style="width:${pct}%;background:${clr}"></div></div>
        <div class="goal-nums">
          <span>${tr('saved')}: <strong style="color:${clr}">${fmt(g.saved, false)}</strong></span>
          <span>${tr('target')}: <strong>${fmt(g.target, false)}</strong></span>
          <span>${tr('remaining')}: <strong>${fmt(Math.max(g.target - g.saved, 0), false)}</strong></span>
        </div>
      </div>`;
    });
  }
  goalsH += '</div>';
  document.getElementById('goalsSection').innerHTML = goalsH;

  // ===== TAB 3 - VEZLO =====
  const vz = AD.vezlo || {};
  const ol = AD.olama_vezlo || {};
  let vzH = '';
  if (vz.hourly_rate) {
    let olAm = ol.amount_egp || 0;
    let olN = '';
    if (olAm > 0) {
      let cov = Math.ceil(olAm / vz.hourly_rate);
      olN = `<div class="vezlo-note">📡 <strong>Olama AI</strong> — $20 ≈ ${fmt(olAm)}/${LANG === 'ar' ? 'شهر' : 'mo'}<br>⚡ ${cov}${LANG === 'ar' ? ' ساعة Vezlo تغطي Olama' : 'hrs Vezlo covers Olama'}</div>`;
    }
    vzH += `<div style="font-size:14px;font-weight:700;margin-bottom:6px">⚡ Vezlo</div>
      <div class="list-row"><span>💰 ${LANG === 'ar' ? 'السعر' : 'Rate'}</span><span class="amt green">${fmt(vz.hourly_rate)}/${LANG === 'ar' ? 'ساعة' : 'hr'}</span></div>
      <div class="list-row"><span>👑 ${LANG === 'ar' ? 'التحكم' : 'Control'}</span><span style="color:var(--amber);font-weight:600">${LANG === 'ar' ? 'أنت اللي بتقرر' : 'You decide'}</span></div>
      ${olN}
      <div class="vezlo-calc">
        <div class="vc-title">🧮 ${tr('vezloCalc')}</div>
        <div class="vc-input">
          <input type="number" id="vezloHours" value="5" min="0" step="0.5" oninput="calcVezlo()">
          <span>${tr('hours')}</span>
          <span style="color:var(--text3);font-size:11px">× ${fmt(vz.hourly_rate, false)}</span>
          <span style="color:var(--text3);font-size:11px">+ ${LANG === 'ar' ? 'Olama' : 'Olama'} ${fmt(olAm, false)}</span>
        </div>
        <div class="vc-result" id="vezloResult">${fmt(5 * vz.hourly_rate + olAm)}</div>
        <div class="vc-breakdown">${tr('result')} ${5 * vz.hourly_rate + olAm} EGP</div>
      </div>`;
  } else {
    vzH = '<div style="color:var(--text3);font-size:12px;padding:8px">—</div>';
  }
  document.getElementById('vezloSection').innerHTML = vzH;

  // ===== TAB 4 - TRANSPORT =====
  const trsp = AD.transport || {};
  let th = '';
  if (trsp.route) {
    th += `<div style="font-size:12px;margin-bottom:6px;color:var(--text2)">${trsp.route}</div>`;
    (trsp.segments || []).forEach(s => {
      th += `<div class="list-row"><span>🚌 ${s.from} → ${s.to}</span><span>${fmt(s.cost)} (${s.method})</span></div>`;
    });
    th += `<div class="list-row" style="font-weight:700"><span>🔄 ${LANG === 'ar' ? 'رايح جاي' : 'Round trip'}</span><span>${fmt(trsp.round_trip)}/${LANG === 'ar' ? 'يوم' : 'day'}</span></div>`;
    th += `<div class="list-row" style="border-top:1px solid var(--accent);font-weight:700;color:var(--accent)"><span>📆 ${LANG === 'ar' ? 'شهرياً' : 'Monthly'} (${trsp.working_days_month || 22}${LANG === 'ar' ? ' يوم' : 'd'})</span><span>${fmt(trsp.monthly_total)}</span></div>`;
  } else {
    th = '<div style="color:var(--text3);font-size:12px;padding:8px 0">—</div>';
  }
  document.getElementById('transportSection').innerHTML = th;

  // Metro
  const mt = AD.metro_card || {};
  let mh = '';
  if (mt.name) {
    let bal = mt.current_balance;
    let balStr = bal !== null ? fmt(bal) : '—';
    let warn = bal !== null && bal <= mt.low_balance_warning;
    let trL = bal !== null ? Math.floor(bal / mt.trip_cost) : '—';
    let dL = trL !== '—' ? Math.ceil(trL / mt.daily_trips) : '—';
    let dC = mt.trip_cost * mt.daily_trips;
    mh += `<div style="font-size:12px;font-weight:700;margin-bottom:6px">🚇 ${mt.name}</div>
      <div class="list-row"><span>💰 ${trs('metro','balance')}</span><span class="amt ${warn ? 'amber' : 'green'}">${balStr} ${warn ? '⚠️' : '✅'}</span></div>
      <div class="list-row"><span>🎫 ${trs('metro','trips')}</span><span class="amt" style="color:${trL <= mt.daily_trips * 2 ? 'var(--amber)' : 'var(--accent)'}">${trL} ${trs('metro','trip')} — ${dL} ${trs('metro','day')}</span></div>
      <div class="list-row"><span>🚇 ${trs('metro','daily')}</span><span>${fmt(dC)}/${LANG === 'ar' ? 'يوم' : 'day'}</span></div>
      <div class="list-row"><span>📆 ${trs('metro','monthly')}</span><span>${fmt(mt.monthly_cost)}</span></div>
      ${warn ? `<div style="font-size:11px;color:var(--red);margin-top:6px;background:rgba(239,68,68,0.1);padding:6px 8px;border-radius:6px">⚠️ ${trs('metro','warn')} ${fmt(mt.top_up_amount)}</div>` : ''}`;
  } else {
    mh = '<div style="color:var(--text3);font-size:12px">—</div>';
  }
  document.getElementById('metroSection').innerHTML = mh;

  // ===== TAB 5 - TRANSACTIONS =====
  const items = exp.items || [];
  document.getElementById('txnCount').textContent = items.length + ' ' + (LANG === 'ar' ? 'معاملة' : 'txns');
  let tb = '';
  const wn2 = LANG === 'ar' ? WN_ar : WN;
  items.forEach(t => {
    let we = WE[t.who] || '';
    let sign = t.amount > 0 ? '' : '+';
    let catBg = CC[t.category] || 'var(--bg4)';
    tb += `<tr><td>${fmtDate(t.date)}</td><td>${t.item || '—'}</td><td style="color:${t.amount > 0 ? 'var(--red)' : 'var(--accent)'};font-weight:600">${sign}${t.amount ? fmt(t.amount) : '—'}</td><td><span class="tag" style="background:${catBg}22;color:${catBg}">${t.category || '—'}</span></td><td>${we}${wn2[t.who] || t.who || '—'}</td><td>${t.payment_method || '—'}</td></tr>`;
  });
  if (!tb) tb = `<tr><td colspan="6" style="text-align:center;color:var(--text3);padding:18px;font-size:12px">${tr('noExpenses')}</td></tr>`;
  document.getElementById('txnBody').innerHTML = tb;

  // Update table header for language
  document.getElementById('txnHd').innerHTML = LANG === 'ar'
    ? '<th>التاريخ</th><th>البيان</th><th>المبلغ</th><th>التصنيف</th><th>مين</th><th>الدفع</th>'
    : '<th>Date</th><th>Item</th><th>Amount</th><th>Category</th><th>Who</th><th>Payment</th>';
}

// ===== VEZLO CALCULATOR =====
function calcVezlo() {
  const h = parseFloat(document.getElementById('vezloHours').value) || 0;
  const vz = AD?.vezlo || {};
  const ol = AD?.olama_vezlo || {};
  const olAm = ol.amount_egp || 0;
  const rate = vz.hourly_rate || 85;
  const total = h * rate + olAm;
  document.getElementById('vezloResult').textContent = fmt(total);
  let det = document.querySelector('.vc-breakdown');
  if (det) det.textContent = `${LANG === 'ar' ? 'قولهم' : 'Tell them'}: ${h} ${LANG === 'ar' ? 'ساعة' : 'hrs'} × ${fmt(rate, false)} + ${fmt(olAm, false)} (Olama) = ${total} EGP`;
}

// ===== TAB 6 RENDERERS =====

function renderComparison() {
  const pds = Object.keys(AD.periods || {});
  if (pds.length < 1) {
    document.getElementById('comparisonSection').innerHTML = `<div style="text-align:center;color:var(--text3);padding:20px;font-size:12px">${LANG === 'ar' ? 'مفيش فترات كافية للمقارنة' : 'Not enough periods'}</div>`;
    return;
  }
  let h = '';
  
  // Table header
  h += `<div class="table-wrap"><table><thead><tr><th>${LANG === 'ar' ? 'البند' : 'Item'}</th>`;
  pds.forEach(pk => {
    let p = AD.periods[pk];
    h += `<th style="text-align:center">${p.salary_info?.salary_month || pk}</th>`;
  });
  h += `</tr></thead><tbody>`;

  // Helper to get value
  function getVal(pk, path) {
    let p = AD.periods[pk];
    let keys = path.split('.');
    let v = p;
    for (let k of keys) v = v?.[k];
    return v || 0;
  }

  // Income row
  h += `<tr><td style="font-weight:600;color:var(--accent)">💰 ${tr('compIncome')}</td>`;
  pds.forEach(pk => h += `<td style="text-align:center;color:var(--accent)">${fmt(getVal(pk, 'income.total_expected'))}</td>`);
  h += `</tr>`;

  // Fixed expenses row
  h += `<tr><td style="font-weight:600;color:var(--amber)">🏠 ${tr('compFixed')}</td>`;
  pds.forEach(pk => {
    let p = AD.periods[pk];
    let fp = p.fixed_expenses?.total || 0;
    h += `<td style="text-align:center;color:var(--amber)">${fmt(fp)}</td>`;
  });
  h += `</tr>`;

  // Installments row
  h += `<tr><td style="font-weight:600;color:var(--blue)">💳 ${tr('compInst')}</td>`;
  pds.forEach(pk => {
    let p = AD.periods[pk];
    let t = p.installments?.total_monthly || 0;
    h += `<td style="text-align:center;color:var(--blue)">${fmt(t)}</td>`;
  });
  h += `</tr>`;

  // Expenses row
  h += `<tr><td style="font-weight:600;color:var(--red)">📉 ${tr('compExpenses')}</td>`;
  pds.forEach(pk => h += `<td style="text-align:center;color:var(--red)">${fmt(getVal(pk, 'expenses.total'))}</td>`);
  h += `</tr>`;

  // Net flow row
  h += `<tr><td style="font-weight:700;color:var(--accent2)">📊 ${tr('compNet')}</td>`;
  pds.forEach(pk => {
    let p = AD.periods[pk];
    let nf = (p.income?.total_expected || 0) - (p.expenses?.total || 0) - (p.fixed_expenses?.total || 0) - (p.installments?.total_monthly || 0);
    let clr = nf >= 0 ? 'var(--accent)' : 'var(--red)';
    h += `<td style="text-align:center;font-weight:700;color:${clr}">${fmt(nf)}</td>`;
  });
  h += `</tr>`;

  // Home budget row
  h += `<tr><td style="font-weight:600;color:var(--accent)">🏠 ${tr('compBudget')}</td>`;
  pds.forEach(pk => {
    let p = AD.periods[pk];
    let hb = p.home_budget || {};
    let sp = hb.spent_so_far || 0;
    let tt = hb.total_budget || 0;
    let pct = tt > 0 ? (sp / tt * 100).toFixed(0) : 0;
    h += `<td style="text-align:center;font-size:10px">${fmt(sp)} / ${fmt(tt)}<br><span style="color:${pct > 80 ? 'var(--red)' : 'var(--text3)'}">${pct}%</span></td>`;
  });
  h += `</tr>`;

  h += `</tbody></table></div>`;
  
  // Chart canvas for comparison
  h += `<canvas id="compChart" style="margin-top:12px;max-height:200px"></canvas>`;

  document.getElementById('comparisonSection').innerHTML = h;

  // Draw comparison chart
  const ctx = document.getElementById('compChart')?.getContext('2d');
  if (ctx) {
    if (window._compChart) window._compChart.destroy();
    let labels = pds.map(pk => AD.periods[pk].salary_info?.salary_month || pk);
    let incomes = pds.map(pk => AD.periods[pk]?.income?.total_expected || 0);
    let expenses = pds.map(pk => AD.periods[pk]?.expenses?.total || 0);
    let fixed = pds.map(pk => AD.periods[pk]?.fixed_expenses?.total || 0);
    window._compChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels.map(l => LANG === 'ar' ? l : l.replace('إبريل','Apr').replace('مايو','May')),
        datasets: [
          { label: tr('compIncome'), data: incomes, backgroundColor: 'rgba(16,185,129,0.6)', borderColor: '#10b981', borderWidth: 1 },
          { label: tr('compExpenses'), data: expenses, backgroundColor: 'rgba(239,68,68,0.6)', borderColor: '#ef4444', borderWidth: 1 },
          { label: tr('compFixed'), data: fixed, backgroundColor: 'rgba(245,158,11,0.6)', borderColor: '#f59e0b', borderWidth: 1 },
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom', labels: { color: '#e2e8f0', font: { size: 9 } } } },
        scales: {
          x: { ticks: { color: '#94a3b8', font: { size: 9 } } },
          y: { ticks: { color: '#64748b', font: { size: 9 }, callback: v => v.toLocaleString() } }
        }
      }
    });
  }
}

// ===== DEBT REPAYMENT CALCULATOR =====
function renderDebtCalc() {
  const debts = AD.periods?.[curP]?.debts?.entries || [];
  let totalDebt = 0;
  debts.forEach(d => totalDebt += d.remaining || 0);
  
  if (totalDebt === 0) {
    document.getElementById('debtCalcSection').innerHTML = `<div style="text-align:center;color:var(--accent);padding:20px;font-size:13px">✅ ${LANG === 'ar' ? 'مفيش ديون 🎉' : 'No debts 🎉'}</div>`;
    return;
  }

  const plan = AD.debt_repayment_plan || {};
  let monthly = plan.monthly_payment || 0;

  let h = `<div style="background:var(--bg3);border-radius:var(--radius-sm);padding:14px">`;

  // Input
  h += `<div class="vc-input" style="margin-bottom:10px">
    <span style="font-size:12px">${tr('debtMonthLabel')}</span>
    <input type="number" id="debtMonthlyInput" value="${monthly || 5000}" min="0" step="500" style="width:100px;padding:7px 10px;border-radius:6px;border:1px solid var(--border);background:var(--bg4);color:var(--text);font-size:14px;font-weight:700;text-align:center;outline:none;font-family:inherit">
    <span style="font-size:11px;color:var(--text3)">EGP</span>
    <button onclick="calcDebtRepayment()" style="background:var(--accent);border:none;color:white;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:700;font-family:inherit;font-size:12px">${tr('debtCalcBtn')}</button>
  </div>`;

  // Results
  h += `<div id="debtResults" style="font-size:12px">`;

  if (monthly > 0) {
    let months = Math.ceil(totalDebt / monthly);
    let endMonth = months;
    let now = new Date();
    let targetDate = new Date(now.getFullYear(), now.getMonth() + months, 27);
    let monthsStr = targetDate.toLocaleString(LANG === 'ar' ? 'ar-EG' : 'en-US', { month: 'long', year: 'numeric' });

    // Per debt breakdown
    h += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:10px">`;
    debts.forEach(d => {
      let p = d.remaining || 0;
      let dMonths = Math.ceil(p / monthly);
      let pct = d.amount > 0 ? ((d.amount - d.remaining) / d.amount * 100).toFixed(0) : 0;
      h += `<div style="background:var(--bg4);border-radius:6px;padding:8px;border:1px solid var(--border)">
        <div style="font-weight:600;font-size:11px">${d.description}</div>
        <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text3);margin-top:2px">
          <span>${LANG === 'ar' ? 'متبقي' : 'Left'}: <strong style="color:var(--red)">${fmt(d.remaining)}</strong></span>
          <span>${LANG === 'ar' ? 'يسدد في' : 'Cleared in'}: <strong style="color:var(--accent)">${dMonths} ${LANG === 'ar' ? 'شهر' : 'mo'}</strong></span>
        </div>
        <div style="height:4px;border-radius:2px;background:var(--bg4);margin-top:4px;overflow:hidden">
          <div style="height:100%;width:${pct}%;background:var(--red);border-radius:2px"></div>
        </div>
      </div>`;
    });
    h += `</div>`;

    // Summary
    h += `<div style="background:var(--bg2);border:1px solid var(--accent);border-radius:var(--radius-sm);padding:12px;text-align:center">
      <div style="font-size:10px;color:var(--text3)">${LANG === 'ar' ? 'هتسد كل الديون في' : 'Debt-free in'}</div>
      <div style="font-size:22px;font-weight:800;color:var(--accent);margin:4px 0">${months} ${LANG === 'ar' ? 'شهر' : 'months'}</div>
      <div style="font-size:12px;color:var(--accent2)">📅 ${tr('debtFree')}: <strong>${monthsStr}</strong></div>
      <div style="font-size:10px;color:var(--text3);margin-top:4px">💰 ${fmt(monthly)}/${LANG === 'ar' ? 'شهر' : 'mo'} × ${months} ${LANG === 'ar' ? 'شهر' : 'mo'} = ${fmt(monthly * months)}</div>
    </div>`;
  } else {
    h += `<div style="text-align:center;color:var(--text3);padding:10px;font-size:12px">${tr('debtNoPayment')}</div>`;
  }

  h += `</div></div>`;
  document.getElementById('debtCalcSection').innerHTML = h;
}

function calcDebtRepayment() {
  const val = parseFloat(document.getElementById('debtMonthlyInput').value) || 0;
  AD.debt_repayment_plan = AD.debt_repayment_plan || {};
  AD.debt_repayment_plan.monthly_payment = val;
  renderDebtCalc();
}

// ===== GOAL TIMELINE =====
function addGoalTimeline() {
  // This is called inside goals tab rendering
  const goals = AD.goals || [];
  const sa = AD.periods?.[curP]?.salary_info?.salary_amount || 0;
  const fpT = AD.fixed_expenses_profile?.total || 0;
  const instT = AD.periods?.[curP]?.installments?.total_monthly || 0;
  const netPerMonth = sa - fpT - instT; // rough available
  
  let h = `<div style="margin-top:12px;background:var(--bg3);border-radius:var(--radius-sm);padding:12px;border:1px solid var(--border)">`;
  h += `<div style="font-size:12px;font-weight:700;margin-bottom:8px;color:var(--accent2)">📈 ${tr('goalTimeline')} <span style="font-size:9px;color:var(--text3)">${tr('projLabel')}</span></div>`;

  // Assume 30% of net can go to goals (after expenses, vezlo, etc)
  let monthlyAlloc = netPerMonth * 0.3;
  let remainingDebt = 27000; // total from debts
  // After debts, goals start
  
  let timelineHtml = '';
  let cumulative = 0;
  let monthCount = 0;
  let currentMonth = new Date();
  
  // First pay off debts
  if (remainingDebt > 0) {
    let debtMonths = Math.ceil(remainingDebt / monthlyAlloc);
    let targetD = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + debtMonths, 27);
    let labelD = targetD.toLocaleString(LANG === 'ar' ? 'ar-EG' : 'en-US', { month: 'short', year: 'numeric' });
    timelineHtml += `<div class="list-row" style="border-left:3px solid var(--red);padding-left:6px;margin-bottom:3px">
      <span><span style="color:var(--red);font-weight:700">💸 ${LANG === 'ar' ? 'سداد الديون' : 'Pay off debts'}</span> <span style="color:var(--text3);font-size:9px">${fmt(monthlyAlloc)}/${LANG === 'ar' ? 'شهر' : 'mo'}</span></span>
      <span style="color:var(--accent);font-weight:700">📅 ${labelD}</span>
    </div>`;
    monthCount = debtMonths;
    currentMonth.setMonth(currentMonth.getMonth() + debtMonths);
  }

  // Then each goal
  goals.forEach(g => {
    if (g.target <= 0 || g.priority <= 2) return; // skip debt goals (already handled) and apartment
    let need = g.target - g.saved;
    if (need <= 0) return;
    let gMonths = Math.ceil(need / monthlyAlloc);
    let targetG = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + gMonths, 27);
    let labelG = targetG.toLocaleString(LANG === 'ar' ? 'ar-EG' : 'en-US', { month: 'short', year: 'numeric' });
    let colors = ['#ef4444','#f59e0b','#3b82f6','#8b5cf6','#ec4899','#10b981'];
    let clr = colors[g.priority - 1] || '#64748b';
    timelineHtml += `<div class="list-row" style="border-left:3px solid ${clr};padding-left:6px;margin-bottom:3px">
      <span><span style="color:${clr};font-weight:700">${g.name}</span> <span style="color:var(--text3);font-size:9px">${fmt(need)} ${LANG === 'ar' ? 'متبقي' : 'left'}</span></span>
      <span style="color:var(--accent2);font-weight:700">📅 ${labelG}</span>
    </div>`;
    monthCount += gMonths;
    currentMonth.setMonth(currentMonth.getMonth() + gMonths);
  });

  if (!timelineHtml) {
    h += `<div style="text-align:center;color:var(--text3);padding:8px;font-size:11px">—</div>`;
  } else {
    h += timelineHtml;
    h += `<div style="font-size:9px;color:var(--text3);margin-top:6px;text-align:center">${LANG === 'ar' ? 'تقديري — على حسب كام هتحوش في الشهر' : 'Estimate — depends on actual monthly saving'}</div>`;
  }

  h += `</div>`;
  
  // Append to goals tab
  document.getElementById('goalsSection').innerHTML += h;
}

// ===== VEZLO TRACKER (per period) =====
function addVezloTracker() {
  const vt = AD.vezlo?.tracking || AD.periods?.[curP]?.vezlo_tracking;
  if (!vt) return;

  let h = `<div style="margin-top:10px;background:var(--bg3);border-radius:var(--radius-sm);padding:12px;border:1px solid var(--accent)">`;
  h += `<div style="font-size:13px;font-weight:700;margin-bottom:6px;color:var(--amber)">📊 ${tr('vezloTrack')}</div>`;
  
  let totalHours = 0, totalEarned = 0;
  // Sum all periods
  Object.entries(AD.periods || {}).forEach(([pk, p]) => {
    let v = p.vezlo_tracking;
    if (v) {
      totalHours += v.hours || 0;
      totalEarned += v.earned || 0;
    }
  });

  h += `<div class="list-row"><span>⏱️ ${tr('vezloHoursTotal')}</span><span class="amt green"><strong>${totalHours}</strong> ${LANG === 'ar' ? 'ساعة' : 'hrs'}</span></div>`;
  h += `<div class="list-row"><span>💰 ${tr('vezloEarned')}</span><span class="amt green"><strong>${fmt(totalEarned)}</strong></span></div>`;

  // Current period
  let cv = AD.periods?.[curP]?.vezlo_tracking;
  if (cv) {
    h += `<div style="margin-top:6px;background:var(--bg4);border-radius:6px;padding:8px;font-size:10px">`;
    h += `<div class="list-row" style="font-size:10px;padding:3px 0"><span>📅 ${LANG === 'ar' ? 'الفترة الحالية' : 'Current Period'}</span><span><strong>${cv.hours || 0}</strong> ${LANG === 'ar' ? 'ساعة' : 'hrs'} · <strong style="color:var(--accent)">${fmt(cv.earned || 0)}</strong></span></div>`;
    h += `</div>`;
  }

  h += `</div>`;

  // Append to vezlo tab
  document.getElementById('vezloSection').innerHTML += h;
}

// ===== QUICK EXPENSE FORM =====
function renderQuickExpense() {
  const categories = ['Food','Transport','Coffee','Bills','Shopping','Entertainment','Healthcare','Clothes','Electronics','Home','Other'];
  const whoOpts = ['Ahmed','Wife','House','Other'];
  const methods = ['CIB Account','Cash','Banque du Caire','Fawry Account','Vodafone Cash','QNB'];
  const catNames_ar = {'Food':'أكل','Transport':'مواصلات','Coffee':'قهوة','Bills':'فواتير','Shopping':'تسوق','Entertainment':'ترفيه','Healthcare':'صحة','Clothes':'هدوم','Electronics':'إلكترونيات','Home':'بيت','Other':'غيره'};
  const whoNames_ar = {'Ahmed':'أحمد','Wife':'مراتي','House':'البيت','Other':'غيره'};
  const methodNames_ar = {'CIB Account':'CIB','Cash':'كاش','Banque du Caire':'بنك القاهرة','Fawry Account':'فوري','Vodafone Cash':'فودافون كاش','QNB':'QNB'};

  let h = `<div style="background:var(--bg3);border-radius:var(--radius-sm);padding:14px">`;
  
  // Form
  h += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">`;

  // Item
  h += `<div style="grid-column:span 2"><label style="font-size:10px;color:var(--text3)">${tr('qeItem')}</label><input type="text" id="qeItemInput" placeholder="${LANG === 'ar' ? 'خضار, لبن, سجاير...' : 'Groceries, milk, ...'}" style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--border);background:var(--bg4);color:var(--text);font-size:13px;outline:none;font-family:inherit"></div>`;

  // Amount
  h += `<div><label style="font-size:10px;color:var(--text3)">${tr('qeAmount')}</label><input type="number" id="qeAmountInput" placeholder="250" min="1" style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--border);background:var(--bg4);color:var(--text);font-size:13px;font-weight:700;outline:none;font-family:inherit"></div>`;

  // Category
  h += `<div><label style="font-size:10px;color:var(--text3)">${tr('qeCategory')}</label><select id="qeCategoryInput" style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--border);background:var(--bg4);color:var(--text);font-size:12px;outline:none;font-family:inherit">`;
  categories.forEach(c => h += `<option value="${c}">${LANG === 'ar' ? catNames_ar[c] : c}</option>`);
  h += `</select></div>`;

  // Who
  h += `<div><label style="font-size:10px;color:var(--text3)">${tr('qeWho')}</label><select id="qeWhoInput" style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--border);background:var(--bg4);color:var(--text);font-size:12px;outline:none;font-family:inherit">`;
  whoOpts.forEach(w => h += `<option value="${w}">${LANG === 'ar' ? whoNames_ar[w] : w}</option>`);
  h += `</select></div>`;

  // Payment method
  h += `<div><label style="font-size:10px;color:var(--text3)">${tr('qeMethod')}</label><select id="qeMethodInput" style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--border);background:var(--bg4);color:var(--text);font-size:12px;outline:none;font-family:inherit">`;
  methods.forEach(m => h += `<option value="${m}">${LANG === 'ar' ? methodNames_ar[m] || m : m}</option>`);
  h += `</select></div>`;

  h += `</div>`;

  // Add button
  h += `<button onclick="addQuickExpense()" style="width:100%;padding:10px;margin-top:10px;border-radius:6px;border:none;background:var(--accent);color:white;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit">${tr('qeAdd')}</button>`;
  h += `<div id="qeStatus" style="font-size:11px;color:var(--accent);margin-top:6px;text-align:center"></div>`;
  h += `<div style="font-size:9px;color:var(--text3);margin-top:6px;text-align:center">💡 ${tr('qeNote')}</div>`;

  h += `</div>`;
  document.getElementById('quickExpenseSection').innerHTML = h;
}

function addQuickExpense() {
  const item = document.getElementById('qeItemInput').value.trim();
  const amount = parseFloat(document.getElementById('qeAmountInput').value);
  const category = document.getElementById('qeCategoryInput').value;
  const who = document.getElementById('qeWhoInput').value;
  const method = document.getElementById('qeMethodInput').value;
  const statusEl = document.getElementById('qeStatus');

  if (!item || !amount || amount <= 0) {
    statusEl.textContent = LANG === 'ar' ? '⚠️ اكتب البيان والمبلغ' : '⚠️ Enter item and amount';
    statusEl.style.color = 'var(--red)';
    return;
  }

  // Save to localStorage so it persists until refresh
  let localExpenses = JSON.parse(localStorage.getItem('blue_local_expenses') || '[]');
  localExpenses.push({
    date: new Date().toISOString().split('T')[0],
    item, amount, category, who, method,
    added_at: new Date().toISOString()
  });
  localStorage.setItem('blue_local_expenses', JSON.stringify(localExpenses));

  statusEl.textContent = `✅ ${fmt(amount)} — ${item}`;
  statusEl.style.color = 'var(--accent)';
  document.getElementById('qeItemInput').value = '';
  document.getElementById('qeAmountInput').value = '';
}

// ===== PDF EXPORT =====
function exportPDF() {
  if (!AD || !curP) return;
  const po = AD.periods[curP];
  const si = po.salary_info || {};
  const exp = po.expenses || {};
  const fix = po.fixed_expenses || {};
  const inst = po.installments || {};
  const debts = po.debts || {};
  const inc = po.income || {};
  const hb = po.home_budget || {};
  
  let text = '';
  let sep = '═══════════════════════════════\n';
  
  text += `🐋 Blue Finance Report\n`;
  text += `${si.salary_month || curP} — ${po.date_range?.start || '?'} → ${po.date_range?.end || '?'}\n`;
  text += sep;
  text += `💰 Salary: ${si.salary_amount || 0} EGP\n`;
  text += `📈 Expected Income: ${inc.total_expected || 0} EGP\n`;
  text += sep;
  text += `🏠 Fixed Expenses: ${fix.total || 0} EGP\n`;
  (fix.items || []).forEach(f => text += `  ${f.name}: ${f.amount} EGP\n`);
  text += sep;
  text += `💳 Installments: ${inst.total_monthly || 0} EGP\n`;
  (inst.items || []).forEach(i => text += `  ${i.name}: ${i.monthly} EGP/mo (${i.remaining_months}mo left)\n`);
  text += sep;
  text += `💰 Net After Obligations: ${(si.salary_amount||0) - (fix.total||0) - (inst.total_monthly||0)} EGP\n`;
  text += sep;
  if (hb.total_budget > 0) {
    text += `🏠 Home Budget: ${hb.spent_so_far || 0}/${hb.total_budget} EGP (${hb.total_budget - (hb.spent_so_far||0)} remaining)\n`;
    text += sep;
  }
  text += `📉 Expenses: ${exp.total || 0} EGP (${exp.count || 0} txns)\n`;
  (exp.items || []).forEach(t => text += `  ${t.date} | ${t.item} | ${t.amount} EGP | ${t.category} | ${t.who}\n`);
  text += sep;
  text += `💸 Debts: ${debts.total_i_owe || 0} EGP\n`;
  (debts.entries || []).forEach(d => text += `  ${d.description}: ${d.remaining}/${d.amount} EGP\n`);
  text += sep;
  text += `📱 Fawry Investment: ${AD.investments?.fawry_funds?.total_balance || 0} EGP\n`;
  text += sep;
  text += `📊 Net Flow: ${(inc.total_expected||0) - (exp.total||0) - (fix.total||0) - (inst.total_monthly||0)} EGP\n`;
  text += `Generated: ${new Date().toLocaleString()}\n`;
  text += `🐋 Blue Finance — Ahmed Khaled\n`;

  // Create download
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Blue_Finance_${curP}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

// ===== ADD EXPORT BUTTON TO HEADER =====
function addExportBtn() {
  const headerRight = document.querySelector('.header-right');
  if (headerRight && !document.getElementById('exportBtn')) {
    const btn = document.createElement('button');
    btn.id = 'exportBtn';
    btn.className = 'lang-btn';
    btn.innerHTML = '📄';
    btn.title = LANG === 'ar' ? 'تصدير تقرير' : 'Export Report';
    btn.onclick = exportPDF;
    headerRight.appendChild(btn);
  }
}

// ===== RENDER ALL NEW SECTIONS AFTER DATA LOADS =====
// Hook into the existing loadData by checking periodically
const checkInterval = setInterval(() => {
  if (AD && document.getElementById('content').style.display === 'block') {
    clearInterval(checkInterval);
    addExportBtn();
    renderComparison();
    renderDebtCalc();
    renderQuickExpense();
    addVezloTracker();
    addGoalTimeline();
  }
}, 500);
