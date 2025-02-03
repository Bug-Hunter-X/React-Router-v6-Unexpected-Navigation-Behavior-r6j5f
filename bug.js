```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This code uses `BrowserRouter`, `Routes`, and `Route` from `react-router-dom`.  However, if you navigate to a route that doesn't exist, you might encounter unexpected behavior or errors. This is because there's no default fallback route handling missing routes.