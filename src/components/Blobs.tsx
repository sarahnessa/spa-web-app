export function BlobGreen({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M320,180Q290,210,270,250Q250,290,210,310Q170,330,130,305Q90,280,70,240Q50,200,65,155Q80,110,115,85Q150,60,195,60Q240,60,280,85Q320,110,330,150Q340,190,320,180Z"
        fill="#7DB88A"
        opacity="0.65"
      />
    </svg>
  )
}

export function BlobLilac({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M310,160Q295,230,250,265Q205,300,155,290Q105,280,75,240Q45,200,60,150Q75,100,120,75Q165,50,215,55Q265,60,300,100Q335,140,310,160Z"
        fill="#BBA8D4"
        opacity="0.65"
      />
    </svg>
  )
}

export function BlobBlue({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M290,150Q310,200,285,250Q260,300,210,315Q160,330,115,300Q70,270,65,220Q60,170,90,130Q120,90,170,75Q220,60,260,90Q300,120,290,150Z"
        fill="#98B8DA"
        opacity="0.65"
      />
    </svg>
  )
}

export function CloudShape({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M60,140 Q20,140,20,100 Q20,65,55,60 Q55,20,100,20 Q125,20,140,40 Q155,15,185,15 Q225,15,235,50 Q260,30,290,35 Q330,40,335,75 Q360,65,380,90 Q400,115,385,135 Q370,150,345,145 Q345,165,320,168 Q295,170,285,155 Q265,175,235,170 Q215,175,205,158 Q185,175,160,168 Q140,175,130,155 Q110,170,85,162 Q60,155,60,140Z"
        fill="#cde0ee"
        opacity="0.85"
      />
    </svg>
  )
}

export function BlobSmall({ className = '', color = '#7DB88A' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M155,80Q170,115,150,145Q130,175,95,175Q60,175,40,148Q20,120,30,85Q40,50,75,38Q110,26,135,50Q160,74,155,80Z"
        fill={color}
        opacity="0.72"
      />
    </svg>
  )
}
