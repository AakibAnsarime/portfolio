import { BrowserRouter } from 'react-router-dom';
// ...existing code...

const router = createBrowserRouter(
  // ...existing routes...
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

// ...existing code...
<BrowserRouter router={router}>
  {/* ...existing code... */}
</BrowserRouter>
// ...existing code...
