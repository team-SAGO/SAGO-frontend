# 🛵 SAGO

이륜차(오토바이) 사고 대응 서비스. 사고 발생부터 기록·진술·증빙·경위서·PDF 보고서까지 한 흐름으로 돕습니다.

> 모노레포 구조입니다. `frontend/`(React) + `backend/`(Spring Boot)가 한 저장소에 함께 있습니다.

## 📦 기술 스택

| 구분 | 프론트엔드 | 백엔드 |
| --- | --- | --- |
| 언어 | TypeScript | Java 17 |
| 프레임워크 | React 19 + Vite | Spring Boot 3.5.x |
| 스타일 | Tailwind CSS v4 | - |
| 통신/보안 | Axios, React Router | Spring Security, OAuth2, JWT |
| DB | - | PostgreSQL + JPA |
| 빌드 | Vite | Gradle |

## 📁 폴더 구조

```
SAGO/
├── frontend/     # React + Vite + TS + Tailwind (기능 중심 아키텍처)
│   └── src/
│       ├── core/       # 앱 전역 설정 (constants, theme, routes, utils)
│       ├── common/     # 공용 UI (components, layout)
│       ├── data/       # 모델 / repository / service / http 클라이언트
│       └── features/   # 실제 기능별 화면 (auth, home, accident, ...)
│
└── backend/      # Spring Boot + Gradle
    └── src/main/java/com/sago/
        ├── global/config/   # SecurityConfig 등 전역 설정
        └── health/          # 헬스체크
```

## 🚀 시작하기

### 사전 준비
- Node.js 20+ (프론트)
- JDK 17 (백엔드) — 미설치 시 [Temurin 17](https://adoptium.net/temurin/releases/?version=17) 설치
- PostgreSQL (백엔드 실행 시)

### 프론트엔드
```bash
cd frontend
npm install
cp .env.example .env    # 필요시 API 주소 수정
npm run dev             # http://localhost:5173
```

### 백엔드
```bash
cd backend
cp .env.example .env    # DB / 키 값 채우기 (절대 커밋 금지)
./gradlew build         # 빌드 + 테스트 (테스트는 H2로 DB 없이 통과)
./gradlew bootRun       # http://localhost:8080  (실행하려면 Postgres 필요)
```
서버 확인: `GET http://localhost:8080/api/health` → `{"status":"UP"}`

> Windows 파워셸에서는 `./gradlew` 대신 `.\gradlew.bat` 을 쓰세요.

## 🌿 브랜치 / 협업 규칙

- `main` 은 배포 가능한 안정 브랜치 — 직접 push 금지, **PR 로만** 병합
- 기능 개발은 브랜치를 따서 작업: `feat/기능명`, `fix/버그명`
- 커밋 예: `feat: 로그인 화면 추가`
- 각자 자기 파일/기능 위주로 작업하고 충돌 시 소통

## 🔐 보안 주의
- `.env`, 서비스 계정 JSON 등 **비밀 키는 절대 커밋하지 마세요.** (`.gitignore` 처리됨)
- 실수로 커밋했다면 키를 즉시 폐기·재발급하세요.
