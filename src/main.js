const categoryLabels = {
  all: { en: 'FEATURED WORK', zh: '精选作品' },
  commercial: { en: 'COMMERCIAL', zh: '商业广告' },
  product: { en: 'PRODUCT FILM', zh: '产品视频' },
  outdoor: { en: 'OUTDOOR', zh: '户外运动' },
  motion: { en: 'MOTION', zh: '动态视觉' },
  ai: { en: 'AI VIDEO', zh: 'AI 视频' },
  design: { en: 'DESIGN', zh: '设计作品' },
  brand: { en: 'BRAND FILM', zh: '品牌影像' }
};

const filterCategories = ['all', 'commercial', 'product', 'ai', 'brand'];
const VESPER_VIDEO = 'media/hero.mp4';
const projectMerges = [
  { keep: 'atlas-power', remove: 'sf90-lines' },
  { keep: 'shoreline', remove: 'orbit-system' }
];

const projects = [
  {
    id: 'phone-case-ai', kind: 'video', orientation: 'landscape', video: './videos/phone-case.mp4', poster: './videos/phone-case-first-frame.jpg', categories: ['ai'], year: '2026', metaEn: 'AI VIDEO', metaZh: 'AI视频',
    en: { title: 'AI Phone Case Commercial', short: 'An AI product commercial built around a protective phone case.', description: 'An AI-assisted phone case commercial that turns protection, material detail and everyday carry into a clean product image.', role: 'Planning / AI generation / Editing / Color grading' },
    zh: { title: 'AI保护套产品广告', short: '围绕手机保护套材质与使用场景制作的 AI 产品广告。', description: '运用 AI 将保护、材质细节和日常携带转化为一支清晰有力的手机保护套产品广告。', role: '策划 / AI生成 / 剪辑 / 调色' }
  },
  {
    id: 'smartwatch-product', kind: 'video', orientation: 'landscape', video: './videos/smartwatch.mp4', poster: './videos/smartwatch-first-frame.jpg', categories: ['product'], year: '2026', metaEn: 'PRODUCT VIDEO', metaZh: '产品视频',
    en: { title: 'Smartwatch Product Film', short: 'A product film presenting a smartwatch through detail, motion and daily use.', description: 'A product-focused smartwatch film that moves between interface detail, movement and everyday utility, keeping the device clear and tactile.', role: 'Planning / Shooting / Editing / Color grading' },
    zh: { title: '智能手表产品视频', short: '通过细节、动作与日常使用呈现智能手表的产品视频。', description: '围绕智能手表的界面细节、动作表现和日常功能展开，清晰呈现产品质感与使用体验。', role: '策划 / 拍摄 / 剪辑 / 调色' }
  },
  {
    id: '318t2-ai', kind: 'video', orientation: 'portrait', video: './videos/318t2.mov', poster: './videos/318t2-first-frame.jpg', categories: ['ai'], year: '2026', metaEn: 'AI VIDEO', metaZh: 'AI视频',
    en: { title: '318T2 AI Brand Film', short: 'An AI visual study extending the 318 brand world.', description: 'An AI-generated brand film that extends the 318 visual language through atmosphere, motion and a focused graphic finish.', role: 'Planning / AI generation / Editing / Color grading' },
    zh: { title: '318T2 AI品牌广告', short: '延展 318 品牌视觉世界的 AI 影像短片。', description: '运用 AI 延展 318 的品牌视觉语言，以氛围、运动和明确的图形落版构成一支品牌广告。', role: '策划 / AI生成 / 剪辑 / 调色' }
  },
  {
    id: 'torras-case-ai', kind: 'video', orientation: 'landscape', video: './videos/torras-case.mp4', poster: './videos/torras-case-first-frame.jpg', categories: ['ai'], year: '2026', metaEn: 'AI VIDEO', metaZh: 'AI视频',
    en: { title: 'Torras Phone Case AI Ad', short: 'An AI product spot for a Torras phone case.', description: 'An AI-assisted product spot that frames the Torras case through clean form, material detail and a direct commercial rhythm.', role: 'Planning / AI generation / Editing / Color grading' },
    zh: { title: '图拉斯手机壳 AI广告', short: '围绕图拉斯手机壳外观与材质制作的 AI 产品广告。', description: '运用 AI 通过简洁造型、材质细节和直接的商业节奏，呈现图拉斯手机壳的产品特征。', role: '策划 / AI生成 / 剪辑 / 调色' }
  },
  {
    id: 'perfume-ai', kind: 'video', orientation: 'portrait', video: './videos/perfume-ai.mp4', poster: './videos/perfume-ai-first-frame.jpg', categories: ['ai'], year: '2026', metaEn: 'AI VIDEO', metaZh: 'AI视频',
    en: { title: 'AI Perfume Short', short: 'A vertical AI short film built from scent, atmosphere and visual suggestion.', description: 'A vertical AI perfume short that turns fragrance into atmosphere, using a compact visual rhythm to move from sensation to product memory.', role: 'Planning / AI generation / Editing / Color grading' },
    zh: { title: 'AI香水短片', short: '以气味、氛围和视觉联想构成的竖屏 AI 短片。', description: '一支竖屏 AI 香水短片，把香气转化为氛围和联想，以紧凑的视觉节奏从感受推进到产品记忆。', role: '策划 / AI生成 / 剪辑 / 调色' }
  },
  {
    id: 'signal-study',
    kind: 'video',
    orientation: 'landscape',
    cover: './images/demo/featured.svg',
    video: './videos/318-commercial-brand.mp4',
    poster: './videos/318-first-frame.png',
    categories: ['commercial', 'ai'],
    year: '2026',
    metaEn: 'COMMERCIAL / AI VIDEO', metaZh: '商业广告 / AI视频',
    en: { title: '2026 / Wear 318', short: 'An AI-assisted brand commercial built from mountain aerials and bold yellow type.', description: 'An AI-assisted brand commercial built from mountain aerials, moving wind and bold yellow hand-drawn lettering. The edit travels from open terrain to a clear brand lockup, letting the force of nature and the memory point land together.', role: 'Planning / AI generation / Editing / Color grading' },
    zh: { title: '2026戴上“318”', short: '运用 AI 制作的山地航拍品牌商业广告。', description: '运用 AI，以山地航拍、风的流动和醒目的黄色手写字形构成的品牌商业广告。剪辑从开阔地貌推进到品牌落版，让自然的力量与记忆点一起落下。', role: '策划 / AI生成 / 剪辑 / 调色' },
    featured: true
  },
  {
    id: 'pulse-09', kind: 'video', orientation: 'portrait', featured: true, cover: './images/demo/pulse-watch.svg', video: './videos/xiaobu.mp4', poster: './videos/xiaobu-first-frame.png', categories: ['ai', 'product'], year: '2026', metaEn: 'AI VIDEO / PRODUCT VIDEO', metaZh: 'AI视频 / 产品视频',
    en: { title: 'BROMPTON X 318', short: 'An AI-assisted commercial combining smoke, light and the Brompton mark.', description: 'An AI-assisted commercial that reframes the relationship between Brompton and 318 through smoke, light and a graphic identity system, giving the folding bike a crisp, atmospheric presence.', role: 'Planning / AI generation / Editing / Color grading' },
    zh: { title: 'BROMPTON X 318', short: '运用 AI 将烟雾、光线与 318 品牌标识构成小布商业广告。', description: '运用 AI 重构小布与 318 的品牌关系，用烟雾、光线和标识系统塑造一支具有速度感的商业广告。', role: '策划 / AI生成 / 剪辑 / 调色' }
  },
  {
    id: 'atlas-power', kind: 'video', orientation: 'landscape', featured: true, cover: './images/demo/atlas-power.svg', video: './videos/smoker-low.mp4', poster: './videos/smoker-low-first-frame.png', categories: ['commercial'], year: '2025', metaEn: 'COMMERCIAL', metaZh: '商业广告',
    en: { title: 'Amazon Smoker Product Ad', short: 'A product commercial for a compact Amazon smoker, built from warmth and tactile detail.', description: 'A practical commercial treatment for a compact smoker, moving from a warm seasonal scene into the product experience. The edit uses close details and soft light to make everyday use feel inviting.', role: 'Planning / Visual direction / Editing / Color grading' },
    zh: { title: 'Amazon 烟熏器产品广告', short: '围绕便携烟熏器、节日氛围与使用场景展开的产品广告。', description: '一支面向亚马逊产品页的烟熏器广告片，从温暖的节日场景进入产品体验，以近景细节和柔和光线强调使用感。', role: '策划 / 视觉指导 / 剪辑 / 调色' }
  },
  {
    id: 'sf90-lines', kind: 'video', cover: './images/demo/sf90.svg', categories: ['outdoor', 'commercial', 'brand'], year: '2024',
    en: { title: 'SF90 / Lines of Speed', short: 'Speed, cut into clean graphic gestures.', description: 'A high-energy automotive treatment built from track textures, compressed perspective and rhythmic editorial cuts.', role: 'Editing / VFX / Sound design' },
    zh: { title: 'SF90 / 速度线', short: '把速度剪成干净有力的图形动作。', description: '以赛道纹理、压缩透视和节奏化剪辑构成的汽车影像提案，强调速度和画面结构。', role: '剪辑 / 视觉特效 / 声音设计' }
  },
  {
    id: 'nebula-x1', kind: 'video', orientation: 'portrait', featured: true, cover: './images/demo/nebula.svg', video: './videos/smoker-main.mov', poster: './videos/smoker-main-first-frame.png', categories: ['product'], year: '2025', metaEn: 'PRODUCT VIDEO', metaZh: '产品视频',
    en: { title: 'Social Smoker Product Ad', short: 'A product video built around the smoker, its details and its use ritual.', description: 'A close product study of a compact smoker, pairing wood, glass, tobacco and warm light. The edit turns preparation and use into a quiet, sensory product moment.', role: 'Planning / Shooting / Editing / Color grading' },
    zh: { title: '社媒 烟熏器产品广告', short: '围绕烟熏器、器物细节和使用仪式感展开的产品视频。', description: '以烟熏器、木盒、玻璃和烟草细节构成的产品视频，用近景和暖光呈现准备与使用过程，让器物质感成为画面主角。', role: '策划 / 拍摄 / 剪辑 / 调色' }
  },
  {
    id: 'shoreline', kind: 'video', orientation: 'landscape', featured: true, cover: './images/demo/shoreline.svg', video: './videos/red-light-mask.mp4', poster: './videos/red-light-mask-first-frame.png', categories: ['commercial', 'product'], year: '2025', metaEn: 'COMMERCIAL / PRODUCT', metaZh: '商业广告 / 产品视频',
    en: { title: 'Shopify Beauty Mask Commercial', short: 'A beauty product commercial placing a red-light mask inside an everyday care routine.', description: 'A clean lifestyle treatment showing how a red-light mask fits into a simple at-home routine. The camera stays close to the user, balancing instruction with a calm beauty mood.', role: 'Planning / Shooting / Editing / Color grading' },
    zh: { title: 'Shopify 美容面罩商业广告', short: '红光面罩结合日常护理的产品片', description: '围绕红光面罩的居家使用展开，结合日常护理流程呈现产品体验，在清晰演示与轻松生活感之间保持平衡。', role: '策划 / 拍摄 / 剪辑 / 调色' }
  },
  {
    id: 'orbit-system', kind: 'design', cover: './images/demo/orbit-brand.svg', categories: ['design', 'brand', 'motion'], year: '2025',
    en: { title: 'Orbit / Identity System', short: 'A modular identity for a moving-image studio.', description: 'A graphic identity exploration built from orbital paths, utility typography and a flexible motion language.', role: 'Art direction / Graphic design' },
    zh: { title: 'Orbit / 视觉识别系统', short: '为影像工作室构建的模块化视觉系统。', description: '以轨道路径、功能型字体和可延展的动态语言构成的视觉识别探索。', role: '艺术指导 / 平面设计' }
  },
  {
    id: 'chromatic-weather', kind: 'video', orientation: 'portrait', featured: true, cover: './images/demo/chromatic.svg', video: './videos/smoker-install.mp4', poster: './videos/smoker-install-first-frame.png', categories: ['product'], year: '2025', metaEn: 'PRODUCT VIDEO', metaZh: '产品视频',
    en: { title: 'Beauty Mask Unboxing', short: 'An unboxing video introducing the beauty mask and its first setup.', description: 'A practical product video following the unboxing, setup and first use of a beauty mask, keeping each step easy to read and easy to follow.', role: 'Planning / Shooting / Editing / AI' },
    zh: { title: '美容面罩开箱视频', short: '展示美容面罩开箱与第一次使用的产品视频。', description: '围绕美容面罩展开的开箱视频，按步骤展示拆封、准备和第一次使用，让产品细节与操作过程清晰易懂。', role: '策划 / 拍摄 / 剪辑 / 调色 / AI' }
  },
];

