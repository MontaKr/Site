import React, { useRef, useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";

const lerp = (start, end, factor) => {
  return start + (end - start) * factor;
};

const ParallaxImage = ({ src, alt }) => {
  const imageRef = useRef(null);
  const bounds = useRef(null);
  const currentTranslateY = useRef(0);
  const targetTranslateY = useRef(0);
  const refId = useRef(null);

  useEffect(() => {
    const updateBounds = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        bounds.current = {
          top: rect.top + window.scrollY, // 페이지 최상단으로부터의 요소 위치 (상단)
          bottom: rect.bottom + window.scrollY, // 페이지 최상단으로부터의 요소 위치 (하단)
        };
      }
    };

    updateBounds(); // 컴포넌트 마운트 후 실행됨으로써, imageRef이 DOM을 참조한 후 실행

    window.addEventListener("resize", updateBounds); // 브라우저 크기 변경 시 updateBounds 함수 실행

    const animate = () => {
      if (imageRef.current) {
        currentTranslateY.current = lerp(
          currentTranslateY.current,
          targetTranslateY.current,
          0.1
        );

        if (
          Math.abs(currentTranslateY.current - targetTranslateY.current) > 0.01 // 현재 위치와 목표 위치의 차이가 0.01보다 크면 적용
        ) {
          imageRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.25)`; // 이미지 수직 이동
        }
      }

      refId.current = requestAnimationFrame(animate); // 매 프레임에서 animate 함수 실행
    };

    animate();

    // 클린업
    return () => {
      window.removeEventListener("resize", updateBounds);

      if (refId.current) {
        cancelAnimationFrame(refId.current);
      }
    };
  }, []);

  useLenis(({ scroll }) => {
    if (!bounds.current) return; // bounds에 값이 없으면 return

    const relativeScroll = scroll - bounds.current.top; // 상단으로 부터의 스크롤 위치 - bounds의 상단 위치
    targetTranslateY.current = relativeScroll * 0.2; // 요소가 뷰포트로 부터 떨어진 거리 * 0.2
  });

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      style={{
        willChange: "transform",
        transform: "translateY(0) scale(1.25)",
      }}
    />
  );
};

export default ParallaxImage;

// !---------------로직 설명--------------!
// 1. 컴포넌트가 마운트 되면 bounds.current에 이미지의 위치 정보 저장
// 2-1. useLenis 훅이 스크롤 이벤트 감지
// 2-2. 0.2를 곱해서 targetTranslateY.current의 값을 계산
// 3-1. animate 함수 실행
// 3-2. lerp 함수를 사용하여 현재 위치를 목표 위치로 부드럽게 이동
// 4. 클린업
