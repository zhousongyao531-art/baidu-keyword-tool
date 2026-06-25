const channels = [
  { id: "ai", name: "AI智能拓词", icon: "✦", className: "channel-ai" },
  { id: "web", name: "百度联想词", icon: "⌕", className: "channel-web" },
  { id: "competitor", name: "竞品词", icon: "⌕", className: "channel-competitor" },
  { id: "industry", name: "行业词库", icon: "⌕", className: "channel-industry" },
  { id: "synonym", name: "同义词", icon: "⌕", className: "channel-synonym" },
  { id: "trend", name: "热门趋势", icon: "⌕", className: "channel-trend" },
  { id: "qa", name: "问答平台", icon: "⌕", className: "channel-qa" },
  { id: "ecommerce", name: "电商平台", icon: "⌕", className: "channel-ecommerce" }
];

const industryProfiles = {
  general: {
    name: "通用行业",
    detect: [],
    coreSuffixes: ["服务", "平台", "官网", "入口", "价格", "费用", "哪家好", "推荐", "电话", "预约"],
    corePrefixes: ["正规", "专业"],
    commercialTerms: ["服务", "平台", "官网", "入口", "价格", "费用", "哪家好", "推荐", "电话", "预约", "购买", "咨询"],
    weakTerms: ["准吗", "安全吗", "有用吗"],
    blockTerms: ["培训班", "辅导机构"],
    qaPatterns: ["{seed}哪家好", "{seed}怎么收费", "{seed}哪里找", "{seed}靠谱吗", "{seed}怎么预约"],
    competitorPatterns: ["{seed}平台", "{seed}服务", "{seed}网站", "{seed}电话", "{seed}价格", "{seed}推荐", "{seed}哪家好", "{seed}在线咨询"],
    industryPatterns: ["{seed}平台", "{seed}服务中心", "{seed}官网", "{seed}入口", "{seed}预约", "{seed}电话", "{seed}排行", "{seed}品牌"],
    ecommercePatterns: ["{seed}购买", "{seed}套餐", "{seed}优惠", "{seed}价格", "{seed}预约", "{seed}低价", "{seed}付费咨询", "{seed}购买入口"]
  },
  local_service: {
    name: "本地生活 / 到店到家",
    detect: ["上门", "按摩", "保洁", "维修", "搬家", "家政", "月嫂", "开锁", "疏通", "美甲", "洗车", "到家"],
    coreSuffixes: ["服务", "上门服务", "电话", "预约", "价格", "收费", "附近", "哪家好", "平台", "正规"],
    corePrefixes: ["附近", "正规", "专业"],
    commercialTerms: ["上门", "附近", "电话", "预约", "服务", "价格", "收费", "哪家好", "正规", "平台", "到家"],
    weakTerms: ["准吗", "有用吗", "安全吗", "是真的吗", "测试", "测算", "占卜"],
    blockTerms: ["准吗", "安全吗", "有用吗", "是真的吗", "靠谱吗", "测试", "测算", "占卜", "培训", "课程", "老师", "软件", "app", "免费"],
    qaPatterns: ["{seed}多少钱", "{seed}怎么收费", "{seed}哪家好", "{seed}哪里找", "{seed}怎么预约", "{seed}电话"],
    competitorPatterns: ["{seed}平台", "{seed}哪家好", "{seed}服务", "{seed}电话", "{seed}价格", "{seed}收费标准", "{seed}附近", "{seed}预约"],
    industryPatterns: ["{seed}服务中心", "{seed}到家", "{seed}预约", "{seed}电话", "{seed}门店", "{seed}附近", "{seed}正规", "{seed}平台"],
    ecommercePatterns: ["{seed}团购", "{seed}套餐", "{seed}优惠", "{seed}价格", "{seed}预约", "{seed}低价", "{seed}上门服务", "{seed}购买入口"]
  },
  education: {
    name: "教育培训",
    detect: ["培训", "课程", "高考", "志愿", "复读", "留学", "考研", "英语", "雅思", "托福", "学校", "教育"],
    coreSuffixes: ["培训", "课程", "机构", "老师", "报名", "费用", "价格", "哪家好", "排名", "咨询"],
    corePrefixes: ["专业", "正规"],
    commercialTerms: ["培训", "课程", "机构", "报名", "费用", "价格", "老师", "学校", "咨询", "哪家好"],
    weakTerms: ["图片", "壁纸", "故事"],
    blockTerms: ["上门按摩", "占卜"],
    qaPatterns: ["{seed}哪家好", "{seed}怎么报名", "{seed}多少钱", "{seed}有必要吗", "{seed}怎么选"],
    competitorPatterns: ["{seed}机构", "{seed}培训班", "{seed}课程", "{seed}老师", "{seed}价格", "{seed}排名", "{seed}在线咨询"],
    industryPatterns: ["{seed}指导", "{seed}方案", "{seed}服务中心", "{seed}评估", "{seed}报名", "{seed}资料", "{seed}课程"],
    ecommercePatterns: ["{seed}课程价格", "{seed}套餐", "{seed}优惠", "{seed}在线课程", "{seed}付费咨询", "{seed}购买入口"]
  },
  emotion: {
    name: "情感心理 / 测算",
    detect: ["塔罗", "星座", "情感", "心理", "婚姻", "恋爱", "复合", "占卜", "测算", "测试"],
    coreSuffixes: ["测试", "测算", "占卜", "免费", "在线", "官网", "入口", "咨询", "价格", "预约"],
    corePrefixes: ["免费", "在线"],
    commercialTerms: ["测试", "测算", "占卜", "免费", "在线", "咨询", "价格", "预约", "入口", "官网"],
    weakTerms: ["故事", "图片", "壁纸", "表情包"],
    blockTerms: ["培训班", "辅导机构", "上门"],
    qaPatterns: ["{seed}准吗", "{seed}靠谱吗", "{seed}有用吗", "{seed}怎么收费", "{seed}哪里测"],
    competitorPatterns: ["{seed}平台", "{seed}网站", "{seed}app", "{seed}价格", "{seed}推荐", "{seed}在线咨询"],
    industryPatterns: ["{seed}平台", "{seed}工具", "{seed}系统", "{seed}测评", "{seed}网站", "{seed}小程序"],
    ecommercePatterns: ["{seed}付费咨询", "{seed}会员", "{seed}套餐", "{seed}价格", "{seed}预约", "{seed}购买入口"]
  },
  medical_beauty: {
    name: "医美健康",
    detect: ["医美", "整形", "医院", "医生", "牙齿", "植发", "祛斑", "隆鼻", "双眼皮", "体检"],
    coreSuffixes: ["医院", "医生", "价格", "费用", "哪家好", "预约", "咨询", "正规", "排名", "案例"],
    corePrefixes: ["正规", "专业"],
    commercialTerms: ["医院", "医生", "价格", "费用", "预约", "咨询", "正规", "哪家好", "排名"],
    weakTerms: ["图片", "壁纸", "故事"],
    blockTerms: ["上门", "占卜"],
    qaPatterns: ["{seed}多少钱", "{seed}哪家好", "{seed}安全吗", "{seed}怎么预约", "{seed}恢复多久"],
    competitorPatterns: ["{seed}医院", "{seed}医生", "{seed}机构", "{seed}价格", "{seed}排名", "{seed}在线咨询"],
    industryPatterns: ["{seed}正规医院", "{seed}预约", "{seed}费用", "{seed}案例", "{seed}咨询", "{seed}排名"],
    ecommercePatterns: ["{seed}优惠", "{seed}套餐", "{seed}价格", "{seed}预约", "{seed}低价", "{seed}付费咨询"]
  },
  ecommerce: {
    name: "电商零售",
    detect: ["买", "购买", "商城", "旗舰店", "优惠", "价格", "批发", "零售", "正品"],
    coreSuffixes: ["价格", "多少钱", "购买", "正品", "旗舰店", "优惠", "推荐", "哪家好", "品牌", "批发"],
    corePrefixes: ["正品", "低价"],
    commercialTerms: ["价格", "购买", "正品", "旗舰店", "优惠", "品牌", "批发", "多少钱"],
    weakTerms: ["怎么", "为什么"],
    blockTerms: ["培训班", "老师"],
    qaPatterns: ["{seed}多少钱", "{seed}哪家好", "{seed}怎么选", "{seed}正品吗", "{seed}在哪里买"],
    competitorPatterns: ["{seed}品牌", "{seed}旗舰店", "{seed}商城", "{seed}推荐", "{seed}价格", "{seed}哪家好"],
    industryPatterns: ["{seed}品牌", "{seed}排行", "{seed}测评", "{seed}官网", "{seed}旗舰店", "{seed}批发"],
    ecommercePatterns: ["{seed}购买", "{seed}套餐", "{seed}优惠", "{seed}价格", "{seed}正品", "{seed}低价", "{seed}购买入口"]
  },
  finance: {
    name: "金融服务",
    detect: ["贷款", "保险", "理财", "信用卡", "开户", "基金", "证券", "融资", "借款"],
    coreSuffixes: ["申请", "平台", "利率", "额度", "条件", "咨询", "哪家好", "正规", "入口", "电话"],
    corePrefixes: ["正规", "低息"],
    commercialTerms: ["申请", "平台", "利率", "额度", "条件", "咨询", "正规", "入口", "电话"],
    weakTerms: ["故事", "图片"],
    blockTerms: ["占卜", "培训班"],
    qaPatterns: ["{seed}怎么申请", "{seed}利率多少", "{seed}哪家好", "{seed}靠谱吗", "{seed}需要什么条件"],
    competitorPatterns: ["{seed}平台", "{seed}机构", "{seed}利率", "{seed}额度", "{seed}电话", "{seed}在线咨询"],
    industryPatterns: ["{seed}申请入口", "{seed}正规平台", "{seed}条件", "{seed}流程", "{seed}额度", "{seed}咨询"],
    ecommercePatterns: ["{seed}申请", "{seed}优惠", "{seed}低息", "{seed}服务", "{seed}在线办理", "{seed}入口"]
  },
  business: {
    name: "企业服务",
    detect: ["代账", "注册公司", "商标", "crm", "erp", "saas", "系统", "软件", "获客", "营销"],
    coreSuffixes: ["系统", "软件", "服务", "平台", "价格", "报价", "方案", "公司", "哪家好", "咨询"],
    corePrefixes: ["专业", "企业"],
    commercialTerms: ["系统", "软件", "服务", "平台", "价格", "报价", "方案", "公司", "咨询"],
    weakTerms: ["故事", "图片"],
    blockTerms: ["上门按摩", "占卜"],
    qaPatterns: ["{seed}多少钱", "{seed}哪家好", "{seed}怎么选", "{seed}报价", "{seed}适合什么企业"],
    competitorPatterns: ["{seed}公司", "{seed}平台", "{seed}系统", "{seed}软件", "{seed}报价", "{seed}在线咨询"],
    industryPatterns: ["{seed}解决方案", "{seed}系统", "{seed}平台", "{seed}服务商", "{seed}报价", "{seed}方案"],
    ecommercePatterns: ["{seed}购买", "{seed}套餐", "{seed}价格", "{seed}报价", "{seed}试用", "{seed}购买入口"]
  }
};

