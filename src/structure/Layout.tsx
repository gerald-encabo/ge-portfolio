import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ErrorFallback from '@/components/ErrorFallback';
import { Suspense } from 'react';
import { Main } from '@/pages/Main';
import { Spinner } from 'react-bootstrap';
import { ErrorBoundary } from 'react-error-boundary';
import { darkThemeTypes } from '@/types/TypesList';

const Layout = ({setDarkTheme, darkTheme}: darkThemeTypes) => {
  return (
    <div>
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <ErrorBoundary
            FallbackComponent={ErrorFallback} 
            onError={() => console.log("Error happened!")}
        >
            <Suspense fallback={<Spinner />} >
                <Main />
                <Footer />
            </Suspense>
        </ErrorBoundary>
    </div>
  )
}

export default Layout