const mergedProjects = projects
  .filter((project) => !projectMerges.some((merge) => merge.remove === project.id))
  .map((project) => {
    const merge = projectMerges.find((item) => item.keep === project.id);
    if (!merge) return project;
    return { ...project };
  });
const layoutProjects = (items) => {
  const landscapes = items.filter((project) => project.orientation === 'landscape');
  const portraits = items.filter((project) => project.orientation !== 'landscape');
  if (!landscapes.length) return { mode: 'portrait-only', projects: portraits.map((project) => ({ ...project, layout: 'portrait-only' })) };
  if (!portraits.length) return { mode: 'landscape-only', projects: landscapes.map((project) => ({ ...project, layout: 'landscape-only' })) };
  const projects = [];
  landscapes.forEach((project, index) => {
    projects.push({ ...project, layout: 'landscape-pair' });
    if (portraits[index]) projects.push({ ...portraits[index], layout: 'portrait-pair' });
  });
  portraits.slice(landscapes.length).forEach((project) => projects.push({ ...project, layout: 'portrait-only' }));
  return { mode: 'mixed', projects };
};

const copy = {
  en: {
    nav: { home: 'HOME', work: 'WORK', about: 'ABOUT', contact: 'CONTACT' },
    heroKicker: 'PERSONAL PORTFOLIO / 2026', heroTitle: 'ROWAN', heroSummary: 'Editing, direction and visual systems for brands, products and ideas in motion.', heroRole: 'VIDEO EDITOR / VISUAL CREATOR', viewFilm: 'VIEW WORK', introLocation: 'ROWAN', introProfile: 'ROWAN / 罗韦', introBirth: '2003.8.14', introObjective: 'EDITING / VISUAL CREATION', introCta: 'LET’S TALK', introKeywords: 'LIGHT & RHYTHM / COMMERCIAL / PRODUCT WORLDS / AI VISUALS / POST',
    archiveKicker: 'SELECTED WORK', archiveTitle: 'A visual archive in progress.', archiveBody: 'A selection of moving image, product worlds and graphic experiments. Every project is a study in rhythm, light and intent.',
    aboutKicker: 'ABOUT / ROWAN', aboutTitle: 'Make ideas tangible.', aboutText: 'I work across filmmaking, editing and visual creation, shaping ideas into distinctive visual experiences.', aboutTextZh: '专注于影像剪辑、视觉指导与视觉创作，将创意转化为具有节奏、质感与表达力的画面。', processKicker: 'PROCESS', processTitle: 'From concept to cut.', processBody: 'A clear path from first frame to final feeling.',
    contactKicker: 'CONTACT', contactTitle: 'LET’S CREATE\nSOMETHING.', contactBody: 'Have a film, product or visual world in mind? Tell me where you want to take it.', contactCta: 'START A CONVERSATION', placeholder: 'PLACEHOLDER — REPLACE WITH YOUR EMAIL', footerRole: 'VIDEO EDITOR / VISUAL CREATOR', demo: 'DEMO PROJECT', close: 'CLOSE', previous: 'PREVIOUS', next: 'NEXT', viewProject: 'VIEW PROJECT', noProjects: 'No projects in this category yet.'
  },
  zh: {
    nav: { home: '首页', work: '作品', about: '关于', contact: '联系' },
    heroKicker: '个人作品集 / 2026', heroTitle: 'LUOWEI', heroSummary: '专注于影像剪辑、视觉指导与 AI 视觉创作，把想法变成有节奏、有质感的画面。', heroRole: '拍摄剪辑', viewFilm: '浏览作品', introLocation: 'ROWAN', introProfile: 'ROWAN / 罗韦', introBirth: '2003.8.14', introObjective: '拍摄剪辑', introCta: '联系合作', introKeywords: '光影与节奏 / 商业产品 / 影像叙事 / AI 视觉 / 后期合成',
    archiveKicker: '精选作品', archiveTitle: '一份仍在持续的视觉档案。', archiveBody: '这里收录影像、产品世界和图形实验。每个项目都在研究节奏、光线和表达意图。',
    aboutKicker: '关于 / ROWAN', aboutTitle: '让想象落地', aboutText: 'I work across filmmaking, editing and visual creation, shaping ideas into distinctive visual experiences.', aboutTextZh: '专注于影像剪辑、视觉指导与视觉创作，将创意转化为具有节奏、质感与表达力的画面。', processKicker: '创作流程', processTitle: '从概念到成片', processBody: '策略、生成、剪辑与后期整合成一套轻量但完整的视觉生产流程。',
    contactKicker: '联系', contactTitle: '一起创造\n值得被看见的作品。', contactBody: '如果你正在构思一支影片、一个产品或一套视觉世界，欢迎告诉我你想把它带到哪里。', contactCta: '开始交流', placeholder: '占位信息 — 请替换成你的邮箱', footerRole: '视频剪辑 / 视觉创作者', demo: '演示项目', close: '关闭', previous: '上一个', next: '下一个', viewProject: '查看项目', noProjects: '这个分类暂时还没有作品。'
  }
};