const channelConfig = {
  ai: {
    source: "AI智能拓词",
    category: "智能扩展",
    intent: "咨询",
    matchType: "短语匹配",
    scoreBase: 88,
    patterns: ["{seed}免费", "{seed}在线", "{seed}官网", "{seed}入口", "{seed}app", "{seed}软件", "{seed}咨询", "{seed}服务", "{seed}价格", "{seed}哪家好"],
    reason: "根据搜索广告常见意图结构生成，适合补充核心转化词"
  },
  web: {
    source: "规则补充",
    category: "搜索补充",
    intent: "了解",
    matchType: "智能匹配",
    scoreBase: 84,
    patterns: ["{seed}价格", "{seed}费用", "{seed}电话", "{seed}入口", "{seed}官网", "{seed}预约", "{seed}哪家好", "{seed}附近", "{seed}服务", "{seed}在线咨询"],
    reason: "百度联想词数量不足时的规则补充，偏长尾和信息检索需求"
  },
  competitor: {
    source: "竞品词",
    category: "商业转化",
    intent: "购买",
    matchType: "精确匹配",
    scoreBase: 94,
    patterns: ["{seed}平台", "{seed}哪家好", "{seed}服务", "{seed}网站", "{seed}app", "{seed}排名", "{seed}价格", "{seed}收费标准", "{seed}推荐", "{seed}在线咨询"],
    reason: "模拟竞品广告词结构，偏高商业意向"
  },
  industry: {
    source: "行业词库",
    category: "行业通用",
    intent: "咨询",
    matchType: "短语匹配",
    scoreBase: 82,
    patterns: ["{seed}平台", "{seed}工具", "{seed}系统", "{seed}中心", "{seed}推荐", "{seed}测评", "{seed}排行", "{seed}品牌", "{seed}网站", "{seed}小程序"],
    reason: "来自通用行业词库模板，适合补充标准品类和平台词"
  },
  synonym: {
    source: "同义词",
    category: "近义表达",
    intent: "了解",
    matchType: "短语匹配",
    scoreBase: 78,
    patterns: ["{seed}相关", "{seed}类似", "{seed}同类", "{seed}推荐", "{seed}测评", "{seed}指南", "{seed}攻略", "{seed}比较", "{seed}区别", "{seed}哪个好"],
    reason: "通过近义表达拓展，覆盖不同搜索说法"
  },
  trend: {
    source: "热门趋势",
    category: "热点趋势",
    intent: "了解",
    matchType: "智能匹配",
    scoreBase: 72,
    patterns: ["{seed}最新价格", "{seed}优惠", "{seed}预约", "{seed}附近", "{seed}电话", "{seed}最新活动", "{seed}正规平台", "{seed}服务推荐", "{seed}口碑", "{seed}哪家好"],
    reason: "模拟趋势词来源，适合承接季节性和热点流量"
  },
  qa: {
    source: "问答平台",
    category: "问题需求",
    intent: "咨询",
    matchType: "短语匹配",
    scoreBase: 76,
    patterns: ["{seed}多少钱", "{seed}怎么收费", "{seed}哪家好", "{seed}哪里找", "{seed}怎么预约", "{seed}电话", "{seed}入口", "{seed}价格", "{seed}附近", "{seed}在线咨询"],
    reason: "模拟问答平台真实提问，便于发现用户痛点"
  },
  ecommerce: {
    source: "电商平台",
    category: "购买意图",
    intent: "购买",
    matchType: "精确匹配",
    scoreBase: 84,
    patterns: ["{seed}购买", "{seed}套餐", "{seed}优惠", "{seed}价格", "{seed}在线服务", "{seed}会员", "{seed}预约", "{seed}低价", "{seed}付费咨询", "{seed}购买入口"],
    reason: "模拟电商平台搜索词，偏强转化和价格比较"
  }
};

