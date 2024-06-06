const SvgLoader = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      preserveAspectRatio="xMidYMid"
      style={{
        shapeRendering: "auto",
        display: "block",
        backgroundPositionX: 0,
        backgroundPositionY: 0,
        backgroundSize: "auto",
        backgroundOrigin: "padding-box",
        backgroundClip: "border-box",
        background: "0 0",
        width: 200,
        height: 200,
        animation: "none",
      }}
      viewBox="0 0 100 100"
    >
      <circle
        cx={50}
        cy={50}
        r={35}
        fill="none"
        stroke="#cacaca"
        strokeDasharray="164.93361431346415 56.97787143782138"
        strokeWidth={10}
        style={{
          fill: "none",
          stroke: "#cacaca",
          transform: "matrix(1,0,0,1,0,0)",
          animation: "none",
        }}
      />
    </svg>
  </div>
);
export default SvgLoader;
