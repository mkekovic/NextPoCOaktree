import { useMsal } from '@azure/msal-react';

export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleSignout = () => {
        instance.logoutRedirect();
    }
    return (
        <button onClick={handleSignout}>
            Sign Out
        </button>
    )
};