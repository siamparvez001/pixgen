"use client";
import UpdateUserModal from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    return (
        <div>
            <Card className="max-w-96 mx-auto flex flex-col items-center border mt-5">
                <Avatar className="w-20 h-20 ">
                    <Avatar.Image
                        alt="John Doe"
                        src={user?.image}
                        referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <h2 className="text-3xl font-bold">{user?.name}</h2>
                <h2 className="text-muted font-semibold">{user?.email}</h2>
                <UpdateUserModal></UpdateUserModal>
            </Card>
        </div>
    );
};

export default ProfilePage;