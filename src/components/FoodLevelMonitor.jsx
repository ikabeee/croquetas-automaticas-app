import { Card } from "@heroui/card"

const FoodLevelMonitor = ({ currentLevel, maxLevel = 100 }) => {
  const percentage = (currentLevel / maxLevel) * 100
  const getColor = (level) => {
    if (level > 70) return "#22c55e" // green-500
    if (level > 30) return "#eab308" // yellow-500
    return "#ef4444" // red-500
  }

  // Calculate the fill height based on percentage
  const fillHeight = `${percentage}%`
  const baseColor = getColor(percentage)

  // Create gradient colors based on the base color
  const gradientColor = (color) => {
    // Darken the color for gradient effect
    return color === "#22c55e" ? "#15803d" : color === "#eab308" ? "#ca8a04" : "#b91c1c"
  }

  return (
    <Card className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Nivel de Comida</h2>
      <div className="flex flex-col items-center">
        <div className="relative w-48 h-48">
          {/* Dog food bowl */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="relative w-40 h-40 rounded-full overflow-hidden"
              style={{
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                background: "#f3f4f6", // Light gray background for empty bowl
              }}
            >
              {/* Bowl rim */}
              <div className="absolute inset-0 rounded-full border-8 border-gray-300"></div>

              {/* Bowl shadow/depth effect */}
              <div className="absolute inset-2 rounded-full bg-gray-200"></div>

              {/* Dog food fill */}
              <div
                className="absolute bottom-0 left-0 right-0 transition-all duration-500 rounded-b-full"
                style={{
                  height: fillHeight,
                  background: `linear-gradient(to bottom, ${baseColor}, ${gradientColor(baseColor)})`,
                }}
              ></div>

              {/* Bowl shine effect */}
              <div
                className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none rounded-full"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 50%)",
                }}
              ></div>
            </div>
          </div>

          {/* Percentage display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-700 bg-white bg-opacity-70 px-3 py-1 rounded-full">
              {currentLevel}%
            </span>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          {percentage > 70
            ? "Nivel óptimo"
            : percentage > 30
              ? "Nivel medio - Considere rellenar pronto"
              : "Nivel bajo - Por favor rellene el contenedor"}
        </div>
      </div>
    </Card>
  )
}

export default FoodLevelMonitor

