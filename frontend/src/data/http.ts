import axios from 'axios'

// 모든 API 호출이 공유하는 axios 인스턴스.
// 백엔드 주소는 .env 의 VITE_API_BASE_URL 로 설정 (없으면 localhost:8080)
export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080',
  timeout: 10_000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// TODO: 로그인 붙이면 여기서 요청 인터셉터로 JWT 토큰을 헤더에 추가하세요.
// http.interceptors.request.use((config) => { ... })