const processItems = [
  { n: '01', en: 'CREATIVE DIRECTION', zh: '创意策划', noteEn: 'Turn the brief into a clear visual direction.', noteZh: '把需求拆成清晰的视觉方向和叙事重点。', toolsEn: ['Narrative / Rhythm / Structure', 'Storyboard / Reference'], toolsZh: ['叙事 / 节奏 / 视觉结构', '分镜 / 参考整理'] },
  { n: '02', en: 'VIDEO SHOOTING', zh: '拍摄视频', noteEn: 'Build the scene, subject and visual intention.', noteZh: '把场地、模特和画面内容组织成完整表达。', toolsEn: ['Location / Subject / Frame', 'Content / Creative direction'], toolsZh: ['场地 / 模特 / 画面', '内容 / 创意'] },
  { n: '03', en: 'VIDEO EDITING', zh: '视频剪辑', noteEn: 'Give the story its rhythm and focus.', noteZh: '让故事拥有节奏、重点和情绪推进。', toolsEn: ['Premiere / After Effects', 'Sound / Color / Motion'], toolsZh: ['Premiere / After Effects', '声音 / 调色 / 动态'] },
  { n: '04', en: 'POST-PRODUCTION', zh: '后期交付', noteEn: 'Polish every detail for the final screen.', noteZh: '把资产整理成适合发布的完整视觉页面。', toolsEn: ['Color / Retouch / Mastering', 'Delivery / Platform formats'], toolsZh: ['调色 / 精修 / 母版', '交付 / 平台适配'] }
];

