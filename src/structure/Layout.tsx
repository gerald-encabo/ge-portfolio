import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ErrorFallback from '@/components/ErrorFallback';
import { Suspense } from 'react';
import { Spinner } from 'react-bootstrap';
import { ErrorBoundary } from 'react-error-boundary';
import { Main } from '@/pages/Main';

const Layout = () => {
  return (
    <div>
        <Navbar />
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