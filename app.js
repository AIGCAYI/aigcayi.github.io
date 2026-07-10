const cities = [
  {name:"海口",region:"北部",score:93,level:"高",focus:"总部经济 · 数字贸易",roles:["跨境运营","软件与产品","金融与专业服务"],sectors:["现代服务","数字经济","生物医药","商贸物流"],note:"江东新区、复兴城、高新区与综保区形成海南最完整的白领与产业岗位组合。",mapClass:"haikou"},
  {name:"三亚",region:"南部",score:90,level:"高",focus:"旅游消费 · 深海种业",roles:["酒店与文旅","科研辅助","总部与会展"],sectors:["旅游消费","现代服务","深海科技","南繁种业"],note:"中央商务区与崖州湾科技城双轮驱动，岗位从服务业延伸至科研和产业转化。",mapClass:"sanya"},
  {name:"儋州",region:"西部",score:88,level:"高",focus:"港航物流 · 先进制造",roles:["供应链运营","设备工程","国际贸易"],sectors:["港航制造","石化新材料","商贸物流","数字经济"],note:"洋浦是全省实体产业和外贸的重要承载区，工程、物流与贸易人才更具匹配度。",mapClass:"danzhou"},
  {name:"琼海",region:"东部",score:84,level:"较高",focus:"医疗健康 · 国际服务",roles:["临床与护理","医药器械","国际患者服务"],sectors:["医疗健康","旅游消费","现代农业"],note:"博鳌乐城聚集医疗机构、药械企业和国际服务，形成稀缺的医疗旅游职业链。",mapClass:"qionghai"},
  {name:"文昌",region:"东部",score:82,level:"较高",focus:"商业航天 · 数据应用",roles:["航天研发","电子信息","科普与文旅"],sectors:["航天科技","数字经济","旅游消费"],note:"国际航天城覆盖研发、装备、数据应用与航天文旅，技术岗位门槛较高、成长性强。",mapClass:"wenchang"},
  {name:"澄迈",region:"北部",score:78,level:"较高",focus:"软件生态 · 食品加工",roles:["软件开发","游戏与内容","园区运营"],sectors:["数字经济","食品加工","医疗健康"],note:"老城片区的软件、数字内容和园区服务岗位，与海口形成通勤就业圈。",mapClass:"chengmai"},
  {name:"陵水",region:"南部",score:76,level:"较高",focus:"国际教育 · 滨海文旅",roles:["高校教辅","国际项目运营","酒店服务"],sectors:["教育科研","旅游消费","现代服务"],note:"黎安国际教育创新试验区招生规模扩大，带动教育、后勤、生活服务与文旅需求。",mapClass:"lingshui"},
  {name:"东方",region:"西部",score:75,level:"较高",focus:"临港产业 · 清洁能源",roles:["化工与材料","海工装备","安全与环保"],sectors:["港航制造","绿色能源","石化新材料"],note:"临港产业园聚焦石化新材料、海洋装备和低碳产业，适合工程技术型人才。",mapClass:"dongfang"},
  {name:"万宁",region:"东部",score:72,level:"成长",focus:"冲浪文旅 · 咖啡产业",roles:["文旅运营","新媒体营销","农产品品牌"],sectors:["旅游消费","现代农业","体育赛事"],note:"滨海度假、冲浪赛事和兴隆咖啡共同创造季节性与品牌运营机会。",mapClass:"wanning"},
  {name:"昌江",region:"西部",score:69,level:"成长",focus:"清洁能源 · 工业运维",roles:["能源运维","质量安全","工业配套"],sectors:["绿色能源","港航制造","生态文旅"],note:"清洁能源与工业配套是主要增量，岗位更偏工程、运维与安全管理。",mapClass:"changjiang"},
  {name:"临高",region:"西部",score:67,level:"成长",focus:"渔业加工 · 冷链物流",roles:["水产加工","冷链运营","乡村电商"],sectors:["现代农业","商贸物流","海洋渔业"],note:"海洋渔业、农产品加工和冷链物流更适合技能型与本地供应链人才。",mapClass:"lingao"},
  {name:"定安",region:"北部",score:65,level:"成长",focus:"食品加工 · 城郊服务",roles:["食品生产","质量管理","电商运营"],sectors:["食品加工","现代农业","现代服务"],note:"依托海口经济圈，食品加工、农业品牌与城郊生活服务提供稳定机会。",mapClass:"dingan"},
  {name:"乐东",region:"南部",score:64,level:"成长",focus:"热带农业 · 农旅融合",roles:["种植技术","农产品销售","仓储物流"],sectors:["现代农业","南繁种业","商贸物流"],note:"热带水果、南繁相关服务和农产品流通构成主要就业面。",mapClass:"ledong"},
  {name:"保亭",region:"南部",score:62,level:"特色",focus:"雨林康养 · 旅游服务",roles:["康养服务","景区运营","酒店餐饮"],sectors:["生态文旅","医疗健康","现代农业"],note:"机会以雨林旅游、酒店、康养和民族文化体验为主，旺季需求更明显。",mapClass:"baoting"},
  {name:"五指山",region:"中部",score:61,level:"特色",focus:"生态文旅 · 公共服务",roles:["教育医疗","生态研学","基层服务"],sectors:["生态文旅","公共服务","教育科研"],note:"中部核心城市，岗位集中在教育医疗、公共服务、生态研学与特色农业。",mapClass:"wuzhishan"},
  {name:"屯昌",region:"中部",score:59,level:"特色",focus:"农产品加工 · 乡村服务",roles:["农业技术","食品加工","基层项目"],sectors:["现代农业","食品加工","公共服务"],note:"更适合农业、食品加工、县域商业和乡村振兴项目型求职者。",mapClass:"tunchang"},
  {name:"琼中",region:"中部",score:58,level:"特色",focus:"生态农业 · 体育文旅",roles:["生态保护","农旅运营","体育培训"],sectors:["生态文旅","现代农业","公共服务"],note:"生态资源、女足品牌和乡村旅游带来小而专的项目机会。",mapClass:"qiongzhong"},
  {name:"白沙",region:"中部",score:56,level:"特色",focus:"橡胶茶业 · 生态农业",roles:["农业技术","品牌销售","基层服务"],sectors:["现代农业","生态文旅","公共服务"],note:"岗位以橡胶、茶业、特色农业和基层公共服务为主，数量有限但本地匹配度高。",mapClass:"baisha"},
  {name:"三沙",region:"海岛",score:48,level:"特色",focus:"海洋监测 · 公共服务",roles:["海洋科研","工程保障","公共服务"],sectors:["海洋科技","公共服务"],note:"公开市场岗位稀少，以公共机构、海洋监测和工程保障为主，需以专项公告为准。",mapClass:"sansha"}
];

