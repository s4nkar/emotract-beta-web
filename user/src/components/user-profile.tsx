import { UserProfile } from '@clerk/clerk-react'

const UserProfilePage = () => {
    return (
        <div className="flex justify-center items-center h-screen w-full">
            <UserProfile path="/user-profile" />
        </div>
    )
}

export default UserProfilePage