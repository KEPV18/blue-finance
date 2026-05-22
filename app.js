// ===== LANGUAGE =====
let LANG = localStorage.getItem('blue_lang') || 'ar';
const TX = {
  en: {
    loginSub: 'Secure access — your data is private',
    username: 'Username', password: 'Password', signIn: 'Sign In',
    loginErr: '✕ Invalid username or password',
    loading: 'Loading...', noPeriods: 'No periods found',
    finance: 'Finance', langBtn: '🇪🇬 العربية',
    tabs: ['Overview', 'Cards & Debt', 'Goals 🎯', 'Vezlo ⚡', 'Transport', 'Transactions'],
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
  },
  ar: {
    loginSub: 'دخول آمن — بياناتك خاصة',
    username: 'اسم المستخدم', password: 'كلمة المرور', signIn: 'دخول',
    loginErr: '✕ اسم المستخدم أو كلمة المرور غلط',
    loading: 'جاري التحميل...', noPeriods: 'مفيش فترات',
    finance: 'المالية', langBtn: '🇬🇧 English',
    tabs: ['الرئيسية', '💳 فيزتي', '🎯 أهدافي', '⚡ Vezlo', '🚇 مواصلاتي', '📋 المعاملات'],
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
  }
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

  // ===== TAB 0 - OVERVIEW =====
  // Income
  let ih = '';
  (inc.sources || []).forEach(s => {
    let det = s.detail ? `<span style="font-size:9px;color:var(--text3)"> ${s.detail}</span>` : '';
    let ch = s.variable ? '⚡' : '';
    ih += `<div class="list-row"><span>${ch}${s.name} ${det}</span><span class="amt green">${fmt(s.amount)}</span></div>`;
  });
  ih += `<div class="list-row-total"><span>${tr('total')}</span><span class="amt">${fmt(eI)}</span></div>`;
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

  // Sister installment tracker
  const sisInst = AD.sister_installment || {};
  if (sisInst.remaining_months !== undefined) {
    let skipNote = '';
    let isSkip = (sisInst.skip_months || []).includes(curP);
    if (isSkip) {
      skipNote = `<div style="font-size:11px;color:var(--amber);margin-top:6px;padding:5px 8px;background:rgba(245,158,11,0.1);border-radius:6px">⏸️ ${LANG === 'ar' ? 'هتسكت شهر 6 — مش هتدفع' : 'Skipping month 6 — no payment'}</div>`;
    }
    let pctPaid = sisInst.original_total_months ? ((sisInst.months_paid_so_far || 0) / sisInst.original_total_months * 100).toFixed(0) : 0;
    let paidTotal = (sisInst.months_paid_so_far || 0) * (sisInst.monthly_amount || 0);
    let remainingTotal = (sisInst.remaining_months || 0) * (sisInst.monthly_amount || 0);
    let sisLabel = LANG === 'ar' ? 'قسط موبايل أختي' : "Sister's Phone Installment";
    let monthsLabel = LANG === 'ar' ? 'شهر' : 'mo';
    let paidLabel = LANG === 'ar' ? 'مدفوع' : 'Paid';
    let leftLabel = LANG === 'ar' ? 'متبقي' : 'Left';
    let savedLabel = LANG === 'ar' ? 'وفرت' : 'Collected';
    
    // Add sister section after debts panel
    let sisSection = document.getElementById('overviewSister');
    if (sisSection) {
      sisSection.innerHTML = `
        <div style="font-size:12px;font-weight:700;margin-bottom:6px">👩 ${sisLabel}</div>
        <div class="debt-item" style="border:1px solid var(--accent2)">
          <div class="row2"><span>💰 ${fmt(sisInst.monthly_amount)}/${monthsLabel}</span><span>${savedLabel}: <strong style="color:var(--accent)">${paidTotal > 0 ? fmt(paidTotal) : '0'}</strong> / ${fmt(remainingTotal + paidTotal)}</span></div>
          <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text3);margin-top:4px">
            <span>${paidLabel}: ${sisInst.months_paid_so_far || 0}/${sisInst.original_total_months} ${monthsLabel}</span>
            <span>${leftLabel}: <strong style="color:${sisInst.remaining_months <= 3 ? 'var(--amber)' : 'var(--accent)'}">${sisInst.remaining_months}</strong> ${monthsLabel}</span>
          </div>
          <div class="progress-bar"><div class="fill" style="width:${pctPaid}%;background:var(--accent2)"></div></div>
          ${skipNote}
          <div style="font-size:9px;color:var(--text3);margin-top:3px">${sisInst.notes || ''}</div>
        </div>`;
    }
  }

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

  // Fawry Investment panel
  const fawryInv = AD.investments?.fawry || {};
  if (fawryInv.current_balance) {
    let invLabel = LANG === 'ar' ? '📈 فوري استثمار' : '📈 Fawry Investment';
    let statusLabel = LANG === 'ar' ? 'حالة' : 'Status';
    let profitLabel = LANG === 'ar' ? 'الأرباح' : 'Profit';
    let balanceLabel = LANG === 'ar' ? 'الرصيد الحالي' : 'Current Balance';
    let typeLabel = LANG === 'ar' ? 'النوع' : 'Type';
    let invType = LANG === 'ar' ? 'استثمار' : 'Investment';
    let statusClr = fawryInv.status === 'profitable' ? 'var(--accent)' : 'var(--amber)';
    let statusEmoji = fawryInv.status === 'profitable' ? '✅' : '⚠️';
    document.getElementById('fawryInvestment').innerHTML = `
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">${invLabel}</div>
      <div class="list-row"><span>${typeLabel}</span><span>${fawryInv.type || invType}</span></div>
      <div class="list-row"><span>💰 ${balanceLabel}</span><span class="amt" style="color:var(--accent2);font-weight:700">${fmt(fawryInv.current_balance)}</span></div>
      <div class="list-row"><span>📈 ${profitLabel}</span><span class="amt green">+${fmt(fawryInv.profit)}</span></div>
      <div class="list-row"><span>📊 ${statusLabel}</span><span style="color:${statusClr};font-weight:600">${statusEmoji} ${fawryInv.status === 'profitable' ? (LANG === 'ar' ? 'مربح' : 'Profitable') : fawryInv.status}</span></div>
      ${fawryInv.notes ? `<div style="font-size:10px;color:var(--text3);margin-top:6px;padding:6px;background:var(--bg3);border-radius:6px">${fawryInv.notes}</div>` : ''}
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
  document.getElementById('periodSummary').innerHTML = `
    <div class="ps-item">
      <div class="ps-label">💰 ${tr('salary')}</div>
      <div class="ps-value green">${fmt(sa)}</div>
    </div>
    <div class="ps-divider"></div>
    <div class="ps-item">
      <div class="ps-label">💸 ${tr('fixed')} + ${tr('inst')}</div>
      <div class="ps-value red">${fmt(fpT + instT)}</div>
    </div>
    <div class="ps-divider"></div>
    <div class="ps-item">
      <div class="ps-label">📊 ${tr('netFlow')}</div>
      <div class="ps-value ${netFlow >= 0 ? 'green' : 'red'}">${fmt(netFlow)}</div>
    </div>
    <div class="ps-divider"></div>
    <div class="ps-item">
      <div class="ps-label">📈 ${tr('savings')}</div>
      <div class="ps-value ${savingsPct >= 0 ? 'green' : 'red'}">${savingsPct}%</div>
    </div>
    <div class="ps-divider"></div>
    <div class="ps-item">
      <div class="ps-label">📆 ${tr('daysToPay')}</div>
      <div class="ps-value blue">${daysToPay} ${LANG === 'ar' ? 'يوم' : 'days'}</div>
    </div>`;

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