let state = { lang: 'zh', category: 'all', activeId: null, previousFocus: null };
let revealObserver;
let motionBooted = false;
let filterSwitchTimer;

const el = (tag, attrs = {}, children = []) => {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === 'class') node.className = value;
    else if (key === 'text') node.textContent = value;
    else if (key === 'html') node.innerHTML = value;
    else node.setAttribute(key, value);
  });
  children.forEach((child) => node.append(child));
  return node;
};
const svgIcon = (attrs, markup) => el('svg', { ...attrs, html: markup });

const render = () => {
  const t = copy[state.lang];
  document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : 'en';
  document.body.classList.toggle('lang-zh', state.lang === 'zh');
  const app = document.querySelector('#app');
  app.innerHTML = '';

  const header = el('header', { class: 'site-header' }, [
    el('a', { class: 'brand', href: '#top', 'aria-label': 'ROWAN home' }, [el('span', { text: 'ROWAN' }), el('sup', { text: '®' })]),
    el('nav', { class: 'main-nav', 'aria-label': 'Main navigation' }, [
      navLink(t.nav.home, '#top'), navLink(t.nav.about, '#about'), navLink(t.nav.work, '#work'), navLink(t.nav.contact, '#contact')
    ]),
    el('button', { class: 'language-switch', type: 'button', 'aria-label': 'Switch language', 'data-action': 'lang' }, [el('span', { class: state.lang === 'en' ? 'active' : '', text: 'EN' }), el('span', { class: 'slash', text: '/' }), el('span', { class: state.lang === 'zh' ? 'active' : '', text: '中文' })])
  ]);

  const heroVideo = videoElement({ class: 'hero-photo', src: VESPER_VIDEO, preload: 'metadata', muted: '', loop: '', playsinline: '', 'aria-hidden': 'true' }, { autoplay: true });
  heroVideo.loop = true;
  heroVideo.addEventListener('error', () => heroVideo.classList.add('is-failed'), { once: true });
  const hero = el('section', { class: 'hero intro-hero', id: 'top', 'aria-label': t.heroKicker }, [
    heroVideo,
    el('div', { class: 'intro-topline' }, [el('span', { class: 'eyebrow', text: t.heroKicker }), el('span', { class: 'intro-location', text: t.introLocation })]),
    el('div', { class: 'intro-center' }, [el('h1', { class: 'hero-title intro-title', text: t.heroTitle }), el('p', { class: 'intro-subtitle', text: t.heroRole }), el('p', { class: 'intro-keywords', text: t.introKeywords })]),
    el('div', { class: 'intro-bottom' }, [
      el('div', { class: 'intro-facts' }, [
        el('div', { class: 'intro-fact' }, [el('span', { text: state.lang === 'zh' ? '姓名 / PROFILE' : 'PROFILE' }), el('strong', { text: t.introProfile })]),
        el('div', { class: 'intro-fact' }, [el('span', { text: state.lang === 'zh' ? '定位 / ROLE' : 'ROLE' }), el('strong', { text: t.heroRole })]),
        el('div', { class: 'intro-fact' }, [el('span', { text: state.lang === 'zh' ? '年龄 / BORN' : 'BORN' }), el('strong', { text: t.introBirth })]),
        el('div', { class: 'intro-fact' }, [el('span', { text: state.lang === 'zh' ? '职业目标 / OBJECTIVE' : 'CAREER OBJECTIVE' }), el('strong', { text: t.introObjective })])
      ]),
      el('div', { class: 'intro-actions' }, [el('a', { class: 'intro-button primary', href: '#work', text: t.viewFilm }), el('a', { class: 'intro-button', href: '#contact', text: t.introCta })])
    ]),
    el('div', { class: 'grain', 'aria-hidden': 'true' })
  ]);

  const filter = el('div', { class: 'filter-row shell', id: 'work' });
  const filterInner = el('div', { class: 'filter-scroll' });
  filterCategories.forEach((key) => {
    const button = el('button', { class: `filter-chip ${state.category === key ? 'selected' : ''}`, type: 'button', 'data-action': 'filter', 'data-category': key, text: categoryLabels[key][state.lang] });
    filterInner.append(button);
  });
  filter.append(filterInner);

  const grid = el('section', { class: 'project-grid shell', 'aria-live': 'polite', 'data-reveal': 'up' });
  const filtered = state.category === 'all'
    ? mergedProjects.filter((project) => project.featured === true)
    : mergedProjects.filter((project) => project.categories.includes(state.category));
  if (!filtered.length) grid.append(el('div', { class: 'empty-state', text: t.noProjects }));
  const layout = layoutProjects(filtered);
  grid.classList.add(`layout-${layout.mode}`);
  layout.projects.forEach((project, index) => grid.append(projectCard(project, index, t)));

  const about = el('section', { class: 'about-section shell', id: 'about', 'data-reveal': 'up' }, [
    el('div', { class: 'section-kicker', text: t.aboutKicker }),
    el('div', { class: 'about-layout' }, [el('h2', { class: 'section-title about-title', html: lineBreaks(t.aboutTitle) }), el('div', { class: 'about-copy' }, [el('p', { class: 'about-lead', text: state.lang === 'zh' ? t.aboutTextZh : t.aboutText }), el('p', { class: 'about-note', text: state.lang === 'zh' ? t.aboutText : t.aboutTextZh })])])
  ]);

  const process = el('section', { class: 'process-section shell', 'data-reveal': 'up' }, [el('div', { class: 'process-header' }, [el('div', { class: 'process-heading' }, [el('h2', { class: 'section-title process-title', html: lineBreaks(t.processTitle) })])])]);
  const processList = el('div', { class: 'process-grid' });
  processItems.forEach((item) => {
    const tools = state.lang === 'zh' ? item.toolsZh : item.toolsEn;
    processList.append(el('article', { class: 'process-card' }, [el('h3', { class: 'process-card-title', text: `${item.n} / ${state.lang === 'zh' ? item.zh : item.en}` }), el('p', { class: 'process-card-note', text: state.lang === 'zh' ? item.noteZh : item.noteEn }), el('ul', { class: 'process-card-tools' }, tools.map((tool) => el('li', { text: tool })))]));
  });
  process.append(processList);

  const contact = el('section', { class: 'contact-section shell', id: 'contact', 'data-reveal': 'up' }, [el('div', { class: 'section-kicker', text: t.contactKicker }), el('h2', { class: 'contact-title', html: lineBreaks(t.contactTitle) }), el('p', { class: 'contact-body', text: t.contactBody }), el('div', { class: 'contact-actions' }, [el('a', { class: 'contact-email placeholder', href: '#contact', 'data-action': 'placeholder' }, [el('span', { text: 'WonderfulY03' }), el('small', { text: 'WX / WECHAT' })]), el('a', { class: 'contact-cta', href: '#contact', 'data-action': 'placeholder' }, [el('span', { text: t.contactCta }), el('span', { class: 'arrow', text: '↗' })])])]);

  const footer = el('footer', { class: 'site-footer shell' }, [el('div', { class: 'footer-brand', text: 'ROWAN®' }), el('div', { class: 'footer-role', text: t.footerRole }), el('div', { class: 'footer-year', text: `© ${new Date().getFullYear()}` }), el('a', { class: 'back-top', href: '#top', text: '↑ TOP' })]);
  const floatingTop = el('a', { class: 'floating-top', href: '#top', 'aria-label': 'Back to top', text: '↑' });
  app.append(header, hero, filter, grid, about, process, contact, footer, floatingTop, modal());
  heroVideo.play().catch(() => {});
  bindEvents();
  requestAnimationFrame(() => { initAppearance(); initRevealObserver(); });
};

