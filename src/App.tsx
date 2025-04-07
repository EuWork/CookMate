import Application from '@/navigators/Application';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return(
    <PaperProvider>
      <Application />
    </PaperProvider>
  );
}
