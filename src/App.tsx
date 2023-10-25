// Header

// Left Sidebar
// History Tab
// History List
// History Item

// # Main
// ## Left Column (Request)
// ### Request Input
import RequestInput from '@/components/Request/RequestInput';
// ### Request Menu
import RequestMenu from '@/components/Request/RequestMenu';
// ### Request Body
import RequestBody from '@/components/Request/RequestBody';

// ## Right Column (Response)
// ### Response Status
import ResponseStatus from '@/components/Response/ResponseStatus';
// ### Response Menu
import ResponseMenu from '@/components/Response/ResponseMenu';

// ### Response Preview
import ResponsePreview from '@/components/Response/ResponsePreview';
// ### Response Headers
import ResponseHeaders from '@/components/Response/ResponseHeaders';

import { Separator } from '@/components/ui/separator';

// Footer

function App() {
  return (
    <>
      <div className='App'>
        <div className='min-h-screen flex flex-col h-screen'>
          <header className='bg-red-50'>Header</header>

          <div className='flex-1 flex flex-row'>
            <main className='flex-1 bg-indigo-100 overflow-y-auto'>
              Request
              <RequestInput />
              <RequestMenu />
              <RequestBody className='bg-black h-screen' />
            </main>

            <nav className='order-first w-1/6 bg-purple-200 overflow-y-auto'>
              Sidebar
            </nav>

            <aside className='w-1/3 bg-yellow-100 overflow-y-auto'>
              Response
              <ResponseStatus />
              <ResponseMenu />
              {/* <ResponsePreview /> */}
            </aside>
          </div>

          <footer className='bg-gray-100'>Footer</footer>
        </div>
      </div>
    </>
  );
}

export default App;
