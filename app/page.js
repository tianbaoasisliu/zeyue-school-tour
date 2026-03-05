const schools = [
  {
    name: "Brearley School",
    type: "女校 K-12",
    location: "Upper East Side",
    website: "https://www.brearley.org/",
    status: "red",
    system: "Ravenna",
    ageReq: "9月1日前满5岁",
    deadline2627: "11月中旬",
    notification2627: "2月初",
    notes: "2026-2027幼儿园名额已满（超容量）。竞争激烈。",
    contact: "admissions@brearley.org",
  },
  {
    name: "Chapin School",
    type: "女校 K-12",
    location: "Upper East Side",
    website: "https://www.chapin.edu/",
    status: "red",
    system: "Ravenna",
    ageReq: "9月1日前满5岁",
    deadline2627: "2025年11月中旬",
    notification2627: "2月初",
    notes: "秋季有Open House活动。联系人：Dianne Williams dwilliams@chapin.edu",
    contact: "admissions@chapin.edu",
  },
  {
    name: "Spence School",
    type: "女校 K-12",
    location: "Upper East Side",
    website: "https://www.spenceschool.org/",
    status: "red",
    system: "Ravenna",
    ageReq: "8月31日前满5岁",
    deadline2627: "11月中旬",
    notification2627: "2月初",
    notes: "Sibling/Legacy有提前通知资格",
    contact: "admissions@spenceschool.org",
  },
  {
    name: "Nightingale-Bamford School",
    type: "女校 K-12",
    location: "Upper East Side",
    website: "https://www.nightingale.org/",
    status: "red",
    system: "Ravenna",
    ageReq: "标准K要求",
    deadline2627: "11月中旬",
    notification2627: "2月初",
    notes: "严格著称的女子学校",
    contact: "admissions@nightingale.org",
  },
  {
    name: "Convent of the Sacred Heart",
    type: "女校 PreK-12",
    location: "Upper East Side",
    website: "https://www.cshnyc.org/",
    status: "red",
    system: "Ravenna",
    ageReq: "标准K要求",
    deadline2627: "ISAAGNY时间表",
    notification2627: "2月初",
    notes: "2026-2027 K学费$67,520。主入学年级为K。",
    contact: "admissions@cshnyc.org",
  },
  {
    name: "Dalton School",
    type: "男女合校 K-12",
    location: "Upper West Side",
    website: "https://www.dalton.org/",
    status: "red",
    system: "Finalsite/Online",
    ageReq: "5-6岁（6/7/8月出生可灵活选择）",
    deadline2627: "11月中旬",
    notification2627: "2月初",
    notes: "录取率约13%。Dalton Plan独特课程。主入学K/6/9年级。",
    contact: "admissions@dalton.org",
  },
  {
    name: "Trinity School",
    type: "男女合校 K-12",
    location: "Upper West Side",
    website: "https://www.trinityschoolnyc.org/",
    status: "red",
    system: "Ravenna",
    ageReq: "9月1日前满5岁",
    deadline2627: "11月中旬",
    notification2627: "2月初",
    notes: "历史悠久的顶级学校",
    contact: "admissions@trinityschoolnyc.org",
  },
  {
    name: "Horace Mann School",
    type: "男女合校 K-12",
    location: "Riverdale, Bronx",
    website: "https://www.horacemann.org/",
    status: "red",
    system: "Ravenna Portal",
    ageReq: "标准K要求",
    deadline2627: "11月中旬",
    notification2627: "2月初",
    notes: "主入学K/6/9年级。建议提前一年开始准备。",
    contact: "admissions@horacemann.org",
  },
  {
    name: "Riverdale Country School",
    type: "男女合校 PreK-12",
    location: "Riverdale, Bronx",
    website: "https://www.riverdale.edu/",
    status: "red",
    system: "Ravenna",
    ageReq: "标准K要求",
    deadline2627: "2025年11月17日",
    notification2627: "2月初",
    notes: "需校园参观+申请表",
    contact: "admission@riverdale.edu",
  },
  {
    name: "Ethical Culture Fieldston School",
    type: "男女合校 PreK-12",
    location: "Manhattan + Bronx (两校区)",
    website: "https://www.ecfs.org/",
    status: "red",
    system: "FSEnrollment Portal",
    ageReq: "标准K要求",
    deadline2627: "ISAAGNY时间表",
    notification2627: "2月初",
    notes: "Manhattan校区(Ethical Culture) + Bronx校区(Fieldston)",
    contact: "admissions@ecfs.org",
  },
  {
    name: "Columbia Grammar & Prep",
    type: "男女合校 PreK-12",
    location: "Upper West Side",
    website: "https://www.cgps.org/",
    status: "red",
    system: "Finalsite/Online",
    ageReq: "9月1日前满5岁",
    deadline2627: "2025年11月15日",
    notification2627: "2026年2月5日",
    notes: "K-5联系人：Janet Barrett jbarrett@cgps.org",
    contact: "admissions@cgps.org",
  },
  {
    name: "Friends Seminary",
    type: "男女合校 K-12",
    location: "Gramercy",
    website: "https://www.friendsseminary.org/",
    status: "red",
    system: "Ravenna",
    ageReq: "标准K要求",
    deadline2627: "2025年11月17日",
    notification2627: "2月初",
    notes: "K和9年级是主入学年级，其他年级名额有限",
    contact: "admissions@friendsseminary.org",
  },
  {
    name: "Bank Street School for Children",
    type: "男女合校 PreK-8",
    location: "Upper West Side",
    website: "https://school.bankstreet.edu/",
    status: "red",
    system: "Ravenna",
    ageReq: "9月1日前满5岁",
    deadline2627: "2025年12月1日",
    notification2627: "2026年2月5日",
    notes: "进步教育先驱。遵循ISAAGNY时间表。",
    contact: "janzelone@bankstreet.edu",
  },
  {
    name: "Village Community School",
    type: "男女合校 PreK-8",
    location: "West Village",
    website: "https://www.villagecommunityschool.org/",
    status: "red",
    system: "Ravenna",
    ageReq: "12月31日前满5岁",
    deadline2627: "ISAAGNY时间表",
    notification2627: "2月初",
    notes: "年龄截止日期比多数学校晚（12/31而非9/1）",
    contact: "admissions@villagecommunityschool.org",
  },
  {
    name: "Avenues: The World School",
    type: "男女合校 Toddler-12",
    location: "Chelsea",
    website: "https://www.avenues.org/ny/",
    status: "red",
    system: "Ravenna",
    ageReq: "标准K要求",
    deadline2627: "ISAAGNY时间表",
    notification2627: "2月初",
    notes: "全球教育网络。可跨校区（纽约/圣保罗）转学。",
    contact: "admissions@avenues.org",
  },
  {
    name: "Cathedral School",
    type: "男女合校 K-8",
    location: "Morningside Heights",
    website: "https://www.cathedralnyc.org/",
    status: "red",
    system: "Rolling（滚动制）",
    ageReq: "12月31日前满5岁",
    deadline2627: "滚动制，全年接受",
    notification2627: "滚动通知",
    notes: "11英亩校园。年龄截止12/31（比多数学校晚）。",
    contact: "admissions@cathedralnyc.org",
  },
  {
    name: "Birch Wathen Lenox",
    type: "男女合校 K-12",
    location: "Upper East Side",
    website: "https://www.bwl.org/",
    status: "red",
    system: "Ravenna",
    ageReq: "标准K要求",
    deadline2627: "ISAAGNY时间表",
    notification2627: "2025年2月6日",
    notes: "每年$700万+财务援助",
    contact: "admissions@bwl.org",
  },
  {
    name: "Caedmon School",
    type: "男女合校 Toddler-5年级",
    location: "Upper East Side",
    website: "https://www.caedmonschool.org/",
    status: "red",
    system: "Ravenna",
    ageReq: "标准K要求",
    deadline2627: "ISAAGNY时间表",
    notification2627: "2月初",
    notes: "Montessori教学法。20个月起招生。",
    contact: "admissions@caedmonschool.org",
  },
  {
    name: "Dwight School",
    type: "男女合校 PreK-12",
    location: "Manhattan",
    website: "https://www.dwight.edu/newyork",
    status: "red",
    system: "Ravenna",
    ageReq: "标准K要求",
    deadline2627: "2025年9月1日开放，12月1日截止",
    notification2627: "ISAAGNY时间表",
    notes: "IB课程（国际文凭）。Sibling/Legacy提前通知。",
    contact: "admissions@dwight.edu",
  },
  {
    name: "City & Country School",
    type: "男女合校 2岁-13岁",
    location: "West Village",
    website: "https://www.cityandcountry.org/",
    status: "red",
    system: "Ravenna",
    ageReq: "标准K要求",
    deadline2627: "滚动制，全年接受",
    notification2627: "滚动通知",
    notes: "进步教育先驱（1914年创办）。滚动制申请。",
    contact: "admissions@cityandcountry.org",
  },
  {
    name: "Calhoun School",
    type: "男女合校 PreK-12",
    location: "Upper West Side",
    website: "https://www.calhoun.org/",
    status: "red",
    system: "Ravenna",
    ageReq: "标准K要求",
    deadline2627: "仍接受申请（3月）",
    notification2627: "滚动通知",
    notes: "申请费$75（可豁免）。K-6提供免费校车或OMNY卡。",
    contact: "admissions@calhoun.org",
  },
  {
    name: "Speyer School",
    type: "男女合校 K-8（Gifted）",
    location: "Manhattan",
    website: "https://www.speyerschool.org/",
    status: "yellow",
    system: "Google Form",
    ageReq: "标准K要求",
    deadline2627: "ISAAGNY时间表",
    notification2627: "待定",
    notes: "NYC唯一K-8 gifted独立学校。2027-2028兴趣登记已开放。",
    contact: "admissions@speyerschool.org",
    actionUrl: "https://docs.google.com/forms/d/e/1FAIpQLScYGBpXo5qgxMK2aSkH701CoI8ANy3h-xZoFaUndF452-jW8A/viewform",
    actionLabel: "填写兴趣表单",
  },
];

