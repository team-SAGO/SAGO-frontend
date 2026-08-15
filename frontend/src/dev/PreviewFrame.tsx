import React from "react";

interface PreviewFrameProps {
  width: number;
  height: number;
  zoom: number;
  path: string;
  deviceName: string;
}

export default function PreviewFrame({
  width,
  height,
  zoom,
  path,
  deviceName,
}: PreviewFrameProps) {
  const isGalaxy = deviceName.toLowerCase().includes("galaxy");

  return (
    <div
      style={{
        width,
        height,
        transform: `scale(${zoom})`,
        transformOrigin: "center center",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          borderRadius: 40,
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* =========================
           1. 상단 상태바
        ========================= */}
        <div
          style={{
            height: 38,
            backgroundColor: "#ffffff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
            fontSize: 14,
            fontWeight: 600,
            color: "#111827",
            flexShrink: 0,
            zIndex: 50,
            userSelect: "none",
          }}
        >
          {/* 시간 */}
          <span>9:41</span>

          {/* 우측 상태 아이콘 (신호, 꽉 찬 와이파이, 배터리) */}
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            {/* 네트워크 신호 SVG */}
            <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
              <rect x="1" y="8" width="2" height="4" rx="0.5" />
              <rect x="5" y="5" width="2" height="7" rx="0.5" />
              <rect x="9" y="3" width="2" height="9" rx="0.5" />
              <rect x="13" y="0" width="2" height="12" rx="0.5" fillOpacity="0.3" />
            </svg>

            {/* 꽉 찬 와이파이 SVG (크기와 볼륨감 조정) */}
            <svg width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h.01" />
              <path d="M2 8.82a15 15 0 0 1 20 0" />
              <path d="M5 12.8a10 10 0 0 1 14 0" />
              <path d="M8.5 16.4a5 5 0 0 1 7 0" />
            </svg>

            {/* 배터리 SVG */}
            <svg width="22" height="12" viewBox="0 0 24 12" fill="none">
              <rect x="1" y="1" width="19" height="10" rx="3" stroke="currentColor" strokeWidth="2" />
              <path d="M22 4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <rect x="3" y="3" width="13" height="6" rx="1.5" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* =========================
           2. 실제 앱 화면 렌더링 영역
        ========================= */}
        <div
          style={{
            flex: 1,
            position: "relative",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <iframe
            src={`/view${path}`}
            title="SAGO Preview Frame"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              display: "block",
            }}
          />
        </div>

        {/* =========================
           3. 하단 툴바
        ========================= */}
        {isGalaxy ? (
          /* 갤럭시 3버튼 네비게이션바 (홈 버튼을 둥근 사각형으로 수정) */
          <div
            style={{
              height: 48,
              backgroundColor: "#ffffff",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexShrink: 0,
              zIndex: 50,
              //borderTop: "1px solid #f3f4f6",
              color: "#4b5563",
              userSelect: "none",
            }}
          >
            {/* 최근 앱 버튼 */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ cursor: "pointer" }}>
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>

            {/* 홈 버튼 (둥근 사각형) */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ cursor: "pointer" }}>
              <rect x="5" y="2.5" width="16" height="16" rx="3" />
            </svg>

            {/* 뒤로 가기 버튼 */}
            <svg width="20" height="30" viewBox="0 0 24 28" fill="none" y="2.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: "pointer" }}>
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </div>
        ) : (
          /* 아이폰 홈 바 */
          <div
            style={{
              height: 24,
              backgroundColor: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
              zIndex: 50,
            }}
          >
            <div
              style={{
                width: 130,
                height: 4,
                backgroundColor: "#111827",
                borderRadius: 2,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}