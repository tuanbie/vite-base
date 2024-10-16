// src/components/Notification.tsx
import React from "react";

type NotificationType = "success" | "error" | "info" | "warning";

interface NotificationProps {
    message: string;
    type: NotificationType;
    // onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type }) => {
    const getTypeClasses = () => {
        switch (type) {
            case "success":
                return "bg-green-500 text-white";
            case "error":
                return "bg-red-500 text-white";
            case "info":
                return "bg-blue-500 text-white";
            case "warning":
                return "bg-yellow-500 text-black";
            default:
                return "bg-gray-500 text-white";
        }
    };

    return (
        <div className={`fixed bottom-4 right-4 w-80 p-4 rounded-lg shadow-lg ${getTypeClasses()}`}>
            <div className="flex items-center justify-between">
                <span>{message}</span>
                {/* <button onClick={onClose} className="ml-4 text-lg font-semibold hover:text-gray-200">
                    &times;
                </button> */}
            </div>
        </div>
    );
};

export default Notification;