const navLink = (text, href) => el('a', { href, text });
const tag = (text) => el('span', { class: 'tag', text });
const lineBreaks = (text) => text.replaceAll('\n', '<br />');
const projectLabel = (project, lang) => project[lang === 'zh' ? 'metaZh' : 'metaEn'] || (project.kind === 'design' ? categoryLabels.design[lang] : categoryLabels[project.categories[0]][lang]);

const videoElement = (attrs, options = {}) => {
  const node = el('video', attrs);
  node.muted = options.sound ? false : true;
  node.defaultMuted = node.muted;
  node.playsInline = true;
  if (options.autoplay) node.autoplay = true;
  if (options.controls) node.controls = true;
  return node;
};

function projectCard(project, index, t) {
  const p = project[state.lang];
  const card = el('article', { class: `project-card ${project.kind === 'design' ? 'design-card' : ''} ${project.layout === 'landscape-pair' ? 'card-large' : ''} ${project.layout ? `layout-${project.layout}` : ''}`, 'data-reveal': 'card' });
  const cardVideoAttrs = { 'data-src': project.video, preload: 'none', 'aria-label': p.title };
  if (project.poster || project.cover) cardVideoAttrs.poster = project.poster || project.cover;
  const visual = project.video
    ? videoElement(cardVideoAttrs)
    : el('img', { src: project.cover, alt: p.title, loading: index < 3 ? 'eager' : 'lazy' });
  const media = el('div', { class: 'card-media' }, [visual, el('div', { class: 'card-shade' }), el('button', { class: 'card-view', type: 'button', 'data-action': 'open', 'data-id': project.id }, [el('span', { text: t.viewProject }), el('span', { class: 'arrow', text: '↗' })]), el('div', { class: 'card-caption' }, [el('div', { class: 'card-meta' }, [el('span', { text: project.year }), el('span', { text: projectLabel(project, state.lang) })]), el('h3', { text: p.title }), el('p', { text: p.short })])]);
  card.append(media);
  return card;
}

