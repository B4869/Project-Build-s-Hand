import { Link } from "@inertiajs/react"

export default function Homepage() {
  const features = [
    { icon: "💡", title: "ไอเดียนวัตกรรม", description: "เรานำเสนอโซลูชันที่สดใหม่และสร้างสรรค์" },
    { icon: "⚡", title: "ประสิทธิภาพสูง", description: "เวลาโหลดที่รวดเร็วและประสบการณ์ผู้ใช้ที่ราบรื่น" },
    { icon: "🛡️", title: "ปลอดภัยและเชื่อถือได้", description: "ข้อมูลของคุณปลอดภัยด้วยมาตรการความปลอดภัยระดับสูงของเรา" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">โลโก้ของคุณ</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                หน้าหลัก
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                เกี่ยวกับเรา
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                บริการ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                ติดต่อ
              </a>
            </li>
          </ul>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            เข้าสู่ระบบ
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">ยินดีต้อนรับสู่เว็บไซต์ของเรา</h1>
            <p className="text-xl mb-8">ค้นพบคุณสมบัติและบริการที่น่าทึ่งที่ปรับแต่งมาเพื่อคุณโดยเฉพาะ</p>
            {/* <button
              className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              เริ่มต้นใช้งาน
            </button> */}
            <Link
              href={route('chat.index')}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              ไปคุยกับแชทซะไอจืดดดดด
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">คุณสมบัติของเรา</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">บริษัทของคุณ</h3>
              <p className="text-gray-400">ให้บริการโซลูชันนวัตกรรมตั้งแต่ปี 2023</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">ลิงก์ด่วน</h4>
              <ul className="text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    เกี่ยวกับเรา
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    บริการ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    ติดต่อ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    นโยบายความเป็นส่วนตัว
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-2">เชื่อมต่อกับเรา</h4>
              <p className="text-gray-400 mb-2">ติดตามเราบนโซเชียลมีเดีย:</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-400">
                  Facebook
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  Twitter
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2023 บริษัทของคุณ สงวนลิขสิทธิ์</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

