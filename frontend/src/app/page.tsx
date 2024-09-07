import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, BarChart2, Check, Lock, Share2, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BarChart2 className="w-8 h-8 text-red-500" />
          <span className="text-2xl font-bold">WSBenchmarks</span>
        </div>
        <Navbar />
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Benchmark Your Investments with Precision</h1>
          <p className="text-xl max-w-2xl mx-auto">
            WSBenchmarks empowers you to evaluate your stock purchases against index funds and other stocks. 
            Make data-driven decisions and optimize your portfolio like never before.
          </p>
          <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white my-10">
            Start Benchmarking <ArrowRight className="ml-2" />
          </Button>
          <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="WSBenchmarks Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section id="features" className="bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-700 p-6 rounded-lg">
                <BarChart2 className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Advanced Calculator</h3>
                <p>Input your investment details and compare against various benchmarks with ease.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <Lock className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secure Login</h3>
                <p>Save your comparisons securely and access them anytime, anywhere.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <Share2 className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Easy Sharing</h3>
                <p>Export your data as CSV files and share valuable insights with your team or clients.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="calculator" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience Our Powerful Calculator</h2>
          <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="space-y-4">
              <div>
                <Label htmlFor="stock">Stock Symbol</Label>
                <Input id="stock" placeholder="e.g., AAPL" className="bg-gray-700 border-gray-600" />
              </div>
              <div>
                <Label htmlFor="shares">Number of Shares</Label>
                <Input id="shares" type="number" placeholder="100" className="bg-gray-700 border-gray-600" />
              </div>
              <div>
                <Label htmlFor="amount">Total Amount ($)</Label>
                <Input id="amount" type="number" placeholder="10000" className="bg-gray-700 border-gray-600" />
              </div>
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                Calculate and Compare
              </Button>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">What Our Users Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "John Cardona",
                  role: "Client",
                  content: "WSBenchmarks has completely transformed how I evaluate my investment decisions. It's an indispensable tool in my financial toolkit."
                },
                {
                  name: "Guneet Dhillon",
                  role: "University Student",
                  content: "I use WSBenchmarks daily with my clients. It provides clear, actionable insights that help us make informed investment choices."
                },
                {
                  name: "Luc Duteau",
                  role: "Manager",
                  content: "The ability to quickly compare multiple stocks against various benchmarks has significantly improved our team's efficiency and decision-making process."
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-500 mr-1 fill-current" />
                    <Star className="w-5 h-5 text-yellow-500 mr-1 fill-current" />
                    <Star className="w-5 h-5 text-yellow-500 mr-1 fill-current" />
                    <Star className="w-5 h-5 text-yellow-500 mr-1 fill-current" />
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  </div>
                  <p className="mb-4">&quot;{testimonial.content}&quot;</p>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "Free",
                features: ["30 comparisons per month", "Basic analytics", "CSV export"]
              },
              {
                name: "Pro",
                price: "$9.99",
                features: ["Unlimited comparisons", "Advanced analytics", "CSV & PDF export"]
              },
              {
                name: "Enterprise",
                price: "$249.99",
                features: ["All Pro features", "Dedicated support", "Custom integrations"]
              }
            ].map((plan, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="text-3xl font-bold mb-6">{plan.price}<span className="text-xl font-normal">{plan.name !== "Basic" ? "/month" : ""}</span></div>
                <ul className="mb-8 space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
            ))}
          </div>
        </section>

        <section id="login" className="bg-gray-800 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Investment Strategy?</h2>
            <p className="mb-8">Create an account or log in to access your personalized dashboard and start benchmarking like a pro.</p>
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
              Log In / Sign Up
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}