function modal() {
  return el('div', { class: 'modal', id: 'project-modal', 'aria-hidden': 'true' }, [el('div', { class: 'modal-backdrop', 'data-action': 'close' }), el('div', { class: 'modal-panel', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Project details' }, [el('button', { class: 'modal-close', type: 'button', 'data-action': 'close', 'aria-label': 'Close' }, [el('span', { text: 'CLOSE' }), el('span', { text: '×' })]), el('div', { class: 'modal-media', id: 'modal-media' }), el('div', { class: 'modal-content', id: 'modal-content' })])]);
}

function setMenuState(isOpen) {
  document.body.classList.toggle('menu-open', isOpen);
  const menuButton = document.querySelector('[data-action="menu"]');
  menuButton?.setAttribute('aria-expanded', String(isOpen));
  menuButton?.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
}

function bindEvents() {
  document.querySelectorAll('[data-action="lang"]').forEach((node) => node.addEventListener('click', () => { state.lang = state.lang === 'en' ? 'zh' : 'en'; render(); }));
  document.querySelector('[data-action="menu"]')?.addEventListener('click', () => setMenuState(!document.body.classList.contains('menu-open')));
  document.querySelector('[data-action="menu-close"]')?.addEventListener('click', () => setMenuState(false));
  document.querySelectorAll('#site-nav a').forEach((link) => link.addEventListener('click', () => setMenuState(false)));
  document.querySelectorAll('[data-action="filter"]').forEach((node) => node.addEventListener('click', () => {
    const scrollTop = window.scrollY;
    state.category = node.dataset.category;
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    const previousAnchor = root.style.overflowAnchor;
    document.body.classList.add('filter-switching');
    root.style.scrollBehavior = 'auto';
    root.style.overflowAnchor = 'none';
    node.blur();
    render();
    document.querySelector(`[data-action="filter"][data-category="${state.category}"]`)?.focus({ preventScroll: true });
    requestAnimationFrame(() => {
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const targetTop = Math.min(scrollTop, maxScroll);
      const behavior = targetTop === scrollTop ? 'auto' : 'smooth';
      window.scrollTo({ top: targetTop, left: 0, behavior });
      setTimeout(() => window.scrollTo({ top: targetTop, left: 0, behavior }), 0);
      clearTimeout(filterSwitchTimer);
      filterSwitchTimer = setTimeout(() => {
        document.body.classList.remove('filter-switching');
        root.style.scrollBehavior = previousBehavior;
        root.style.overflowAnchor = previousAnchor;
      }, 220);
    });
  }));
  document.querySelectorAll('.project-card').forEach((card) => card.addEventListener('click', () => openModal(card.querySelector('[data-action="open"]')?.dataset.id)));
  document.querySelectorAll('[data-action="close"]').forEach((node) => node.addEventListener('click', closeModal));
  document.querySelectorAll('[data-action="placeholder"]').forEach((node) => node.addEventListener('click', (event) => { event.preventDefault(); node.classList.add('flash'); setTimeout(() => node.classList.remove('flash'), 700); }));
}

function openModal(id) {
  state.activeId = id;
  const project = mergedProjects.find((item) => item.id === id);
  if (!project) return;
  const t = copy[state.lang];
  const p = project[state.lang];
  const modalEl = document.querySelector('#project-modal');
  const media = document.querySelector('#modal-media');
  const content = document.querySelector('#modal-content');
  stopModalMedia();
  document.querySelector('.hero-photo')?.pause();
  media.innerHTML = '';
  const modalVideoAttrs = { src: project.video, preload: 'metadata', 'aria-label': p.title };
  if (project.poster || project.cover) modalVideoAttrs.poster = project.poster || project.cover;
  const modalVideo = project.video
    ? videoElement(modalVideoAttrs, { autoplay: true, controls: true, sound: true })
    : null;
  media.append(modalVideo || el('img', { src: project.cover, alt: p.title }));
  if (modalVideo) modalVideo.play().catch(() => {});
  content.innerHTML = '';
  content.append(el('div', { class: 'modal-kicker', text: `${project.year} / ${projectLabel(project, state.lang)}` }), el('h2', { class: 'modal-title', text: p.title }), el('p', { class: 'modal-description', text: p.description }), el('div', { class: 'modal-role' }, [el('span', { text: state.lang === 'zh' ? '我的职责' : 'MY ROLE' }), el('strong', { text: p.role })]), el('div', { class: 'modal-demo', text: t.demo }));
  const index = mergedProjects.findIndex((item) => item.id === id);
  const footer = el('div', { class: 'modal-nav' }, [el('button', { type: 'button', 'data-modal-nav': 'prev', text: `← ${t.previous}` }), el('button', { type: 'button', 'data-modal-nav': 'next', text: `${t.next} →` })]);
  content.append(footer);
  footer.querySelector('[data-modal-nav="prev"]').addEventListener('click', () => openModal(mergedProjects[(index - 1 + mergedProjects.length) % mergedProjects.length].id));
  footer.querySelector('[data-modal-nav="next"]').addEventListener('click', () => openModal(mergedProjects[(index + 1) % mergedProjects.length].id));
  modalEl.classList.add('is-open'); modalEl.setAttribute('aria-hidden', 'false'); document.body.classList.add('modal-open'); modalEl.querySelector('.modal-close').focus();
}

function stopModalMedia() {
  const media = document.querySelector('#modal-media');
  media?.querySelectorAll('video').forEach((video) => {
    video.pause();
    video.currentTime = 0;
    video.muted = true;
  });
  if (media) media.innerHTML = '';
}

function closeModal() {
  stopModalMedia();
  const modalEl = document.querySelector('#project-modal');
  modalEl.classList.remove('is-open');
  modalEl.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  document.querySelector('.hero-photo')?.play().catch(() => {});
  state.activeId = null;
}

function initRevealObserver() {
  document.body.classList.add('motion-enabled');
  revealObserver?.disconnect();
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-reveal]').forEach((node) => node.classList.add('is-visible'));
    return;
  }
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -45px' });
  document.querySelectorAll('[data-reveal]').forEach((node) => revealObserver.observe(node));
}

function initAppearance() {
  const nodes = document.querySelectorAll('.appear, .hero-photo');
  nodes.forEach((node) => node.addEventListener('animationend', () => node.classList.add('is-in'), { once: true }));
  requestAnimationFrame(() => requestAnimationFrame(() => {
    nodes.forEach((node) => {
      const animations = node.getAnimations?.() || [];
      if (!animations.some((animation) => animation.playState === 'running' || animation.playState === 'finished')) node.classList.add('is-in');
    });
  }));
}

function setupGlobalMotion() {
  if (motionBooted) return;
  motionBooted = true;
  const updateHeader = () => {
    document.querySelector('.site-header')?.classList.toggle('is-scrolled', window.scrollY > 24);
    document.querySelector('.floating-top')?.classList.toggle('is-visible', window.scrollY > 560);
  };
  window.addEventListener('scroll', updateHeader, { passive: true });
  window.addEventListener('resize', () => { if (window.matchMedia('(min-width: 901px)').matches) setMenuState(false); }, { passive: true });
  updateHeader();
}

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  setMenuState(false);
  if (state.activeId) closeModal();
});

render();
setupGlobalMotion();

