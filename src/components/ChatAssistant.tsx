import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const ChatAssistant: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([{
    role: 'assistant',
    content: "Hey there! 👋 I'm your StartupSurge AI sidekick. Whether you need marketing magic, a website glow-up, or just some digital wisdom, I'm here to help! What's on your mind? 🚀",
  }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Auto-scroll to bottom on new messages
    viewportRef.current?.scrollTo({ top: viewportRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, open]);

  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading]);

  const sendMessage = async () => {
    if (!canSend) return;
    const userMsg: ChatMessage = { role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg].slice(-12) }),
      });
      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }
      const data = await res.json();
      const text = typeof data?.text === 'string' ? data.text : 'Sorry, I could not process that right now.';
      setMessages((prev) => [...prev, { role: 'assistant', content: text }]);
    } catch (err: any) {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Hmm, something went wrong. Please try again in a moment.' }]);
      console.error('ChatAssistant error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Bubble */}
      <button
        aria-label="Chat with us"
        onClick={() => setOpen((o) => !o)}
        className={`fixed bottom-5 right-5 z-50 h-16 w-16 rounded-full bg-gradient-to-br from-[#ff8a00] to-[#ff5e62] hover:from-[#ff7e00] hover:to-[#ff4f53] text-white shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${open ? 'rotate-90' : 'animate-bounce'}`}
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        ) : (
          <div className="relative">
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full animate-ping"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8M8 14h5M21 12c0 4.97-4.48 9-10 9-1.26 0-2.47-.22-3.58-.63L3 21l.77-3.08A8.7 8.7 0 0 1 3 12C3 7.03 7.48 3 13 3s8 4.03 8 9Z"/>
            </svg>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="fixed bottom-24 right-5 z-50 w-[350px] sm:w-[400px] max-h-[65vh] rounded-2xl border-2 border-orange-100 dark:border-orange-900/50 bg-gradient-to-br from-white to-gray-50 dark:from-[#1b1b1b] dark:to-[#0f0f0f] shadow-2xl flex flex-col overflow-hidden backdrop-blur-sm"
        >
          <div className="px-5 py-3.5 bg-gradient-to-r from-[#ff8a00] to-[#ff5e62] text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 bg-white rounded-full animate-pulse"></div>
              <div className="font-bold text-white">StartupSurge AI</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className={`inline-block h-2 w-2 rounded-full ${loading ? 'bg-yellow-300' : 'bg-green-300'}`}></span>
                {loading ? 'Typing...' : 'Active now'}
              </span>
              <button 
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>

          <div ref={viewportRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-white/50 dark:bg-black/10">
            {messages.map((m, i) => (
              <motion.div 
                key={i} 
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                  m.role === 'user'
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-br-sm shadow-md'
                    : 'bg-white dark:bg-[#232323] text-gray-800 dark:text-gray-100 rounded-bl-sm border border-gray-100 dark:border-gray-800 shadow-sm'
                }`}>
                  {m.content}
                  {m.role === 'assistant' && i === messages.length - 1 && (
                    <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
                      Need help with something else? Ask away! 🚀
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-3 border-t border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-[#1b1b1b]/80 backdrop-blur-sm">
            <div className="relative">
              <input
                type="text"
                placeholder="Type your message... ✨"
                className="w-full pl-4 pr-12 py-3 text-sm rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={!canSend}
                className={`absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all duration-200 ${
                  canSend 
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 transform hover:scale-110' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
              </button>
            </div>
            <div className="mt-2 text-center">
              <p className="text-[10px] text-gray-400 dark:text-gray-500">
                {loading ? 'AI is thinking...' : 'Ask about marketing, websites, or anything!'}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ChatAssistant;
