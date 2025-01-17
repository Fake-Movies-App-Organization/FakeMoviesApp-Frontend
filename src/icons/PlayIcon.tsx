interface PlayIconProps {
  size: string;
}

export const PlayIcon = ({size}: PlayIconProps) => {
  return (
    <svg
      data-encore-id="icon"
      role="img"
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="Svg-sc-ytk21e-0 dYnaPI"
      style={{ width: `${size}rem`, height: `${size}rem` }}
      fill="#FFF"
    >
      <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
    </svg>
  )
}
