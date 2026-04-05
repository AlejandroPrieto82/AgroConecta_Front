// src/mocks/homepage.ts

export const homeData = {
  cifras: [
    { num: "1200+", label: "Agricultores" },
    { num: "800+", label: "Compradores" },
    { num: "50,000kg", label: "Kg vendidos" },
    { num: "98%", label: "Satisfacción de usuarios" }
  ],

  tarjetas: [
    {
      title: "Conexión Directa",
      text: "Elimina intermediarios y conecta directamente agricultores con compradores.",
      icon: "🔗"
    },
    {
      title: "Mejores Precios",
      text: "Precios justos para productores y competitivos para compradores.",
      icon: "💰"
    },
    {
      title: "Transacciones Seguras",
      text: "Sistema de pagos confiable y seguimiento de pedidos en tiempo real.",
      icon: "🛡️"
    }
  ],

  finalSection: {
    agricultores: [
      { step: "1. Registra tu producción", text: "Publica tus productos disponibles con detalles de cantidad y precio" },
      { step: "2. Recibe ofertas directas", text: "Compradores interesados te contactan sin intermediarios" },
      { step: "3. Vende y cobra seguro", text: "Gestiona pedidos y recibe pagos de forma segura" }
    ],
    compradores: [
      { step: "1. Explora el marketplace", text: "Busca productos agrícolas directamente de los productores" },
      { step: "2. Compara y negocia", text: "Compara precios y negocia volúmenes directamente" },
      { step: "3. Compra con confianza", text: "Realiza pedidos seguros y recibe productos frescos" }
    ]
  }
};