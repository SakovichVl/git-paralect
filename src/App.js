import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import Main from './components/Main/main.jsx';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Main/>
    </QueryClientProvider>
  );
}

export default App;
