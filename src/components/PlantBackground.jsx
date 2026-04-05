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

  const drawPlant = (ctx, lSystem, startX, startY, angle, length, plantType) => {
    const stack = []
    let x = startX
    let y = startY
    let currentAngle = -90 // Start pointing up

    ctx.strokeStyle = plantType === 'tree' ? 'rgba(0, 77, 64, 0.9)' :
                     plantType === 'fern' ? 'rgba(0, 105, 92, 0.9)' :
                     'rgba(0, 128, 128, 0.9)'
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
    
    // Generate 3-5 random plants
    const numPlants = Math.floor(Math.random() * 3) + 3
    console.log(`Drawing ${numPlants} plants`)
    
    for (let i = 0; i < numPlants; i++) {
      const plantType = plantTypes[Math.floor(Math.random() * plantTypes.length)]
      const system = lSystemRules[plantType]
      
      const lSystem = generateLSystem(system.axiom, system.rules, system.iterations)
      console.log(`Plant ${i}: ${plantType}, L-system length: ${lSystem.length}`)
      
      const x = Math.random() * canvas.width
      const y = canvas.height - 50 - Math.random() * 200
      const scale = 0.5 + Math.random() * 1.5
      
      ctx.save()
      ctx.translate(x, y)
      ctx.scale(scale, scale)
      drawPlant(ctx, lSystem, 0, 0, system.angle, system.length, plantType)
      ctx.restore()
    }
    
    console.log('Plants drawn successfully')
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Redraw plants on resize
      setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        for (let i = 0; i < numPlants; i++) {
          const plantType = plantTypes[Math.floor(Math.random() * plantTypes.length)]
          const system = lSystemRules[plantType]
          const lSystem = generateLSystem(system.axiom, system.rules, system.iterations)
          const x = Math.random() * canvas.width
          const y = canvas.height - 50 - Math.random() * 200
          const scale = 0.5 + Math.random() * 1.5
          
          ctx.save()
          ctx.translate(x, y)
          ctx.scale(scale, scale)
          drawPlant(ctx, lSystem, 0, 0, system.angle, system.length, plantType)
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
