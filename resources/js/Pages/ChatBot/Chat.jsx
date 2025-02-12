import { useState, useRef, useEffect } from "react"
import axios from "axios"
import { Send, User, Bot } from "lucide-react"

export default function Chat() {
  const [messages, setMessages] = useState([{ text: "สวัสดีครับ มีอะไรให้ผมช่วยไหมครับ?", sender: "bot" }])
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  const sendMessage = async (e) => {
    e.preventDefault()
    if (message.trim() === "") return

    const userMessage = { text: message, sender: "user" }
    setMessages((prevMessages) => [...prevMessages, userMessage])
    setMessage("")
    setLoading(true)

    try {
      const response = await axios.post(
        "/chat/ask",
        {
          model: "gpt-4o",
          content: message,
        },
        {
          headers: { "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content },
        },
      )

      if (response.data) {
        setMessages((prevMessages) => [...prevMessages, { text: response.data, sender: "bot" }])
      } else {
        setMessages((prevMessages) => [...prevMessages, { text: "No response from API.", sender: "bot" }])
      }
    } catch (error) {
      console.error("Error:", error)
      setMessages((prevMessages) => [...prevMessages, { text: "Error: " + error.message, sender: "bot" }])
    }

    setLoading(false)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-4">ประวัติแชท</h2>
        <ul>
          <li className="mb-2 p-2 bg-gray-700 rounded">บทสนทนาที่ 1</li>
          <li className="mb-2 p-2 bg-gray-700 rounded">บทสนทนาที่ 2</li>
          <li className="mb-2 p-2 bg-gray-700 rounded">บทสนทนาที่ 3</li>
        </ul>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md p-4">
          <h1 className="text-2xl font-bold">AI Chat Assistant</h1>
        </header>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
              >
                <div className="flex items-center space-x-2 mb-1">
                  {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  <p className="font-semibold">{msg.sender === "user" ? "คุณ" : "AI"}</p>
                </div>
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <form onSubmit={sendMessage} className="bg-white p-4 shadow-md">
          <div className="flex space-x-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="พิมพ์ข้อความของคุณที่นี่..."
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              ส่ง
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

