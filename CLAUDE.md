# Portfolio Project — Claude Context

## 프로젝트 개요

Next.js 15 App Router + TypeScript 기반 개발자 포트폴리오.
**모든 콘텐츠는 `data/portfolio.yaml` 단 하나의 파일에서만 관리**한다.
GitHub Pages에 Static Export로 배포된다.

---

## 핵심 규칙

- **콘텐츠 변경** → `data/portfolio.yaml`만 수정. 컴포넌트 코드는 건드리지 않는다.
- **스타일 변경** → `src/app/globals.css`의 CSS 변수(`--color-*`, `--shadow-*`)를 수정. `tailwind.config`는 없다.
- **새 섹션 추가** → YAML 스키마에 필드 추가 → `src/types/portfolio.ts` 업데이트 → 섹션 컴포넌트 작성 → `src/app/page.tsx`에 마운트.
- **`src/lib/portfolio.ts`는 `server-only`** — 클라이언트 컴포넌트에서 절대 import 금지.
- **포맷 유틸(`formatPeriod`, `formatDuration`)** → `src/lib/format.ts`에서 import. 클라/서버 모두 사용 가능.

---

## 기술 스택

| 항목 | 내용 |
|------|------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript strict mode |
| Styling | Tailwind CSS v4 (CSS-first, `@theme` 블록) |
| Data | `js-yaml` — 빌드 타임 `fs.readFileSync` |
| Deploy | GitHub Pages (`output: "export"` → `./out/`) |
| Dark mode | `prefers-color-scheme` 미디어 쿼리 자동 감지 |

---

## 파일 구조

```
data/
  portfolio.yaml          ← 콘텐츠 단일 소스 (여기만 편집)

src/
  types/
    portfolio.ts          ← 모든 TypeScript 인터페이스 (YAML 스키마와 1:1 대응)
  lib/
    portfolio.ts          ← server-only. getPortfolioData() + format.ts re-export
    format.ts             ← formatPeriod(period), formatDuration(period)
  app/
    layout.tsx            ← Header, Footer 마운트. generateMetadata()
    page.tsx              ← 서버 컴포넌트. getPortfolioData() 호출 후 각 섹션에 props 전달
    globals.css           ← Tailwind v4 @theme 토큰 + 다크모드 변수
  components/
    layout/
      Header.tsx          ← 'use client'. 고정 네비게이션 (name prop)
      Footer.tsx          ← 서버 컴포넌트. (contact, name props)
    sections/
      HeroSection.tsx     ← profile: Profile
      ExperienceSection.tsx ← experiences: Experience[]
      SkillsSection.tsx   ← skills: SkillCategory[]
      ProjectsSection.tsx ← 'use client'. projects: Project[] + 모달 상태
      EducationSection.tsx ← education: Education[]
    ui/
      TechBadge.tsx       ← label, variant("default"|"accent")
      SectionWrapper.tsx  ← id, title, children
      ExperienceCard.tsx  ← experience: Experience
      TaskCard.tsx        ← task: Task
      ProjectModal.tsx    ← 'use client'. project: Project, onClose: () => void

.github/workflows/deploy.yml  ← main push → npm run build → gh-pages 브랜치 배포
```

---

## 데이터 흐름

```
portfolio.yaml
  → getPortfolioData()   (서버, 빌드 타임)
  → page.tsx             (서버 컴포넌트, props 분배)
      ├─ HeroSection(profile)
      ├─ ExperienceSection(experiences)
      │    └─ ExperienceCard → TaskCard → TechBadge
      ├─ SkillsSection(skills)
      ├─ ProjectsSection(projects)   ← 'use client', useState로 모달 제어
      │    └─ ProjectModal(project, onClose)
      └─ EducationSection(education)
```

---

## CSS 디자인 시스템

모든 색상은 CSS 변수로 관리. 컴포넌트에서는 `style={{ color: "var(--color-text)" }}` 형식으로 사용.

```
--color-bg              페이지 배경
--color-surface         카드/패널 배경
--color-surface-elevated 중첩 카드 배경
--color-text            본문 텍스트
--color-text-muted      보조 텍스트
--color-text-subtle     힌트/메타 텍스트
--color-accent          강조색 (블루)
--color-accent-subtle   강조색 배경 (뱃지 bg)
--color-border          테두리
--color-border-strong   강한 테두리
--shadow-card           카드 기본 그림자
--shadow-card-hover     카드 hover 그림자
```

---

## YAML 스키마 요약

```yaml
profile:
  name / title / bio / avatar / location
  contact: email / github / linkedin / blog / resume

experiences:
  - company / location / period{start, end} / role / description
    technologies: []
    tasks:
      - subject / description / period{start,end} / role / technologies: []

skills:
  - category / items: []

projects:
  - name / description / period{start,end}
    technologies: []
    media:                    # optional
      src: "/path/img.png"    # 로컬 이미지 또는 YouTube URL (자동 감지)
      alt: "설명"
    links: { github, demo, website }  # optional

education:
  - school / degree / major / period{start,end} / description
```

### Period 규칙
- `start` / `end` 모두 `"YYYY-MM"` 문자열
- `end: null` → "현재" 로 렌더링

### ProjectMedia 자동 판별
- `src`에 `youtube.com` 또는 `youtu.be` 포함 → YouTube iframe embed
- 그 외 → `<Image>` (Next.js)로 렌더링
- `public/projects/` 폴더에 이미지 파일을 넣고 `/projects/파일명.png` 로 참조

---

## 자주 쓰는 명령어

```bash
npm run dev      # 로컬 개발 (http://localhost:3000)
npm run build    # 정적 빌드 → ./out/ 생성
```

---

## 주의사항

- `output: "export"` 모드라 `next/image`의 이미지 최적화 비활성화 (`unoptimized: true`)
- GitHub Pages 서브디렉터리 배포 시 `next.config.ts`의 `basePath` / `assetPrefix` 주석 해제 필요
- `src/lib/portfolio.ts`에 `import "server-only"` — 클라이언트 컴포넌트에서 import 시 빌드 에러 발생 (의도된 보호)
- 새 컴포넌트에서 이벤트 핸들러 사용 시 반드시 `"use client"` 추가