const map = document.querySelector("#map");
const detail = document.querySelector("#city-detail");
const grid = document.querySelector("#city-grid");
const query = document.querySelector("#query");
const region = document.querySelector("#region");
const sector = document.querySelector("#sector");
const count = document.querySelector("#count");
const empty = document.querySelector("#empty");
let activeCity = "海口";

const tags = values => values.map(value => `<span>${value}</span>`).join("");

function setActive(name, scroll = false) {
  activeCity = name;
  document.querySelectorAll(".city-pin").forEach(pin => pin.classList.toggle("active", pin.dataset.city === name));
  const city = cities.find(item => item.name === name) || cities[0];
  detail.innerHTML = `<div class="detail-head"><span>${city.region}站 · ${String(cities.indexOf(city)+1).padStart(2,"0")}</span><b class="level level-${city.level}">${city.level}机会</b></div><h3>${city.name}</h3><p class="city-focus">${city.focus}</p><div class="score-row"><span>机会指数</span><strong>${city.score}</strong><small>/ 100</small></div><div class="score-track"><i style="width:${city.score}%"></i></div><p class="city-note">${city.note}</p><div class="tag-group">${tags(city.sectors)}</div><div class="roles"><small>适合搜索的岗位关键词</small>${city.roles.map(role=>`<b>${role}</b>`).join("")}</div><a href="https://zhaopin.hainan.gov.cn/" target="_blank" rel="noreferrer">去官方平台搜索“${city.name}” ↗</a>`;
  if (scroll) document.querySelector("#atlas").scrollIntoView({behavior:"smooth"});
}

cities.forEach(city => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `city-pin ${city.mapClass}`;
  button.dataset.city = city.name;
  button.setAttribute("aria-label", `查看${city.name}就业机会`);
  button.innerHTML = `<i></i>${city.name}`;
  button.addEventListener("click", () => setActive(city.name));
  map.appendChild(button);
});

function renderCities() {
  const keyword = query.value.trim().toLowerCase();
  const filtered = cities.filter(city => {
    const matchesRegion = region.value === "全部区域" || city.region === region.value;
    const matchesSector = sector.value === "全部赛道" || city.sectors.includes(sector.value);
    const haystack = [city.name,city.focus,city.note,...city.roles,...city.sectors].join(" ").toLowerCase();
    return matchesRegion && matchesSector && (!keyword || haystack.includes(keyword));
  });
  count.textContent = filtered.length;
  grid.hidden = filtered.length === 0;
  empty.hidden = filtered.length !== 0;
  grid.innerHTML = filtered.map((city,index)=>`<article class="city-card"><div class="card-top"><span>${String(index+1).padStart(2,"0")} · ${city.region}</span><b>${city.score}</b></div><h3>${city.name}</h3><p class="city-focus">${city.focus}</p><p>${city.note}</p><div class="mini-track"><i style="width:${city.score}%"></i></div><div class="tag-group">${tags(city.sectors.slice(0,3))}</div><button type="button" data-detail="${city.name}">查看城市详情 →</button></article>`).join("");
  grid.querySelectorAll("[data-detail]").forEach(button => button.addEventListener("click",()=>setActive(button.dataset.detail,true)));
}

function resetFilters(){ query.value=""; region.value="全部区域"; sector.value="全部赛道"; renderCities(); }
query.addEventListener("input",renderCities);
region.addEventListener("change",renderCities);
sector.addEventListener("change",renderCities);
document.querySelector("#reset").addEventListener("click",resetFilters);
document.querySelector("#empty-reset").addEventListener("click",resetFilters);
setActive(activeCity);
renderCities();