const regions = ["北京", "上海", "广州", "深圳", "杭州", "南京", "成都", "武汉", "西安", "重庆", "天津", "苏州", "郑州", "长沙", "青岛", "宁波", "佛山", "合肥", "济南", "厦门", "无锡", "东莞", "福州", "昆明"];
const districtRegions = [
  "松江", "浦东", "闵行", "徐汇", "黄浦", "静安", "长宁", "普陀", "虹口", "杨浦", "宝山", "嘉定", "青浦", "奉贤", "崇明",
  "朝阳", "海淀", "丰台", "通州", "昌平", "顺义", "大兴", "房山", "番禺", "天河", "越秀", "海珠", "白云", "南山", "福田",
  "宝安", "龙岗", "西湖", "滨江", "余杭", "萧山", "武侯", "锦江", "成华", "江岸", "武昌", "洪山", "雁塔", "碑林"
];
const regionSuffixPattern = /[\u4e00-\u9fa5]{2,8}(省|市|区|县|镇|街道|新区|开发区|高新区|经开区|园区)/;
const audiences = ["新手", "用户", "本地", "线上", "个人", "专业", "免费", "官方", "精准", "附近"];
const qualifiers = ["免费", "专业", "靠谱", "精准", "快速", "官方", "最新", "高性价比", "口碑好", "附近", "在线", "正规"];
const intentSuffixes = ["咨询", "服务", "机构", "老师", "平台", "系统", "方案", "价格", "排名", "电话", "入口", "指南", "测试", "占卜", "测算"];
const adIntentTerms = ["免费", "在线", "入口", "官网", "测试", "测算", "占卜", "咨询", "服务", "平台", "价格", "费用", "收费", "哪家好", "排名", "app", "软件", "预约"];
const weakIntentTerms = ["怎么", "为什么", "什么意思", "故事", "图片", "文案", "小说", "电视剧", "歌曲", "壁纸", "表情包", "英文", "翻译", "培训", "课程", "老师", "辅导"];
const defaultCommercialOnly = false;

