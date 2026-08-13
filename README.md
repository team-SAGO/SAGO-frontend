# SAGO Frontend 🛵

이륜차 사고 대응 서비스 **SAGO**의 프론트엔드입니다.

## 기술 스택
| 역할 | 종류 |
| --- | --- |
| Library | React 19 |
| Language | TypeScript |
| Bundler | Vite |
| Styling | Tailwind CSS |
| Data Fetching | Axios |
| Routing | React Router |

## 시작하기
```bash
npm install      # 의존성 설치 (최초 1회)
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
```

## 디렉토리 구조 (기능 중심 아키텍처)
```
src/
├── core/       # 앱 전체 공통 설정 (constants, theme, routes, utils)
├── common/     # 재사용 UI (components, layout)
├── data/       # 모델 · 레포지토리 · 서비스(API/외부기능)
└── features/   # 실제 기능 (auth, home, accident, checklist, statement,
                #            evidence, report, history, settings ...)
```

## 환경 변수
`.env.example`를 복사해 `.env`를 만들어 사용하세요. (`.env`는 커밋 금지)
```bash
cp .env.example .env
```

## AI 코드리뷰
PR을 올리면 **CodeRabbit**이 자동으로 리뷰를 달아줍니다. (`.coderabbit.yaml` 참고)
