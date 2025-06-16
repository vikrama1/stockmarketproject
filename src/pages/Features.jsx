export default function Features() {
  const features = [
    {
      title: "Easy Buy & Sell",
      description: "Buy and sell assets in just a few clicks — fast and hassle-free.",
      icon: "💸",
    },
    {
      title: "Live Price Updates",
      description: "Stay updated with real-time price movements and trends.",
      icon: "📈",
    },
    {
      title: "User-Friendly Interface",
      description: "Simple and clean design for smooth trading experience.",
      icon: "🖥️",
    },
    {
      title: "Safe & Secure",
      description: "All transactions are protected with top-grade security.",
      icon: "🔐",
    },
  ];

  return (
    <section className="bg-black text-white min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Features of Dhanniti</h2>
        <p className="text-gray-400 mb-10">
          Everything you need to buy and sell with confidence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition duration-300"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
