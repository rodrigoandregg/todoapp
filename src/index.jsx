import { createRoot } from 'react-dom/client'
import App from './App'
import { TodoProvider } from './TodoContext/TodoContext'

const root = createRoot(document.getElementById('root'))
root.render(
  <TodoProvider>
    <App />
  </TodoProvider>
)
