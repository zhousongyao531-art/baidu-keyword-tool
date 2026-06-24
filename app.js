const channels = [
  { id: "ai", name: "AI智能拓词", icon: "✦", className: "channel-ai" },
  { id: "web", name: "全网抓取", icon: "⌕", className: "channel-web" },
  { id: "competitor", name: "竞品词", icon: "⌕", className: "channel-competitor" },
  { id: "industry", name: "行业词库", icon: "⌕", className: "channel-industry" },
  { id: "synonym", name: "同义词", icon: "⌕", className: "channel-synonym" },
  { id: "trend", name: "热门趋势", icon: "⌕", className: "channel-trend" },
  { id: "qa", name: "问答平台", icon: "⌕", className: "channel-qa" },
  { id: "ecommerce", name: "电商平台", icon: "⌕", className: "channel-ecommerce" }
];

const channelConfig = {
  ai: {
    source: "AI智能拓词",
    category: "升学规划",
    intent: "咨询",
    matchType: "短语匹配",
    scoreBase: 96,
    patterns: ["{seed}规划方案", "{seed}怎么选择", "{seed}一对一咨询", "{seed}全流程指导", "{seed}避坑指南", "{seed}申请条件", "{seed}适合人群", "{seed}定制服务", "{seed}智能推荐", "{seed}注意事项"],
    reason: "AI根据搜索意图生成，适合做核心广告词扩展"
  },
  web: {
    source: "全网抓取",
    category: "搜索长尾",
    intent: "了解",
    matchType: "智能匹配",
    scoreBase: 91,
    patterns: ["{seed}怎么弄", "{seed}需要准备什么", "{seed}流程", "{seed}时间安排", "{seed}经验分享", "{seed}最新政策", "{seed}常见问题", "{seed}入口", "{seed}详细步骤", "{seed}官方信息"],
    reason: "模拟全网搜索语料抓取，偏长尾和信息检索需求"
  },
  competitor: {
    source: "竞品词",
    category: "商业转化",
    intent: "购买",
    matchType: "精确匹配",
    scoreBase: 94,
    patterns: ["{seed}机构", "{seed}哪家好", "{seed}服务", "{seed}培训班", "{seed}辅导机构", "{seed}排名", "{seed}价格", "{seed}收费标准", "{seed}品牌推荐", "{seed}在线咨询"],
    reason: "模拟竞品广告词结构，偏高商业意向"
  },
  industry: {
    source: "行业词库",
    category: "行业标准",
    intent: "咨询",
    matchType: "短语匹配",
    scoreBase: 89,
    patterns: ["{seed}指导", "{seed}方案", "{seed}服务中心", "{seed}专业咨询", "{seed}评估", "{seed}系统", "{seed}测评", "{seed}报名", "{seed}资料", "{seed}课程"],
    reason: "来自行业词库模板，适合补充标准品类词"
  },
  synonym: {
    source: "同义词",
    category: "近义表达",
    intent: "了解",
    matchType: "短语匹配",
    scoreBase: 86,
    patterns: ["{seed}替代表达", "{seed}相关词", "{seed}近义需求", "{seed}同类服务", "{seed}解决方案", "{seed}咨询指导", "{seed}服务推荐", "{seed}帮助", "{seed}顾问", "{seed}规划"],
    reason: "通过近义表达拓展，覆盖不同搜索说法"
  },
  trend: {
    source: "热门趋势",
    category: "热点趋势",
    intent: "了解",
    matchType: "智能匹配",
    scoreBase: 88,
    patterns: ["2026{seed}时间", "2026{seed}政策", "2026{seed}新变化", "今年{seed}怎么做", "{seed}最新消息", "{seed}热点", "{seed}趋势", "{seed}时间表", "{seed}截止时间", "{seed}热门问题"],
    reason: "模拟趋势词来源，适合承接季节性和热点流量"
  },
  qa: {
    source: "问答平台",
    category: "问题需求",
    intent: "咨询",
    matchType: "短语匹配",
    scoreBase: 87,
    patterns: ["{seed}怎么办", "{seed}有必要吗", "{seed}靠谱吗", "{seed}怎么收费", "{seed}要注意什么", "{seed}失败怎么办", "{seed}怎么提高成功率", "{seed}适合哪些人", "{seed}能解决什么问题", "{seed}哪里咨询"],
    reason: "模拟问答平台真实提问，便于发现用户痛点"
  },
  ecommerce: {
    source: "电商平台",
    category: "购买意图",
    intent: "购买",
    matchType: "精确匹配",
    scoreBase: 90,
    patterns: ["{seed}服务购买", "{seed}套餐", "{seed}优惠", "{seed}课程价格", "{seed}在线服务", "{seed}顾问套餐", "{seed}预约", "{seed}低价", "{seed}付费咨询", "{seed}购买入口"],
    reason: "模拟电商平台搜索词，偏强转化和价格比较"
  }
};

