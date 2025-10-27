import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import "./image-folder.css"

const darkenColor = (hex, percent) => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex
  if (color.length === 3) {
    color = color
      .split("")
      .map((c) => c + c)
      .join("")
  }
  const num = parseInt(color, 16)
  let r = (num >> 16) & 0xff
  let g = (num >> 8) & 0xff
  let b = num & 0xff
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))))
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))))
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))))
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  )
}

export const ImageFolder = ({
  color = "#5227FF",
  size = 1,
  items = [],
  className = "",
  title = "",
}) => {
  const paperRefs = useRef([])
  const maxItems = 3
  const papers = items.slice(0, maxItems)
  while (papers.length < maxItems) {
    papers.push(null)
  }

  const [open, setOpen] = useState(false)
  const [paperOffsets, setPaperOffsets] = useState(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })),
  )

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)

    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const folderBackColor = darkenColor(color, 0.08)
  const paper1 = darkenColor("#ffffff", 0.1)
  const paper2 = darkenColor("#ffffff", 0.05)
  const paper3 = "#ffffff"

  const handleClick = () => {
    setOpen((prev) => !prev)
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })))
    }
  }

  const [animatingIndex, setAnimatingIndex] = useState(null)

  const handlePaperClick = (index, item) => {
    if (animatingIndex !== null) return

    const paper = paperRefs.current[index]
    if (!paper) return

    setAnimatingIndex(index)

    const rect = paper.getBoundingClientRect()
    const centerX = window.innerWidth / 2 - rect.width / 2
    const centerY = window.innerHeight / 2 - rect.height / 2
    const dx = centerX - rect.left
    const dy = centerY - rect.top
    console.log({ centerX, centerY, dx, dy })

    const tl = gsap.timeline({
      onComplete: () => {
        setAnimatingIndex(null)
        paper.style.transform = ""
      },
    })

    tl.to(paper, {
      zIndex: 9999,
      scale: isMobile ? 4 : 8,
      x: index === 0 ? dx - 80 : index === 2 ? dx : dx + 10,
      y: dy,
      duration: 0.2,
      ease: "power0.out",
      rotate: 0,
    }).to(paper, {
      scale: 1,
      x: 0,
      y: 0,
      zIndex: index + 1,
      duration: 0.2,
      ease: "power0.out",
      delay: 1,
    })
  }

  const folderStyle = {
    "--folder-color": color,
    "--folder-back-color": folderBackColor,
    "--paper-1": paper1,
    "--paper-2": paper2,
    "--paper-3": paper3,
  }

  const folderClassName = `folder ${open ? "open" : ""}`.trim()
  const scaleStyle = { transform: `scale(${size})` }

  return (
    <div style={scaleStyle} className={className}>
      <div
        className={folderClassName}
        style={folderStyle}
        onClick={handleClick}
      >
        <div className="folder__back">
          {papers.map((item, i) => (
            <div
              key={i}
              ref={(el) => (paperRefs.current[i] = el)}
              className={`paper paper-${i + 1}`}
              onClick={(e) => {
                e.stopPropagation()
                if (!item) return
                handlePaperClick(i, item)
              }}
            >
              {item && (
                <Image
                  src={item}
                  alt={`Paper ${i + 1}`}
                  fill
                  style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                />
              )}
            </div>
          ))}
          <div className="folder__front"></div>
          <div className="folder__front right">
            <div className="folder__title">{title}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