const timeline = [
  { date: "2026年3月-8月", event: "研究学校、参加Spring Tour（如有）、订阅邮件列表", icon: "🔍" },
  { date: "2026年9月1日", event: "大部分学校申请开放（ISAAGNY统一时间）", icon: "📝" },
  { date: "2026年9月-10月", event: "参加Open House / 校园参观 / 信息会", icon: "🏫" },
  { date: "2026年11月中旬", event: "多数学校申请截止", icon: "⏰" },
  { date: "2026年12月-2027年1月", event: "补充材料、面试、考试", icon: "📋" },
  { date: "2027年2月初", event: "幼儿园录取通知", icon: "💌" },
  { date: "2027年2月中旬", event: "家长回复截止", icon: "✅" },
];

export default function Home() {
  const greenSchools = schools.filter(s => s.status === "green");
  const yellowSchools = schools.filter(s => s.status === "yellow");
  const redSchools = schools.filter(s => s.status === "red");

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', background: '#f8f9fa', minHeight: '100vh', color: '#1a1a1a' }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        a { color: #2563eb; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .container { max-width: 960px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 0 0 20px 20px; margin-bottom: 30px; }
        .header h1 { font-size: 28px; margin-bottom: 8px; }
        .header p { opacity: 0.9; font-size: 15px; }
        .badge { display: inline-block; padding: 3px 10px; border-radius: 12px; font-size: 12px; font-weight: 600; }
        .badge-red { background: #fee2e2; color: #dc2626; }
        .badge-yellow { background: #fef3c7; color: #d97706; }
        .badge-green { background: #d1fae5; color: #059669; }
        .card { background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); border: 1px solid #e5e7eb; }
        .card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .card h3 { font-size: 18px; margin-bottom: 6px; }
        .card-meta { font-size: 13px; color: #6b7280; margin-bottom: 10px; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 14px; }
        .info-item { padding: 6px 0; }
        .info-label { color: #6b7280; font-size: 12px; }
        .section-title { font-size: 20px; font-weight: 700; margin: 30px 0 16px; padding-left: 12px; border-left: 4px solid #2563eb; }
        .timeline { position: relative; padding-left: 30px; }
        .timeline-item { position: relative; padding-bottom: 20px; padding-left: 20px; border-left: 2px solid #e5e7eb; }
        .timeline-item:last-child { border-left: 2px solid transparent; }
        .timeline-dot { position: absolute; left: -10px; top: 2px; font-size: 18px; }
        .timeline-date { font-weight: 600; font-size: 14px; color: #2563eb; }
        .timeline-event { font-size: 14px; color: #4b5563; margin-top: 2px; }
        .action-btn { display: inline-block; padding: 8px 16px; background: #2563eb; color: white !important; border-radius: 8px; font-size: 13px; font-weight: 600; margin-top: 8px; }
        .action-btn:hover { background: #1d4ed8; text-decoration: none !important; }
        .notes { background: #f3f4f6; padding: 8px 12px; border-radius: 8px; font-size: 13px; color: #4b5563; margin-top: 8px; }
        .stats { display: flex; gap: 16px; justify-content: center; margin-top: 16px; flex-wrap: wrap; }
        .stat { background: rgba(255,255,255,0.15); padding: 12px 20px; border-radius: 10px; text-align: center; }
        .stat-num { font-size: 24px; font-weight: 700; }
        .stat-label { font-size: 12px; opacity: 0.8; }
        @media (max-width: 640px) {
          .info-grid { grid-template-columns: 1fr; }
          .header h1 { font-size: 22px; }
          .stats { gap: 8px; }
          .stat { padding: 8px 14px; }
        }
      `}</style>

      <div className="header">
        <h1>🎓 Zeyue 2027-2028 Kindergarten</h1>
        <p>NYC私立学校幼儿园申请信息追踪</p>
        <p style={{fontSize: 12, marginTop: 4, opacity: 0.7}}>最后更新：2026年3月5日</p>
        <div className="stats">
          <div className="stat">
            <div className="stat-num">{schools.length}</div>
            <div className="stat-label">追踪学校</div>
          </div>
          <div className="stat">
            <div className="stat-num">{yellowSchools.length}</div>
            <div className="stat-label">可行动</div>
          </div>
          <div className="stat">
            <div className="stat-num">{redSchools.length}</div>
            <div className="stat-label">等待中</div>
          </div>
        </div>
      </div>

      <div className="container">

        <div className="section-title">📅 2027-2028 申请时间线</div>
        <div className="card">
          <div className="timeline">
            {timeline.map((t, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot">{t.icon}</div>
                <div className="timeline-date">{t.date}</div>
                <div className="timeline-event">{t.event}</div>
              </div>
            ))}
          </div>
        </div>

        {yellowSchools.length > 0 && (
          <>
            <div className="section-title">🟡 可以行动的学校</div>
            {yellowSchools.map((s, i) => (
              <SchoolCard key={i} school={s} />
            ))}
          </>
        )}

        {greenSchools.length > 0 && (
          <>
            <div className="section-title">🟢 已开放申请/Tour</div>
            {greenSchools.map((s, i) => (
              <SchoolCard key={i} school={s} />
            ))}
          </>
        )}

        <div className="section-title">🔴 等待2027-2028信息发布（{redSchools.length}所）</div>
        <p style={{fontSize: 14, color: '#6b7280', marginBottom: 16}}>
          以下学校目前仍在处理2026-2027周期。2027-2028申请预计于2026年9月开放。
        </p>
        {redSchools.map((s, i) => (
          <SchoolCard key={i} school={s} />
        ))}

        <div className="card" style={{marginTop: 30, textAlign: 'center', color: '#6b7280', fontSize: 13}}>
          <p>📌 大部分学校遵循 <a href="https://isaagny.org" target="_blank">ISAAGNY</a> 统一时间表</p>
          <p style={{marginTop: 4}}>💡 建议现在就去各学校官网订阅邮件列表，第一时间获取2027-2028信息</p>
          <p style={{marginTop: 4}}>🔄 此页面会定期更新</p>
        </div>
      </div>
    </div>
  );
}

function SchoolCard({ school }) {
  const badgeClass = school.status === 'green' ? 'badge-green' : school.status === 'yellow' ? 'badge-yellow' : 'badge-red';
  const badgeText = school.status === 'green' ? '已开放' : school.status === 'yellow' ? '可行动' : '等待中';

  return (
    <div className="card">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8}}>
        <h3><a href={school.website} target="_blank">{school.name}</a></h3>
        <span className={`badge ${badgeClass}`}>{badgeText}</span>
      </div>
      <div className="card-meta">{school.type} · {school.location}</div>
      <div className="info-grid">
        <div className="info-item">
          <div className="info-label">申请系统</div>
          <div>{school.system}</div>
        </div>
        <div className="info-item">
          <div className="info-label">年龄要求</div>
          <div>{school.ageReq}</div>
        </div>
        <div className="info-item">
          <div className="info-label">参考截止日期</div>
          <div>{school.deadline2627}</div>
        </div>
        <div className="info-item">
          <div className="info-label">参考通知时间</div>
          <div>{school.notification2627}</div>
        </div>
      </div>
      {school.notes && <div className="notes">💡 {school.notes}</div>}
      {school.actionUrl && (
        <a href={school.actionUrl} target="_blank" className="action-btn">{school.actionLabel} →</a>
      )}
    </div>
  );
}
