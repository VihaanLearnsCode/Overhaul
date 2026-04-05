import { useEffect, useRef } from 'react'

const PlantBackground = () => {
  const canvasRef = useRef(null)

  // L-System rules for different plant types
  const lSystemRules = {
    tree: {
      axiom: 'F',
      rules: {
        'F': 'FF+[+F]F[-F]F',
        '[': '[',
        ']': ']'
      },
      angle: 25,
      length: 4,
      iterations: 4
    },
    fern: {
      axiom: 'X',
      rules: {
        'X': 'F+[[X]-X]-F[-FX]+X',
        'F': 'FF'
      },
      angle: 20,
      length: 3,
      iterations: 5
    },
    vine: {
      axiom: 'F',
      rules: {
        'F': 'F[+F]F[-F][F]',
        '[': '[',
        ']': ']'
      },
      angle: 25,
      length: 3,
      iterations: 4
    },
    pine: {
      axiom: 'F',
      rules: {
        'F': 'F[+F][-F]F[+F][-F]',
        '[': '[',
        ']': ']'
      },
      angle: 30,
      length: 5,
      iterations: 4
    },
    bush: {
      axiom: 'F',
      rules: {
        'F': 'FF+[+F-F]-[-F+F]',
        '[': '[',
        ']': ']'
      },
      angle: 22,
      length: 3,
      iterations: 4
    },
    willow: {
      axiom: 'F',
      rules: {
        'F': 'F[+F]F[-F][+F[-F]F]',
        '[': '[',
        ']': ']'
      },
      angle: 35,
      length: 4,
      iterations: 3
    },
    moss: {
      axiom: 'X',
      rules: {
        'X': 'F[+X]F[-X]+X',
        'F': 'FF'
      },
      angle: 15,
      length: 2,
      iterations: 4
    },
    bamboo: {
      axiom: 'F',
      rules: {
        'F': 'FF[+F][-F]F',
        '[': '[',
        ']': ']'
      },
      angle: 45,
      length: 6,
      iterations: 3
    }
  }

  const generateLSystem = (axiom, rules, iterations) => {
    let result = axiom
    for (let i = 0; i < iterations; i++) {
      let newResult = ''
      for (let char of result) {
        newResult += rules[char] || char
      }
      result = newResult
    }
    return result
  }

  const drawPlant = (ctx, lSystem, startX, startY, angle, length, plantType, color) => {
    const stack = []
    let x = startX
    let y = startY
    let currentAngle = -90 // Start pointing up

    ctx.strokeStyle = color
    ctx.lineWidth = 2

    for (let char of lSystem) {
      if (char === 'F') {
        const newX = x + length * Math.cos(currentAngle * Math.PI / 180)
        const newY = y + length * Math.sin(currentAngle * Math.PI / 180)
        
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(newX, newY)
        ctx.stroke()
        
        x = newX
        y = newY
      } else if (char === '+') {
        currentAngle += angle
      } else if (char === '-') {
        currentAngle -= angle
      } else if (char === '[') {
        stack.push({ x, y, angle: currentAngle })
      } else if (char === ']') {
        const state = stack.pop()
        if (state) {
          x = state.x
          y = state.y
          currentAngle = state.angle
        }
      }
    }
  }

  const getRandomGreenColor = () => {
    const colorShades = [
      // Greens
      'rgba(34, 197, 94, 0.9)',   // Green-500
      'rgba(22, 163, 74, 0.9)',   // Green-600
      'rgba(21, 128, 61, 0.9)',   // Green-700
      'rgba(5, 150, 105, 0.9)',   // Emerald-600
      'rgba(16, 185, 129, 0.9)',  // Emerald-500
      'rgba(6, 95, 70, 0.9)',     // Emerald-700
      'rgba(132, 204, 22, 0.9)',  // Lime-500
      'rgba(101, 163, 13, 0.9)',  // Lime-600
      'rgba(74, 222, 128, 0.9)',  // Green-400
      'rgba(134, 239, 172, 0.9)', // Green-300
      'rgba(4, 120, 87, 0.9)',    // Teal-700
      'rgba(20, 184, 166, 0.9)',  // Teal-500
      'rgba(15, 118, 110, 0.9)',  // Teal-600
      'rgba(54, 83, 20, 0.9)',    // Olive-700
      'rgba(85, 111, 38, 0.9)',   // Lime-600
      // Blues
      'rgba(59, 130, 246, 0.9)',  // Blue-500
      'rgba(37, 99, 235, 0.9)',   // Blue-600
      'rgba(29, 78, 216, 0.9)',   // Blue-700
      'rgba(30, 64, 175, 0.9)',   // Blue-800
      'rgba(147, 197, 253, 0.9)', // Blue-300
      'rgba(96, 165, 250, 0.9)',  // Blue-400
      'rgba(6, 182, 212, 0.9)',   // Cyan-500
      'rgba(8, 145, 178, 0.9)',   // Cyan-600
      'rgba(14, 116, 144, 0.9)',  // Cyan-700
      'rgba(21, 94, 117, 0.9)',   // Cyan-800
      'rgba(125, 211, 252, 0.9)', // Sky-300
      'rgba(56, 189, 248, 0.9)',  // Sky-400
      'rgba(14, 165, 233, 0.9)',  // Sky-500
      'rgba(2, 132, 199, 0.9)',   // Sky-600
      'rgba(3, 105, 161, 0.9)',   // Sky-700
      'rgba(7, 89, 133, 0.9)',    // Sky-800
    ]
    return colorShades[Math.floor(Math.random() * colorShades.length)]
  }

  const checkOverlap = (newX, newY, newScale, existingPlants) => {
    const buffer = 100 // Buffer zone between plants
    return existingPlants.some(plant => {
      const distance = Math.sqrt(Math.pow(plant.x - newX, 2) + Math.pow(plant.y - newY, 2))
      return distance < (buffer + (plant.scale + newScale) * 50)
    })
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      console.log('Canvas ref not found')
      return
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      console.log('Canvas context not found')
      return
    }
    
    console.log('Drawing plants...')
    
    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    // Clear and draw new plants
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    const plantTypes = Object.keys(lSystemRules)
    
    // Generate 10-15 random plants with no overlap
    const maxPlants = Math.floor(Math.random() * 6) + 10
    const placedPlants = []
    
    for (let i = 0; i < maxPlants; i++) {
      let attempts = 0
      let placed = false
      
      while (attempts < 50 && !placed) {
        const plantType = plantTypes[Math.floor(Math.random() * plantTypes.length)]
        const system = lSystemRules[plantType]
        
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const scale = 0.3 + Math.random() * 2.0 // More scale variation
        const color = getRandomGreenColor()
        
        if (!checkOverlap(x, y, scale, placedPlants)) {
          const lSystem = generateLSystem(system.axiom, system.rules, system.iterations)
          console.log(`Plant ${i}: ${plantType}, L-system length: ${lSystem.length}`)
          
          ctx.save()
          ctx.translate(x, y)
          ctx.scale(scale, scale)
          drawPlant(ctx, lSystem, 0, 0, system.angle, system.length, plantType, color)
          ctx.restore()
          
          placedPlants.push({ x, y, type: plantType, scale, color })
          placed = true
        }
        
        attempts++
      }
    }
    
    console.log('Plants drawn successfully')
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Redraw plants on resize
      setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        for (let i = 0; i < maxPlants; i++) {
          const plantType = plantTypes[Math.floor(Math.random() * plantTypes.length)]
          const system = lSystemRules[plantType]
          const color = getRandomGreenColor()
          const x = Math.random() * canvas.width
          const y = Math.random() * canvas.height
          const scale = 0.3 + Math.random() * 2.0
          
          const lSystem = generateLSystem(system.axiom, system.rules, system.iterations)
          
          ctx.save()
          ctx.translate(x, y)
          ctx.scale(scale, scale)
          drawPlant(ctx, lSystem, 0, 0, system.angle, system.length, plantType, color)
          ctx.restore()
        }
      }, 100)
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.7,
        pointerEvents: 'none'
      }}
    />
  )
}

export default PlantBackground