const regions = ["北京", "上海", "广州", "深圳", "杭州", "南京", "成都", "武汉", "西安", "重庆", "天津", "苏州", "郑州", "长沙", "青岛", "宁波", "佛山", "合肥", "济南", "厦门", "无锡", "东莞", "福州", "昆明"];
const audiences = ["家长", "学生", "高三", "复读生", "艺考生", "本地", "线上", "一对一", "低分段", "中高分段"];
const qualifiers = ["免费", "专业", "靠谱", "精准", "快速", "官方", "最新", "高性价比", "口碑好", "附近"];
const intentSuffixes = ["咨询", "服务", "机构", "老师", "平台", "系统", "方案", "价格", "排名", "电话", "入口", "指南"];

const state = {
  results: [],
  selectedIds: new Set(),
  stats: {
    removedDuplicateCount: 0,
    removedExistingCount: 0,
    targetCount: 0,
    candidateTotal: 0
  }
};

const storageKey = "baiduKeywordToolStatic.v1";

const elements = {
  seedKeywords: document.querySelector("#seedKeywords"),
  existingKeywords: document.querySelector("#existingKeywords"),
  targetCount: document.querySelector("#targetCount"),
  channelList: document.querySelector("#channelList"),
  toggleChannels: document.querySelector("#toggleChannels"),
  expandButton: document.querySelector("#expandButton"),
  exportButton: document.querySelector("#exportButton"),
  deleteButton: document.querySelector("#deleteButton"),
  clearButton: document.querySelector("#clearButton"),
  sourceFilter: document.querySelector("#sourceFilter"),
  keywordSearch: document.querySelector("#keywordSearch"),
  sortMode: document.querySelector("#sortMode"),
  selectAllRows: document.querySelector("#selectAllRows"),
  resultBody: document.querySelector("#resultBody"),
  summaryText: document.querySelector("#summaryText"),
  statusMessage: document.querySelector("#statusMessage")
};

