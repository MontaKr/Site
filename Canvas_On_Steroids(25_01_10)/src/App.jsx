import { Wrap } from "./styles.jsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const stickyRef = useRef(null);
  const outlineCanvasRef = useRef(null);
  const fillCanvasRef = useRef(null);
  const cardsRef = useRef(null);
  const triangleStates = useRef(new Map());

  let animationFrameId = null; // 애니메이션 고유 식별자
  let canvasXPosition = 0;

  const triangleSize = 150;
  const lineWidth = 1;
  const SCALE_THRESHOLD = 0.01;

  const setCanvasSize = (canvas, ctx) => {
    const dpr = window.devicePixelRatio || 1; // 해상도별 픽셀 변경
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.scale(dpr, dpr);
  };

  const drawTriangle = (ctx, x, y, fillScale = 0, flipped = false) => {
    const halfSize = triangleSize / 2;

    // 채워진 정도가 1% 미만 (윤곽선만 표시)
    if (fillScale < SCALE_THRESHOLD) {
      ctx.beginPath(); // 새로운 경로 시작
      if (!flipped) {
        ctx.moveTo(x, y - halfSize); // 시작점으로 이동
        ctx.lineTo(x + halfSize, y + halfSize); // 경로 그리기 시작 (오른쪽 아래)
        ctx.lineTo(x - halfSize, y + halfSize); // (왼쪽 아래)
      } else {
        ctx.moveTo(x, y + halfSize);
        ctx.lineTo(x + halfSize, y - halfSize);
        ctx.lineTo(x - halfSize, y - halfSize);
      }
      ctx.closePath(); // 경로 닫기
      ctx.strokeStyle = "rgba(255,255,255,0.075)"; // 선의 색
      ctx.lineWidth = lineWidth; // 선의 두께
      ctx.stroke(); // 실제 선 그리기
    }
    // (채우기 시작)
    else {
      ctx.save(); // 윤곽선 값 저장
      ctx.translate(x, y); // 삼각형 중심으로 기준점 이동
      ctx.scale(fillScale, fillScale); // 삼각형 채우기
      ctx.translate(-x, -y); // 원래 위치로 기준점 이동

      ctx.beginPath(); // 새로운 경로 시작

      if (!flipped) {
        ctx.moveTo(x, y - halfSize);
        ctx.lineTo(x + halfSize, y + halfSize);
        ctx.lineTo(x - halfSize, y + halfSize);
      } else {
        ctx.moveTo(x, y + halfSize);
        ctx.lineTo(x + halfSize, y - halfSize);
        ctx.lineTo(x - halfSize, y - halfSize);
      }

      ctx.closePath();

      ctx.fillStyle = "#ff6b00";
      ctx.strokeStyle = "#ff6b00";
      ctx.lineWidth = lineWidth;
      ctx.stroke(); // 실제 선 그리기
      ctx.fill(); // 채우기
      ctx.restore(); // 이전의 Save 값 복원
    }
  };

  const drawGrid = (scrollProgress = 0) => {
    if (!outlineCanvasRef.current || !fillCanvasRef.current) return;

    const outlineCtx = outlineCanvasRef.current.getContext("2d");
    const fillCtx = fillCanvasRef.current.getContext("2d");

    // 이전 애니메이션 취소
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    // 캔버스 초기화
    outlineCtx.clearRect(
      0,
      0,
      outlineCanvasRef.current.width,
      outlineCanvasRef.current.height
    );
    fillCtx.clearRect(
      0,
      0,
      fillCanvasRef.current.width,
      fillCanvasRef.current.height
    );

    // 애니메이션 진행 상태
    const animationProgress =
      scrollProgress <= 0.65 ? 0 : (scrollProgress - 0.65) / 0.35;
    let needsUpdate = false;
    const animationSpeed = 0.15;

    triangleStates.current.forEach((state, key) => {
      if (state.scale < 1) {
        const x =
          state.col * (triangleSize * 0.5) + triangleSize / 2 + canvasXPosition;
        const y = state.row * triangleSize + triangleSize / 2;
        const flipped = (state.row + state.col) % 2 !== 0;
        drawTriangle(outlineCtx, x, y, 0, flipped);
      }
    });

    triangleStates.current.forEach((state, key) => {
      const shouldBeVisible = state.order <= animationProgress;
      const targetScale = shouldBeVisible ? 1 : 0;
      const newScale =
        state.scale + (targetScale - state.scale) * animationSpeed;

      if (Math.abs(newScale - state.scale) > 0.001) {
        state.scale = newScale;
        needsUpdate = true;
      }

      if (state.scale >= SCALE_THRESHOLD) {
        const x =
          state.col * (triangleSize * 0.5) + triangleSize / 2 + canvasXPosition;
        const y = state.row * triangleSize + triangleSize / 2;
        const flipped = (state.row + state.col) % 2 !== 0;
        drawTriangle(fillCtx, x, y, state.scale, flipped);
      }
    });

    if (needsUpdate) {
      animationFrameId = requestAnimationFrame(() => drawGrid(scrollProgress));
    }
  };

  const initializeTriangles = () => {
    const cols = Math.ceil(window.innerWidth / (triangleSize * 0.5));
    const rows = Math.ceil(window.innerHeight / (triangleSize * 0.5));
    const totalTriangles = rows * cols; // 총 삼각형 수

    const positions = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        positions.push({ row: r, col: c, key: `${r}-${c}` });
      }
    }

    // 삼각형 위치 랜덤 섞기
    for (let i = positions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [positions[i], positions[j]] = [positions[j], positions[i]];
    }

    positions.forEach((pos, index) => {
      triangleStates.current.set(pos.key, {
        order: index / totalTriangles,
        scale: 0,
        row: pos.row,
        col: pos.col,
      });
    });
  };

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0); // Lenis와의 충돌을 방지하기 위해 비활성화

    if (outlineCanvasRef.current && fillCanvasRef.current) {
      const outlineCtx = outlineCanvasRef.current.getContext("2d");
      const fillCtx = fillCanvasRef.current.getContext("2d");

      setCanvasSize(outlineCanvasRef.current, outlineCtx);
      setCanvasSize(fillCanvasRef.current, fillCtx);
      initializeTriangles();
      drawGrid();
    }

    const handleResize = () => {
      if (outlineCanvasRef.current && fillCanvasRef.current) {
        const outlineCtx = outlineCanvasRef.current.getContext("2d");
        const fillCtx = fillCanvasRef.current.getContext("2d");

        setCanvasSize(outlineCanvasRef.current, outlineCtx);
        setCanvasSize(fillCanvasRef.current, fillCtx);
        triangleStates.current.clear();
        initializeTriangles();
        drawGrid();
      }
    };

    window.addEventListener("resize", handleResize);

    ScrollTrigger.create({
      trigger: stickyRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 5}px`, // 트리거가 시작되는 순간의 종료값
      pin: true, // 트리거가 진행되는 동안 stickyRef를 뷰포트에 고정
      // 스크롤 진행 상태가 변경될 때마다 호출되는 콜백함수
      onUpdate: (self) => {
        canvasXPosition = -self.progress * 200; // 0 ~ -200
        drawGrid(self.progress);

        if (cardsRef.current) {
          const progress = Math.min(self.progress / 0.654, 1); // 전체 스크롤의 65.4% 지점에서 애니메이션 완료
          gsap.set(cardsRef.current, {
            x: -progress * window.innerWidth * 2,
          });
        }
      },
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      lenis.destroy(); // 컴포넌트가 언마운트되면 Lenis 인스턴스 종료
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // 컴포넌트가 언마운트되면 ScrollTrigger 인스턴트 종료
    };
  }, []);

  return (
    <Wrap>
      <section className="hero">
        <h1>
          <span>Enter a Universe </span>
          Powered by Imagination
        </h1>
      </section>

      <section ref={stickyRef} className="sticky">
        <div className="bg-img">
          <img src="/bg.jpg" alt="bg" />
        </div>

        <canvas ref={outlineCanvasRef} className="outline-layer" />

        <div ref={cardsRef} className="cards">
          <div className="card">
            <div className="card-img">
              <img src="/card-1.jpg" alt="card1" />
            </div>
            <div className="card-title">
              <h1>Silent Veil</h1>
              <p>PROD8372</p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="/card-2.jpg" alt="card2" />
            </div>
            <div className="card-title">
              <h1>Crimson Echoes</h1>
              <p>PROD4921</p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="/card-3.jpg" alt="card3" />
            </div>
            <div className="card-title">
              <h1>Zenith Arc</h1>
              <p>PROD7586</p>
            </div>
          </div>
        </div>

        <canvas ref={fillCanvasRef} className="fill-layer" />
      </section>

      <section className="outro">
        <h1>
          Chase the <span>shadows</span> to embrace the light
        </h1>
      </section>
    </Wrap>
  );
}

export default App;
