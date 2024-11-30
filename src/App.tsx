import '@mantine/core/styles.css';

import {
  MantineProvider
} from '@mantine/core';
import { Router } from './routes/router';


function App() {

  return (
    <MantineProvider>
      <Router />
    </MantineProvider>
  )
}

export default App
