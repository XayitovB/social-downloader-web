import { useState } from 'react';
import { Terminal, Code2, ChevronDown, ChevronUp, CheckCircle, Clock } from 'lucide-react';

const logs = [
  { version: 'v1.3.0', date: '2025-04-14', status: 'latest', message: 'Multi-platform support added (TikTok, YouTube, Instagram)' },
  { version: 'v1.2.0', date: '2025-03-20', status: 'stable', message: 'Dark mode & multi-language support' },
  { version: 'v1.1.0', date: '2025-02-10', status: 'stable', message: 'Media preview & quality selector added' },
  { version: 'v1.0.0', date: '2025-01-01', status: 'stable', message: 'Initial release' },
];

export default function Footer() {
  const [logsOpen, setLogsOpen] = useState(false);
  const [apiOpen, setApiOpen] = useState(false);

  return (
    <footer className="w-full bg-white dark:bg-gray-800 shadow-lg mt-16 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-10">

        {/* Accordion sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

          {/* LOGS */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <button
              onClick={() => setLogsOpen(!logsOpen)}
              className="w-full flex items-center justify-between px-5 py-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200 font-semibold">
                <Terminal size={18} className="text-blue-500" />
                Changelog / Logs
              </div>
              {logsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {logsOpen && (
              <div className="px-5 py-4 space-y-3 bg-white dark:bg-gray-800">
                {logs.map((log) => (
                  <div key={log.version} className="flex items-start gap-3">
                    {log.status === 'latest' ? (
                      <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                    ) : (
                      <Clock size={16} className="text-gray-400 mt-0.5 shrink-0" />
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm font-bold text-blue-500">{log.version}</span>
                        {log.status === 'latest' && (
                          <span className="text-xs bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full">latest</span>
                        )}
                        <span className="text-xs text-gray-400">{log.date}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{log.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* API */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <button
              onClick={() => setApiOpen(!apiOpen)}
              className="w-full flex items-center justify-between px-5 py-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200 font-semibold">
                <Code2 size={18} className="text-purple-500" />
                API Reference
              </div>
              {apiOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {apiOpen && (
              <div className="px-5 py-4 bg-white dark:bg-gray-800 space-y-4">
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Endpoint</p>
                  <code className="block bg-gray-100 dark:bg-gray-900 text-blue-500 text-sm px-3 py-2 rounded-lg font-mono">
                    POST /v1/social/autolink
                  </code>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Host</p>
                  <code className="block bg-gray-100 dark:bg-gray-900 text-purple-500 text-sm px-3 py-2 rounded-lg font-mono">
                    social-download-all-in-one.p.rapidapi.com
                  </code>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Request Body</p>
                  <pre className="bg-gray-100 dark:bg-gray-900 text-green-500 text-sm px-3 py-2 rounded-lg font-mono overflow-x-auto">{`{
  "url": "https://tiktok.com/..."
}`}</pre>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Supported Platforms</p>
                  <div className="flex gap-2 flex-wrap">
                    {['TikTok', 'YouTube', 'Instagram'].map(p => (
                      <span key={p} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col items-center justify-center space-y-2 pt-6 border-t border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Created with ❤️ by bradham
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} bradham. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