function parseLines(value) {
  return String(value || "")
    .split(/\r?\n|,|，|;|；/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeKeyword(keyword) {
  return String(keyword || "")
    .trim()
    .replace(/\s+/g, "")
    .replace(/[，,。.!！?？、;；:："'“”‘’()（）【】\[\]{}]/g, "")
    .toLowerCase();
}

function buildKeywordVariant(base, variantIndex) {
  if (variantIndex === 0) return base;

  const region = regions[variantIndex % regions.length];
  const audience = audiences[Math.floor(variantIndex / regions.length) % audiences.length];
  const qualifier = qualifiers[Math.floor(variantIndex / (regions.length * audiences.length)) % qualifiers.length];
  const intent = intentSuffixes[Math.floor(variantIndex / (regions.length * audiences.length * qualifiers.length)) % intentSuffixes.length];
  const mode = variantIndex % 10;

  if (mode === 0) return `${region}${base}${intent}`;
  if (mode === 1) return `${base}${region}${intent}`;
  if (mode === 2) return `${region}${base}`;
  if (mode === 3) return `${base}${region}`;
  if (mode === 4) return `${audience}${base}${intent}`;
  if (mode === 5) return `${base}${audience}${intent}`;
  if (mode === 6) return `${qualifier}${base}${region}`;
  if (mode === 7) return `${base}${qualifier}${intent}`;
  if (mode === 8) return `${region}${base}${intent}`;
  return `${qualifier}${region}${base}${audience}`;
}

function generateForChannel(channel, seedKeywords, targetCount) {
  const config = channelConfig[channel];
  const seeds = seedKeywords.length ? seedKeywords : ["高考", "志愿", "复读", "专业选择"];
  const safeTarget = Math.max(10, Math.min(Number(targetCount) || 100, 10000));
  const rows = [];
  const seen = new Set();
  let cursor = 0;
  const maxAttempts = safeTarget * 40;

  while (rows.length < safeTarget && cursor < maxAttempts) {
    const seed = seeds[cursor % seeds.length];
    const pattern = config.patterns[Math.floor(cursor / seeds.length) % config.patterns.length];
    const base = pattern.replace("{seed}", seed);
    const variantIndex = Math.floor(cursor / (seeds.length * config.patterns.length));
    const keyword = buildKeywordVariant(base, variantIndex);
    const key = normalizeKeyword(keyword);

    if (key && !seen.has(key)) {
      seen.add(key);
      const score = Math.max(60, config.scoreBase - ((rows.length + variantIndex) % 18));
      rows.push({
        keyword,
        source: config.source,
        category: config.category,
        intent: config.intent,
        matchType: config.matchType,
        score,
        reason: `${config.reason}，基于种子词"${seed}"拓展`
      });
    }

    cursor += 1;
  }

  return rows;
}

function expandKeywordsLocally(payload) {
  const seedKeywords = parseLines(payload.seedKeywords);
  const existingKeywords = new Set(parseLines(payload.existingKeywords).map(normalizeKeyword));
  const selectedChannels = Array.isArray(payload.channels) && payload.channels.length
    ? payload.channels.filter((channel) => channelConfig[channel])
    : Object.keys(channelConfig);
  const targetCount = Math.max(10, Math.min(Number(payload.targetCount) || 100, 10000));
  const perChannelPool = Math.min(
    10000,
    Math.max(targetCount, Math.ceil(targetCount / Math.max(selectedChannels.length, 1)) + existingKeywords.size + 100)
  );
  const channelPools = selectedChannels.map((channel) => ({
    items: generateForChannel(channel, seedKeywords, perChannelPool),
    cursor: 0
  }));
  const seen = new Set();
  const results = [];
  let removedDuplicateCount = 0;
  let removedExistingCount = 0;

  while (results.length < targetCount && channelPools.some((pool) => pool.cursor < pool.items.length)) {
    for (const pool of channelPools) {
      while (pool.cursor < pool.items.length) {
        const item = pool.items[pool.cursor];
        pool.cursor += 1;
        const key = normalizeKeyword(item.keyword);

        if (existingKeywords.has(key)) {
          removedExistingCount += 1;
          continue;
        }

        if (seen.has(key)) {
          removedDuplicateCount += 1;
          continue;
        }

        seen.add(key);
        results.push(item);
        break;
      }

      if (results.length >= targetCount) break;
    }
  }

  results.sort((a, b) => b.score - a.score || a.keyword.localeCompare(b.keyword, "zh-Hans-CN"));
  return {
    total: Math.min(results.length, targetCount),
    targetCount,
    candidateTotal: channelPools.reduce((sum, pool) => sum + pool.items.length, 0),
    removedDuplicateCount,
    removedExistingCount,
    results: results.slice(0, targetCount)
  };
}

function createId(item, index) {
  return `${item.keyword}-${item.source}-${index}`;
}

function renderChannels() {
  elements.channelList.innerHTML = channels
    .map((channel) => `
      <label class="channel-item">
        <input type="checkbox" name="channel" value="${channel.id}" checked>
        <span class="channel-icon ${channel.className}" aria-hidden="true">${channel.icon}</span>
        <span>${channel.name}</span>
      </label>
    `)
    .join("");
}

function getSelectedChannels() {
  return [...document.querySelectorAll('input[name="channel"]:checked')].map((input) => input.value);
}

function setStatus(message, type = "normal") {
  elements.statusMessage.textContent = message;
  elements.statusMessage.classList.toggle("error", type === "error");
}

function setLoading(isLoading) {
  document.body.classList.toggle("is-loading", isLoading);
  elements.expandButton.disabled = isLoading;
  elements.expandButton.innerHTML = isLoading
    ? '<span class="button-icon" aria-hidden="true">...</span> 拓词中'
    : '<span class="button-icon" aria-hidden="true">✦</span> 开始拓词';
}

function saveState() {
  const payload = {
    seedKeywords: elements.seedKeywords.value,
    existingKeywords: elements.existingKeywords.value,
    targetCount: elements.targetCount.value,
    checkedChannels: getSelectedChannels(),
    results: state.results,
    stats: state.stats
  };
  localStorage.setItem(storageKey, JSON.stringify(payload));
}

function restoreState() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return;

  try {
    const payload = JSON.parse(raw);
    elements.seedKeywords.value = payload.seedKeywords ?? elements.seedKeywords.value;
    elements.existingKeywords.value = payload.existingKeywords ?? "";
    elements.targetCount.value = payload.targetCount ?? "100";
    state.results = Array.isArray(payload.results) ? payload.results : [];
    state.stats = payload.stats || state.stats;

    if (Array.isArray(payload.checkedChannels)) {
      document.querySelectorAll('input[name="channel"]').forEach((input) => {
        input.checked = payload.checkedChannels.includes(input.value);
      });
    }
  } catch {
    localStorage.removeItem(storageKey);
  }
}

function updateSourceFilter() {
  const current = elements.sourceFilter.value;
  const sources = [...new Set(state.results.map((item) => item.source))];
  elements.sourceFilter.innerHTML = '<option value="all">全部来源</option>' + sources
    .map((source) => `<option value="${escapeHtml(source)}">${escapeHtml(source)}</option>`)
    .join("");
  elements.sourceFilter.value = sources.includes(current) ? current : "all";
}

function getVisibleResults() {
  const source = elements.sourceFilter.value;
  const search = elements.keywordSearch.value.trim().toLowerCase();
  const sorted = state.results
    .filter((item) => source === "all" || item.source === source)
    .filter((item) => !search || item.keyword.toLowerCase().includes(search))
    .slice();

  if (elements.sortMode.value === "scoreAsc") {
    sorted.sort((a, b) => a.score - b.score);
  } else if (elements.sortMode.value === "keywordAsc") {
    sorted.sort((a, b) => a.keyword.localeCompare(b.keyword, "zh-Hans-CN"));
  } else {
    sorted.sort((a, b) => b.score - a.score);
  }

  return sorted;
}

function renderResults() {
  updateSourceFilter();
  const visible = getVisibleResults();
  elements.exportButton.disabled = state.results.length === 0;
  elements.clearButton.disabled = state.results.length === 0;
  elements.deleteButton.disabled = state.selectedIds.size === 0;

  if (!state.results.length) {
    elements.summaryText.textContent = "还没有结果，输入关键词后点击开始拓词。";
  } else {
    elements.summaryText.textContent = `共 ${state.results.length} 个关键词，已去重 ${state.stats.removedDuplicateCount} 个，过滤已有词 ${state.stats.removedExistingCount} 个。`;
  }

  if (!visible.length) {
    elements.resultBody.innerHTML = `
      <tr class="empty-row">
        <td colspan="9">${state.results.length ? "当前筛选条件下没有结果" : "暂无关键词结果"}</td>
      </tr>
    `;
    elements.selectAllRows.checked = false;
    elements.selectAllRows.indeterminate = false;
    return;
  }

  elements.resultBody.innerHTML = visible
    .map((item, index) => `
      <tr>
        <td class="check-col">
          <input type="checkbox" data-row-id="${escapeHtml(item.id)}" ${state.selectedIds.has(item.id) ? "checked" : ""} aria-label="选择 ${escapeHtml(item.keyword)}">
        </td>
        <td>${index + 1}</td>
        <td class="keyword-cell">${escapeHtml(item.keyword)}</td>
        <td><span class="source-pill">${escapeHtml(item.source)}</span></td>
        <td>${escapeHtml(item.category)}</td>
        <td><span class="intent-pill">${escapeHtml(item.intent)}</span></td>
        <td>${escapeHtml(item.matchType)}</td>
        <td><span class="score-pill">${item.score}</span></td>
        <td>${escapeHtml(item.reason)}</td>
      </tr>
    `)
    .join("");

  const visibleIds = visible.map((item) => item.id);
  const selectedVisibleCount = visibleIds.filter((id) => state.selectedIds.has(id)).length;
  elements.selectAllRows.checked = selectedVisibleCount === visibleIds.length;
  elements.selectAllRows.indeterminate = selectedVisibleCount > 0 && selectedVisibleCount < visibleIds.length;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function expandKeywords() {
  const seedKeywords = parseLines(elements.seedKeywords.value);
  if (!seedKeywords.length) {
    setStatus("请至少输入 1 个种子关键词。", "error");
    return;
  }

  const selectedChannels = getSelectedChannels();
  if (!selectedChannels.length) {
    setStatus("请至少选择 1 个拓词渠道。", "error");
    return;
  }

  setLoading(true);
  setStatus("正在生成关键词...");

  setTimeout(() => {
    const targetCount = Math.max(10, Math.min(Number(elements.targetCount.value) || 100, 10000));
    elements.targetCount.value = String(targetCount);

    const data = expandKeywordsLocally({
      seedKeywords,
      existingKeywords: parseLines(elements.existingKeywords.value),
      targetCount,
      channels: selectedChannels
    });

    state.results = data.results.map((item, index) => ({
      ...item,
      id: createId(item, index)
    }));
    state.selectedIds.clear();
    state.stats = {
      removedDuplicateCount: data.removedDuplicateCount || 0,
      removedExistingCount: data.removedExistingCount || 0,
      targetCount: data.targetCount || targetCount,
      candidateTotal: data.candidateTotal || 0
    };

    setStatus(`拓词完成，返回 ${state.results.length} / 目标 ${state.stats.targetCount} 个关键词。`);
    saveState();
    renderResults();
    setLoading(false);
  }, 80);
}

function exportExcel() {
  if (!state.results.length) return;

  const header = ["关键词", "来源渠道", "分类", "用户意图", "推荐匹配方式", "相关性评分", "推荐理由"];
  const rows = state.results.map((item) => [
    item.keyword,
    item.source,
    item.category,
    item.intent,
    item.matchType,
    item.score,
    item.reason
  ]);
  const tableRows = [header, ...rows]
    .map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`)
    .join("");
  const workbook = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head><meta charset="UTF-8"></head>
      <body><table>${tableRows}</table></body>
    </html>
  `;
  const blob = new Blob(["\ufeff" + workbook], { type: "application/vnd.ms-excel;charset=utf-8" });
  const link = document.createElement("a");
  const now = new Date();
  const stamp = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
    "_",
    String(now.getHours()).padStart(2, "0"),
    String(now.getMinutes()).padStart(2, "0")
  ].join("");

  link.href = URL.createObjectURL(blob);
  link.download = `百度搜索广告关键词拓展结果_${stamp}.xls`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
  setStatus("Excel 文档已导出。");
}

function deleteSelected() {
  if (!state.selectedIds.size) return;
  state.results = state.results.filter((item) => !state.selectedIds.has(item.id));
  state.selectedIds.clear();
  saveState();
  renderResults();
  setStatus("已删除选中的关键词。");
}

function clearResults() {
  state.results = [];
  state.selectedIds.clear();
  state.stats = {
    removedDuplicateCount: 0,
    removedExistingCount: 0,
    targetCount: 0,
    candidateTotal: 0
  };
  saveState();
  renderResults();
  setStatus("结果已清空。");
}

function toggleChannels() {
  const inputs = [...document.querySelectorAll('input[name="channel"]')];
  const allChecked = inputs.every((input) => input.checked);
  inputs.forEach((input) => {
    input.checked = !allChecked;
  });
  elements.toggleChannels.textContent = allChecked ? "全选" : "取消全选";
  saveState();
}

function bindEvents() {
  elements.expandButton.addEventListener("click", expandKeywords);
  elements.exportButton.addEventListener("click", exportExcel);
  elements.deleteButton.addEventListener("click", deleteSelected);
  elements.clearButton.addEventListener("click", clearResults);
  elements.toggleChannels.addEventListener("click", toggleChannels);

  elements.resultBody.addEventListener("change", (event) => {
    const input = event.target.closest("[data-row-id]");
    if (!input) return;
    if (input.checked) {
      state.selectedIds.add(input.dataset.rowId);
    } else {
      state.selectedIds.delete(input.dataset.rowId);
    }
    renderResults();
  });

  elements.selectAllRows.addEventListener("change", () => {
    const visibleIds = getVisibleResults().map((item) => item.id);
    visibleIds.forEach((id) => {
      if (elements.selectAllRows.checked) {
        state.selectedIds.add(id);
      } else {
        state.selectedIds.delete(id);
      }
    });
    renderResults();
  });

  [elements.sourceFilter, elements.keywordSearch, elements.sortMode].forEach((element) => {
    element.addEventListener("input", renderResults);
  });

  [elements.seedKeywords, elements.existingKeywords, elements.targetCount].forEach((element) => {
    element.addEventListener("input", saveState);
  });

  elements.channelList.addEventListener("change", () => {
    const inputs = [...document.querySelectorAll('input[name="channel"]')];
    const allChecked = inputs.every((input) => input.checked);
    elements.toggleChannels.textContent = allChecked ? "取消全选" : "全选";
    saveState();
  });
}

renderChannels();
restoreState();
bindEvents();
renderResults();
