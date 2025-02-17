import { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom'
import { navigationContext } from '../../contexts/navigationContext';

function NavigationControllerWrapper() {

    const { resetNavigationState } = useContext(navigationContext);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        resetNavigationState();
        setIsReady(true);
    }, []);

    if(isReady) {return <Outlet/>}
    else {return null}
}

export default NavigationControllerWrapper