const state = {
  results: [],
  selectedIds: new Set(),
  stats: {
    removedDuplicateCount: 0,
    removedExistingCount: 0,
    targetCount: 0,
    candidateTotal: 0,
    baiduSuggestionCount: 0,
    baiduQueryCount: 0,
    fallbackCount: 0,
    industryName: "",
    commercialOnly: false
  }
};

const storageKey = "baiduKeywordToolStatic.v3";

const elements = {
  seedKeywords: document.querySelector("#seedKeywords"),
  existingKeywords: document.querySelector("#existingKeywords"),
  targetCount: document.querySelector("#targetCount"),
  industryType: document.querySelector("#industryType"),
  commercialOnly: document.querySelector("#commercialOnly"),
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

function getContainedRegions(text) {
  const value = String(text || "");
  return [...new Set([...regions, ...districtRegions].filter((region) => value.includes(region)))];
}

function getContainedCities(text) {
  const value = String(text || "");
  return [...new Set(regions.filter((region) => value.includes(region)))];
}

function getContainedDistricts(text) {
  const value = String(text || "");
  return [...new Set(districtRegions.filter((region) => value.includes(region)))];
}

function getSeedRegionSet(seedKeywords) {
  return {
    cities: new Set(seedKeywords.flatMap((seed) => getContainedCities(seed))),
    districts: new Set(seedKeywords.flatMap((seed) => getContainedDistricts(seed)))
  };
}

function hasRegionSignal(text) {
  const value = String(text || "");
  return getContainedRegions(value).length > 0 || regionSuffixPattern.test(value);
}

function hasConflictingRegion(keyword, seedKeywords) {
  const seedRegionSet = getSeedRegionSet(seedKeywords);
  if (!seedRegionSet.cities.size && !seedRegionSet.districts.size) return false;

  const candidateCities = getContainedCities(keyword);
  const candidateDistricts = getContainedDistricts(keyword);
  const hasOtherCity = candidateCities.some((region) => !seedRegionSet.cities.has(region));
  const hasOtherDistrict = seedRegionSet.districts.size
    ? candidateDistricts.some((region) => !seedRegionSet.districts.has(region))
    : false;

  return hasOtherCity || hasOtherDistrict;
}

function appendIfNeeded(base, suffix) {
  return base.includes(suffix) ? base : `${base}${suffix}`;
}

function consumeRegionToken(rest, token) {
  if (!rest.startsWith(token)) return null;
  const afterToken = rest.slice(token.length);
  const suffix = ["街道", "高新区", "开发区", "经开区", "新区", "市", "区", "县", "镇"].find((item) => afterToken.startsWith(item)) || "";
  return {
    phrase: `${token}${suffix}`,
    rest: afterToken.slice(suffix.length)
  };
}

function splitLeadingRegionPhrase(text) {
  let rest = String(text || "").trim();
  let regionPhrase = "";
  const orderedCities = [...regions].sort((a, b) => b.length - a.length);
  const orderedDistricts = [...districtRegions].sort((a, b) => b.length - a.length);
  const firstCity = orderedCities.map((city) => consumeRegionToken(rest, city)).find(Boolean);

  if (firstCity) {
    regionPhrase += firstCity.phrase;
    rest = firstCity.rest;
  }

  let matchedDistrict = true;
  while (matchedDistrict) {
    const nextDistrict = orderedDistricts.map((district) => consumeRegionToken(rest, district)).find(Boolean);
    if (!nextDistrict) {
      matchedDistrict = false;
    } else {
      regionPhrase += nextDistrict.phrase;
      rest = nextDistrict.rest;
    }
  }

  if (!regionPhrase || !rest) return null;
  return { regionPhrase, core: rest };
}

function buildLocalizedPrefixKeyword(seed, modifier) {
  const parts = splitLeadingRegionPhrase(seed);
  if (!parts) return `${modifier}${seed}`;
  return `${parts.regionPhrase}${modifier}${parts.core}`;
}

function applyLocalServiceModifier(base, modifier) {
  if (base.includes(modifier)) return base;

  if (["附近", "正规", "专业"].includes(modifier)) {
    return buildLocalizedPrefixKeyword(base, modifier);
  }

  return `${base}${modifier}`;
}

function splitSeedTerms(seedKeywords) {
  return seedKeywords
    .flatMap((seed) => String(seed).split(/\s+|\/|,|，|、|\+|&/))
    .map((term) => term.trim())
    .filter((term) => term.length >= 2);
}

function getCoreSeedTerms(seedKeywords) {
  const terms = splitSeedTerms(seedKeywords);
  return terms.length ? terms : seedKeywords.filter(Boolean);
}

function inferIndustry(seedKeywords) {
  const text = seedKeywords.join(" ").toLowerCase();
  const entries = Object.entries(industryProfiles).filter(([id]) => id !== "general");
  let best = { id: "general", score: 0 };

  entries.forEach(([id, profile]) => {
    const score = profile.detect.reduce((sum, term) => {
      return text.includes(term.toLowerCase()) ? sum + 1 : sum;
    }, 0);
    if (score > best.score) {
      best = { id, score };
    }
  });

  return best.id;
}

function resolveIndustryProfile(seedKeywords, industryType = "auto") {
  const id = industryType && industryType !== "auto" ? industryType : inferIndustry(seedKeywords);
  return industryProfiles[id] || industryProfiles.general;
}

function getKeywordQuality(keyword, seedKeywords, profile = industryProfiles.general, commercialOnly = defaultCommercialOnly) {
  const normalizedKeyword = normalizeKeyword(keyword);
  const seedTerms = getCoreSeedTerms(seedKeywords);
  const matchedTerms = seedTerms.filter((term) => normalizedKeyword.includes(normalizeKeyword(term)));
  const containsFullSeed = seedKeywords.some((seed) => normalizedKeyword.includes(normalizeKeyword(seed)));
  const profileCommercialTerms = [...new Set([...adIntentTerms, ...(profile.commercialTerms || [])])];
  const profileWeakTerms = [...new Set([...weakIntentTerms, ...(profile.weakTerms || [])])];
  const adIntentHits = profileCommercialTerms.filter((term) => normalizedKeyword.includes(normalizeKeyword(term))).length;
  const weakHits = profileWeakTerms.filter((term) => normalizedKeyword.includes(normalizeKeyword(term))).length;
  const keywordLength = [...String(keyword)].length;

  let score = 64;
  score += matchedTerms.length * 9;
  if (containsFullSeed) score += 10;
  score += Math.min(adIntentHits * 5, 15);
  if (keywordLength >= 4 && keywordLength <= 12) score += 10;
  if (keywordLength >= 13 && keywordLength <= 18) score += 4;
  if (keywordLength > 22) score -= 14;
  score -= weakHits * 7;
  if (commercialOnly && adIntentHits === 0) score -= 18;

  if (!matchedTerms.length && !containsFullSeed) score -= 22;

  return Math.max(40, Math.min(99, score));
}

function isUsefulKeyword(keyword, seedKeywords, profile = industryProfiles.general, commercialOnly = defaultCommercialOnly) {
  const quality = getKeywordQuality(keyword, seedKeywords, profile, commercialOnly);
  const normalizedKeyword = normalizeKeyword(keyword);
  const seedTerms = getCoreSeedTerms(seedKeywords);
  const blockTerms = profile.blockTerms || [];
  const hasSeedSignal = seedTerms.some((term) => normalizedKeyword.includes(normalizeKeyword(term)));
  if (!hasSeedSignal) return false;
  if (hasConflictingRegion(keyword, seedKeywords)) return false;
  if (blockTerms.some((term) => normalizedKeyword.includes(normalizeKeyword(term)))) return false;
  if (commercialOnly) {
    const commercialTerms = [...new Set([...adIntentTerms, ...(profile.commercialTerms || [])])];
    const hasCommercialSignal = commercialTerms.some((term) => normalizedKeyword.includes(normalizeKeyword(term)));
    if (!hasCommercialSignal) return false;
  }
  return quality >= (commercialOnly ? 68 : 58);
}

function createCoreKeywordRows(seedKeywords, profile = industryProfiles.general, commercialOnly = defaultCommercialOnly) {
  const seeds = seedKeywords.length ? seedKeywords : ["高考", "志愿", "复读", "专业选择"];
  const suffixModifiers = profile.coreSuffixes || industryProfiles.general.coreSuffixes;
  const prefixModifiers = profile.corePrefixes || industryProfiles.general.corePrefixes;
  const rows = [];
  const seen = new Set();

  seeds.forEach((seed) => {
    [
      seed,
      ...suffixModifiers.map((modifier) => `${seed}${modifier}`),
      ...prefixModifiers.map((modifier) => {
        const isLocalService = profile === industryProfiles.local_service || profile.name === industryProfiles.local_service.name;
        return isLocalService && hasRegionSignal(seed)
          ? buildLocalizedPrefixKeyword(seed, modifier)
          : `${modifier}${seed}`;
      })
    ]
      .forEach((keyword) => {
        const key = normalizeKeyword(keyword);
        if (!key || seen.has(key)) return;
        seen.add(key);
        rows.push({
          keyword,
          source: "投放核心词",
          category: profile.name,
          intent: classifyBaiduIntent(keyword),
          matchType: keyword === seed ? "精确匹配" : "短语匹配",
          score: getKeywordQuality(keyword, seeds, profile, commercialOnly),
          reason: `由种子词"${seed}"和高转化修饰词组合生成，用于补充更接近搜索广告后台的核心投放词`
        });
      });
  });

  return rows;
}

function buildKeywordVariant(base, variantIndex, profile = industryProfiles.general, commercialOnly = defaultCommercialOnly) {
  if (variantIndex === 0) return base;

  const region = regions[variantIndex % regions.length];
  const audience = audiences[Math.floor(variantIndex / regions.length) % audiences.length];
  const qualifier = qualifiers[Math.floor(variantIndex / (regions.length * audiences.length)) % qualifiers.length];
  const intent = intentSuffixes[Math.floor(variantIndex / (regions.length * audiences.length * qualifiers.length)) % intentSuffixes.length];
  const mode = variantIndex % 10;
  const baseHasRegion = hasRegionSignal(base);

  if (profile === industryProfiles.local_service || profile.name === industryProfiles.local_service.name) {
    if (baseHasRegion) {
      const localSuffixes = ["电话", "预约", "价格", "收费", "服务", "附近", "哪家好", "正规"];
      return applyLocalServiceModifier(base, localSuffixes[variantIndex % localSuffixes.length]);
    }

    if (mode === 0) return `${region}${base}`;
    if (mode === 1) return `附近${base}`;
    if (mode === 2) return appendIfNeeded(`${region}${base}`, "电话");
    if (mode === 3) return appendIfNeeded(`${region}${base}`, "预约");
    if (mode === 4) return appendIfNeeded(`${region}${base}`, "价格");
    if (mode === 5) return appendIfNeeded(base, "电话");
    if (mode === 6) return appendIfNeeded(base, "预约");
    if (mode === 7) return appendIfNeeded(base, "价格");
    if (mode === 8) return `正规${base}`;
    return base;
  }

  if (commercialOnly && mode > 5) return base;

  if (baseHasRegion) {
    if (mode === 0) return `${base}${intent}`;
    if (mode === 1) return `${base}${intent}`;
    if (mode === 2) return appendIfNeeded(base, intent);
    if (mode === 3) return appendIfNeeded(base, "咨询");
    if (mode === 4) return `${audience}${base}${intent}`;
    if (mode === 5) return `${base}${audience}${intent}`;
    if (mode === 6) return `${qualifier}${base}`;
    if (mode === 7) return `${base}${qualifier}${intent}`;
    if (mode === 8) return appendIfNeeded(base, "电话");
    return `${qualifier}${base}${audience}`;
  }

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

function getPatternsForChannel(channel, profile) {
  if (channel === "competitor") return profile.competitorPatterns || channelConfig[channel].patterns;
  if (channel === "industry") return profile.industryPatterns || channelConfig[channel].patterns;
  if (channel === "qa") return profile.qaPatterns || channelConfig[channel].patterns;
  if (channel === "ecommerce") return profile.ecommercePatterns || channelConfig[channel].patterns;
  return channelConfig[channel].patterns;
}

function generateForChannel(channel, seedKeywords, targetCount, profile = industryProfiles.general, commercialOnly = defaultCommercialOnly) {
  const config = channelConfig[channel];
  const seeds = seedKeywords.length ? seedKeywords : ["高考", "志愿", "复读", "专业选择"];
  const patterns = getPatternsForChannel(channel, profile);
  const safeTarget = Math.max(10, Math.min(Number(targetCount) || 100, 10000));
  const rows = [];
  const seen = new Set();
  let cursor = 0;
  const maxAttempts = safeTarget * 40;

  while (rows.length < safeTarget && cursor < maxAttempts) {
    const seed = seeds[cursor % seeds.length];
    const pattern = patterns[Math.floor(cursor / seeds.length) % patterns.length];
    const base = pattern.replace("{seed}", seed);
    const variantIndex = Math.floor(cursor / (seeds.length * patterns.length));
    const keyword = buildKeywordVariant(base, variantIndex, profile, commercialOnly);
    const key = normalizeKeyword(keyword);

    if (key && !seen.has(key) && isUsefulKeyword(keyword, seeds, profile, commercialOnly)) {
      seen.add(key);
      const qualityScore = getKeywordQuality(keyword, seeds, profile, commercialOnly);
      const score = Math.max(60, Math.min(config.scoreBase, qualityScore) - ((rows.length + variantIndex) % 8));
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

function mergeChannelPools(channelPools, existingKeywords, targetCount) {
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

  results.sort((a, b) => b.score - a.score || [...a.keyword].length - [...b.keyword].length || a.keyword.localeCompare(b.keyword, "zh-Hans-CN"));

  return {
    candidateTotal: channelPools.reduce((sum, pool) => sum + pool.items.length, 0),
    removedDuplicateCount,
    removedExistingCount,
    results: results.slice(0, targetCount)
  };
}

function fetchBaiduSuggestions(keyword, timeoutMs = 4500) {
  return new Promise((resolve, reject) => {
    const callbackName = `__baiduSuggest_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const timer = window.setTimeout(() => {
      cleanup();
      reject(new Error("Baidu suggestion request timed out"));
    }, timeoutMs);

    function cleanup() {
      window.clearTimeout(timer);
      delete window[callbackName];
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    }

    window[callbackName] = (payload) => {
      const suggestions = Array.isArray(payload?.s) ? payload.s : [];
      cleanup();
      resolve(suggestions.filter(Boolean));
    };

    script.charset = "gbk";
    script.async = true;
    script.onerror = () => {
      cleanup();
      reject(new Error("Baidu suggestion request failed"));
    };
    script.src = `https://suggestion.baidu.com/su?wd=${encodeURIComponent(keyword)}&cb=${callbackName}`;
    document.head.appendChild(script);
  });
}

function classifyBaiduIntent(keyword) {
  if (/价格|费用|收费|多少钱|便宜|优惠|套餐|购买|报名|团购|低价/.test(keyword)) return "购买";
  if (/哪里|哪家|机构|咨询|电话|入口|官网|预约|附近|上门|正规/.test(keyword)) return "咨询";
  return "了解";
}

function createBaiduSuggestionRow(keyword, query, index, seedKeywords, profile, commercialOnly) {
  const score = getKeywordQuality(keyword, seedKeywords, profile, commercialOnly);
  return {
    keyword,
    source: "百度联想词",
    category: profile.name,
    intent: classifyBaiduIntent(keyword),
    matchType: "智能匹配",
    score: Math.max(72, score - (index % 4)),
    reason: `来自百度搜索联想词，基于查询"${query}"返回，反映用户搜索输入时的真实联想需求`
  };
}

async function generateBaiduSuggestionRows(seedKeywords, targetCount, profile = industryProfiles.general, commercialOnly = defaultCommercialOnly) {
  const seeds = seedKeywords.length ? seedKeywords : ["高考", "志愿", "复读", "专业选择"];
  const safeTarget = Math.max(10, Math.min(Number(targetCount) || 100, 10000));
  const queryModifiers = ["", ...(profile.coreSuffixes || []).slice(0, 9)];
  const maxQueries = Math.min(36, Math.max(8, seeds.length * queryModifiers.length));
  const rows = [];
  const seen = new Set();
  const queued = new Set();
  const queue = [];
  let queryIndex = 0;
  let failedCount = 0;

  seeds.forEach((seed) => {
    queryModifiers.forEach((modifier) => {
      const query = modifier ? `${seed}${modifier}` : seed;
      const key = normalizeKeyword(query);
      if (key && !queued.has(key)) {
        queued.add(key);
        queue.push(query);
      }
    });
  });

  createCoreKeywordRows(seeds, profile, commercialOnly).forEach((row) => {
    const key = normalizeKeyword(row.keyword);
    if (key && !queued.has(key)) {
      queued.add(key);
      if (queue.length < maxQueries) queue.push(row.keyword);
    }
  });

  while (rows.length < safeTarget && queryIndex < queue.length && queryIndex < maxQueries) {
    const query = queue[queryIndex];
    queryIndex += 1;

    try {
      const suggestions = await fetchBaiduSuggestions(query);
      suggestions.forEach((suggestion) => {
        const key = normalizeKeyword(suggestion);
        if (!key || seen.has(key)) return;
        if (!isUsefulKeyword(suggestion, seeds, profile, commercialOnly)) return;

        seen.add(key);
        rows.push(createBaiduSuggestionRow(suggestion, query, rows.length, seeds, profile, commercialOnly));
      });
    } catch {
      failedCount += 1;
    }
  }

  return {
    rows: rows.slice(0, safeTarget),
    queryCount: queryIndex,
    failedCount
  };
}

async function expandKeywordsWithSources(payload) {
  const seedKeywords = parseLines(payload.seedKeywords);
  const existingKeywords = new Set(parseLines(payload.existingKeywords).map(normalizeKeyword));
  const profile = resolveIndustryProfile(seedKeywords, payload.industryType);
  const commercialOnly = Boolean(payload.commercialOnly);
  const selectedChannels = Array.isArray(payload.channels) && payload.channels.length
    ? payload.channels.filter((channel) => channelConfig[channel])
    : Object.keys(channelConfig);
  const targetCount = Math.max(10, Math.min(Number(payload.targetCount) || 100, 10000));
  const perChannelPool = Math.min(
    10000,
    Math.max(targetCount, Math.ceil(targetCount / Math.max(selectedChannels.length, 1)) + existingKeywords.size + 100)
  );
  const channelPools = [];
  let baiduSuggestionCount = 0;
  let baiduQueryCount = 0;
  let fallbackCount = 0;

  for (const channel of selectedChannels) {
    if (channel === "web") {
      const baiduData = await generateBaiduSuggestionRows(seedKeywords, perChannelPool, profile, commercialOnly);
      const fallbackTarget = Math.max(0, perChannelPool - baiduData.rows.length);
      const fallbackItems = fallbackTarget ? generateForChannel(channel, seedKeywords, fallbackTarget, profile, commercialOnly) : [];
      const coreItems = createCoreKeywordRows(seedKeywords, profile, commercialOnly);
      baiduSuggestionCount = baiduData.rows.length;
      baiduQueryCount = baiduData.queryCount;
      fallbackCount = fallbackItems.length;
      channelPools.push({
        items: [...coreItems, ...baiduData.rows, ...fallbackItems]
          .sort((a, b) => b.score - a.score || [...a.keyword].length - [...b.keyword].length),
        cursor: 0
      });
    } else {
      channelPools.push({
        items: generateForChannel(channel, seedKeywords, perChannelPool, profile, commercialOnly),
        cursor: 0
      });
    }
  }

  const merged = mergeChannelPools(channelPools, existingKeywords, targetCount);

  return {
    total: Math.min(merged.results.length, targetCount),
    targetCount,
    candidateTotal: merged.candidateTotal,
    removedDuplicateCount: merged.removedDuplicateCount,
    removedExistingCount: merged.removedExistingCount,
    baiduSuggestionCount,
    baiduQueryCount,
    fallbackCount,
    industryName: profile.name,
    commercialOnly,
    results: merged.results
  };
}

function expandKeywordsLocally(payload) {
  const seedKeywords = parseLines(payload.seedKeywords);
  const existingKeywords = new Set(parseLines(payload.existingKeywords).map(normalizeKeyword));
  const profile = resolveIndustryProfile(seedKeywords, payload.industryType);
  const commercialOnly = Boolean(payload.commercialOnly);
  const selectedChannels = Array.isArray(payload.channels) && payload.channels.length
    ? payload.channels.filter((channel) => channelConfig[channel])
    : Object.keys(channelConfig);
  const targetCount = Math.max(10, Math.min(Number(payload.targetCount) || 100, 10000));
  const perChannelPool = Math.min(
    10000,
    Math.max(targetCount, Math.ceil(targetCount / Math.max(selectedChannels.length, 1)) + existingKeywords.size + 100)
  );
  const channelPools = selectedChannels.map((channel) => ({
    items: generateForChannel(channel, seedKeywords, perChannelPool, profile, commercialOnly),
    cursor: 0
  }));
  const merged = mergeChannelPools(channelPools, existingKeywords, targetCount);

  return {
    total: Math.min(merged.results.length, targetCount),
    targetCount,
    candidateTotal: merged.candidateTotal,
    removedDuplicateCount: merged.removedDuplicateCount,
    removedExistingCount: merged.removedExistingCount,
    industryName: profile.name,
    commercialOnly,
    results: merged.results
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
    industryType: elements.industryType.value,
    commercialOnly: elements.commercialOnly.checked,
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
    elements.industryType.value = payload.industryType ?? "auto";
    elements.commercialOnly.checked = payload.commercialOnly ?? defaultCommercialOnly;
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
    const sourceSummary = state.stats.baiduQueryCount
      ? `百度联想词 ${state.stats.baiduSuggestionCount} 个，规则补充 ${state.stats.fallbackCount} 个，`
      : "";
    const strategySummary = `${state.stats.industryName ? `行业：${state.stats.industryName}，` : ""}${state.stats.commercialOnly ? "已启用高商业意图过滤，" : ""}`;
    elements.summaryText.textContent = `共 ${state.results.length} 个关键词，${strategySummary}${sourceSummary}已去重 ${state.stats.removedDuplicateCount} 个，过滤已有词 ${state.stats.removedExistingCount} 个。`;
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
  setStatus(selectedChannels.includes("web")
    ? "正在请求百度搜索联想词，并生成补充关键词..."
    : "正在生成关键词...");

  try {
    const targetCount = Math.max(10, Math.min(Number(elements.targetCount.value) || 100, 10000));
    elements.targetCount.value = String(targetCount);

    const data = await expandKeywordsWithSources({
      seedKeywords,
      existingKeywords: parseLines(elements.existingKeywords.value),
      targetCount,
      industryType: elements.industryType.value,
      commercialOnly: elements.commercialOnly.checked,
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
      candidateTotal: data.candidateTotal || 0,
      baiduSuggestionCount: data.baiduSuggestionCount || 0,
      baiduQueryCount: data.baiduQueryCount || 0,
      fallbackCount: data.fallbackCount || 0,
      industryName: data.industryName || "",
      commercialOnly: data.commercialOnly || false
    };

    const baiduText = state.stats.baiduQueryCount
      ? `其中百度联想词候选 ${state.stats.baiduSuggestionCount} 个，查询 ${state.stats.baiduQueryCount} 次。`
      : "";
    setStatus(`拓词完成，返回 ${state.results.length} / 目标 ${state.stats.targetCount} 个关键词。${baiduText}`);
    saveState();
    renderResults();
  } catch {
    const targetCount = Math.max(10, Math.min(Number(elements.targetCount.value) || 100, 10000));
    const fallbackChannels = selectedChannels.includes("web")
      ? selectedChannels
      : [...selectedChannels, "web"];
    const fallbackData = expandKeywordsLocally({
      seedKeywords,
      existingKeywords: parseLines(elements.existingKeywords.value),
      targetCount,
      industryType: elements.industryType.value,
      commercialOnly: elements.commercialOnly.checked,
      channels: fallbackChannels
    });

    state.results = fallbackData.results.map((item, index) => ({
      ...item,
      id: createId(item, index)
    }));
    state.selectedIds.clear();
    state.stats = {
      removedDuplicateCount: fallbackData.removedDuplicateCount || 0,
      removedExistingCount: fallbackData.removedExistingCount || 0,
      targetCount: fallbackData.targetCount || targetCount,
      candidateTotal: fallbackData.candidateTotal || 0,
      baiduSuggestionCount: 0,
      baiduQueryCount: 0,
      fallbackCount: state.results.length,
      industryName: fallbackData.industryName || "",
      commercialOnly: fallbackData.commercialOnly || false
    };
    saveState();
    renderResults();
    setStatus("百度联想词请求失败，已使用本地规则补充完成拓词。", "error");
  } finally {
    setLoading(false);
  }
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
    candidateTotal: 0,
    baiduSuggestionCount: 0,
    baiduQueryCount: 0,
    fallbackCount: 0,
    industryName: "",
    commercialOnly: false
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

  [elements.industryType, elements.commercialOnly].forEach((element) => {
    element.addEventListener("change", saveState);
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
