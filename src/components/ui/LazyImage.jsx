import { useState, useRef, useEffect } from "react";

export default function LazyImage({
  src,
  alt,
  width,
  height,
  className,
  ...props
}) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }, // Pre-load 200px before entering viewport
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imgRef}
      className={`img-wrapper ${loaded ? "loaded" : "loading"}`}
      style={{ overflow: "hidden", backgroundColor: "#f0f0f0" }}
    >
      {inView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.4s ease",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
          {...props}
        />
      )}
    </div>
  );
}
